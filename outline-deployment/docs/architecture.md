# Architecture

## Scope

This deployment targets a single Ubuntu 24.04 VPS with:

- 2 vCPU
- 4 GB RAM
- 60 GB disk

Stack is intentionally fixed:

- Outline
- PostgreSQL
- Redis
- MinIO
- Traefik
- Authentik

No Kubernetes, Ansible, Terraform, Dokploy, Nginx, Caddy, Keycloak, or external SaaS auth are used.

## Domains

- `https://<DOMAIN_OUTLINE>` -> Outline
- `https://<DOMAIN_AUTH>` -> Authentik

Required DNS before first HTTPS startup:

- `A <DOMAIN_OUTLINE> -> <SERVER_IP>`
- `A <DOMAIN_AUTH> -> <SERVER_IP>`

## Network model

Two Docker networks are used:

- `proxy`
- `internal`

Service attachment:

- `traefik` -> `proxy`
- `outline` -> `proxy`, `internal`
- `authentik-server` -> `proxy`, `internal`
- `authentik-worker` -> `internal`
- `postgres` -> `internal`
- `redis` -> `internal`
- `minio` -> `internal`
- `minio-init` -> `internal`

Security implications:

- Only Traefik publishes ports to the host.
- PostgreSQL, Redis, MinIO API, and MinIO console are not published to the internet.
- `internal` is marked as an internal Docker network.
- Docker socket is mounted read-only into Traefik.

## Service model

### Traefik

- Terminates TLS on ports `80` and `443`
- Obtains Let's Encrypt certificates via HTTP challenge
- Routes traffic based on hostnames
- Applies a shared security headers middleware

### PostgreSQL

- Single PostgreSQL instance
- Separate databases:
  - `outline`
  - `authentik`
- Databases and users are created by `postgres/init/01-init-databases.sh`
- Data stored in named volume `outline_postgres_data`

### Redis

- Shared Redis instance for Outline cache/queue and Authentik cache/broker
- Runs only on `internal`
- Data stored in named volume `outline_redis_data`

### MinIO

- S3-compatible object storage for Outline uploads
- Bucket `outline-data` is created by `minio-init`
- Data stored in named volume `outline_minio_data`
- No direct public exposure

### Authentik

- Central OIDC identity provider
- Publicly reachable only through Traefik on `https://<DOMAIN_AUTH>`
- Uses PostgreSQL and Redis on the internal network
- First admin account is bootstrapped from local `.env`

### Outline

- Publicly reachable only through Traefik on `https://<DOMAIN_OUTLINE>`
- Uses PostgreSQL, Redis, and MinIO on `internal`
- Uses only OIDC via Authentik for interactive sign-in

## Access model

Required Authentik groups:

- `external_viewers`
- `internal_viewers`
- `internal_editors`
- `internal_admins`

Intended usage model:

- `external_viewers`: access only to explicitly designated external collections or shared content
- `internal_viewers`: read access across the internal knowledge base
- `internal_editors`: edit rights on assigned collections
- `internal_admins`: manage users, permissions, collections, and integrations

## Important product limitation

Outline does not natively expose a full four-tier global RBAC model driven purely by IdP groups. The practical deployment model is:

- Use Authentik groups as the identity source and access gate.
- Use Outline base roles for global application privileges.
- Use collection-level permissions inside Outline for read/edit separation.
- Keep admin rights restricted to `internal_admins`.
- For `external_viewers`, grant access only to explicitly selected collections or shares.

Operational consequence:

- The four groups can exist in Authentik immediately.
- Exact collection permission mapping still needs verification and, depending on the Outline edition and feature set in use, may require manual assignment inside Outline after the first login.
- Do not assume automatic claim-to-collection binding unless it is validated in the running environment.

## Storage model

Outline file uploads use MinIO through S3-compatible settings:

- `FILE_STORAGE=s3`
- bucket `outline-data`
- endpoint `http://minio:9000`
- path-style requests enabled

MinIO console is not published publicly. If console access is needed during setup, use a temporary SSH tunnel instead of opening ports:

```bash
ssh -L 9001:127.0.0.1:9001 <ROOT_USER>@<SERVER_IP>
docker compose exec minio ss -lntp
```

Practical note:

- With the current compose file, the MinIO console is reachable only inside the container network.
- The safer operational path is to use `mc` from a temporary helper container for bucket inspection instead of exposing the console.

## Security controls

- No real secrets in Git
- `.env` excluded by `.gitignore`
- `backups/`, `data/`, `secrets/`, `*.sql`, and `*.tar` excluded by `.gitignore`
- Only ports `22`, `80`, `443` opened at the host firewall
- Internal services not published to the public internet
- TLS terminated by Traefik

## Remaining risks

- Let's Encrypt issuance fails if DNS is missing or still propagating.
- Outline OIDC behavior and claim mapping must be validated against the selected Outline image version during first deployment.
- A single VPS remains a single point of failure until off-host backups and external monitoring are added.
- Shared PostgreSQL and Redis are acceptable for this VPS size, but resource usage should be monitored during onboarding.


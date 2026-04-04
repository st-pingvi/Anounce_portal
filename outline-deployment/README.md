# Outline deployment repository

Production-like self-hosted deployment for the project "Московское долголетие" on a single Ubuntu 24.04 VPS using:

- Outline
- PostgreSQL
- Redis
- MinIO
- Traefik
- Authentik

The repository is designed around two public hostnames only:

- `https://<DOMAIN_OUTLINE>` for Outline
- `https://<DOMAIN_AUTH>` for Authentik

Only ports `22`, `80`, and `443` should be reachable from the internet. PostgreSQL, Redis, MinIO API, and MinIO console stay on the internal Docker network.

## Repository layout

- `docker-compose.yml`
- `.env.example`
- `.gitignore`
- `docs/architecture.md`
- `docs/runbook.md`
- `scripts/bootstrap-server.sh`
- `scripts/backup-postgres.sh`
- `scripts/backup-minio.sh`
- `scripts/restore-postgres.sh`
- `scripts/smoke-test.sh`
- `traefik/dynamic/security.yml`
- `redis/redis.conf`
- `postgres/init/01-init-databases.sh`
- `authentik/README.md`

## 1. Fill `.env`

1. Copy the example file:

   ```bash
   cp .env.example .env
   ```

2. Replace every placeholder in `.env` with production values on the server only.

3. Generate strong secrets directly on the server:

   ```bash
   openssl rand -hex 32
   ```

4. Before starting the stack, ensure DNS records exist:

   - `A <DOMAIN_OUTLINE> -> <SERVER_IP>`
   - `A <DOMAIN_AUTH> -> <SERVER_IP>`

Without valid DNS, Traefik cannot obtain Let's Encrypt certificates.

## 2. Start the stack

Run from the repository root:

```bash
docker compose --env-file .env pull
docker compose --env-file .env up -d
```

## 3. Check status

Basic checks:

```bash
docker compose --env-file .env ps
docker compose --env-file .env logs --tail=100 traefik
docker compose --env-file .env logs --tail=100 outline
docker compose --env-file .env logs --tail=100 authentik-server
docker compose --env-file .env logs --tail=100 postgres
docker compose --env-file .env logs --tail=100 redis
docker compose --env-file .env logs --tail=100 minio
./scripts/smoke-test.sh
```

HTTP/HTTPS checks:

```bash
curl -I http://<DOMAIN_OUTLINE>
curl -I https://<DOMAIN_OUTLINE>
curl -I https://<DOMAIN_AUTH>
```

## 4. Backup and restore

PostgreSQL backup:

```bash
./scripts/backup-postgres.sh
```

MinIO backup:

```bash
./scripts/backup-minio.sh
```

PostgreSQL restore:

```bash
./scripts/restore-postgres.sh backups/postgres/<backup-file>.sql.gz
```

Detailed operational steps are in [docs/runbook.md](/Users/johndoe/Documents/Codex/outline-deployment/docs/runbook.md).

## 5. Updating container versions

1. Edit pinned image versions in:
   - `docker-compose.yml`
   - `.env` for `OUTLINE_VERSION`, `MINIO_VERSION`, `AUTHENTIK_VERSION`
2. Pull the updated images:

   ```bash
   docker compose --env-file .env pull
   ```

3. Recreate services:

   ```bash
   docker compose --env-file .env up -d
   ```

4. Re-run smoke tests:

   ```bash
   ./scripts/smoke-test.sh
   ```

## 6. Authentik and Outline setup order

1. Start the base stack.
2. Sign in to Authentik at `https://<DOMAIN_AUTH>`.
3. Create groups:
   - `external_viewers`
   - `internal_viewers`
   - `internal_editors`
   - `internal_admins`
4. Create an OIDC provider and application for Outline.
5. Copy the Authentik client values into `.env`.
6. Restart the Outline container:

   ```bash
   docker compose --env-file .env up -d outline
   ```

The Authentik checklist is documented in [authentik/README.md](/Users/johndoe/Documents/Codex/outline-deployment/authentik/README.md).


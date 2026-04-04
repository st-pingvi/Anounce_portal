# Runbook

## Phase 1. Audit and bootstrap

Run on the target Ubuntu 24.04 server after cloning the repository:

```bash
chmod +x scripts/*.sh postgres/init/01-init-databases.sh
./scripts/bootstrap-server.sh
```

The bootstrap script performs:

- disk and memory check
- hostname and timezone check
- firewall status check
- port usage audit
- Docker presence check
- package update
- Docker Engine and compose plugin installation when missing
- installation of `git`, `curl`, `ufw`, `jq`, `htop`
- Docker service enablement
- UFW configuration for `22`, `80`, `443`

If the server already has Docker or another reverse proxy, inspect the script output for listeners on `:80` and `:443` before starting the stack.

## Phase 2. Prepare local environment

```bash
cp .env.example .env
```

Edit `.env` and set real values for:

- domains
- PostgreSQL passwords
- MinIO credentials
- Outline secrets
- Authentik bootstrap credentials

Generate secrets on the server:

```bash
openssl rand -hex 32
```

## Phase 3. Start the stack

```bash
docker compose --env-file .env pull
docker compose --env-file .env up -d
docker compose --env-file .env ps
```

Inspect logs:

```bash
docker compose --env-file .env logs --tail=100 traefik
docker compose --env-file .env logs --tail=100 postgres
docker compose --env-file .env logs --tail=100 redis
docker compose --env-file .env logs --tail=100 minio
docker compose --env-file .env logs --tail=100 authentik-server
docker compose --env-file .env logs --tail=100 authentik-worker
docker compose --env-file .env logs --tail=100 outline
```

## Phase 4. Configure Authentik for Outline OIDC

1. Open `https://<DOMAIN_AUTH>`.
2. Sign in with the bootstrap admin from `.env`.
3. Create groups:
   - `external_viewers`
   - `internal_viewers`
   - `internal_editors`
   - `internal_admins`
4. Create a provider:
   - Type: `OAuth2/OpenID Provider`
   - Name: `outline-oidc`
   - Client type: `Confidential`
   - Redirect URI: `https://<DOMAIN_OUTLINE>/auth/oidc.callback`
   - Signing key: default generated key is acceptable for initial deployment
5. Create an application and bind it to the new provider.
6. Set launch URL to `https://<DOMAIN_OUTLINE>`.
7. Copy these values into `.env`:
   - `OIDC_CLIENT_ID`
   - `OIDC_CLIENT_SECRET`
   - `OIDC_AUTH_URI`
   - `OIDC_TOKEN_URI`
   - `OIDC_USERINFO_URI`
   - `OIDC_DISPLAY_NAME`
   - `OIDC_SCOPES`
   - `OIDC_USERNAME_CLAIM`
8. Restart Outline:

   ```bash
   docker compose --env-file .env up -d outline
   ```

## Phase 5. Validation and smoke tests

Run the smoke test script:

```bash
./scripts/smoke-test.sh
```

Manual validation steps that still require a browser session:

1. Open `https://<DOMAIN_OUTLINE>`.
2. Click the Authentik OIDC sign-in button.
3. Complete login in Authentik.
4. Confirm redirect back to Outline succeeds.
5. Create a test collection for internal validation.
6. Create a test document inside that collection.
7. Upload a test image or file to the document.
8. Confirm the object appears in MinIO:

   ```bash
   docker run --rm --network internal \
     --env-file .env \
     minio/mc:RELEASE.2024-07-16T23-46-41Z \
     sh -ec 'mc alias set local http://minio:9000 "$MINIO_ROOT_USER" "$MINIO_ROOT_PASSWORD" && mc ls local/$S3_BUCKET_NAME'
   ```

9. Run a PostgreSQL backup:

   ```bash
   ./scripts/backup-postgres.sh
   ```

10. Run a MinIO backup:

   ```bash
   ./scripts/backup-minio.sh
   ```

## Backup commands

PostgreSQL:

```bash
./scripts/backup-postgres.sh
```

MinIO:

```bash
./scripts/backup-minio.sh
```

Restore PostgreSQL from a plain SQL backup:

```bash
./scripts/restore-postgres.sh backups/postgres/<backup-file>.sql.gz
```

## Update procedure

1. Review release notes for the target images.
2. Update pinned versions in `.env` or `docker-compose.yml`.
3. Pull new images:

   ```bash
   docker compose --env-file .env pull
   ```

4. Recreate containers:

   ```bash
   docker compose --env-file .env up -d
   ```

5. Re-run:
   - `docker compose --env-file .env ps`
   - `./scripts/smoke-test.sh`
   - browser login test
   - test document and file upload check

## Restore guidance

Before restore:

- stop active editors
- take a fresh backup
- confirm you are restoring into the correct environment

Optional maintenance window:

```bash
docker compose --env-file .env stop outline
```

Restore database:

```bash
./scripts/restore-postgres.sh backups/postgres/<backup-file>.sql.gz
docker compose --env-file .env up -d outline
```

## Conflict handling

If `bootstrap-server.sh` reports listeners on `:80` or `:443`:

1. Identify the process:

   ```bash
   sudo ss -tulpn | grep -E ':80|:443'
   ```

2. Identify containers if Docker is already present:

   ```bash
   docker ps --format 'table {{.Names}}\t{{.Ports}}'
   ```

3. Stop or reconfigure the conflicting service before starting Traefik.

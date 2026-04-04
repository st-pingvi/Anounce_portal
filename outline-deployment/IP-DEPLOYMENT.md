# Outline deployment by IP address

This mode is intended for staging or bootstrap on a raw server IP when no domain is available yet.

## Endpoints

- Authentik: `http://<SERVER_IP>:9000`
- Outline: `http://<SERVER_IP>:3000`

## Limitations

- no TLS
- no Let's Encrypt
- not suitable for public production traffic
- Outline sign-in still requires OIDC configuration in Authentik

## Startup order

1. Fill `.env` with IP-based values:
   - `OUTLINE_URL=http://<SERVER_IP>:3000`
   - `OUTLINE_FORCE_HTTPS=false`
   - `OIDC_AUTH_URI=http://<SERVER_IP>:9000/application/o/authorize/`
   - `OIDC_TOKEN_URI=http://<SERVER_IP>:9000/application/o/token/`
   - `OIDC_USERINFO_URI=http://<SERVER_IP>:9000/application/o/userinfo/`
2. Start the base services:
   `docker compose -f docker-compose.ip.yml --env-file .env up -d postgres redis minio minio-init authentik-server authentik-worker`
3. Open Authentik and create the Outline OIDC provider.
4. Update `.env` with `OIDC_CLIENT_ID` and `OIDC_CLIENT_SECRET`.
5. Start Outline:
   `docker compose -f docker-compose.ip.yml --env-file .env up -d outline`

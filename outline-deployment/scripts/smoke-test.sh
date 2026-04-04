#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
MINIO_MC_IMAGE="minio/mc:latest"

cd "${REPO_DIR}"

if [[ ! -f .env ]]; then
  echo ".env is missing. Copy .env.example to .env and fill in real values."
  exit 1
fi

set -a
source ./.env
set +a

echo "== docker compose ps =="
docker compose --env-file .env ps
echo

echo "== Service logs tail =="
for svc in traefik postgres redis minio authentik-server authentik-worker outline; do
  echo "-- ${svc} --"
  docker compose --env-file .env logs --tail=20 "${svc}" || true
  echo
done

echo "== HTTPS checks =="
curl -kfsS -I "https://${DOMAIN_OUTLINE}" >/dev/null
echo "Outline HTTPS reachable: https://${DOMAIN_OUTLINE}"
curl -kfsS -I "https://${DOMAIN_AUTH}" >/dev/null
echo "Authentik HTTPS reachable: https://${DOMAIN_AUTH}"
echo

echo "== Health checks =="
docker compose --env-file .env exec -T minio sh -ec 'mc alias set local http://127.0.0.1:9000 "$MINIO_ROOT_USER" "$MINIO_ROOT_PASSWORD" >/dev/null 2>&1 && mc ready local >/dev/null 2>&1'
docker compose --env-file .env exec -T authentik-server ak healthcheck
docker compose --env-file .env exec -T outline node -e 'require("http").get("http://127.0.0.1:3000/", (res) => process.exit(res.statusCode < 500 ? 0 : 1)).on("error", () => process.exit(1))'
echo "Container health endpoints responded."
echo

echo "== MinIO bucket check =="
docker run --rm --network internal --env-file .env "${MINIO_MC_IMAGE}" \
  sh -ec 'mc alias set local http://minio:9000 "$MINIO_ROOT_USER" "$MINIO_ROOT_PASSWORD" >/dev/null && mc ls "local/$S3_BUCKET_NAME" >/dev/null'
echo "Bucket exists: ${S3_BUCKET_NAME}"
echo

echo "Browser-only checks still required:"
echo "1. Log in to Outline through Authentik."
echo "2. Create a test document."
echo "3. Upload a test file."
echo "4. Confirm the object appears in MinIO."

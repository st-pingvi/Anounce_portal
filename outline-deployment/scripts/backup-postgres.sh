#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
BACKUP_DIR="${REPO_DIR}/backups/postgres"
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
OUTPUT_FILE="${BACKUP_DIR}/outline-postgres-${TIMESTAMP}.sql.gz"

cd "${REPO_DIR}"

if [[ ! -f .env ]]; then
  echo ".env is missing. Copy .env.example to .env and fill in real values."
  exit 1
fi

mkdir -p "${BACKUP_DIR}"

docker compose --env-file .env exec -T postgres \
  sh -ec 'PGPASSWORD="$OUTLINE_DB_PASSWORD" pg_dump -U "$OUTLINE_DB_USER" -d "$OUTLINE_DB_NAME"' \
  | gzip -c > "${OUTPUT_FILE}"

echo "PostgreSQL backup created: ${OUTPUT_FILE}"


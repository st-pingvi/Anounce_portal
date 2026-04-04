#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 backups/postgres/<backup-file>.sql.gz"
  exit 1
fi

BACKUP_FILE="$1"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

cd "${REPO_DIR}"

if [[ ! -f .env ]]; then
  echo ".env is missing. Copy .env.example to .env and fill in real values."
  exit 1
fi

if [[ ! -f "${BACKUP_FILE}" ]]; then
  echo "Backup file not found: ${BACKUP_FILE}"
  exit 1
fi

set -a
source ./.env
set +a

echo "Restoring ${BACKUP_FILE} into ${OUTLINE_DB_NAME}."
echo "Make sure Outline writes are stopped before continuing."

gunzip -c "${BACKUP_FILE}" | docker compose --env-file .env exec -T postgres \
  sh -ec 'PGPASSWORD="$OUTLINE_DB_PASSWORD" psql -U "$OUTLINE_DB_USER" -d "$OUTLINE_DB_NAME"'

echo "Restore completed."

#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
BACKUP_DIR="${REPO_DIR}/backups/minio"
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
OUTPUT_FILE="${BACKUP_DIR}/outline-minio-${TIMESTAMP}.tar.gz"

mkdir -p "${BACKUP_DIR}"

docker run --rm \
  -v outline_minio_data:/source:ro \
  -v "${BACKUP_DIR}:/backup" \
  alpine:3.20 \
  sh -ec 'tar -C /source -czf "/backup/'"$(basename "${OUTPUT_FILE}")"'" .'

echo "MinIO backup created: ${OUTPUT_FILE}"


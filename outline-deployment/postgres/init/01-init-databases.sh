#!/usr/bin/env bash
set -euo pipefail

psql -v ON_ERROR_STOP=1 --username "${POSTGRES_USER}" --dbname postgres <<-SQL
  SELECT format('CREATE ROLE %I LOGIN PASSWORD %L', '${OUTLINE_DB_USER}', '${OUTLINE_DB_PASSWORD}')
  WHERE NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = '${OUTLINE_DB_USER}')
  \gexec

  SELECT format('CREATE DATABASE %I OWNER %I', '${OUTLINE_DB_NAME}', '${OUTLINE_DB_USER}')
  WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '${OUTLINE_DB_NAME}')
  \gexec

  SELECT format('CREATE ROLE %I LOGIN PASSWORD %L', '${AUTHENTIK_DB_USER}', '${AUTHENTIK_DB_PASSWORD}')
  WHERE NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = '${AUTHENTIK_DB_USER}')
  \gexec

  SELECT format('CREATE DATABASE %I OWNER %I', '${AUTHENTIK_DB_NAME}', '${AUTHENTIK_DB_USER}')
  WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '${AUTHENTIK_DB_NAME}')
  \gexec
SQL

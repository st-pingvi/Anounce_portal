#!/usr/bin/env bash
set -euo pipefail

if [[ "$(id -u)" -ne 0 ]]; then
  echo "Run this script as root or through sudo."
  exit 1
fi

echo "== Server audit =="
echo "Date: $(date -Is)"
echo "Hostname: $(hostnamectl --static || hostname)"
echo "Timezone: $(timedatectl show --property=Timezone --value || true)"
echo

echo "-- Disk usage --"
df -h /
echo

echo "-- Memory --"
free -h
echo

echo "-- Listening ports --"
ss -tulpn || true
echo

echo "-- UFW status --"
ufw status verbose || true
echo

if command -v docker >/dev/null 2>&1; then
  echo "-- Docker version --"
  docker --version
  docker compose version || true
else
  echo "Docker is not installed."
fi
echo

echo "== Package installation =="
apt-get update
apt-get install -y ca-certificates curl git jq htop ufw gnupg lsb-release

if ! command -v docker >/dev/null 2>&1; then
  install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
  chmod a+r /etc/apt/keyrings/docker.asc
  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" \
    | tee /etc/apt/sources.list.d/docker.list >/dev/null
  apt-get update
  apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
fi

systemctl enable docker
systemctl start docker

echo "== Firewall setup =="
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

echo
echo "== Post-bootstrap audit =="
docker --version
docker compose version
systemctl is-enabled docker
systemctl is-active docker
ufw status verbose
ss -tulpn | grep -E '(:22|:80|:443)' || true


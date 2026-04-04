# Deploy

Папка содержит конфигурацию для публикации портала по адресу `3321616.ru/gos`.

Внутри есть два пути развертывания:

- `Caddyfile` для сценария, когда Caddy обслуживает весь домен
- `nginx-3321616-gos.conf` для сценария, когда на сервере уже работает `nginx` и dashboard
- `Caddyfile.chetverg` и `nginx-chetverg-3321616-portal.conf` для отдельного поддомена `chetverg.3321616.ru`
- `outline/` для self-hosted Outline: приложение, Postgres и Redis через Docker Compose

Подробности: `deploy/DEPLOYMENT.md`

# Outline для портала анонсов

Этот каталог содержит self-hosted конфигурацию Outline для проекта "Портал анонсов".

## Что внутри

- `docker-compose.yml` — запуск Outline, Postgres и Redis
- `docker.env.example` — шаблон обязательных переменных окружения

## Быстрый старт

1. Установите Docker Engine или Docker Desktop.
2. Скопируйте шаблон:
   `cp deploy/outline/docker.env.example deploy/outline/docker.env`
3. Заполните OAuth-провайдер. Outline не стартует корректно без хотя бы одного способа входа.
4. Запустите сервисы:
   `cd deploy/outline && docker compose up -d`
5. Откройте `http://localhost:3000`

## Что нужно настроить обязательно

- `URL` — внешний адрес инстанса Outline
- `SECRET_KEY` и `UTILS_SECRET` — секреты приложения
- `DATABASE_URL` и `REDIS_URL` — подключение к Postgres и Redis
- `GOOGLE_CLIENT_ID` и `GOOGLE_CLIENT_SECRET` или другой поддерживаемый провайдер входа

## Примечания

- Образ Outline зафиксирован на версии `1.6.1`, чтобы окружение было воспроизводимым.
- Для production лучше заменить локальное файловое хранилище на S3-совместимое.
- Файл `docker.env` добавлен в `.gitignore` и не должен попадать в Git.

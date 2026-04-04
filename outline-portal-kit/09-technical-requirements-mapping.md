# Маппинг ТЗ на решение

## Принцип

`Нет анонса — нет события`

Реализация:

- без записи в `Events` событие не существует в операционном контуре;
- без модерации и публикации запись не попадает в публичные разделы;
- без карточки Outline событие не считается выпущенным.

## Форма создания анонса

Поля ТЗ закрываются так:

- `Дата` -> `Start Datetime`
- `Название` -> `Event Title`
- `Место проведения` -> `Venue` + `Yandex Maps URL`
- `Формат` -> `Event Format`
- `Описание` -> `Full Description`
- `Для кого` -> `Audience`
- `Участие` -> `Registration URL` / `Participation Details`
- `Кто внес` -> `Created By Name` + `Created By Role` + `Created By Login`

## Автогенерация текста

Используется:

- шаблонная сборка текста;
- AI through Zapier;
- лимит `<= 200 символов`;
- отдельное поле `Social Post Text` для VK/Telegram.

## Генерация афиши

Поддерживаются два сценария:

- Canva API как основной no-code вариант;
- Python Pillow как fallback.

Требования учтены:

- размер `1080x1920`;
- брендовые цвета из брендбука МД;
- Circe для заголовков;
- крупная типографика;
- минимальный визуальный шум.

## Просмотр анонсов

В базовом слое Outline:

- список документов;
- фильтрация через структурные разделы, подборки и встроенные Airtable views;
- календарь через Google Calendar embed.

В расширенном слое:

- внешний React/Vue слой с FullCalendar;
- модальные карточки;
- Elasticsearch для быстрого поиска.

## Пост-ивент

Закрывается полями:

- `Post Event Photos URL`
- `Attendance Count`
- `Feedback Summary`
- `Report URL`
- `Publish Status=Завершено`

## Нефункциональные требования

- Авторизация: через SSO/mos.ru интеграцию в backend слое.
- Frontend: optional React/Vue front поверх Outline content layer.
- Backend: Node.js/Python для SSO, модерации, индексации и каналов.
- БД: Airtable как no-code контур, PostgreSQL для production backend.
- Хранение файлов: S3/MinIO.
- Производительность: быстрый intake через Zapier, поиск через Elasticsearch.
- Безопасность: модерация, разграничение ролей, аудит изменений.

## Интеграции

- Outline
- Airtable
- Zapier
- Canva API / Pillow
- Google Calendar
- Yandex Maps
- VK
- Telegram
- after55.moscow

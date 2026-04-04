# Портал анонсов "Московское долголетие" на базе Outline

Этот пакет описывает полный портал анонсов на базе Outline как центрального контентного слоя и no-code/low-code оркестрации вокруг него.

Цель решения:

- вести единый каталог событий и афиш;
- собирать заявки на публикацию через форму;
- хранить статусную и операционную базу в Airtable;
- автоматически выпускать короткие анонсы, афиши и календарные врезки;
- публиковать всё в Outline как в центральном редакторском портале.
- обеспечить принцип: `Нет анонса — нет события`.
- поддерживать пост-ивент обновления: фото, метрики, отзывы, ссылка на отчет.

## Что входит в комплект

- [01-portal-architecture.md](/Users/johndoe/Documents/Codex/outline-portal-kit/01-portal-architecture.md) — архитектура решения;
- [02-outline-information-architecture.md](/Users/johndoe/Documents/Codex/outline-portal-kit/02-outline-information-architecture.md) — структура коллекций, навигации и ролей в Outline;
- [03-airtable-schema.yaml](/Users/johndoe/Documents/Codex/outline-portal-kit/03-airtable-schema.yaml) — схема базы Airtable;
- [04-zapier-automations.md](/Users/johndoe/Documents/Codex/outline-portal-kit/04-zapier-automations.md) — набор автоматизаций;
- [05-outline-templates/event-card-template.md](/Users/johndoe/Documents/Codex/outline-portal-kit/05-outline-templates/event-card-template.md) — шаблон карточки события для Outline;
- [05-outline-templates/submission-form-spec.md](/Users/johndoe/Documents/Codex/outline-portal-kit/05-outline-templates/submission-form-spec.md) — спецификация формы подачи;
- [05-outline-templates/monthly-afisha-template.md](/Users/johndoe/Documents/Codex/outline-portal-kit/05-outline-templates/monthly-afisha-template.md) — шаблон витрины месяца;
- [06-content/homepage.md](/Users/johndoe/Documents/Codex/outline-portal-kit/06-content/homepage.md) — стартовый контент главной страницы;
- [06-content/editorial-playbook.md](/Users/johndoe/Documents/Codex/outline-portal-kit/06-content/editorial-playbook.md) — редакционный регламент;
- [07-brand/brand-assumptions.md](/Users/johndoe/Documents/Codex/outline-portal-kit/07-brand/brand-assumptions.md) — временные бренд-допущения.
- [08-implementation-checklist.md](/Users/johndoe/Documents/Codex/outline-portal-kit/08-implementation-checklist.md) — пошаговое внедрение в Outline.

## Ключевой продуктовый принцип

Событие считается состоявшимся в операционном контуре только если:

- создан анонс;
- пройдена модерация;
- сгенерирована афиша;
- опубликована карточка в Outline;
- событие появилось в календаре и ленте анонсов.

## Базовый стек

- Outline — портал, коллекции, шаблоны, публикация, embeds;
- Airtable — master-data и workflow по карточкам;
- Zapier — синхронизация, генерация и оркестрация;
- Canva — генерация афиш по шаблонам;
- Google Calendar — публичный календарь событий через embed;
- AI via Zapier — короткий анонс до 200 символов;
- Tally или Airtable Form — входная форма, встроенная в Outline через embed.
- Yandex Maps — адрес и карта площадки;
- VK/Telegram — публикация анонсов во внешние каналы;
- after55.moscow — экспорт афиши/события;
- сервисный backend на Node.js или Python для сценариев, которые неудобно закрывать одним Zap.

## Архитектурная позиция

Outline остается базой портала и редакционной среды, но полная система с учетом ТЗ становится гибридной:

- контент и навигация — в Outline;
- формы, workflow и статусный слой — в Airtable;
- автоматизация и AI — в Zapier;
- брендированные афиши — Canva API или Python Pillow;
- модерация, SSO, экспорт и соцпубликации — через backend-интеграции.

## Важное ограничение

Брендбук в рабочем каталоге не найден, поэтому визуальные токены и текстовые принципы ниже являются временными. После получения брендбука нужно обновить:

- цветовые токены;
- типографику;
- стиль обложек и афиш;
- тональность приветственных и анонсных текстов.

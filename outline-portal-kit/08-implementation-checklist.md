# Чек-лист внедрения в Outline

## 1. Создать workspace

Название:

`Московское долголетие — Портал анонсов`

## 2. Создать коллекции

Создать коллекции по схеме из [02-outline-information-architecture.md](/Users/johndoe/Documents/Codex/outline-portal-kit/02-outline-information-architecture.md):

- `Портал анонсов`
- `Каталог событий`
- `Афиша месяца`
- `Календарь`
- `Редакция`
- `Шаблоны`

## 3. Загрузить стартовые документы

Создать документы:

- главная страница из [06-content/homepage.md](/Users/johndoe/Documents/Codex/outline-portal-kit/06-content/homepage.md)
- редакционный регламент из [06-content/editorial-playbook.md](/Users/johndoe/Documents/Codex/outline-portal-kit/06-content/editorial-playbook.md)
- шаблоны из каталога [05-outline-templates](/Users/johndoe/Documents/Codex/outline-portal-kit/05-outline-templates)

## 4. Настроить template documents

Сделать `Templatize` для:

- карточки события;
- афиши месяца;
- страницы площадки;
- подборки.

## 5. Поднять Airtable

Создать базу по схеме [03-airtable-schema.yaml](/Users/johndoe/Documents/Codex/outline-portal-kit/03-airtable-schema.yaml).

Минимально обязательны:

- `Events`
- `Venues`
- `Districts`
- `Poster Tasks`
- `Publication Log`

## 6. Создать форму подачи

Рекомендуемый вариант:

- Airtable Form по таблице `Events`
- embed формы на странице `Подать событие`

## 7. Настроить Zapier

Создать Zaps по документу [04-zapier-automations.md](/Users/johndoe/Documents/Codex/outline-portal-kit/04-zapier-automations.md):

- intake normalization;
- AI short announcement;
- Canva poster generation;
- Outline publish/update;
- Google Calendar sync;
- daily editorial digest.

## 8. Подключить Google Calendar

Создать публичный календарь:

- `Московское долголетие — Анонсы`

Встраивание:

- взять public embed URL;
- вставить на страницу `Календарь` через `/embed`.

## 9. Настроить Canva

Создать 2 шаблона:

- `Афиша события`
- `Афиша месяца`

Переменные шаблона:

- title
- date
- time
- venue
- district
- short_announcement

## 10. Подключить Outline API

Нужно:

- создать API key;
- разрешить операции с документами и коллекциями;
- использовать key в Zapier Webhooks или в Outline app action.

## 11. Заполнить первые 10 событий

Рекомендуется начать с пилотного наполнения:

- 3 события по здоровью;
- 3 творческих;
- 2 цифровых;
- 2 межпоколенческих.

## 12. После получения брендбука

Обязательно обновить:

- цвета;
- типографику;
- шаблоны Canva;
- тексты hero-блоков;
- обложки коллекций.

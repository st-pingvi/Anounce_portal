# Автоматизации Zapier

## Zap 1. Intake -> Airtable normalization

Триггер:

- новая запись из Airtable Form или Tally.

Шаги:

1. Formatter by Zapier — нормализация даты и времени.
2. Filter — пропускать только записи с обязательными полями.
3. OpenAI by Zapier — сгенерировать короткий анонс.
4. Airtable Update Record — записать `Short Announcement`, `Needs Editorial Review`, `Publish Status=Черновик`.

### Prompt для OpenAI

```text
Ты редактор анонсов проекта "Московское долголетие".
Сделай короткий анонс на русском языке длиной не более 200 символов.
Тон: живой, ясный, без канцелярита.
Не придумывай факты, которых нет.
Обязательно упомяни формат, пользу и аудиторию, если это есть во входе.
Верни только готовый текст без кавычек.
```

Ожидаемый вход:

- название;
- формат;
- дата/время;
- площадка;
- краткое описание;
- аудитория.

## Zap 2. Event ready -> Canva poster

Триггер:

- в Airtable `Publish Status` изменился на `Готово к публикации`.

Шаги:

1. Create record in `Poster Tasks`.
2. Canva action:
   использовать шаблон афиши и подставить:
   - название;
   - дату;
   - время;
   - площадку;
   - район;
   - короткий анонс.
3. Получить share/export URL.
4. Записать в Airtable:
   - `Poster URL`;
   - `Canva Design URL`;
   - `Poster Status=Готова`.

## Zap 3. Airtable -> Outline publish/update

Триггер:

- `Poster Status=Готова`
- `Publish Status=Готово к публикации`

Шаги:

1. Найти документ Outline по `Outline Doc ID`.
2. Если документа нет:
   - создать документ в месячной папке коллекции `Каталог событий`.
3. Если документ есть:
   - обновить содержимое через Outline API.
4. Записать обратно:
   - `Outline Doc URL`
   - `Outline Doc ID`
   - `Publish Status=Опубликовано`
   - `Last Published At=now`
5. Создать запись в `Publication Log`.

### Рекомендуемое API-действие

- `documents.create`
- `documents.update`

Аутентификация:

- API key в Outline c scope `documents.* collections.info`.

## Zap 4. Airtable -> Google Calendar

Триггер:

- событие переведено в `Опубликовано`.

Шаги:

1. Create Detailed Event в выбранном календаре Google.
2. В описание события подставить:
   - короткий анонс;
   - адрес;
   - ссылку на регистрацию;
   - ссылку на карточку в Outline.
3. URL события вернуть в Airtable поле `Google Calendar Event URL`.

## Zap 5. Daily digest for editors

Триггер:

- каждый день в 09:00.

Шаги:

1. Airtable Find Records:
   - ближайшие 7 дней;
   - черновики;
   - события без афиш.
2. Formatter — сводка.
3. Отправить письмо или сообщение в Telegram/Slack редакторам.

## Zap 6. Archive past events

Триггер:

- ежедневно ночью.

Шаги:

1. Найти события, у которых `End Datetime < now - 1 day`.
2. Обновить `Publish Status=Архив`.
3. При необходимости переместить документ в архивный раздел Outline через API.

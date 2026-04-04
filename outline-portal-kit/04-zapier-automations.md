# Автоматизации Zapier

## Zap 1. Intake -> Airtable normalization and rule enforcement

Триггер:

- новая запись из Airtable Form или Tally.

Шаги:

1. Formatter by Zapier — нормализация даты и времени.
2. Filter — пропускать только записи с обязательными полями.
3. Formatter — собрать шаблонный текст по формуле:
   `{Название} {Дата} в {Место}. {Для кого}: {Описание}. {Участие}. #МосковскоеДолголетие`
4. AI action — улучшить шаблон без превышения 200 символов.
5. Airtable Update Record — записать `Short Announcement`, `Social Post Text`, `Needs Editorial Review`, `Publish Status=Черновик`, `Approval Status=Ожидает одобрения`.

### Prompt для OpenAI

```text
Ты редактор анонсов проекта "Московское долголетие".
Сделай короткий анонс на русском языке длиной не более 200 символов.
Тон: живой, ясный, без канцелярита.
Не придумывай факты, которых нет.
Обязательно упомяни формат, пользу и аудиторию, если это есть во входе.
Сохрани практический формат для VK/Telegram.
Верни только готовый текст без кавычек.
```

Ожидаемый вход:

- название;
- формат;
- дата/время;
- площадка;
- краткое описание;
- аудитория.

## Zap 2. Moderation approved -> poster generation

Триггер:

- в Airtable `Approval Status=Одобрено`
- и `Publish Status=Готово к публикации`.

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
   Параметры дизайна:
   - размер `1080x1920`;
   - шрифт `Circe Bold/Extra Bold`;
   - палитра: изумрудный, бирюзовый `RGB 46/179/152`, рубиновый, красный, белый;
   - фон без визуального шума;
   - крупный заголовок и дата.
3. Получить share/export URL.
4. Записать в Airtable:
   - `Poster URL`;
   - `Canva Design URL`;
   - `Poster PNG 1080x1920 URL`;
   - `Poster Status=Готова`.

Альтернатива:

- Python Pillow microservice по бренд-шаблону.

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
6. Создать запись в `Channel Deliveries` по каналу `Outline`.

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
4. Обновить `Channel Deliveries`.

## Zap 5. Outline/Airtable -> VK and Telegram

Триггер:

- событие переведено в `Опубликовано`.

Шаги:

1. Подготовить текст из `Social Post Text`.
2. Приложить `Poster PNG 1080x1920 URL`.
3. Отправить публикацию в VK.
4. Отправить публикацию в Telegram bot/channel.
5. Записать `VK Post URL`, `Telegram Post URL`.
6. Обновить `Channel Deliveries`.

## Zap 6. Export -> after55.moscow

Триггер:

- событие опубликовано и отмечено для внешней дистрибуции.

Шаги:

1. Сформировать payload.
2. Отправить webhook или CSV/API export в `after55.moscow`.
3. Зафиксировать `after55 Export Status`.

## Zap 7. Daily digest for editors

Триггер:

- каждый день в 09:00.

Шаги:

1. Airtable Find Records:
   - ближайшие 7 дней;
   - черновики;
   - события без афиш.
2. Formatter — сводка.
3. Отправить письмо или сообщение в Telegram/Slack редакторам.

## Zap 8. Post-event update reminder

Триггер:

- через 6 часов после окончания события.

Шаги:

1. Найти инициатора.
2. Отправить ему ссылку на пост-ивент обновление.
3. Напомнить заполнить:
   - фото;
   - посещаемость;
   - отзывы;
   - ссылку на отчет.

## Zap 9. Archive past events

Триггер:

- ежедневно ночью.

Шаги:

1. Найти события, у которых `End Datetime < now - 1 day`.
2. Если пост-ивент заполнен:
   - обновить `Publish Status=Завершено`.
3. Если период архивации прошел:
   - обновить `Publish Status=Архив`.
3. При необходимости переместить документ в архивный раздел Outline через API.

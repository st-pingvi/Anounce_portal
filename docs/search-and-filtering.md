# Search And Filtering

## Обязательные фильтры

- `format`
- `audience`
- `duration`

## Мягкий фильтр

- `district`

Если точного совпадения по району нет, показываются сценарии с `district: universal` и `district: citywide`.

## Дополнительные фильтры

- `status`
- `host_level`
- `participants_min` и `participants_max`
- `resource_level`
- `seasonality`
- `delivery_mode`
- `quality_score_total`
- `piloted`
- `scaled`

## Поля для полнотекстового поиска

- `title`
- `summary`
- `goal`
- `tags`
- `keywords`
- `adaptation_notes`

## Приоритет выдачи

1. точное совпадение по 4 основным параметрам;
2. универсальные сценарии с высокой адаптируемостью;
3. сценарии с актуальной версией и высоким качеством;
4. пилотированные сценарии с готовым пакетом материалов.

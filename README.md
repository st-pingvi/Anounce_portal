# Портал анонсов на базе Outline

Git-ready репозиторий для портала анонсов. Базой knowledge layer выбран Outline, а рядом сохранён существующий каркас контента, сценариев и deploy-материалов.

## Структура

```text
.
├── .gitignore
├── README.md
├── docs
│   ├── governance.md
│   ├── navigation.md
│   ├── search-and-filtering.md
│   └── standards
│       ├── content-constitution-cmd.md
│       ├── metadata-quality.md
│       ├── scenario-card-spec.md
│       └── versioning-policy.md
├── deploy
│   ├── Caddyfile
│   ├── DEPLOYMENT.md
│   ├── README.md
│   └── docker-compose.yml
│   └── outline
│       ├── README.md
│       ├── docker-compose.yml
│       └── docker.env.example
├── prototype-ui
│   ├── README.md
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── repository
│   ├── collections
│   │   └── pilot-10.yaml
│   ├── reference
│   │   └── cmd-content-constitution.yaml
│   ├── scenarios
│   │   ├── SC-001
│   │   ├── SC-002
│   │   ├── SC-003
│   │   ├── SC-004
│   │   ├── SC-005
│   │   ├── SC-006
│   │   ├── SC-007
│   │   ├── SC-008
│   │   ├── SC-009
│   │   └── SC-010
│   └── taxonomies
│       ├── audiences.yaml
│       ├── districts.yaml
│       ├── durations.yaml
│       ├── formats.yaml
│       ├── red-flags.yaml
│       └── tags.yaml
└── templates
    ├── changelog-template.md
    └── scenario-card-template.yaml
```

## Как использовать

1. Добавляйте новые сценарии в `repository/scenarios/<SC-ID>/`.
2. Заполняйте карточку по шаблону `templates/scenario-card-template.yaml`.
3. Обновляйте версию по правилам из `docs/standards/versioning-policy.md`.
4. Фиксируйте изменения в `changelog.md` внутри сценария.
5. Поддерживайте теги и справочники в `repository/taxonomies/`.

## Визуальный прототип

Статический интерфейс каталога находится в `prototype-ui/`.
Точка входа: `prototype-ui/index.html`.

## Публикация

Для размещения портала по адресу `3321616.ru/gos` подготовлена deploy-конфигурация в `deploy/`.
Основной сценарий публикации описан в `deploy/DEPLOYMENT.md`.

Для self-hosted Outline подготовлен отдельный пакет в `deploy/outline/`.

Для отдельного размещения на `chetverg.3321616.ru` добавлен альтернативный deploy-пакет в `deploy/DEPLOYMENT-CHETVERG.md`.

## Данные и стандарты ЦМД

Репозиторий дополнен данными из документа `2 этап (1).docx`:

- конституция контента ЦМД;
- чек-лист проверки сценария из 10 вопросов;
- таблица красных флагов;
- системное предупреждение для рискованных сценариев.

Репозиторий также дополнен данными из документа `3 этап.docx`:

- ТЗ на MVP конструктора сценариев;
- справочники тем, целей, профилей локаций, сегментов аудитории, партнеров и предупреждений;
- acceptance criteria и test cases;
- эталонные сценарии для MVP-кейсов.

Репозиторий также дополнен данными из документа `4 этап.docx`:

- мобильная схема MVP-интерфейса;
- быстрые фильтры каталога;
- UI-поля для карточек сценариев;
- сценарий-витрина для мобильного каталога.

## Основные сущности

- `card.yaml` — машиночитаемая карточка сценария.
- `brief.md` — человекочитаемое описание и сценарный план.
- `changelog.md` — история изменений сценария.
- `collections/*.yaml` — тематические выборки и стартовые наборы.
- `docs/` — правила навигации, поиска, качества и управления репозиторием.

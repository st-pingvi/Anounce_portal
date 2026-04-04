# Scenario Card Spec

## Минимальные обязательные поля

- `scenario_id`
- `title`
- `summary`
- `topic`
- `format`
- `district`
- `location_profile`
- `audience`
- `audience_segments`
- `duration`
- `goal`
- `expected_outcome`
- `participants_min`
- `participants_max`
- `declared_participants`
- `space_requirements`
- `resources`
- `acquisition_channels`
- `castdev_confirmed`
- `materials_checklist`
- `result_timeline`
- `host_level`
- `status`
- `owner`
- `version`
- `updated_at`

## Рекомендуемые поля

- `keywords`
- `seasonality`
- `delivery_mode`
- `adaptation_notes`
- `quality`
- `history_of_use`
- `attachments`
- `content_validation`
- `generation_rules`
- `feedback_channel`
- `partners`
- `registration_bot_link`
- `navigation_app_link`
- `mobile_quick_filters`
- `ui_badges`
- `moderation_required`
- `ui_behavior`

## Блок content_validation

Рекомендуется хранить результаты проверки по Конституции контента ЦМД:

- `participant_request_confirmed`
- `format_matches_location`
- `audience_level_fit`
- `inclusive_access`
- `competes_for_time_successfully`
- `copyright_cleared`
- `psychological_safety_ok`
- `space_capacity_ok`
- `resource_capacity_ok`
- `acquisition_channels_known`
- `copyright_license_confirmed`
- `exclusive_label_blocked`
- `instant_warnings`
- `red_flags`
- `validation_status`
- `validation_comment`

## Блок generation_rules

Используется для сценариев, которые могут автоматически собираться или адаптироваться в конструкторе.

- `auto_structure_profile`
- `timeline_template`
- `mandatory_blocks`
- `adaptation_rules`

## UI-поля

Для мобильного MVP карточка может содержать:

- `mobile_quick_filters`
- `ui_badges`
- `materials_checklist`
- `result_timeline`
- `registration_bot_link`
- `navigation_app_link`
- `moderation_required`

## Блок ui_behavior

- `mobile_priority`
- `inspiration_card`
- `constructor_ready`
- `result_screen_ready`

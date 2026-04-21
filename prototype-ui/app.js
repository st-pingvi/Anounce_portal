const events = [
  {
    id: "EV-001",
    title: "Цифровая среда без стресса",
    date: "10 апреля, 11:00",
    isoDate: "2026-04-10T11:00:00",
    venue: "ЦМД Таганский",
    district: "ЦАО",
    format: "Практикум",
    audience: "Участники 55+",
    summary:
      "Практикум для тех, кто хочет спокойно разобраться с онлайн-сервисами, записью и полезными цифровыми действиями.",
    description:
      "Встреча помогает без спешки пройти базовые цифровые сценарии: запись на услуги, поиск нужной информации и безопасную навигацию по сервисам. Формат рассчитан на комфортный темп, помощь на месте и понятные шаги.",
    tags: ["цифровая грамотность", "спокойный старт", "сервисы"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist poster for Moscow Longevity community event, calm digital literacy workshop for seniors, emerald and turquoise color palette, ruby accent, clean typography area, warm human presence, caring atmosphere, modern Russian civic design, vertical 1080x1920, no noise, soft light",
    registration: "Регистрация по телефону площадки",
    postEvent: "После события: фотоотчет, количество участников и короткие отзывы.",
    metrics: "Ожидаемая посещаемость: 24 человека"
  },
  {
    id: "EV-002",
    title: "Бабушка + внук: мастерская теплых историй",
    date: "12 апреля, 14:00",
    isoDate: "2026-04-12T14:00:00",
    venue: "ЦМД Чертаново",
    district: "ЮАО",
    format: "Мастер-класс",
    audience: "Семьи",
    summary:
      "Совместная встреча для бабушек и внуков 3-7 лет с творческим заданием, разговором и памятным результатом.",
    description:
      "Формат собирает пары бабушка-внук вокруг мягкой совместной активности: творческого задания, простой игры и небольшой общей истории, которую можно унести домой. Встреча рассчитана на теплый межпоколенческий контакт.",
    tags: ["семьи", "межпоколенческий формат", "творчество"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist intergenerational workshop poster, grandmother and child creating together, Moscow Longevity style, emerald, turquoise, ruby and white palette, warm caring mood, clean composition, large title area, vertical 1080x1920, elegant and modern, no clutter",
    registration: "Онлайн-запись через форму площадки",
    postEvent: "Итог: галерея работ, отзывы семей, отметка о посещаемости.",
    metrics: "Ожидаемая посещаемость: 18 семей"
  },
  {
    id: "EV-003",
    title: "Афиша недели: дыхание, движение, внимание",
    date: "13 апреля, 10:00",
    isoDate: "2026-04-13T10:00:00",
    venue: "ЦМД Сокольники",
    district: "ВАО",
    format: "Спорт",
    audience: "Участники 55+",
    summary:
      "Утренний мягкий класс для тех, кто хочет начать неделю с дыхательных практик, спокойного движения и хорошего ритма.",
    description:
      "Занятие объединяет мягкую физическую активность, внимание к дыханию и короткий блок восстановления. Подходит тем, кто ищет поддерживающий и неинтенсивный старт недели в комфортной группе.",
    tags: ["здоровье", "движение", "утро"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist wellness event poster for active seniors, breathing and gentle movement class, calm morning energy, Moscow Longevity branding colors emerald turquoise ruby white, clean geometric composition, caring and respectful tone, vertical 1080x1920, no visual noise",
    registration: "Регистрация на месте",
    postEvent: "После события фиксируются посещаемость и фото с площадки.",
    metrics: "Ожидаемая посещаемость: 30 человек"
  },
  {
    id: "EV-004",
    title: "Клуб городских прогулок и историй",
    date: "15 апреля, 16:30",
    isoDate: "2026-04-15T16:30:00",
    venue: "ЦМД Басманный",
    district: "ЦАО",
    format: "Экскурсия",
    audience: "Смешанная",
    summary:
      "Прогулочный формат для тех, кто любит узнавать город через маршруты, разговоры и живые городские сюжеты.",
    description:
      "Участники собираются на камерную прогулку с разговором о местах, памяти и привычках города. Формат подходит для спокойного вовлечения в культурную жизнь района и мягкого знакомства друг с другом.",
    tags: ["город", "прогулка", "истории"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist city walk poster, older adults exploring Moscow streets, cultural storytelling mood, emerald turquoise ruby white palette, elegant clean layout, caring urban atmosphere, vertical 1080x1920, modern poster design, no clutter",
    registration: "По ссылке в карточке",
    postEvent: "Добавляются фотографии маршрута и короткая заметка по итогам.",
    metrics: "Ожидаемая посещаемость: 20 человек"
  },
  {
    id: "EV-005",
    title: "Весенняя афиша месяца: музыка и встречи",
    date: "18 апреля, 18:00",
    isoDate: "2026-04-18T18:00:00",
    venue: "ЦМД Марьина Роща",
    district: "СВАО",
    format: "Концерт",
    audience: "Сотрудники, Участники 55+",
    summary:
      "Вечерний концертный формат с теплой атмосферой, живым общением и возможностью продолжить знакомство после программы.",
    description:
      "Событие собрано как открытая музыкальная встреча: сценический блок, камерное общение, фотографии и короткий пост-ивент отчет. Подходит для афиши месяца и внешних каналов публикации.",
    tags: ["концерт", "афиша месяца", "вечер"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist concert poster for Moscow Longevity, warm evening music gathering, elegant stage atmosphere, emerald turquoise ruby and white palette, expressive title space, refined clean design, vertical 1080x1920, no noise, respectful and inviting",
    registration: "Свободный вход, желательна предварительная запись",
    postEvent: "После завершения будут добавлены фото, отзывы и ссылка на итоговую заметку.",
    metrics: "Ожидаемая посещаемость: 80 человек"
  },
  {
    id: "EV-006",
    title: "Лекция о памяти, внимании и хорошем самочувствии",
    date: "21 апреля, 12:00",
    isoDate: "2026-04-21T12:00:00",
    venue: "ЦМД Марьино",
    district: "ЮВАО",
    format: "Лекция",
    audience: "Участники 55+",
    summary:
      "Спокойная просветительская встреча о памяти, внимании и простых привычках, которые помогают поддерживать ясность и тонус.",
    description:
      "Лекция построена как уважительный разговор без сложных терминов: участники обсудят повседневные практики поддержки памяти, внимание к самочувствию и удобные способы сохранить активность в привычном ритме.",
    tags: ["здоровье", "память", "лекция"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist health lecture poster for seniors, memory and wellbeing theme, emerald turquoise ruby white palette, calm caring mood, clean composition, elegant typography area, vertical 1080x1920",
    registration: "Регистрация у администратора площадки",
    postEvent: "После события добавляются фото, тезисы встречи и короткие отзывы участников.",
    metrics: "Ожидаемая посещаемость: 34 человека"
  },
  {
    id: "EV-007",
    title: "Танцевальный вечер: лёгкий ритм и хорошее настроение",
    date: "22 апреля, 17:30",
    isoDate: "2026-04-22T17:30:00",
    venue: "ЦМД Люблино",
    district: "ЮВАО",
    format: "Концерт",
    audience: "Смешанная",
    summary:
      "Открытая встреча для тех, кто любит музыку, движение и дружелюбную атмосферу без лишней официальности.",
    description:
      "Вечер объединяет музыку, танцевальные паузы и лёгкое живое общение. Формат подойдёт тем, кто хочет перезагрузиться, встретиться с единомышленниками и провести время в тёплой компании.",
    tags: ["танцы", "музыка", "вечер"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist dance evening poster, caring civic style, ruby emerald turquoise palette, movement and rhythm, warm community atmosphere, vertical 1080x1920",
    registration: "Свободный вход",
    postEvent: "После события появятся фотографии вечера и краткий итог программы.",
    metrics: "Ожидаемая посещаемость: 60 человек"
  },
  {
    id: "EV-008",
    title: "Смартфон без тревоги: полезные функции каждый день",
    date: "23 апреля, 11:30",
    isoDate: "2026-04-23T11:30:00",
    venue: "ЦМД Фили-Давыдково",
    district: "ЗАО",
    format: "Практикум",
    audience: "Участники 55+",
    summary:
      "Практический разбор полезных функций смартфона: сообщения, фото, карты, записи и безопасность в повседневной жизни.",
    description:
      "Участники шаг за шагом пройдут понятные сценарии использования телефона: от быстрых сообщений до полезных настроек, которые делают ежедневные задачи проще и спокойнее.",
    tags: ["цифровая грамотность", "смартфон", "практикум"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist digital literacy poster, smartphone workshop for seniors, emerald and ruby accents, clean civic design, caring atmosphere, vertical 1080x1920",
    registration: "Запись по телефону площадки",
    postEvent: "После события публикуются фото и список полезных цифровых навыков встречи.",
    metrics: "Ожидаемая посещаемость: 22 человека"
  },
  {
    id: "EV-009",
    title: "Семейная суббота: открытки, сладости и тёплые истории",
    date: "24 апреля, 13:00",
    isoDate: "2026-04-24T13:00:00",
    venue: "ЦМД Зюзино",
    district: "ЮЗАО",
    format: "Мастер-класс",
    audience: "Семьи",
    summary:
      "Творческая встреча для бабушек, дедушек и внуков с совместным занятием, памятными открытками и небольшим чаепитием.",
    description:
      "Гостей ждёт добрый семейный формат с простой творческой частью, совместным разговором и атмосферой, в которой легко быть рядом, общаться и создавать общее воспоминание.",
    tags: ["семьи", "творчество", "сладости"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist family workshop poster with cards and sweets, warm intergenerational mood, emerald turquoise ruby white palette, vertical 1080x1920",
    registration: "По предварительной записи у площадки",
    postEvent: "После встречи добавляются фото работ и отзывы семей.",
    metrics: "Ожидаемая посещаемость: 20 семей"
  },
  {
    id: "EV-010",
    title: "Маршрут района: прогулка по тихим историям Марьина",
    date: "25 апреля, 15:00",
    isoDate: "2026-04-25T15:00:00",
    venue: "ЦМД Марьино",
    district: "ЮВАО",
    format: "Экскурсия",
    audience: "Смешанная",
    summary:
      "Неспешная прогулка по району с городскими сюжетами, знакомыми местами и новыми деталями привычного маршрута.",
    description:
      "Участники пройдут небольшой городской маршрут, поговорят о памяти места, привычках района и увидят, как знакомые улицы открываются по-новому через живой рассказ и совместное внимание.",
    tags: ["прогулка", "город", "маршрут"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist neighborhood walk poster, city route and stories, elegant caring urban mood, emerald ruby turquoise palette, vertical 1080x1920",
    registration: "По ссылке в карточке",
    postEvent: "После прогулки будет добавлена галерея маршрута и короткий рассказ по итогам.",
    metrics: "Ожидаемая посещаемость: 26 человек"
  },
  {
    id: "EV-011",
    title: "Утро движения: дыхание, суставная разминка, баланс",
    date: "26 апреля, 09:30",
    isoDate: "2026-04-26T09:30:00",
    venue: "ЦМД Измайлово",
    district: "ВАО",
    format: "Спорт",
    audience: "Участники 55+",
    summary:
      "Мягкое занятие для бодрого старта дня: дыхательные практики, спокойное движение и упражнения на баланс.",
    description:
      "Занятие подойдёт тем, кто ищет безопасную и поддерживающую физическую активность в утреннем формате. Всё построено на комфортном темпе, внимании к телу и ощущении лёгкости после встречи.",
    tags: ["здоровье", "движение", "утро"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist gentle movement poster for seniors, breathing and balance class, emerald turquoise ruby palette, calm healthy mood, vertical 1080x1920",
    registration: "Регистрация на месте",
    postEvent: "После занятия публикуются фото и заметка о программе разминки.",
    metrics: "Ожидаемая посещаемость: 28 человек"
  },
  {
    id: "EV-012",
    title: "Вокальная гостиная: любимые мелодии весны",
    date: "27 апреля, 18:30",
    isoDate: "2026-04-27T18:30:00",
    venue: "ЦМД Аэропорт",
    district: "САО",
    format: "Концерт",
    audience: "Смешанная",
    summary:
      "Музыкальная гостиная с живым исполнением, знакомыми песнями и камерной атмосферой весеннего вечера.",
    description:
      "Программа собрана как тёплая встреча с музыкой, в которой важны настроение, участие зала и возможность после выступления остаться на разговор и общее впечатление.",
    tags: ["концерт", "музыка", "вокал"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist spring music salon poster, vocal evening, ruby emerald turquoise palette, elegant and warm, vertical 1080x1920",
    registration: "Свободный вход по предварительной отметке",
    postEvent: "После вечера появятся фото, видеомоменты и короткий отзыв о программе.",
    metrics: "Ожидаемая посещаемость: 48 человек"
  },
  {
    id: "EV-013",
    title: "Онлайн-сервисы без барьеров: запись, карты, сообщения",
    date: "28 апреля, 12:30",
    isoDate: "2026-04-28T12:30:00",
    venue: "ЦМД Ясенево",
    district: "ЮЗАО",
    format: "Лекция",
    audience: "Участники 55+",
    summary:
      "Просветительская встреча о цифровых сервисах, которые помогают в ежедневных задачах и делают жизнь удобнее.",
    description:
      "Участники разберут понятные примеры использования онлайн-сервисов: запись, маршруты, сообщения и полезные функции, которые помогают уверенно ориентироваться в повседневных цифровых сценариях.",
    tags: ["цифровая грамотность", "онлайн", "лекция"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist civic digital services lecture poster, seniors, smartphone and online tools theme, emerald ruby palette, vertical 1080x1920",
    registration: "По телефону администратора",
    postEvent: "После встречи добавляются фото и список рассмотренных сервисов.",
    metrics: "Ожидаемая посещаемость: 32 человека"
  },
  {
    id: "EV-014",
    title: "Праздник двора: музыка, танцы и сладкие подарки",
    date: "29 апреля, 16:00",
    isoDate: "2026-04-29T16:00:00",
    venue: "ЦМД Отрадное",
    district: "СВАО",
    format: "Концерт",
    audience: "Смешанная",
    summary:
      "Небольшой районный праздник с музыкой, танцевальными паузами, дружелюбной атмосферой и приятными сюрпризами для гостей.",
    description:
      "Событие объединяет музыкальный блок, танцевальное настроение и праздничные детали, которые делают встречу особенно тёплой. Это формат для общения, лёгкости и радости совместного времени.",
    tags: ["танцы", "подарки", "праздник"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist neighborhood celebration poster, music dance sweets gifts, caring community mood, emerald ruby turquoise palette, vertical 1080x1920",
    registration: "Свободный вход",
    postEvent: "После праздника публикуются лучшие фото и краткий итог программы.",
    metrics: "Ожидаемая посещаемость: 75 человек"
  },
  {
    id: "EV-015",
    title: "Тёплый май: арт-мастерская для старших и младших",
    date: "2 мая, 14:30",
    isoDate: "2026-05-02T14:30:00",
    venue: "ЦМД Южное Бутово",
    district: "ЮЗАО",
    format: "Мастер-класс",
    audience: "Семьи",
    summary:
      "Арт-встреча для семей, где важны совместное творчество, спокойный ритм и радость от простого общего дела.",
    description:
      "На мастерской участники создадут небольшую памятную работу, пообщаются и проведут время в мягком семейном формате, который сближает поколения и оставляет приятное послевкусие.",
    tags: ["семьи", "творчество", "май"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist family art workshop poster, spring mood, grandparents and grandchildren creating together, emerald turquoise ruby palette, vertical 1080x1920",
    registration: "Предварительная запись через площадку",
    postEvent: "После события появятся фотографии работ и короткий семейный фотоотчёт.",
    metrics: "Ожидаемая посещаемость: 16 семей"
  },
  {
    id: "EV-017",
    title: "Продуктовая лаборатория: маршрут активного мая",
    date: "5 мая, 11:00",
    isoDate: "2026-05-05T11:00:00",
    venue: "ЦМД Преображенское",
    district: "ВАО",
    format: "Продукт",
    audience: "Сотрудники, Участники 55+",
    summary:
      "Открытая встреча, где участники тестируют идею майского трека занятий и помогают собрать понятный маршрут активности.",
    description:
      "Команда проекта покажет прототип сезонного маршрута: короткие занятия, городские точки, цифровые подсказки и простую систему отметок. Участники смогут пройти демо-сценарий, сказать, что удобно, а что стоит упростить перед запуском.",
    tags: ["продукт", "маршрут", "тестирование", "май"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist product lab poster for Moscow Longevity, active May route prototype, seniors and staff testing a journey map, emerald turquoise ruby white palette, clean civic design, soft light, no text",
    registration: "Запись через администратора ЦМД",
    postEvent: "После встречи будут собраны комментарии участников и список улучшений продукта.",
    metrics: "Ожидаемая посещаемость: 25 человек"
  },
  {
    id: "EV-018",
    title: "Городской пикник памяти: истории любимых дворов",
    date: "7 мая, 15:00",
    isoDate: "2026-05-07T15:00:00",
    venue: "Парк Северное Тушино",
    district: "СЗАО",
    format: "Городское мероприятие",
    audience: "Участники 55+, Семьи",
    summary:
      "Неспешная городская встреча на открытом воздухе с рассказами жителей, мини-маршрутом и семейными фотографиями.",
    description:
      "Гости соберутся в парке, чтобы вспомнить дворы, улицы и маленькие городские привычки, которые делают район близким. В программе короткая прогулка, живая запись историй и тёплая зона общения для старших и младших.",
    tags: ["городское мероприятие", "истории", "парк", "семьи"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist city picnic poster for older adults and families in a Moscow park, warm storytelling mood, emerald turquoise ruby palette, modern civic illustration, no text, soft spring light",
    registration: "Свободное участие, сбор у главного входа",
    postEvent: "После события появятся фото маршрута и подборка коротких историй жителей.",
    metrics: "Ожидаемая посещаемость: 55 человек"
  },
  {
    id: "EV-019",
    title: "Партнёрский день здоровья: спокойная диагностика привычек",
    date: "9 мая, 12:00",
    isoDate: "2026-05-09T12:00:00",
    venue: "ЦМД Хорошёво-Мнёвники",
    district: "СЗАО",
    format: "Партнёрское мероприятие",
    audience: "Участники 55+",
    summary:
      "Партнёрская встреча с мягкой проверкой ежедневных привычек, консультациями и персональными рекомендациями без сложной терминологии.",
    description:
      "Специалисты партнёрской организации помогут участникам посмотреть на сон, питание, движение и самочувствие как на единую систему. Каждый получит простую памятку с шагами, которые можно внедрить уже на этой неделе.",
    tags: ["партнёрское мероприятие", "здоровье", "консультация", "привычки"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist partner health day poster for Moscow Longevity, gentle wellbeing consultation, caring professionals and seniors, emerald turquoise ruby white palette, clean composition, no text",
    registration: "Предварительная запись у стойки информации",
    postEvent: "После встречи партнёр передаст обезличенную статистику запросов и фотоотчёт.",
    metrics: "Ожидаемая посещаемость: 40 человек"
  },
  {
    id: "EV-020",
    title: "Продуктовый разбор: как сделать запись на занятия проще",
    date: "12 мая, 10:30",
    isoDate: "2026-05-12T10:30:00",
    venue: "ЦМД Якиманка",
    district: "ЦАО",
    format: "Продукт",
    audience: "Сотрудники, Участники 55+",
    summary:
      "Практическая сессия по улучшению записи на занятия: участники проходят путь пользователя и отмечают сложные места.",
    description:
      "На встрече разберут сценарий записи от первого интереса до подтверждения участия. Участники попробуют несколько экранов, сравнят варианты формулировок и помогут выбрать более человечный язык для будущего сервиса.",
    tags: ["продукт", "запись", "сервис", "исследование"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist UX research poster for Moscow Longevity, seniors testing event registration flow with staff, clean interface motifs, emerald turquoise ruby palette, respectful modern design, no text",
    registration: "Регистрация по внутренней ссылке",
    postEvent: "После сессии появится карта пользовательского пути и перечень точек улучшения.",
    metrics: "Ожидаемая посещаемость: 18 человек"
  },
  {
    id: "EV-021",
    title: "Городская зарядка у воды: майское утро на набережной",
    date: "14 мая, 09:00",
    isoDate: "2026-05-14T09:00:00",
    venue: "Крымская набережная",
    district: "ЦАО",
    format: "Городское мероприятие",
    audience: "Участники 55+, Смешанная",
    summary:
      "Открытая утренняя зарядка на набережной с мягкой разминкой, дыханием и короткой прогулкой после занятия.",
    description:
      "Инструктор проведёт спокойный комплекс упражнений, который подходит для разного уровня подготовки. После занятия группа пройдёт небольшой маршрут вдоль воды, чтобы закрепить бодрый ритм и познакомиться с соседями по проекту.",
    tags: ["городское мероприятие", "движение", "набережная", "утро"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist morning exercise poster on Moscow embankment, active seniors by the water, emerald turquoise ruby palette, airy spring atmosphere, clean civic illustration, no text",
    registration: "Свободный вход, спортивная форма по погоде",
    postEvent: "После события будут добавлены общие фото и отметка о маршруте прогулки.",
    metrics: "Ожидаемая посещаемость: 70 человек"
  },
  {
    id: "EV-022",
    title: "Партнёрская мастерская: умный дом без тревоги",
    date: "16 мая, 13:30",
    isoDate: "2026-05-16T13:30:00",
    venue: "ЦМД Кунцево",
    district: "ЗАО",
    format: "Партнёрское мероприятие",
    audience: "Участники 55+, Семьи",
    summary:
      "Демонстрация простых домашних технологий: датчики, голосовые помощники и сценарии безопасности понятным языком.",
    description:
      "Партнёр покажет, как современные устройства могут помогать в быту без лишней сложности. Участники увидят живые примеры, зададут вопросы и попробуют настроить безопасный сценарий для дома или квартиры.",
    tags: ["партнёрское мероприятие", "технологии", "дом", "безопасность"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist smart home workshop poster for seniors and families, simple safe home technology, caring partner demo, emerald turquoise ruby white palette, clean modern illustration, no text",
    registration: "Запись по телефону площадки",
    postEvent: "После мастерской будут опубликованы фото демонстрации и список полезных сценариев.",
    metrics: "Ожидаемая посещаемость: 30 человек"
  },
  {
    id: "EV-023",
    title: "Продуктовый клуб: календарь привычек для активного лета",
    date: "19 мая, 16:00",
    isoDate: "2026-05-19T16:00:00",
    venue: "ЦМД Нагатино-Садовники",
    district: "ЮАО",
    format: "Продукт",
    audience: "Участники 55+, Сотрудники",
    summary:
      "Совместная сборка календаря привычек: участники выбирают темы, ритм напоминаний и удобный формат отслеживания прогресса.",
    description:
      "Встреча поможет понять, какой календарь действительно хочется открывать каждый день. Участники предложат свои ритуалы, проверят макет карточек и выберут поддерживающие формулировки без давления и наставлений.",
    tags: ["продукт", "календарь", "привычки", "лето"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist habit calendar co-creation poster for Moscow Longevity, seniors choosing weekly activity cards, emerald turquoise ruby palette, warm product workshop mood, no text",
    registration: "По предварительной записи через ЦМД",
    postEvent: "После клуба команда соберёт прототип календаря и список выбранных привычек.",
    metrics: "Ожидаемая посещаемость: 22 человека"
  },
  {
    id: "EV-024",
    title: "Городской вечер во дворе: хор, чай и соседские знакомства",
    date: "22 мая, 18:00",
    isoDate: "2026-05-22T18:00:00",
    venue: "Дворовая сцена района Лианозово",
    district: "СВАО",
    format: "Городское мероприятие",
    audience: "Смешанная, Семьи",
    summary:
      "Вечерний дворик с хоровым выступлением, чаепитием и короткой программой для знакомства жителей разных поколений.",
    description:
      "Событие создаёт спокойную городскую атмосферу рядом с домом: знакомые песни, общий стол, маленькие истории соседей и возможность договориться о новых клубных встречах. Формат рассчитан на лёгкое включение без регистрации в сложные формы.",
    tags: ["городское мероприятие", "двор", "музыка", "соседи"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist neighborhood courtyard evening poster, choir tea and intergenerational community, emerald turquoise ruby palette, warm urban civic design, soft light, no text",
    registration: "Свободный вход для жителей района",
    postEvent: "После вечера появятся фотографии дворовой сцены и список идей для следующих встреч.",
    metrics: "Ожидаемая посещаемость: 90 человек"
  },
  {
    id: "EV-025",
    title: "Партнёрский кинолекторий: Москва в кадре",
    date: "26 мая, 17:00",
    isoDate: "2026-05-26T17:00:00",
    venue: "Культурный центр ЗИЛ",
    district: "ЮАО",
    format: "Партнёрское мероприятие",
    audience: "Участники 55+, Смешанная",
    summary:
      "Кинопоказ с обсуждением городских образов Москвы, личных воспоминаний и того, как менялся ритм районов.",
    description:
      "Партнёрский культурный центр подготовит фрагменты фильмов и мягкую модерацию разговора. Участники смогут поделиться своими городскими ассоциациями, вспомнить любимые места и увидеть знакомую Москву под новым углом.",
    tags: ["партнёрское мероприятие", "кино", "город", "культура"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist cinema lecture poster about Moscow city memories, older adults watching film frames, emerald turquoise ruby white palette, elegant cultural mood, no text",
    registration: "Регистрация на сайте культурного центра",
    postEvent: "После кинолектория будут добавлены фото обсуждения и подборка рекомендованных фильмов.",
    metrics: "Ожидаемая посещаемость: 65 человек"
  },
  {
    id: "EV-026",
    title: "Городская экспедиция: зелёные маршруты района",
    date: "29 мая, 11:30",
    isoDate: "2026-05-29T11:30:00",
    venue: "Сквер у станции метро Беляево",
    district: "ЮЗАО",
    format: "Городское мероприятие",
    audience: "Участники 55+",
    summary:
      "Прогулка-исследование по зелёным точкам района с отметками на карте, наблюдениями и идеями для летних маршрутов.",
    description:
      "Участники пройдут короткий маршрут по скверам и тихим улицам, отметят удобные места для отдыха и соберут предложения для будущей районной афиши. Это не экскурсия с лекцией, а совместное внимательное исследование привычной среды.",
    tags: ["городское мероприятие", "зелёный маршрут", "карта", "прогулка"],
    status: "Опубликовано",
    imagePrompt:
      "Minimalist green neighborhood route poster, seniors exploring parks and mapping quiet streets, emerald turquoise ruby palette, clean civic nature-inspired design, no text",
    registration: "Запись у администратора ЦМД Ясенево",
    postEvent: "После экспедиции появится карта точек и фото зелёного маршрута.",
    metrics: "Ожидаемая посещаемость: 28 человек"
  },
  {
    id: "EV-016",
    title: "Подать событие в портал",
    date: "Ежедневно",
    isoDate: "2026-04-20T09:00:00",
    venue: "Онлайн-форма",
    district: "Все районы",
    format: "Сервис",
    audience: "Сотрудники, Партнеры",
    summary:
      "Служебная точка входа для инициаторов: создать карточку, запустить афишу и сразу опубликовать событие в портал.",
    description:
      "Форма нужна сотрудникам управленческой команды, ЦМД, территориальным управляющим, менеджерам по партнерам, поставщикам и лидерам клубов. После заполнения включается контур публикации: AI-анонс, афиша и публикация в Outline.",
    tags: ["форма", "публикация", "афиша"],
    status: "Внутренний сервис",
    imagePrompt:
      "Minimalist service portal poster, event submission workflow for Moscow Longevity staff, emerald turquoise ruby white palette, clean UI-inspired composition, caring and trustworthy design, vertical 1080x1920, modern civic style, no clutter",
    registration: "Доступно авторизованным инициаторам",
    postEvent: "Не применяется",
    metrics: "Среднее время до публикации: < 2 секунд на генерацию"
  }
];

const EVENTS_STORAGE_KEY = "moscowLongevityPortal.events.v1";
const defaultEvents = JSON.parse(JSON.stringify(events));

function loadPersistedEvents() {
  try {
    const persistedEvents = JSON.parse(localStorage.getItem(EVENTS_STORAGE_KEY) || "[]");

    if (!Array.isArray(persistedEvents) || !persistedEvents.length) {
      return;
    }

    const persistedById = new Map(persistedEvents.map((eventItem) => [eventItem.id, eventItem]));
    const mergedEvents = [
      ...persistedEvents,
      ...defaultEvents.filter((eventItem) => !persistedById.has(eventItem.id))
    ];

    events.splice(0, events.length, ...mergedEvents);
  } catch (error) {
    console.warn("Не удалось загрузить сохранённые события", error);
  }
}

function saveEvents() {
  try {
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
  } catch (error) {
    console.warn("Не удалось сохранить события", error);
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      resolve({
        name: file.name,
        url: reader.result
      });
    });
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

loadPersistedEvents();

const formatFilter = document.querySelector("#formatFilter");
const audienceFilter = document.querySelector("#audienceFilter");
const districtFilter = document.querySelector("#districtFilter");
const dateFromFilter = document.querySelector("#dateFromFilter");
const dateToFilter = document.querySelector("#dateToFilter");
const searchInput = document.querySelector("#searchInput");
const resetFiltersButton = document.querySelector("#resetFilters");
const openSubmissionFormButton = document.querySelector("#openSubmissionForm");
const openWeekPosterButton = document.querySelector("#openWeekPoster");
const openMonthPosterButton = document.querySelector("#openMonthPoster");
const openAllEventsButton = document.querySelector("#openAllEvents");
const openArchiveButton = document.querySelector("#openArchive");
const closeSubmissionFormButton = document.querySelector("#closeSubmissionForm");
const cancelSubmissionButton = document.querySelector("#cancelSubmission");
const submissionModal = document.querySelector("#submissionModal");
const submissionForm = document.querySelector("#submissionForm");
const formStatus = document.querySelector("#formStatus");
const successBanner = document.querySelector("#successBanner");
const eventGrid = document.querySelector("#eventGrid");
const detailPanel = document.querySelector("#detailPanel");
const calendarList = document.querySelector("#calendarList");
const todayCard = document.querySelector("#todayCard");
const tomorrowCard = document.querySelector("#tomorrowCard");
const visibleCount = document.querySelector("#visibleCount");
const resultState = document.querySelector("#resultState");
const sortByDateButton = document.querySelector("#sortByDate");
const sortByTitleButton = document.querySelector("#sortByTitle");
const tagCloud = document.querySelector("#tagCloud");
const toggleTagsButton = document.querySelector("#toggleTags");
const dashboardGrid = document.querySelector(".dashboard-grid");
const eventDateInput = document.querySelector("#eventDateInput");
const eventTitleInput = document.querySelector("#eventTitleInput");
const eventVenueInput = document.querySelector("#eventVenueInput");
const eventDistrictInput = document.querySelector("#eventDistrictInput");
const eventFormatInput = document.querySelector("#eventFormatInput");
const eventAudienceInput = document.querySelector("#eventAudienceInput");
const eventDescriptionInput = document.querySelector("#eventDescriptionInput");
const eventRegistrationInput = document.querySelector("#eventRegistrationInput");
const eventAuthorInput = document.querySelector("#eventAuthorInput");
const submitSubmissionButton = document.querySelector("#submitSubmissionButton");
const eventModal = document.querySelector("#eventModal");
const closeEventModalButton = document.querySelector("#closeEventModal");
const eventModalTitle = document.querySelector("#eventModalTitle");
const eventModalBody = document.querySelector("#eventModalBody");
const imagePreviewModal = document.querySelector("#imagePreviewModal");
const imagePreview = document.querySelector("#imagePreview");
const closeImagePreviewButton = document.querySelector("#closeImagePreview");

const featuredTags = [
  "цифровая грамотность",
  "семьи",
  "здоровье",
  "концерт",
  "публикация",
  "движение",
  "лекция",
  "мастер-класс",
  "музыка",
  "прогулка",
  "творчество",
  "танцы",
  "практикум",
  "город",
  "сервисы",
  "межпоколенческий формат"
];

const state = {
  format: [],
  audience: [],
  district: [],
  query: "",
  tags: [],
  dateFrom: "",
  dateTo: "",
  tagsExpanded: false,
  todayIndex: 0,
  tomorrowIndex: 0,
  sortMode: "date",
  period: "all",
  activeId: events[0].id,
  editingId: null
};

function uniq(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "ru"));
}

function parseMultiValue(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatMultiValue(value) {
  return parseMultiValue(value).join(", ");
}

function getPrimaryValue(value, fallback = "") {
  return parseMultiValue(value)[0] || fallback;
}

function getSelectedValues(choiceGroup) {
  return Array.from(choiceGroup.querySelectorAll('input[type="checkbox"]:checked'))
    .map((input) => input.value)
    .filter(Boolean);
}

function setSelectedValues(choiceGroup, values) {
  const selectedValues = new Set(parseMultiValue(values));
  choiceGroup.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = selectedValues.has(input.value);
  });
}

function valuesMatchAny(eventValue, selectedValues) {
  return !selectedValues.length || parseMultiValue(eventValue).some((value) => selectedValues.includes(value));
}

function getFilterSelections(filterElement) {
  return Array.from(filterElement.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value);
}

function setFilterSelections(filterElement, selectedValues) {
  const selectedSet = new Set(selectedValues);
  filterElement.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = selectedSet.has(input.value);
  });
}

function getEventDateOnly(eventItem) {
  const eventDate = new Date(eventItem.isoDate);

  if (Number.isNaN(eventDate.getTime())) {
    return "";
  }

  const year = eventDate.getFullYear();
  const month = String(eventDate.getMonth() + 1).padStart(2, "0");
  const day = String(eventDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function escapeAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getStableImageSeed(value) {
  return String(value || "moscow-longevity").split("").reduce((hash, char) => {
    return (hash * 31 + char.charCodeAt(0)) % 100000;
  }, 17);
}

function buildGeneratedPosterImageUrl(eventItem) {
  const visualPrompt = [
    eventItem.imagePrompt,
    "Key visual only, no readable text, no letters, no words, no logos.",
    "Warm respectful minimal illustration for an event card, editorial civic style."
  ]
    .filter(Boolean)
    .join(" ");
  const params = new URLSearchParams({
    width: "768",
    height: "1024",
    nologo: "true",
    seed: String(getStableImageSeed(eventItem.id))
  });

  return `https://image.pollinations.ai/prompt/${encodeURIComponent(visualPrompt)}?${params.toString()}`;
}

function renderGeneratedPosterImage(eventItem, className = "generated-poster-image") {
  const generatedImageUrl = buildGeneratedPosterImageUrl(eventItem);

  return `
    <img
      class="${className}"
      src="${escapeAttribute(generatedImageUrl)}"
      alt="AI-визуал события ${escapeAttribute(eventItem.title)}"
      decoding="async"
      referrerpolicy="no-referrer"
      onload="this.classList.add('is-loaded')"
      onerror="this.classList.add('is-hidden')"
    />
  `;
}

function matchesDateFilter(eventItem) {
  if (!state.dateFrom && !state.dateTo) {
    return true;
  }

  const eventDate = getEventDateOnly(eventItem);

  if (!eventDate) {
    return false;
  }

  if (state.dateFrom && state.dateTo) {
    return eventDate >= state.dateFrom && eventDate <= state.dateTo;
  }

  if (state.dateFrom) {
    return eventDate === state.dateFrom;
  }

  return eventDate <= state.dateTo;
}

function getTodayDateKey() {
  return getEventDateOnly({ isoDate: new Date().toISOString() });
}

function getRelativeDateKey(dayOffset) {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  return getEventDateOnly({ isoDate: date.toISOString() });
}

function formatCalendarDay(date) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "short"
  }).format(date);
}

function formatCalendarWeekday(date) {
  return new Intl.DateTimeFormat("ru-RU", {
    weekday: "short"
  }).format(date);
}

function getCalendarWeekStart(filteredEvents) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (state.dateFrom) {
    const selectedDate = new Date(`${state.dateFrom}T00:00:00`);
    selectedDate.setHours(0, 0, 0, 0);
    return selectedDate;
  }

  const visibleSchedulableEvents = filteredEvents
    .filter((eventItem) => eventItem.format !== "Сервис")
    .sort((left, right) => new Date(left.isoDate) - new Date(right.isoDate));
  const referenceEvent =
    visibleSchedulableEvents.find((eventItem) => new Date(eventItem.isoDate) >= today) ||
    visibleSchedulableEvents[0] ||
    getSchedulableEvents().find((eventItem) => new Date(eventItem.isoDate) >= today) ||
    getSchedulableEvents()[0];

  if (!referenceEvent) {
    return today;
  }

  const start = new Date(referenceEvent.isoDate);
  start.setHours(0, 0, 0, 0);
  return start;
}

function getEventById(eventId) {
  return events.find((item) => item.id === eventId);
}

function getEventKeywords(eventItem) {
  return (eventItem.tags || [])
    .filter((tag) => !tag.includes("новый анонс"))
    .slice(0, 5)
    .join(", ");
}

function hasEventReport(eventItem) {
  return Boolean(
    (eventItem.reportFiles && eventItem.reportFiles.length) ||
      (eventItem.reportPhotos && eventItem.reportPhotos.length) ||
      eventItem.reportLink
  );
}

function canCompleteEvent(eventItem) {
  return eventItem.format !== "Сервис" && isPastEvent(eventItem) && hasEventReport(eventItem) && !eventItem.completed;
}

function isPastEvent(eventItem) {
  return new Date(eventItem.isoDate) < new Date();
}

function getEventStatusLabel(eventItem) {
  if (eventItem.format === "Сервис") {
    return eventItem.status;
  }

  if (eventItem.completed) {
    return "Архив";
  }

  if (hasEventReport(eventItem) && isPastEvent(eventItem)) {
    return "Готово к закрытию";
  }

  if (hasEventReport(eventItem)) {
    return "Отчёт добавлен";
  }

  if (isPastEvent(eventItem)) {
    return "Ожидает отчёт";
  }

  return eventItem.status || "Опубликовано";
}

function getSchedulableEvents() {
  return events
    .filter((eventItem) => eventItem.format !== "Сервис")
    .sort((left, right) => new Date(left.isoDate) - new Date(right.isoDate));
}

function getDateRangeForPeriod(period) {
  const schedulableEvents = getSchedulableEvents();

  if (!schedulableEvents.length) {
    return null;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const referenceEvent =
    schedulableEvents.find((eventItem) => new Date(eventItem.isoDate) >= today) || schedulableEvents[0];
  const start = new Date(referenceEvent.isoDate);
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);

  if (period === "week") {
    end.setDate(end.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    return { start, end };
  }

  if (period === "month") {
    start.setDate(1);
    end.setMonth(start.getMonth() + 1, 0);
    end.setHours(23, 59, 59, 999);
    return { start, end };
  }

  return null;
}

function matchesPeriod(eventItem) {
  if (state.period === "archive") {
    return eventItem.format !== "Сервис" && getEventStatusLabel(eventItem) === "Архив";
  }

  if (state.period === "all") {
    return true;
  }

  if (eventItem.format === "Сервис") {
    return false;
  }

  const range = getDateRangeForPeriod(state.period);

  if (!range) {
    return true;
  }

  const eventDate = new Date(eventItem.isoDate);
  return eventDate >= range.start && eventDate <= range.end;
}

function syncHeroFilterButtons() {
  const allFiltersInactive =
    state.period === "all" &&
    !state.format.length &&
    !state.audience.length &&
    !state.district.length &&
    !state.query &&
    !state.tags.length &&
    !state.dateFrom &&
    !state.dateTo;

  openWeekPosterButton.classList.toggle("is-active", state.period === "week");
  openMonthPosterButton.classList.toggle("is-active", state.period === "month");
  openArchiveButton.classList.toggle("is-active", state.period === "archive");
  openAllEventsButton.classList.toggle("is-active", allFiltersInactive);
}

function applyHeroPeriodFilter(period) {
  state.period = period;
  render();

  if (dashboardGrid) {
    dashboardGrid.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function resetCatalogFilters({ scroll = false } = {}) {
  state.format = [];
  state.audience = [];
  state.district = [];
  state.query = "";
  state.tags = [];
  state.dateFrom = "";
  state.dateTo = "";
  state.period = "all";
  setFilterSelections(formatFilter, []);
  setFilterSelections(audienceFilter, []);
  setFilterSelections(districtFilter, []);
  dateFromFilter.value = "";
  dateToFilter.value = "";
  searchInput.value = "";
  render();

  if (scroll && dashboardGrid) {
    dashboardGrid.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderFilterGroup(filterElement, values, selectedValues) {
  filterElement.innerHTML = "";

  values.forEach((value) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = value;
    input.checked = selectedValues.includes(value);

    label.append(input, document.createTextNode(` ${value}`));
    filterElement.append(label);
  });
}

function populateFilters() {
  renderFilterGroup(formatFilter, uniq(events.flatMap((event) => parseMultiValue(event.format))), state.format);
  renderFilterGroup(audienceFilter, uniq(events.flatMap((event) => parseMultiValue(event.audience))), state.audience);
  renderFilterGroup(districtFilter, uniq(events.map((event) => event.district)), state.district);
}

function renderTags() {
  tagCloud.innerHTML = "";
  tagCloud.classList.toggle("is-hidden", !state.tagsExpanded);
  toggleTagsButton.textContent = state.tagsExpanded ? "Скрыть теги" : "Показать теги";
  toggleTagsButton.setAttribute("aria-expanded", String(state.tagsExpanded));

  uniq([...featuredTags, ...events.flatMap((event) => event.tags || [])]).forEach((tag) => {
    const button = document.createElement("button");
    button.className = `tag${state.tags.includes(tag) ? " active" : ""}`;
    button.type = "button";
    button.textContent = tag;
    button.addEventListener("click", () => {
      state.tags = state.tags.includes(tag)
        ? state.tags.filter((selectedTag) => selectedTag !== tag)
        : [...state.tags, tag];
      render();
    });
    tagCloud.append(button);
  });
}

function matchesFilters(event) {
  const query = state.query.trim().toLowerCase();
  const haystack = [
    event.title,
    event.summary,
    event.venue,
    event.district,
    formatMultiValue(event.format),
    formatMultiValue(event.audience),
    ...event.tags
  ]
    .join(" ")
    .toLowerCase();

  return (
    valuesMatchAny(event.format, state.format) &&
    valuesMatchAny(event.audience, state.audience) &&
    (!state.district.length || state.district.includes(event.district)) &&
    (!state.tags.length || state.tags.some((tag) => event.tags.includes(tag))) &&
    (!query || haystack.includes(query)) &&
    matchesDateFilter(event) &&
    matchesPeriod(event)
  );
}

function getFilteredEvents() {
  return events.filter(matchesFilters);
}

function renderCards(filteredEvents) {
  eventGrid.innerHTML = "";

  if (!filteredEvents.length) {
    eventGrid.innerHTML = `
      <article class="event-card">
        <h3>Ничего не найдено</h3>
        <p class="event-summary">Попробуйте изменить фильтры, район или формулировку поиска.</p>
      </article>
    `;
    return;
  }

  filteredEvents.forEach((event) => {
    const article = document.createElement("article");
    article.className = `event-card${state.activeId === event.id ? " active" : ""}`;
    article.tabIndex = 0;
    article.innerHTML = `
      <div class="event-card-media">
        ${renderGeneratedPosterImage(event, "generated-card-image")}
      </div>
      <div class="event-topline">
        <span class="event-date">${event.date}</span>
        <span class="event-pill">${getEventStatusLabel(event)}</span>
      </div>
      <h3>${event.title}</h3>
      <p class="event-summary">${event.summary}</p>
      <div class="event-meta">
        <span>${formatMultiValue(event.format)}</span>
        <span>${formatMultiValue(event.audience)}</span>
        <span>${event.venue}, ${event.district}</span>
      </div>
      <div class="event-tags">
        ${event.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    `;

    article.addEventListener("click", () => {
      state.activeId = event.id;
      render();
      openEventModal(event.id);
    });

    article.addEventListener("keydown", (keyboardEvent) => {
      if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
        keyboardEvent.preventDefault();
        state.activeId = event.id;
        render();
        openEventModal(event.id);
      }
    });

    eventGrid.append(article);
  });
}

function renderCalendar(filteredEvents) {
  const start = getCalendarWeekStart(filteredEvents);
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });

  calendarList.innerHTML = days
    .map((date) => {
      const dateKey = getEventDateOnly({ isoDate: date.toISOString() });
      const dayEvents = filteredEvents
        .filter((eventItem) => eventItem.format !== "Сервис" && getEventDateOnly(eventItem) === dateKey)
        .sort((left, right) => new Date(left.isoDate) - new Date(right.isoDate));

      return `
        <article class="calendar-day${dayEvents.length ? " has-events" : ""}">
          <div class="calendar-day-head">
            <span>${formatCalendarWeekday(date)}</span>
            <strong>${formatCalendarDay(date)}</strong>
          </div>
          <div class="calendar-day-events">
            ${
              dayEvents.length
                ? dayEvents
                    .map(
                      (eventItem) => `
                        <button class="calendar-event" data-event-id="${eventItem.id}" type="button">
                          <span>${eventItem.date.split(", ").at(-1) || eventItem.date}</span>
                          ${eventItem.title}
                        </button>
                      `
                    )
                    .join("")
                : `<p class="calendar-empty">Нет событий</p>`
            }
          </div>
        </article>
      `;
    })
    .join("");

  calendarList.querySelectorAll(".calendar-event").forEach((item) => {
    const { eventId } = item.dataset;

    item.addEventListener("click", () => {
      state.activeId = eventId;
      render();
      openEventModal(eventId);
    });
  });
}

function getEventsByDateKey(dateKey) {
  return events
    .filter((eventItem) => eventItem.format !== "Сервис" && getEventDateOnly(eventItem) === dateKey)
    .sort((left, right) => new Date(left.isoDate) - new Date(right.isoDate));
}

function getTodayEvents() {
  return getEventsByDateKey(getTodayDateKey());
}

function getTomorrowEvents() {
  return getEventsByDateKey(getRelativeDateKey(1));
}

function getCatalogDatePriority(eventItem) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const weekEnd = new Date(today);
  weekEnd.setDate(today.getDate() + 7);
  weekEnd.setHours(23, 59, 59, 999);
  const eventDate = new Date(eventItem.isoDate);

  if (Number.isNaN(eventDate.getTime())) {
    return 3;
  }

  if (getEventDateOnly(eventItem) === getTodayDateKey()) {
    return 0;
  }

  if (eventDate > today && eventDate <= weekEnd) {
    return 1;
  }

  return 2;
}

function sortCatalogEvents(filteredEvents) {
  const sortedEvents = [...filteredEvents];

  if (state.sortMode === "title") {
    return sortedEvents.sort((left, right) => left.title.localeCompare(right.title, "ru"));
  }

  return sortedEvents.sort((left, right) => {
    const priorityDiff = getCatalogDatePriority(left) - getCatalogDatePriority(right);

    if (priorityDiff !== 0) {
      return priorityDiff;
    }

    return new Date(left.isoDate) - new Date(right.isoDate);
  });
}

function renderDayCard(cardElement, dayEvents, stateKey, label, emptyTitle, emptyCopy) {
  if (!dayEvents.length) {
    state[stateKey] = 0;
    cardElement.innerHTML = `
      <p class="eyebrow">${label}</p>
      <h3>${emptyTitle}</h3>
      <p>${emptyCopy}</p>
    `;
    return;
  }

  if (state[stateKey] >= dayEvents.length) {
    state[stateKey] = 0;
  }

  const current = dayEvents[state[stateKey]];

  cardElement.innerHTML = `
    <div class="today-card-head">
      <p class="eyebrow">${label}</p>
      ${
        dayEvents.length > 1
          ? `<span class="today-counter">${state[stateKey] + 1} / ${dayEvents.length}</span>`
          : ""
      }
    </div>
    <button class="today-event-button" type="button" data-event-id="${current.id}">
      <span>${current.date}</span>
      <strong>${current.title}</strong>
      <small>${current.venue}, ${current.district}</small>
      <em>${current.summary}</em>
    </button>
    ${
      dayEvents.length > 1
        ? `
          <div class="today-controls">
            <button type="button" data-action="day-prev" data-state-key="${stateKey}">Предыдущее</button>
            <button type="button" data-action="day-next" data-state-key="${stateKey}">Следующее</button>
          </div>
        `
        : ""
    }
  `;
}

function renderTodayCard() {
  renderDayCard(
    todayCard,
    getTodayEvents(),
    "todayIndex",
    "Сегодня",
    "На сегодня событий нет",
    "Когда в каталоге появится мероприятие с сегодняшней датой, оно отобразится здесь."
  );
}

function renderTomorrowCard() {
  renderDayCard(
    tomorrowCard,
    getTomorrowEvents(),
    "tomorrowIndex",
    "Завтра",
    "На завтра событий нет",
    "Когда в каталоге появится мероприятие с завтрашней датой, оно отобразится здесь."
  );
}

function renderPosterCard(eventItem) {
  return `
    <article class="poster-card">
      <button
        class="poster-hero"
        type="button"
        data-action="open-image-preview"
        data-image-src="${escapeAttribute(buildGeneratedPosterImageUrl(eventItem))}"
        data-image-alt="Полное изображение события ${escapeAttribute(eventItem.title)}"
        aria-label="Открыть полное изображение события"
      >
        ${renderGeneratedPosterImage(eventItem)}
        <span class="poster-badge">Московское долголетие</span>
        <span class="poster-format">${formatMultiValue(eventItem.format)}</span>
      </button>
      <div class="poster-content">
        <p class="poster-date">${eventItem.date}</p>
        <h4 class="poster-title">${eventItem.title}</h4>
        <div class="poster-meta-grid">
          <p class="poster-meta-item">
            <span>Место</span>
            ${eventItem.venue}
          </p>
          <p class="poster-meta-item">
            <span>Аудитория</span>
            ${formatMultiValue(eventItem.audience)}
          </p>
          <p class="poster-meta-item">
            <span>Район</span>
            ${eventItem.district}
          </p>
          <p class="poster-meta-item accent">
            <span>Публикация</span>
            #МосковскоеДолголетие
          </p>
        </div>
      </div>
    </article>
  `;
}

function renderReportGallery(reportPhotos = [], emptyText = "Превью фотоотчёта пока не добавлено.") {
  if (!reportPhotos.length) {
    return `<div class="report-gallery-empty">${emptyText}</div>`;
  }

  return `
    <div class="report-gallery">
      ${reportPhotos
        .map(
          (photo) => `
            <figure class="report-thumb">
              <img src="${photo.url}" alt="${photo.name}" />
              <figcaption>${photo.name}</figcaption>
            </figure>
          `
        )
        .join("")}
    </div>
  `;
}

function renderDetail(filteredEvents) {
  const current =
    filteredEvents.find((event) => event.id === state.activeId) || filteredEvents[0] || events[0];

  if (!current) {
    detailPanel.innerHTML = "";
    return;
  }

  state.activeId = current.id;

  detailPanel.innerHTML = `
    <div class="detail-topline">
      <span class="detail-chip">${formatMultiValue(current.format)}</span>
      <span class="detail-chip">${formatMultiValue(current.audience)}</span>
      <span class="detail-chip">${current.district}</span>
    </div>
    <h3>${current.title}</h3>
    <p class="detail-copy">${current.description}</p>

    <div class="detail-box detail-box-poster">
      <h4>Карточка события</h4>
      ${renderPosterCard(current)}
    </div>

    <div class="event-modal-actions">
      <button class="secondary-outline-button" type="button" data-action="export-event" data-event-id="${current.id}">
        Экспорт в PDF
      </button>
    </div>

    <div class="detail-columns">
      <div class="detail-box">
        <h4>Параметры события</h4>
        <ul class="detail-list">
          <li><strong>Дата:</strong> ${current.date}</li>
          <li><strong>Площадка:</strong> ${current.venue}</li>
          <li><strong>Запись:</strong> ${current.registration}</li>
          <li><strong>Статус:</strong> ${getEventStatusLabel(current)}</li>
        </ul>
      </div>

      <div class="detail-box">
        <h4>Пост-ивент</h4>
        <ul class="detail-list">
          <li>${current.postEvent}</li>
          <li>${current.metrics}</li>
          <li><strong>Файлы:</strong> ${(current.reportFiles && current.reportFiles.length) ? current.reportFiles.join(", ") : "пока не добавлены"}</li>
          <li><strong>Ссылка:</strong> ${current.reportLink || "пока не добавлена"}</li>
        </ul>
        ${renderReportGallery(current.reportPhotos)}
      </div>
    </div>

    <div class="detail-note">
      В реальном портале здесь будут: брендированная афиша 1080×1920, карта площадки,
      календарный embed, форма записи и итоговые материалы после события.
    </div>
  `;
}

function renderEventModal() {
  const current = getEventById(state.activeId) || events[0];

  if (!current) {
    eventModalTitle.textContent = "Событие";
    eventModalBody.innerHTML = "";
    return;
  }

  const reportFiles = current.reportFiles || [];
  const reportPhotos = current.reportPhotos || [];
  const reportLink = current.reportLink || "";

  eventModalTitle.textContent = current.title;
  eventModalBody.innerHTML = `
    <div class="detail-topline">
      <span class="detail-chip">${formatMultiValue(current.format)}</span>
      <span class="detail-chip">${formatMultiValue(current.audience)}</span>
      <span class="detail-chip">${current.district}</span>
    </div>

    <p class="detail-copy">${current.description}</p>

    <div class="detail-box detail-box-poster">
      <h4>Карточка события</h4>
      ${renderPosterCard(current)}
    </div>

    <div class="event-modal-actions">
      <button class="primary-button" type="button" data-action="edit-event" data-event-id="${current.id}">
        Редактировать
      </button>
      <button class="secondary-outline-button" type="button" data-action="export-event" data-event-id="${current.id}">
        Экспорт в PDF
      </button>
      <button class="secondary-outline-button" type="button" data-action="toggle-report" data-event-id="${current.id}">
        Добавить отчёт по фото
      </button>
    </div>

    <div class="detail-columns">
      <div class="detail-box">
        <h4>Параметры события</h4>
        <ul class="detail-list">
          <li><strong>Дата:</strong> ${current.date}</li>
          <li><strong>Площадка:</strong> ${current.venue}</li>
          <li><strong>Запись:</strong> ${current.registration}</li>
          <li><strong>Статус:</strong> ${getEventStatusLabel(current)}</li>
        </ul>
      </div>

      <div class="detail-box">
        <h4>Материалы после события</h4>
        <ul class="report-list">
          <li>${current.postEvent}</li>
          <li>${current.metrics}</li>
          ${
            reportFiles.length
              ? `<li><strong>Файлы:</strong> ${reportFiles.join(", ")}</li>`
              : "<li>Файлы пока не добавлены.</li>"
          }
          ${
            reportLink
              ? `<li><strong>Ссылка:</strong> <a class="report-link" href="${reportLink}" target="_blank" rel="noreferrer">${reportLink}</a></li>`
              : "<li>Ссылка на отчёт пока не добавлена.</li>"
          }
        </ul>
        ${renderReportGallery(reportPhotos)}
      </div>
    </div>

    <section id="reportPanel" class="support-panel" hidden>
      <h4>Добавить отчёт по фото</h4>
      <p>Загрузите фото с события или приложите ссылку на папку, облако или итоговый материал.</p>
      <form id="reportForm">
        <div class="report-grid">
          <label class="form-field">
            <span>Фото с события</span>
            <input id="reportFilesInput" type="file" accept="image/*" multiple />
          </label>

          <label class="form-field">
            <span>Ссылка на отчёт / папку</span>
            <input
              id="reportLinkInput"
              type="url"
              placeholder="https://..."
              value="${reportLink}"
            />
          </label>
        </div>

        <div id="reportPreview" class="report-preview-wrap">
          ${renderReportGallery(reportPhotos, "Выберите фото, чтобы увидеть превью до сохранения.")}
        </div>

        <div class="report-actions">
          <p id="reportStatus" class="form-status" aria-live="polite"></p>
          <div class="report-buttons">
            ${
              canCompleteEvent(current)
                ? `
                  <button class="danger-button" type="button" data-action="complete-event" data-event-id="${current.id}">
                    Закрыть событие
                  </button>
                `
                : ""
            }
            <button class="primary-button" type="submit">Сохранить отчёт</button>
          </div>
        </div>
      </form>
    </section>
  `;
}

function renderCounters(filteredEvents) {
  visibleCount.textContent = String(filteredEvents.length);
  sortByDateButton.classList.toggle("is-active", state.sortMode === "date");
  sortByTitleButton.classList.toggle("is-active", state.sortMode === "title");
  const periodLabel =
    state.period === "week"
      ? " за неделю"
      : state.period === "month"
        ? " за месяц"
        : state.period === "archive"
          ? " в архиве"
          : "";
  resultState.textContent = `${filteredEvents.length} событий${periodLabel}`;
}

function render() {
  const filteredEvents = sortCatalogEvents(getFilteredEvents());
  populateFilters();
  renderTags();
  syncHeroFilterButtons();
  renderTodayCard();
  renderTomorrowCard();
  renderCounters(filteredEvents);
  renderCards(filteredEvents);
  renderCalendar(filteredEvents);
  renderDetail(filteredEvents);

  if (!eventModal.hidden) {
    renderEventModal();
  }
}

function formatHumanDate(datetimeValue) {
  const date = new Date(datetimeValue);
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function splitKeywords(input) {
  return input
    .split(/[,\n;]+/)
    .map((item) =>
      item
        .trim()
        .replace(/\s+/g, " ")
        .replace(/^[,.;:!?-]+|[,.;:!?-]+$/g, "")
    )
    .filter(Boolean)
    .slice(0, 5);
}

function capitalizeFirst(text) {
  if (!text) {
    return "";
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

function joinKeywordsForSentence(keywords) {
  if (!keywords.length) {
    return "встречи и полезного общения";
  }

  const normalizedKeywords = keywords.map((keyword) => keyword.toLowerCase());

  if (normalizedKeywords.length === 1) {
    return normalizedKeywords[0];
  }

  if (normalizedKeywords.length === 2) {
    return `${normalizedKeywords[0]} и ${normalizedKeywords[1]}`;
  }

  return `${normalizedKeywords.slice(0, -1).join(", ")} и ${normalizedKeywords.at(-1)}`;
}

function getAudiencePhrase(audience) {
  const primaryAudience = getPrimaryValue(audience);
  const audienceMap = {
    "Участники 55+": "тех, кто хочет провести время с пользой и в хорошей компании",
    "Семьи": "семьи, которым важны теплое общение и совместные впечатления",
    "Сотрудники": "сотрудников, которым важно быть в курсе событий и вовлекаться в жизнь проекта",
    "Смешанная": "всех, кому близки живое общение, участие и новые впечатления",
    "Партнеры": "партнеров, которым интересно участие в совместных городских инициативах"
  };

  return audienceMap[primaryAudience] || "всех, кому интересно это событие";
}

function getTopicPhrase(keywords, format) {
  const primaryFormat = getPrimaryValue(format, "Событие");
  const topicLine = joinKeywordsForSentence(keywords);

  if (!keywords.length) {
    return `встречу в формате «${primaryFormat}»`;
  }

  if (keywords.length === 1) {
    return `${primaryFormat.toLowerCase()} о ${topicLine}`;
  }

  return `${primaryFormat.toLowerCase()}, посвящённое темам ${topicLine}`;
}

function getFormatLead(format) {
  const primaryFormat = getPrimaryValue(format, "Событие");
  const formatMap = {
    "Лекция": "встреча, в которой главное — смысл, ясность и живой разговор",
    "Мастер-класс": "практическое занятие, где особенно важны участие и личный опыт",
    "Практикум": "прикладная встреча с понятным результатом и спокойным темпом",
    "Спорт": "занятие, которое помогает почувствовать движение, лёгкость и внутренний ресурс",
    "Концерт": "событие с атмосферой, музыкой и общением, которое запоминается надолго",
    "Экскурсия": "маршрут, позволяющий увидеть привычные места по-новому"
  };

  return formatMap[primaryFormat] || "событие, в котором сочетаются польза, атмосфера и участие";
}

function buildAnnouncement(title, keywords, audience, format, date, venue, registration) {
  const audiencePhrase = getAudiencePhrase(audience);
  const topicPhrase = getTopicPhrase(keywords, format);
  const formatLead = getFormatLead(format);
  const registrationLine =
    registration && registration !== "Ссылка будет добавлена инициатором"
      ? `Подробности и запись: ${registration}.`
      : "Участие можно уточнить у организатора или на площадке.";

  return [
    `${title} — ${topicPhrase} для ${audiencePhrase}. Это ${formatLead}: с деликатным тоном, ясной подачей и вниманием к тому, чтобы каждому было комфортно включиться с первых минут.`,
    `${capitalizeFirst(date)} встречаемся в ${venue}. Гостей ждут продуманная программа, тёплая атмосфера и естественное общение без лишней официальности — именно то, ради чего хочется выбраться из рутины и провести время со смыслом.`,
    `Если вам близки новые впечатления, доброжелательная среда и события, после которых остаётся хорошее послевкусие, обязательно приходите. ${registrationLine}`
  ].join("\n\n");
}

function buildImagePrompt(title, keywords, format, audience) {
  const formatLabel = formatMultiValue(format) || "Событие";
  const audienceLabel = formatMultiValue(audience) || "Смешанная";
  const keywordPrompt = keywords.length ? keywords.join(", ") : "community, care, inspiration";

  return `Create a minimalist vertical event poster for "Moscow Longevity". Theme: ${title}. Format: ${formatLabel}. Audience: ${audienceLabel}. Include visual cues inspired by ${keywordPrompt}. Style: warm, caring, respectful, modern civic design, clean composition, large title area, no clutter, no noise. Palette: emerald, turquoise, ruby, red and white. Typography feeling: Circe Bold / Extra Bold. Abstract or human-centered imagery, elegant shapes, soft light. Output: PNG poster, 1080x1920.`;
}

function resetSubmissionFormState() {
  submissionForm.reset();
  formStatus.textContent = "";
}

function populateSubmissionForm(eventItem) {
  const sourceDate = new Date(eventItem.isoDate);
  const isoLocalValue = new Date(sourceDate.getTime() - sourceDate.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);

  eventDateInput.value = isoLocalValue;
  eventTitleInput.value = eventItem.title || "";
  eventVenueInput.value = eventItem.venue || "";
  eventDistrictInput.value = eventItem.district || "";
  setSelectedValues(eventFormatInput, eventItem.format);
  setSelectedValues(eventAudienceInput, eventItem.audience);
  eventDescriptionInput.value = getEventKeywords(eventItem);
  eventRegistrationInput.value = eventItem.registration || "";
  eventAuthorInput.value = eventItem.author || "";
}

function openModal() {
  submissionModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  submissionModal.hidden = true;
  document.body.style.overflow = "";
  state.editingId = null;
  document.querySelector("#submissionTitle").textContent = "Подать событие в портал";
  submitSubmissionButton.textContent = "Подать событие";
  formStatus.textContent = "";
}

function openCreateModal() {
  state.editingId = null;
  document.querySelector("#submissionTitle").textContent = "Подать событие в портал";
  submitSubmissionButton.textContent = "Подать событие";
  resetSubmissionFormState();
  openModal();
}

function openEditModal(eventId) {
  const current = getEventById(eventId);

  if (!current) {
    return;
  }

  state.editingId = eventId;
  document.querySelector("#submissionTitle").textContent = "Редактировать событие";
  submitSubmissionButton.textContent = "Сохранить изменения";
  resetSubmissionFormState();
  populateSubmissionForm(current);
  openModal();
}

function openEventModal(eventId) {
  state.activeId = eventId;
  renderEventModal();
  eventModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeEventModal() {
  eventModal.hidden = true;
  document.body.style.overflow = submissionModal.hidden ? "" : "hidden";
}

function openImagePreview(imageSrc, imageAlt) {
  imagePreview.src = imageSrc;
  imagePreview.alt = imageAlt || "Полное изображение события";
  imagePreviewModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeImagePreview() {
  imagePreviewModal.hidden = true;
  imagePreview.removeAttribute("src");
  imagePreview.alt = "Полное изображение события";
  document.body.style.overflow = eventModal.hidden && submissionModal.hidden ? "" : "hidden";
}

function exportEventAnnouncement(eventId) {
  const current = getEventById(eventId);

  if (!current) {
    return;
  }

  const printWindow = window.open("", "_blank", "width=1100,height=900");

  if (!printWindow) {
    return;
  }

  const reportGallery = renderReportGallery(current.reportPhotos || [], "Фотоотчёт не добавлен.");
  const printMarkup = `
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${current.title} — PDF export</title>
        <style>
          :root {
            --emerald: #165849;
            --turquoise: #2eb398;
            --ruby: #800036;
            --red: #bd536d;
            --ink: #24312f;
            --muted: #62706c;
            --paper: #ffffff;
            --rose: #f3cad5;
          }

          * { box-sizing: border-box; }
          body {
            margin: 0;
            padding: 32px;
            font-family: "Circe", "Arial", sans-serif;
            color: var(--ink);
            background: #fff;
          }
          .page {
            max-width: 920px;
            margin: 0 auto;
          }
          .hero {
            padding: 28px;
            border-radius: 28px;
            background:
              radial-gradient(circle at top right, rgba(46, 179, 152, 0.18), transparent 32%),
              radial-gradient(circle at left bottom, rgba(189, 83, 109, 0.16), transparent 28%),
              linear-gradient(160deg, #ffffff 0%, #f5fbf8 52%, #f9f1f4 100%);
            border: 1px solid rgba(22, 88, 73, 0.1);
          }
          .brand {
            display: inline-flex;
            padding: 8px 12px;
            border-radius: 999px;
            background: var(--ruby);
            color: #fff;
            font-size: 13px;
          }
          h1 {
            margin: 18px 0 14px;
            color: var(--emerald);
            font-size: 38px;
            line-height: 0.95;
            letter-spacing: -0.04em;
          }
          .meta {
            display: grid;
            gap: 8px;
            margin: 0;
            color: var(--ink);
            font-size: 16px;
          }
          .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 22px 0 0;
          }
          .chip {
            padding: 8px 12px;
            border-radius: 999px;
            background: rgba(46, 179, 152, 0.12);
            color: var(--emerald);
            font-size: 13px;
          }
          .section {
            margin-top: 24px;
            padding: 22px;
            border-radius: 24px;
            border: 1px solid rgba(22, 88, 73, 0.08);
            background: #fff;
          }
          h2 {
            margin: 0 0 14px;
            color: var(--ruby);
            font-size: 24px;
          }
          p, li {
            font-size: 15px;
            line-height: 1.6;
          }
          ul {
            margin: 0;
            padding-left: 18px;
          }
          .report-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 12px;
            margin-top: 14px;
          }
          .report-thumb {
            margin: 0;
            padding: 10px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(22, 88, 73, 0.08);
          }
          .report-thumb img {
            display: block;
            width: 100%;
            aspect-ratio: 4 / 3;
            object-fit: cover;
            border-radius: 12px;
          }
          .report-thumb figcaption {
            margin-top: 8px;
            color: var(--muted);
            font-size: 12px;
            line-height: 1.35;
          }
          .report-gallery-empty {
            padding: 14px 16px;
            border-radius: 16px;
            background: rgba(22, 88, 73, 0.05);
            color: var(--muted);
          }
          .note {
            margin-top: 24px;
            padding: 16px 18px;
            border-radius: 18px;
            background: var(--rose);
            color: var(--ruby);
          }
          @media print {
            body { padding: 0; }
            .page { max-width: none; }
          }
        </style>
      </head>
      <body>
        <main class="page">
          <section class="hero">
            <span class="brand">Московское долголетие</span>
            <h1>${current.title}</h1>
            <div class="meta">
              <div><strong>Дата:</strong> ${current.date}</div>
              <div><strong>Место проведения:</strong> ${current.venue}</div>
              <div><strong>Район:</strong> ${current.district}</div>
              <div><strong>Участие:</strong> ${current.registration}</div>
            </div>
            <div class="chips">
              <span class="chip">${current.format}</span>
              <span class="chip">${current.audience}</span>
              <span class="chip">${getEventStatusLabel(current)}</span>
            </div>
          </section>

          <section class="section">
            <h2>Анонс</h2>
            ${current.description
              .split("\n\n")
              .map((paragraph) => `<p>${paragraph}</p>`)
              .join("")}
          </section>

          <section class="section">
            <h2>Пост-ивент</h2>
            <ul>
              <li>${current.postEvent}</li>
              <li>${current.metrics}</li>
              ${current.reportLink ? `<li>Ссылка на отчёт: ${current.reportLink}</li>` : ""}
            </ul>
            ${reportGallery}
          </section>

          <div class="note">Используйте системное окно печати и выберите “Сохранить как PDF”.</div>
        </main>
        <script>
          window.onload = () => {
            window.print();
          };
        </script>
      </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(printMarkup);
  printWindow.document.close();
}

function completeEvent(eventId) {
  const current = getEventById(eventId);

  if (!current || !canCompleteEvent(current)) {
    return;
  }

  current.completed = true;
  current.status = "Архив";
  saveEvents();
  render();

  if (!eventModal.hidden) {
    renderEventModal();
  }
}

function toggleReportPanel() {
  const reportPanel = document.querySelector("#reportPanel");

  if (!reportPanel) {
    return;
  }

  reportPanel.hidden = !reportPanel.hidden;
}

function updateReportPreview() {
  const reportFilesInput = document.querySelector("#reportFilesInput");
  const reportPreview = document.querySelector("#reportPreview");

  if (!reportFilesInput || !reportPreview) {
    return;
  }

  const selectedPhotos = Array.from(reportFilesInput.files || []).map((file) => ({
    name: file.name,
    url: URL.createObjectURL(file)
  }));

  reportPreview.innerHTML = renderReportGallery(
    selectedPhotos,
    "Выберите фото, чтобы увидеть превью до сохранения."
  );
}

async function saveEventReport(event) {
  event.preventDefault();

  const current = getEventById(state.activeId);
  const reportFilesInput = document.querySelector("#reportFilesInput");
  const reportLinkInput = document.querySelector("#reportLinkInput");
  const reportStatus = document.querySelector("#reportStatus");

  if (!current || !reportFilesInput || !reportLinkInput || !reportStatus) {
    return;
  }

  const selectedFiles = Array.from(reportFilesInput.files || []);
  const fileNames = selectedFiles.map((file) => file.name);
  const photoPreviews = selectedFiles.length
    ? await Promise.all(selectedFiles.map(readFileAsDataUrl))
    : [];
  const reportLinkValue = reportLinkInput.value.trim();

  current.reportFiles = fileNames.length ? fileNames : current.reportFiles || [];
  current.reportPhotos = photoPreviews.length ? photoPreviews : current.reportPhotos || [];
  current.reportLink = reportLinkValue || current.reportLink || "";
  current.postEvent = "Фотоотчёт и итоговые материалы добавлены в карточку события.";
  current.completed = false;
  current.status = canCompleteEvent(current) ? "Готово к закрытию" : getEventStatusLabel(current);
  saveEvents();

  render();
  renderEventModal();

  const reportPanel = document.querySelector("#reportPanel");
  const nextReportStatus = document.querySelector("#reportStatus");

  if (reportPanel) {
    reportPanel.hidden = false;
  }

  if (nextReportStatus) {
    nextReportStatus.textContent = "Отчёт сохранён в карточке события.";
  }
}

function createAnnouncementFromForm(event) {
  event.preventDefault();

  const title = eventTitleInput.value.trim();
  const dateValue = eventDateInput.value;
  const venue = eventVenueInput.value.trim();
  const district = eventDistrictInput.value.trim();
  const formatValues = getSelectedValues(eventFormatInput);
  const audienceValues = getSelectedValues(eventAudienceInput);
  const format = formatValues.length ? formatValues.join(", ") : "Событие";
  const audience = audienceValues.length ? audienceValues.join(", ") : "Смешанная";
  const keywordsInput = eventDescriptionInput.value.trim();
  const registration = eventRegistrationInput.value.trim() || "Ссылка будет добавлена инициатором";
  const author = eventAuthorInput.value.trim();

  if (!title || !dateValue || !venue || !district || !author) {
    formStatus.textContent = "Заполните обязательные поля формы.";
    return;
  }

  const humanDate = formatHumanDate(dateValue);
  const keywords = splitKeywords(keywordsInput);
  const announcement = buildAnnouncement(
    title,
    keywords,
    audience,
    format,
    humanDate,
    venue,
    registration
  );
  const imagePrompt = buildImagePrompt(title, keywords, format, audience);
  const isoDate = new Date(dateValue).toISOString();
  const eventPayload = {
    title,
    date: humanDate,
    isoDate,
    venue,
    district,
    format,
    audience,
    summary: announcement.split("\n\n")[0],
    description: announcement,
    tags: [format.toLowerCase(), district.toLowerCase(), ...keywords.map((item) => item.toLowerCase())]
      .filter(Boolean)
      .slice(0, 5),
    status: "Опубликовано",
    imagePrompt,
    author,
    registration,
    postEvent: `Инициатор: ${author}. После события сюда добавляются фото, посещаемость и ссылка на отчет.`,
    reportFiles: state.editingId ? getEventById(state.editingId)?.reportFiles || [] : [],
    reportLink: state.editingId ? getEventById(state.editingId)?.reportLink || "" : "",
    metrics: "Ожидаемая посещаемость: будет уточнена"
  };

  let currentEventId = state.editingId;

  if (state.editingId) {
    const current = getEventById(state.editingId);

    if (current) {
      Object.assign(current, eventPayload);
    }
  } else {
    const newEvent = {
      id: `EV-${String(events.length + 1).padStart(3, "0")}`,
      ...eventPayload
    };

    events.unshift(newEvent);
    currentEventId = newEvent.id;
  }

  saveEvents();

  state.activeId = currentEventId;
  state.format = [];
  state.audience = [];
  state.district = [];
  state.query = "";
  state.tags = [];
  state.dateFrom = "";
  state.dateTo = "";
  searchInput.value = "";
  dateFromFilter.value = "";
  dateToFilter.value = "";
  resetSubmissionFormState();
  successBanner.hidden = false;
  successBanner.textContent = state.editingId
    ? `Событие "${title}" обновлено: текст, prompt и карточка синхронизированы.`
    : `Анонс "${title}" создан, литературный текст и image prompt сгенерированы, карточка опубликована в каталоге.`;
  state.editingId = null;
  document.querySelector("#submissionTitle").textContent = "Подать событие в портал";
  submitSubmissionButton.textContent = "Подать событие";
  closeModal();
  render();
  openEventModal(currentEventId);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

formatFilter.addEventListener("change", () => {
  state.format = getFilterSelections(formatFilter);
  render();
});

audienceFilter.addEventListener("change", () => {
  state.audience = getFilterSelections(audienceFilter);
  render();
});

districtFilter.addEventListener("change", () => {
  state.district = getFilterSelections(districtFilter);
  render();
});

toggleTagsButton.addEventListener("click", () => {
  state.tagsExpanded = !state.tagsExpanded;
  render();
});

dateFromFilter.addEventListener("change", (event) => {
  state.dateFrom = event.target.value;

  if (state.dateTo && state.dateFrom > state.dateTo) {
    state.dateTo = state.dateFrom;
    dateToFilter.value = state.dateTo;
  }

  render();
});

dateToFilter.addEventListener("change", (event) => {
  state.dateTo = event.target.value;

  if (state.dateFrom && state.dateTo && state.dateTo < state.dateFrom) {
    state.dateFrom = state.dateTo;
    dateFromFilter.value = state.dateFrom;
  }

  render();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

sortByDateButton.addEventListener("click", () => {
  state.sortMode = "date";
  render();
});

sortByTitleButton.addEventListener("click", () => {
  state.sortMode = "title";
  render();
});

resetFiltersButton.addEventListener("click", () => {
  resetCatalogFilters();
});

openSubmissionFormButton.addEventListener("click", openCreateModal);
openWeekPosterButton.addEventListener("click", () => {
  applyHeroPeriodFilter(state.period === "week" ? "all" : "week");
});
openMonthPosterButton.addEventListener("click", () => {
  applyHeroPeriodFilter(state.period === "month" ? "all" : "month");
});
openArchiveButton.addEventListener("click", () => {
  applyHeroPeriodFilter(state.period === "archive" ? "all" : "archive");
});
openAllEventsButton.addEventListener("click", () => {
  resetCatalogFilters({ scroll: true });
});
function handleDayCardClick(event, getDayEvents) {
  const dayEvents = getDayEvents();
  const previousButton = event.target.closest('[data-action="day-prev"]');
  const nextButton = event.target.closest('[data-action="day-next"]');
  const eventButton = event.target.closest("[data-event-id]");

  if (previousButton && dayEvents.length) {
    const { stateKey } = previousButton.dataset;
    state[stateKey] = (state[stateKey] - 1 + dayEvents.length) % dayEvents.length;
    render();
    return;
  }

  if (nextButton && dayEvents.length) {
    const { stateKey } = nextButton.dataset;
    state[stateKey] = (state[stateKey] + 1) % dayEvents.length;
    render();
    return;
  }

  if (eventButton) {
    state.activeId = eventButton.dataset.eventId;
    render();
    openEventModal(eventButton.dataset.eventId);
  }
}

todayCard.addEventListener("click", (event) => {
  handleDayCardClick(event, getTodayEvents);
});

tomorrowCard.addEventListener("click", (event) => {
  handleDayCardClick(event, getTomorrowEvents);
});
closeSubmissionFormButton.addEventListener("click", closeModal);
cancelSubmissionButton.addEventListener("click", closeModal);
closeEventModalButton.addEventListener("click", closeEventModal);
submissionForm.addEventListener("submit", createAnnouncementFromForm);
submissionModal.querySelector(".modal-card").addEventListener("click", (event) => {
  event.stopPropagation();
});
submissionModal.addEventListener("click", (event) => {
  if (event.target.dataset.closeModal === "true") {
    closeModal();
  }
});
eventModal.addEventListener("click", (event) => {
  if (event.target.dataset.closeEventModal === "true") {
    closeEventModal();
  }
});
eventModalBody.addEventListener("click", (event) => {
  const editButton = event.target.closest('[data-action="edit-event"]');
  const exportButton = event.target.closest('[data-action="export-event"]');
  const completeButton = event.target.closest('[data-action="complete-event"]');
  const reportButton = event.target.closest('[data-action="toggle-report"]');
  const imagePreviewButton = event.target.closest('[data-action="open-image-preview"]');

  if (imagePreviewButton) {
    openImagePreview(imagePreviewButton.dataset.imageSrc, imagePreviewButton.dataset.imageAlt);
    return;
  }

  if (editButton) {
    closeEventModal();
    openEditModal(editButton.dataset.eventId);
    return;
  }

  if (exportButton) {
    exportEventAnnouncement(exportButton.dataset.eventId);
    return;
  }

  if (completeButton) {
    completeEvent(completeButton.dataset.eventId);
    return;
  }

  if (reportButton) {
    toggleReportPanel();
  }
});
detailPanel.addEventListener("click", (event) => {
  const exportButton = event.target.closest('[data-action="export-event"]');
  const completeButton = event.target.closest('[data-action="complete-event"]');
  const imagePreviewButton = event.target.closest('[data-action="open-image-preview"]');

  if (imagePreviewButton) {
    openImagePreview(imagePreviewButton.dataset.imageSrc, imagePreviewButton.dataset.imageAlt);
    return;
  }

  if (exportButton) {
    exportEventAnnouncement(exportButton.dataset.eventId);
  }

  if (completeButton) {
    completeEvent(completeButton.dataset.eventId);
  }
});
eventModalBody.addEventListener("submit", (event) => {
  if (event.target.id === "reportForm") {
    saveEventReport(event);
  }
});
eventModalBody.addEventListener("change", (event) => {
  if (event.target.id === "reportFilesInput") {
    updateReportPreview();
  }
});
closeImagePreviewButton.addEventListener("click", closeImagePreview);
imagePreviewModal.addEventListener("click", (event) => {
  if (event.target.dataset.closeImagePreview === "true") {
    closeImagePreview();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !imagePreviewModal.hidden) {
    closeImagePreview();
  } else if (event.key === "Escape" && !submissionModal.hidden) {
    closeModal();
  } else if (event.key === "Escape" && !eventModal.hidden) {
    closeEventModal();
  }
});

render();

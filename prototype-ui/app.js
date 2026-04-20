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

const formatFilter = document.querySelector("#formatFilter");
const audienceFilter = document.querySelector("#audienceFilter");
const districtFilter = document.querySelector("#districtFilter");
const searchInput = document.querySelector("#searchInput");
const resetFiltersButton = document.querySelector("#resetFilters");
const openSubmissionFormButton = document.querySelector("#openSubmissionForm");
const openWeekPosterButton = document.querySelector("#openWeekPoster");
const openMonthPosterButton = document.querySelector("#openMonthPoster");
const closeSubmissionFormButton = document.querySelector("#closeSubmissionForm");
const cancelSubmissionButton = document.querySelector("#cancelSubmission");
const submissionModal = document.querySelector("#submissionModal");
const submissionForm = document.querySelector("#submissionForm");
const formStatus = document.querySelector("#formStatus");
const successBanner = document.querySelector("#successBanner");
const eventGrid = document.querySelector("#eventGrid");
const detailPanel = document.querySelector("#detailPanel");
const calendarList = document.querySelector("#calendarList");
const visibleCount = document.querySelector("#visibleCount");
const resultState = document.querySelector("#resultState");
const tagCloud = document.querySelector("#tagCloud");
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

const featuredTags = [
  "цифровая грамотность",
  "семьи",
  "здоровье",
  "концерт",
  "публикация"
];

const state = {
  format: "all",
  audience: "all",
  district: "all",
  query: "",
  tag: "",
  period: "all",
  activeId: events[0].id,
  editingId: null
};

function uniq(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "ru"));
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
  openWeekPosterButton.classList.toggle("is-active", state.period === "week");
  openMonthPosterButton.classList.toggle("is-active", state.period === "month");
}

function applyHeroPeriodFilter(period) {
  state.period = period;
  render();

  if (dashboardGrid) {
    dashboardGrid.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function populateFilters() {
  formatFilter.innerHTML = `<option value="all">Все форматы</option>`;
  audienceFilter.innerHTML = `<option value="all">Все аудитории</option>`;
  districtFilter.innerHTML = `<option value="all">Все районы</option>`;

  uniq(events.map((event) => event.format)).forEach((value) => {
    formatFilter.insertAdjacentHTML(
      "beforeend",
      `<option value="${value}">${value}</option>`
    );
  });

  uniq(events.map((event) => event.audience)).forEach((value) => {
    audienceFilter.insertAdjacentHTML(
      "beforeend",
      `<option value="${value}">${value}</option>`
    );
  });

  uniq(events.map((event) => event.district)).forEach((value) => {
    districtFilter.insertAdjacentHTML(
      "beforeend",
      `<option value="${value}">${value}</option>`
    );
  });
}

function renderTags() {
  tagCloud.innerHTML = "";

  featuredTags.forEach((tag) => {
    const button = document.createElement("button");
    button.className = `tag${state.tag === tag ? " active" : ""}`;
    button.type = "button";
    button.textContent = tag;
    button.addEventListener("click", () => {
      state.tag = state.tag === tag ? "" : tag;
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
    event.format,
    event.audience,
    ...event.tags
  ]
    .join(" ")
    .toLowerCase();

  return (
    (state.format === "all" || event.format === state.format) &&
    (state.audience === "all" || event.audience === state.audience) &&
    (state.district === "all" || event.district === state.district) &&
    (!state.tag || event.tags.includes(state.tag)) &&
    (!query || haystack.includes(query)) &&
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
      <div class="event-topline">
        <span class="event-date">${event.date}</span>
        <span class="event-pill">${event.status}</span>
      </div>
      <h3>${event.title}</h3>
      <p class="event-summary">${event.summary}</p>
      <div class="event-meta">
        <span>${event.format}</span>
        <span>${event.audience}</span>
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
  calendarList.innerHTML = filteredEvents
    .slice(0, 5)
    .map(
      (event) => `
        <article class="calendar-item" data-event-id="${event.id}" tabindex="0">
          <strong>${event.date}</strong>
          <p>${event.title}</p>
          <p>${event.venue}</p>
        </article>
      `
    )
    .join("");

  calendarList.querySelectorAll(".calendar-item").forEach((item) => {
    const { eventId } = item.dataset;

    item.addEventListener("click", () => {
      state.activeId = eventId;
      render();
      openEventModal(eventId);
    });

    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        state.activeId = eventId;
        render();
        openEventModal(eventId);
      }
    });
  });
}

function renderPosterCard(eventItem) {
  const thematicIllustrationMap = {
    health: `
      <svg class="poster-illustration" viewBox="0 0 240 180" aria-hidden="true">
        <circle cx="62" cy="62" r="30" fill="rgba(46, 179, 152, 0.18)"></circle>
        <path d="M62 46V78" stroke="#165849" stroke-width="12" stroke-linecap="round"></path>
        <path d="M46 62H78" stroke="#165849" stroke-width="12" stroke-linecap="round"></path>
        <path d="M120 118C144 88 164 72 190 62" fill="none" stroke="#800036" stroke-width="12" stroke-linecap="round"></path>
        <circle cx="194" cy="60" r="16" fill="#bd536d"></circle>
      </svg>
    `,
    dance: `
      <svg class="poster-illustration" viewBox="0 0 240 180" aria-hidden="true">
        <circle cx="72" cy="46" r="18" fill="#2eb398"></circle>
        <path d="M72 68L108 96L142 82" fill="none" stroke="#165849" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M108 96L88 138" fill="none" stroke="#800036" stroke-width="12" stroke-linecap="round"></path>
        <path d="M112 94L156 136" fill="none" stroke="#bd536d" stroke-width="12" stroke-linecap="round"></path>
        <path d="M142 82L178 48" fill="none" stroke="#2eb398" stroke-width="12" stroke-linecap="round"></path>
      </svg>
    `,
    digital: `
      <svg class="poster-illustration" viewBox="0 0 240 180" aria-hidden="true">
        <rect x="52" y="38" width="84" height="104" rx="18" fill="rgba(46, 179, 152, 0.14)"></rect>
        <rect x="68" y="58" width="52" height="8" rx="4" fill="#165849"></rect>
        <rect x="68" y="76" width="40" height="8" rx="4" fill="#2eb398"></rect>
        <circle cx="94" cy="116" r="10" fill="#800036"></circle>
        <path d="M150 62H192" stroke="#800036" stroke-width="12" stroke-linecap="round"></path>
        <path d="M150 94H180" stroke="#bd536d" stroke-width="12" stroke-linecap="round"></path>
      </svg>
    `,
    family: `
      <svg class="poster-illustration" viewBox="0 0 240 180" aria-hidden="true">
        <circle cx="72" cy="60" r="18" fill="#800036"></circle>
        <circle cx="116" cy="74" r="14" fill="#2eb398"></circle>
        <path d="M58 110C58 92 70 82 88 82C106 82 118 92 118 110" fill="none" stroke="#165849" stroke-width="12" stroke-linecap="round"></path>
        <path d="M104 118C104 104 114 96 128 96C142 96 152 104 152 118" fill="none" stroke="#bd536d" stroke-width="12" stroke-linecap="round"></path>
        <path d="M152 58L170 40L188 58" fill="none" stroke="#2eb398" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    `,
    music: `
      <svg class="poster-illustration" viewBox="0 0 240 180" aria-hidden="true">
        <path d="M76 40V122" stroke="#800036" stroke-width="12" stroke-linecap="round"></path>
        <circle cx="66" cy="130" r="18" fill="#bd536d"></circle>
        <path d="M150 48V102" stroke="#165849" stroke-width="12" stroke-linecap="round"></path>
        <circle cx="140" cy="110" r="18" fill="#2eb398"></circle>
        <path d="M76 40C116 52 140 56 184 48" fill="none" stroke="#800036" stroke-width="10" stroke-linecap="round"></path>
      </svg>
    `,
    walk: `
      <svg class="poster-illustration" viewBox="0 0 240 180" aria-hidden="true">
        <path d="M42 132C72 96 102 76 140 62C164 54 182 54 198 64" fill="none" stroke="#165849" stroke-width="12" stroke-linecap="round"></path>
        <circle cx="48" cy="132" r="16" fill="#2eb398"></circle>
        <circle cx="198" cy="64" r="16" fill="#800036"></circle>
        <path d="M118 34L126 50L144 52L130 64L134 82L118 72L102 82L106 64L92 52L110 50Z" fill="rgba(189, 83, 109, 0.24)"></path>
      </svg>
    `
  };

  const illustrationMap = {
    "Лекция": `
      <svg class="poster-illustration" viewBox="0 0 240 180" aria-hidden="true">
        <circle cx="58" cy="54" r="28" fill="rgba(46, 179, 152, 0.18)"></circle>
        <rect x="104" y="34" width="90" height="62" rx="14" fill="rgba(128, 0, 54, 0.12)"></rect>
        <rect x="116" y="48" width="66" height="8" rx="4" fill="#800036"></rect>
        <rect x="116" y="64" width="52" height="8" rx="4" fill="#2eb398"></rect>
        <path d="M42 138L72 100L104 138" fill="none" stroke="#165849" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M124 128H194" stroke="#165849" stroke-width="10" stroke-linecap="round"></path>
      </svg>
    `,
    "Мастер-класс": `
      <svg class="poster-illustration" viewBox="0 0 240 180" aria-hidden="true">
        <circle cx="70" cy="72" r="34" fill="rgba(46, 179, 152, 0.16)"></circle>
        <path d="M104 116C132 88 154 78 194 58" fill="none" stroke="#800036" stroke-width="12" stroke-linecap="round"></path>
        <circle cx="196" cy="56" r="16" fill="#bd536d"></circle>
        <path d="M54 124L96 82" fill="none" stroke="#165849" stroke-width="12" stroke-linecap="round"></path>
        <path d="M44 80L64 100" fill="none" stroke="#2eb398" stroke-width="12" stroke-linecap="round"></path>
      </svg>
    `,
    "Практикум": `
      <svg class="poster-illustration" viewBox="0 0 240 180" aria-hidden="true">
        <rect x="40" y="34" width="72" height="96" rx="18" fill="rgba(46, 179, 152, 0.14)"></rect>
        <rect x="58" y="56" width="36" height="8" rx="4" fill="#165849"></rect>
        <rect x="58" y="76" width="28" height="8" rx="4" fill="#800036"></rect>
        <rect x="58" y="96" width="22" height="8" rx="4" fill="#2eb398"></rect>
        <path d="M146 56L194 104" fill="none" stroke="#bd536d" stroke-width="12" stroke-linecap="round"></path>
        <path d="M194 56L146 104" fill="none" stroke="#165849" stroke-width="12" stroke-linecap="round"></path>
      </svg>
    `,
    "Спорт": `
      <svg class="poster-illustration" viewBox="0 0 240 180" aria-hidden="true">
        <circle cx="72" cy="48" r="18" fill="#2eb398"></circle>
        <path d="M70 70L102 96L134 78" fill="none" stroke="#165849" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M102 96L88 138" fill="none" stroke="#800036" stroke-width="12" stroke-linecap="round"></path>
        <path d="M106 96L146 140" fill="none" stroke="#bd536d" stroke-width="12" stroke-linecap="round"></path>
        <circle cx="182" cy="120" r="22" fill="rgba(128, 0, 54, 0.14)"></circle>
      </svg>
    `,
    "Концерт": `
      <svg class="poster-illustration" viewBox="0 0 240 180" aria-hidden="true">
        <path d="M74 42V122" stroke="#800036" stroke-width="12" stroke-linecap="round"></path>
        <circle cx="64" cy="130" r="18" fill="#bd536d"></circle>
        <path d="M146 42V98" stroke="#165849" stroke-width="12" stroke-linecap="round"></path>
        <circle cx="136" cy="106" r="18" fill="#2eb398"></circle>
        <path d="M74 42C112 54 134 58 174 52" fill="none" stroke="#800036" stroke-width="10" stroke-linecap="round"></path>
      </svg>
    `,
    "Экскурсия": `
      <svg class="poster-illustration" viewBox="0 0 240 180" aria-hidden="true">
        <path d="M48 132C74 96 98 74 136 60C162 50 182 52 198 64" fill="none" stroke="#165849" stroke-width="12" stroke-linecap="round"></path>
        <circle cx="54" cy="132" r="16" fill="#2eb398"></circle>
        <circle cx="198" cy="64" r="16" fill="#800036"></circle>
        <path d="M120 38L132 62L158 66L138 84L144 110L120 96L96 110L102 84L82 66L108 62Z" fill="rgba(189, 83, 109, 0.22)"></path>
      </svg>
    `
  };

  const illustrationHints = [
    eventItem.title,
    eventItem.summary,
    eventItem.description,
    eventItem.format,
    ...(eventItem.tags || [])
  ]
    .join(" ")
    .toLowerCase();

  let thematicIllustrationKey = "";

  if (/(здоров|дыхани|памят|курени|спорт|самочувств)/.test(illustrationHints)) {
    thematicIllustrationKey = "health";
  } else if (/(танц|ритм|движени|бал)/.test(illustrationHints)) {
    thematicIllustrationKey = "dance";
  } else if (/(цифр|онлайн|сервис|техн|интернет|гаджет)/.test(illustrationHints)) {
    thematicIllustrationKey = "digital";
  } else if (/(семь|внук|бабушк|дет|межпоколен)/.test(illustrationHints)) {
    thematicIllustrationKey = "family";
  } else if (/(концерт|музык|песн|вокал|мелод)/.test(illustrationHints)) {
    thematicIllustrationKey = "music";
  } else if (/(прогул|экскурс|город|маршрут|истори)/.test(illustrationHints)) {
    thematicIllustrationKey = "walk";
  }

  const illustration =
    thematicIllustrationMap[thematicIllustrationKey] ||
    illustrationMap[eventItem.format] ||
    `
      <svg class="poster-illustration" viewBox="0 0 240 180" aria-hidden="true">
        <circle cx="70" cy="64" r="34" fill="rgba(46, 179, 152, 0.16)"></circle>
        <rect x="118" y="44" width="70" height="70" rx="18" fill="rgba(128, 0, 54, 0.12)"></rect>
        <path d="M86 126H186" stroke="#165849" stroke-width="12" stroke-linecap="round"></path>
      </svg>
    `;

  return `
    <article class="poster-card">
      <div class="poster-topline">
        <span class="poster-badge">Московское долголетие</span>
        <span class="poster-format">${eventItem.format}</span>
      </div>
      <div class="poster-body">
        <div class="poster-copy">
          <p class="poster-date">${eventItem.date}</p>
          <h4 class="poster-title">${eventItem.title}</h4>
          <p class="poster-venue">${eventItem.venue}</p>
          <p class="poster-audience">${eventItem.audience}</p>
        </div>
        <div class="poster-art">
          ${illustration}
        </div>
      </div>
      <div class="poster-footer">
        <span>${eventItem.district}</span>
        <span>#МосковскоеДолголетие</span>
      </div>
    </article>
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
      <span class="detail-chip">${current.format}</span>
      <span class="detail-chip">${current.audience}</span>
      <span class="detail-chip">${current.district}</span>
    </div>
    <h3>${current.title}</h3>
    <p class="detail-copy">${current.description}</p>

    <div class="detail-box detail-box-poster">
      <h4>Карточка события</h4>
      ${renderPosterCard(current)}
    </div>

    <div class="detail-columns">
      <div class="detail-box">
        <h4>Параметры события</h4>
        <ul class="detail-list">
          <li><strong>Дата:</strong> ${current.date}</li>
          <li><strong>Площадка:</strong> ${current.venue}</li>
          <li><strong>Запись:</strong> ${current.registration}</li>
          <li><strong>Статус:</strong> ${current.status}</li>
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
  const reportLink = current.reportLink || "";

  eventModalTitle.textContent = current.title;
  eventModalBody.innerHTML = `
    <div class="detail-topline">
      <span class="detail-chip">${current.format}</span>
      <span class="detail-chip">${current.audience}</span>
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
          <li><strong>Статус:</strong> ${current.status}</li>
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

        <div class="report-actions">
          <p id="reportStatus" class="form-status" aria-live="polite"></p>
          <button class="primary-button" type="submit">Сохранить отчёт</button>
        </div>
      </form>
    </section>
  `;
}

function renderCounters(filteredEvents) {
  visibleCount.textContent = String(filteredEvents.length);
  const periodLabel =
    state.period === "week"
      ? " за неделю"
      : state.period === "month"
        ? " за месяц"
        : "";
  resultState.textContent = `${filteredEvents.length} событий${periodLabel}`;
}

function render() {
  const filteredEvents = getFilteredEvents();
  populateFilters();
  renderTags();
  syncHeroFilterButtons();
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
  const audienceMap = {
    "Участники 55+": "тех, кто хочет провести время с пользой и в хорошей компании",
    "Семьи": "семьи, которым важны теплое общение и совместные впечатления",
    "Сотрудники": "сотрудников, которым важно быть в курсе событий и вовлекаться в жизнь проекта",
    "Смешанная": "всех, кому близки живое общение, участие и новые впечатления",
    "Партнеры": "партнеров, которым интересно участие в совместных городских инициативах"
  };

  return audienceMap[audience] || "всех, кому интересно это событие";
}

function getTopicPhrase(keywords, format) {
  const topicLine = joinKeywordsForSentence(keywords);

  if (!keywords.length) {
    return `встречу в формате «${format}»`;
  }

  if (keywords.length === 1) {
    return `${format.toLowerCase()} о ${topicLine}`;
  }

  return `${format.toLowerCase()}, посвящённое темам ${topicLine}`;
}

function getFormatLead(format) {
  const formatMap = {
    "Лекция": "встреча, в которой главное — смысл, ясность и живой разговор",
    "Мастер-класс": "практическое занятие, где особенно важны участие и личный опыт",
    "Практикум": "прикладная встреча с понятным результатом и спокойным темпом",
    "Спорт": "занятие, которое помогает почувствовать движение, лёгкость и внутренний ресурс",
    "Концерт": "событие с атмосферой, музыкой и общением, которое запоминается надолго",
    "Экскурсия": "маршрут, позволяющий увидеть привычные места по-новому"
  };

  return formatMap[format] || "событие, в котором сочетаются польза, атмосфера и участие";
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
  const keywordPrompt = keywords.length ? keywords.join(", ") : "community, care, inspiration";

  return `Create a minimalist vertical event poster for "Moscow Longevity". Theme: ${title}. Format: ${format}. Audience: ${audience}. Include visual cues inspired by ${keywordPrompt}. Style: warm, caring, respectful, modern civic design, clean composition, large title area, no clutter, no noise. Palette: emerald, turquoise, ruby, red and white. Typography feeling: Circe Bold / Extra Bold. Abstract or human-centered imagery, elegant shapes, soft light. Output: PNG poster, 1080x1920.`;
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
  eventFormatInput.value = eventItem.format || "";
  eventAudienceInput.value = eventItem.audience || "";
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

function toggleReportPanel() {
  const reportPanel = document.querySelector("#reportPanel");

  if (!reportPanel) {
    return;
  }

  reportPanel.hidden = !reportPanel.hidden;
}

function saveEventReport(event) {
  event.preventDefault();

  const current = getEventById(state.activeId);
  const reportFilesInput = document.querySelector("#reportFilesInput");
  const reportLinkInput = document.querySelector("#reportLinkInput");
  const reportStatus = document.querySelector("#reportStatus");

  if (!current || !reportFilesInput || !reportLinkInput || !reportStatus) {
    return;
  }

  const fileNames = Array.from(reportFilesInput.files || []).map((file) => file.name);
  const reportLinkValue = reportLinkInput.value.trim();

  current.reportFiles = fileNames.length ? fileNames : current.reportFiles || [];
  current.reportLink = reportLinkValue || current.reportLink || "";
  current.postEvent = "Фотоотчёт и итоговые материалы добавлены в карточку события.";

  if (current.reportFiles.length || current.reportLink) {
    current.status = "Завершено";
  }

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
  const format = eventFormatInput.value || "Событие";
  const audience = eventAudienceInput.value || "Смешанная";
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

  state.activeId = currentEventId;
  state.format = "all";
  state.audience = "all";
  state.district = "all";
  state.query = "";
  state.tag = "";
  searchInput.value = "";
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

formatFilter.addEventListener("change", (event) => {
  state.format = event.target.value;
  render();
});

audienceFilter.addEventListener("change", (event) => {
  state.audience = event.target.value;
  render();
});

districtFilter.addEventListener("change", (event) => {
  state.district = event.target.value;
  render();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

resetFiltersButton.addEventListener("click", () => {
  state.format = "all";
  state.audience = "all";
  state.district = "all";
  state.query = "";
  state.tag = "";
  state.period = "all";
  formatFilter.value = "all";
  audienceFilter.value = "all";
  districtFilter.value = "all";
  searchInput.value = "";
  render();
});

openSubmissionFormButton.addEventListener("click", openCreateModal);
openWeekPosterButton.addEventListener("click", () => {
  applyHeroPeriodFilter(state.period === "week" ? "all" : "week");
});
openMonthPosterButton.addEventListener("click", () => {
  applyHeroPeriodFilter(state.period === "month" ? "all" : "month");
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
  const reportButton = event.target.closest('[data-action="toggle-report"]');

  if (editButton) {
    closeEventModal();
    openEditModal(editButton.dataset.eventId);
    return;
  }

  if (reportButton) {
    toggleReportPanel();
  }
});
eventModalBody.addEventListener("submit", (event) => {
  if (event.target.id === "reportForm") {
    saveEventReport(event);
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !submissionModal.hidden) {
    closeModal();
  } else if (event.key === "Escape" && !eventModal.hidden) {
    closeEventModal();
  }
});

render();

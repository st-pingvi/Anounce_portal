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
    status: "На модерации",
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
    status: "Готово к публикации",
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
      "Служебная точка входа для инициаторов: создать карточку, запустить афишу и отправить событие на модерацию.",
    description:
      "Форма нужна сотрудникам управленческой команды, ЦМД, территориальным управляющим, менеджерам по партнерам, поставщикам и лидерам клубов. После заполнения включается контур публикации: AI-анонс, афиша, модерация и публикация в Outline.",
    tags: ["форма", "публикация", "модерация"],
    status: "Внутренний сервис",
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
const closeSubmissionFormButton = document.querySelector("#closeSubmissionForm");
const cancelSubmissionButton = document.querySelector("#cancelSubmission");
const submissionModal = document.querySelector("#submissionModal");
const submissionForm = document.querySelector("#submissionForm");
const formStatus = document.querySelector("#formStatus");
const eventGrid = document.querySelector("#eventGrid");
const detailPanel = document.querySelector("#detailPanel");
const calendarList = document.querySelector("#calendarList");
const visibleCount = document.querySelector("#visibleCount");
const resultState = document.querySelector("#resultState");
const tagCloud = document.querySelector("#tagCloud");
const eventDateInput = document.querySelector("#eventDateInput");
const eventTitleInput = document.querySelector("#eventTitleInput");
const eventVenueInput = document.querySelector("#eventVenueInput");
const eventDistrictInput = document.querySelector("#eventDistrictInput");
const eventFormatInput = document.querySelector("#eventFormatInput");
const eventAudienceInput = document.querySelector("#eventAudienceInput");
const eventDescriptionInput = document.querySelector("#eventDescriptionInput");
const eventRegistrationInput = document.querySelector("#eventRegistrationInput");
const eventAuthorInput = document.querySelector("#eventAuthorInput");

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
  activeId: events[0].id
};

function uniq(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "ru"));
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
    (!query || haystack.includes(query))
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
    });

    eventGrid.append(article);
  });
}

function renderCalendar(filteredEvents) {
  calendarList.innerHTML = filteredEvents
    .slice(0, 5)
    .map(
      (event) => `
        <article class="calendar-item">
          <strong>${event.date}</strong>
          <p>${event.title}</p>
          <p>${event.venue}</p>
        </article>
      `
    )
    .join("");
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

    <div class="detail-columns">
      <div class="detail-box">
        <h4>Карточка события</h4>
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
        </ul>
      </div>
    </div>

    <div class="detail-note">
      В реальном портале здесь будут: брендированная афиша 1080×1920, карта площадки,
      календарный embed, форма записи и итоговые материалы после события.
    </div>
  `;
}

function renderCounters(filteredEvents) {
  visibleCount.textContent = String(filteredEvents.length);
  resultState.textContent = `${filteredEvents.length} событий`;
}

function render() {
  const filteredEvents = getFilteredEvents();
  populateFilters();
  renderTags();
  renderCounters(filteredEvents);
  renderCards(filteredEvents);
  renderCalendar(filteredEvents);
  renderDetail(filteredEvents);
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

function openModal() {
  submissionModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  submissionModal.hidden = true;
  document.body.style.overflow = "";
  formStatus.textContent = "";
}

function createAnnouncementFromForm(event) {
  event.preventDefault();

  const title = eventTitleInput.value.trim();
  const dateValue = eventDateInput.value;
  const venue = eventVenueInput.value.trim();
  const district = eventDistrictInput.value.trim();
  const format = eventFormatInput.value;
  const audience = eventAudienceInput.value;
  const description = eventDescriptionInput.value.trim();
  const registration = eventRegistrationInput.value.trim() || "Ссылка будет добавлена инициатором";
  const author = eventAuthorInput.value.trim();

  if (!title || !dateValue || !venue || !district || !format || !audience || !description || !author) {
    formStatus.textContent = "Заполните обязательные поля формы.";
    return;
  }

  const isoDate = new Date(dateValue).toISOString();
  const newEvent = {
    id: `EV-${String(events.length + 1).padStart(3, "0")}`,
    title,
    date: formatHumanDate(dateValue),
    isoDate,
    venue,
    district,
    format,
    audience,
    summary: description,
    description,
    tags: [format.toLowerCase(), district.toLowerCase(), "новый анонс"],
    status: "На модерации",
    registration,
    postEvent: `Инициатор: ${author}. После события сюда добавляются фото, посещаемость и ссылка на отчет.`,
    metrics: "Ожидаемая посещаемость: будет уточнена"
  };

  events.unshift(newEvent);
  state.activeId = newEvent.id;
  state.format = "all";
  state.audience = "all";
  state.district = "all";
  state.query = "";
  state.tag = "";
  searchInput.value = "";
  submissionForm.reset();
  closeModal();
  render();
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
  formatFilter.value = "all";
  audienceFilter.value = "all";
  districtFilter.value = "all";
  searchInput.value = "";
  render();
});

openSubmissionFormButton.addEventListener("click", openModal);
closeSubmissionFormButton.addEventListener("click", closeModal);
cancelSubmissionButton.addEventListener("click", closeModal);
submissionForm.addEventListener("submit", createAnnouncementFromForm);
submissionModal.addEventListener("click", (event) => {
  if (event.target.dataset.closeModal === "true") {
    closeModal();
  }
});

render();

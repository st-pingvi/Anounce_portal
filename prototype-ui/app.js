const scenarios = [
  {
    id: "SC-001",
    title: "Городские мифы района",
    summary: "Интерактивная встреча о локальной истории района с обсуждением и мини-квизом.",
    format: ["Дискуссия", "Игра"],
    district: ["Универсальный", "СВАО"],
    audience: ["Молодежь 18-35", "Студенты"],
    duration: "60-90 минут",
    goal: "Вовлечь аудиторию в локальную историю и городскую идентичность через обсуждение и игровые механики.",
    outcome: "Участники собирают карту локальных мифов и фактов.",
    tags: ["локальная история", "квиз", "идентичность"],
    risks: [],
    status: "Пилотирован",
    version: "1.0.0",
    quality: 4.3,
    hostLevel: "Средний",
    qualityState: "success",
    plan: [
      "Разогрев и вход в тему",
      "Блок городских историй",
      "Командный квиз",
      "Сбор инсайтов о районе"
    ]
  },
  {
    id: "SC-002",
    title: "Мой первый проект для района",
    summary: "Практикум по сборке локальной инициативы от идеи до плана первого шага.",
    format: ["Практикум"],
    district: ["Городской", "Универсальный"],
    audience: ["Студенты", "Молодежь 18-35"],
    duration: "90-120 минут",
    goal: "Перевести идею или проблему района в понятный проектный черновик.",
    outcome: "3-5 проектных мини-концепций на выходе.",
    tags: ["проект", "инициатива", "фасилитация"],
    risks: [],
    status: "Пилотирован",
    version: "1.1.0",
    quality: 4.4,
    hostLevel: "Средний",
    qualityState: "success",
    plan: [
      "Вводный блок с примерами",
      "Диагностика районных задач",
      "Работа по проектному шаблону",
      "Питч и обратная связь"
    ]
  },
  {
    id: "SC-003",
    title: "Семейная карта памяти",
    summary: "Мастер-класс, где семьи собирают карту семейных и районных историй.",
    format: ["Мастер-класс"],
    district: ["ЮАО", "Универсальный"],
    audience: ["Семьи"],
    duration: "60-90 минут",
    goal: "Укрепить связь семьи с местом через совместное творческое действие.",
    outcome: "Мини-карта памяти и материал для выставки центра.",
    tags: ["семья", "память", "творчество"],
    risks: [],
    status: "Одобрен",
    version: "1.0.0",
    quality: 4.1,
    hostLevel: "Низкий",
    qualityState: "success",
    plan: [
      "Вступление и настройка атмосферы",
      "Обмен историями",
      "Сборка карты памяти",
      "Мини-выставка"
    ]
  },
  {
    id: "SC-004",
    title: "Разговор без лекции: как слушать друг друга",
    summary: "Подростковая дискуссия о навыке слышать другого и безопасно спорить.",
    format: ["Дискуссия"],
    district: ["Универсальный"],
    audience: ["Подростки 15-17"],
    duration: "30-60 минут",
    goal: "Развить у подростков базовые навыки диалога и аргументированного общения.",
    outcome: "Собран набор правил безопасного разговора.",
    tags: ["коммуникация", "подростки", "диалог"],
    risks: [],
    status: "Одобрен",
    version: "1.0.0",
    quality: 4.4,
    hostLevel: "Средний",
    qualityState: "success",
    plan: [
      "Ледокол и правила разговора",
      "Парная практика слушания",
      "Общая дискуссия по кейсам",
      "Фиксация правил"
    ]
  },
  {
    id: "SC-005",
    title: "Локальный герой: кто меняет район",
    summary: "Встреча с героем территории или кейсом локального лидерства.",
    format: ["Лекция", "Дискуссия"],
    district: ["ЦАО", "Универсальный"],
    audience: ["Взрослые 35+", "Серебряный возраст"],
    duration: "60-90 минут",
    goal: "Показать реальные практики изменений района через живую историю человека.",
    outcome: "Участники получают пример локального действия и идеи для продолжения.",
    tags: ["локальный герой", "сообщество", "район"],
    risks: ["требует аккуратной модерации чувствительных тем"],
    status: "Одобрен",
    version: "1.0.0",
    quality: 3.9,
    hostLevel: "Средний",
    qualityState: "success",
    plan: [
      "Вступление и контекст района",
      "История героя",
      "Разговор с аудиторией",
      "Сбор идей"
    ]
  },
  {
    id: "SC-006",
    title: "Маршрут добрых дел",
    summary: "Подростковая игра-квест о полезных действиях для района и соседского сообщества.",
    format: ["Игра"],
    district: ["ВАО"],
    audience: ["Подростки 11-14"],
    duration: "90-120 минут",
    goal: "Показать подросткам, что забота о районе может быть увлекательной и командной.",
    outcome: "Команды формируют набор простых добрых дел для своей территории.",
    tags: ["квест", "волонтерство", "район"],
    risks: ["нагрузка на ресурсы", "проверка вместимости", "проверка каналов набора"],
    status: "На проверке",
    version: "0.9.0",
    quality: 3.4,
    hostLevel: "Высокий",
    qualityState: "warning",
    plan: [
      "Инструктаж и деление на команды",
      "Прохождение маршрута",
      "Сбор идей добрых дел",
      "Финал"
    ]
  },
  {
    id: "SC-007",
    title: "Медиаотряд района",
    summary: "Практикум по созданию коротких медиаисторий о районе силами подростков и студентов.",
    format: ["Практикум"],
    district: ["Универсальный"],
    audience: ["Подростки 15-17", "Студенты"],
    duration: "2-3 часа",
    goal: "Научить участников замечать сильные сюжеты района и превращать их в короткий медиаформат.",
    outcome: "Группа собирает 3-5 публикационных заготовок.",
    tags: ["медиа", "сторителлинг", "молодежь"],
    risks: ["авторские права", "согласование публикации"],
    status: "Одобрен",
    version: "1.0.0",
    quality: 4.1,
    hostLevel: "Высокий",
    qualityState: "success",
    plan: [
      "Вводный блок о сторителлинге",
      "Выбор сюжетов и ролей",
      "Сбор материала",
      "Монтаж и обратная связь"
    ]
  },
  {
    id: "SC-008",
    title: "Открытый клуб соседей",
    summary: "Регулярная клубная встреча для знакомства, обмена инициативами и соседских дел.",
    format: ["Клуб"],
    district: ["СЗАО", "Универсальный"],
    audience: ["Смешанная"],
    duration: "60-90 минут",
    goal: "Сформировать мягкую точку входа в соседское сообщество и жизнь центра.",
    outcome: "Новые знакомства, идеи действий и следующий шаг клуба.",
    tags: ["соседи", "клуб", "сообщество"],
    risks: ["исключение новых участников"],
    status: "Одобрен",
    version: "1.0.0",
    quality: 4.3,
    hostLevel: "Средний",
    qualityState: "success",
    plan: [
      "Приветствие и знакомство",
      "Круг новостей и инициатив",
      "Мини-группы",
      "Сбор следующих шагов"
    ]
  },
  {
    id: "SC-009",
    title: "Цифровая грамотность без стресса",
    summary: "Спокойный мастер-класс по базовым цифровым действиям для серебряного возраста.",
    format: ["Мастер-класс"],
    district: ["ТиНАО", "Универсальный"],
    audience: ["Серебряный возраст"],
    duration: "90-120 минут",
    goal: "Снизить тревожность при использовании цифровых сервисов и отработать полезные действия.",
    outcome: "Участники выполняют 2-3 цифровых действия и получают памятку.",
    tags: ["цифровая грамотность", "сервисы", "серебряный возраст"],
    risks: ["эйджизм и стереотипы"],
    status: "Одобрен",
    version: "1.0.0",
    quality: 4.5,
    hostLevel: "Средний",
    qualityState: "success",
    plan: [
      "Сбор запросов и ожиданий",
      "Пошаговая практика",
      "Индивидуальная помощь",
      "Итоговая памятка"
    ]
  },
  {
    id: "SC-010",
    title: "Идеи для центра за 1 вечер",
    summary: "Фасилитационная сессия для сбора и приоритизации идей центра.",
    format: ["Смешанный формат"],
    district: ["Городской", "Универсальный"],
    audience: ["Молодежь 18-35", "Смешанная"],
    duration: "2-3 часа",
    goal: "Быстро собрать и структурировать идеи программ и активностей вокруг центра.",
    outcome: "Приоритизированный банк идей и 2-3 решения для ближайшего запуска.",
    tags: ["идеи", "центр", "фасилитация"],
    risks: [],
    status: "Одобрен",
    version: "1.0.0",
    quality: 4.5,
    hostLevel: "Высокий",
    qualityState: "success",
    plan: [
      "Разогрев и рамка",
      "Сбор идей по станциям",
      "Группировка и уточнение",
      "Отбор и следующие шаги"
    ]
  },
  {
    id: "SC-011",
    title: "Пасхальная мастерская",
    summary: "Сезонный сценарий дня традиций с мастер-классами, просветительским блоком и концертом.",
    format: ["Смешанный формат"],
    district: ["Городской", "Универсальный"],
    audience: ["Смешанная"],
    duration: "Целый день",
    goal: "Собрать праздничный сценарий вокруг традиций, совместного творчества и культурного обмена.",
    outcome: "Участники проходят серию блоков и получают общий праздничный опыт с мастер-классами и концертом.",
    tags: ["пасха", "традиции", "мастерская"],
    risks: [],
    status: "На проверке",
    version: "0.9.0",
    quality: 3.8,
    hostLevel: "Высокий",
    qualityState: "warning",
    plan: [
      "Сбор подарков в течение дня",
      "Кулинарный мастер-класс",
      "Два прикладных мастер-класса",
      "Просветительский блок и концерт"
    ]
  },
  {
    id: "SC-012",
    title: "Бабушка + внук",
    summary: "Интергенерационный формат для совместной активности бабушки и ребенка 3-7 лет.",
    format: ["Мастер-класс"],
    district: ["Универсальный"],
    audience: ["Семьи"],
    duration: "60-90 минут",
    goal: "Создать теплый эмоциональный обмен через совместное действие взрослого и ребенка.",
    outcome: "Пара проходит совместные задания и уносит общий результат встречи.",
    tags: ["бабушка", "внук", "нянечки"],
    risks: [],
    status: "На проверке",
    version: "0.9.0",
    quality: 4.4,
    hostLevel: "Средний",
    qualityState: "warning",
    plan: [
      "Знакомство пары",
      "Совместное творческое задание",
      "Игровой или языковой блок",
      "Финальная сборка общего результата"
    ]
  },
  {
    id: "SC-013",
    title: "Нейротренировки",
    summary: "Короткий востребованный формат для продвинутой аудитории с высокой оценкой участников.",
    format: ["Практикум"],
    district: ["Городской", "Универсальный"],
    audience: ["Серебряный возраст"],
    duration: "30-60 минут",
    goal: "Дать продвинутой аудитории практику работы с нейроинструментами без базового ликбеза.",
    outcome: "Участники пробуют нейроинструменты на продвинутом уровне и обмениваются результатами.",
    tags: ["нейросети", "продвинутые", "цифровая грамотность"],
    risks: [],
    status: "На проверке",
    version: "0.9.0",
    quality: 4.3,
    hostLevel: "Высокий",
    qualityState: "warning",
    plan: [
      "Проверка уровня группы",
      "Практика на нейроинструментах",
      "Демонстрация результатов",
      "Запись на следующий поток"
    ]
  },
  {
    id: "SC-014",
    title: "День граненого стакана: поход в музей Мухиной",
    summary: "Городской культурный сценарий с выездом в музей Мухиной и разговором о дизайне повседневности.",
    format: ["Экскурсия", "Дискуссия"],
    district: ["Городской", "Универсальный"],
    audience: ["Взрослые 35+", "Серебряный возраст"],
    duration: "2-3 часа",
    goal: "Соединить музейный опыт, городскую прогулку и разговор о культурной памяти через предметный дизайн.",
    outcome: "Участники посещают музей, узнают историю граненого стакана и собирают личные истории о знакомых предметах.",
    tags: ["граненый стакан", "музей Мухиной", "экскурсия", "городская культура"],
    risks: ["проверка маршрута", "физическая нагрузка группы"],
    status: "На проверке",
    version: "0.9.0",
    quality: 3.5,
    hostLevel: "Высокий",
    qualityState: "warning",
    plan: [
      "Сбор группы и вводный блок",
      "Дорога и контекст о Вере Мухиной",
      "Экскурсия в музее",
      "Обсуждение символики предмета и личных историй"
    ]
  }
];

const filters = {
  format: document.querySelector("#formatFilter"),
  district: document.querySelector("#districtFilter"),
  audience: document.querySelector("#audienceFilter"),
  duration: document.querySelector("#durationFilter"),
  search: document.querySelector("#searchFilter")
};

const scenarioList = document.querySelector("#scenarioList");
const detailCard = document.querySelector("#detailCard");
const resultBadge = document.querySelector("#resultBadge");
const totalScenarioCount = document.querySelector("#totalScenarioCount");
const visibleScenarioCount = document.querySelector("#visibleScenarioCount");
const activeFilters = document.querySelector("#activeFilters");
const quickTags = document.querySelector("#quickTags");
const resetButton = document.querySelector("#resetFilters");
const navButtons = [...document.querySelectorAll(".nav-link")];
const localMessage = document.querySelector("#localMessage");
const promptOutput = document.querySelector("#promptOutput");
const copyPromptButton = document.querySelector("#copyPrompt");
const regeneratePromptButton = document.querySelector("#regeneratePrompt");

const quickTagValues = [
  "район",
  "медиа",
  "семья",
  "сообщество",
  "цифровая грамотность",
  "авторские права",
  "эйджизм"
];

let activeId = scenarios[0]?.id || null;
let activeQuickTag = "";
let activeView = "catalog";

const viewTitles = {
  catalog: "Подбор сценариев",
  selection: "Умный подбор",
  pilot: "Пилотные сценарии",
  scaling: "Тиражирование по сети",
  standards: "Методические стандарты"
};

function showLocalMessage(message) {
  localMessage.hidden = false;
  localMessage.textContent = message;
}

function clearLocalMessage() {
  localMessage.hidden = true;
  localMessage.textContent = "";
}

function currentScenario() {
  return scenarios.find((scenario) => scenario.id === activeId) || null;
}

function buildPrompt() {
  const scenario = currentScenario();
  const parts = [];

  parts.push("Собери практический сценарий для сети центров по следующим параметрам.");
  parts.push(`Режим интерфейса: ${viewTitles[activeView]}.`);
  parts.push(`Формат: ${filters.format.value === "all" ? "подбери оптимально" : filters.format.value}.`);
  parts.push(`Район: ${filters.district.value === "all" ? "универсальный или городской" : filters.district.value}.`);
  parts.push(`Аудитория: ${filters.audience.value === "all" ? "подбери по контексту" : filters.audience.value}.`);
  parts.push(`Длительность: ${filters.duration.value === "all" ? "предложи подходящую" : filters.duration.value}.`);

  if (filters.search.value.trim()) {
    parts.push(`Поисковый фокус: ${filters.search.value.trim()}.`);
  }

  if (activeQuickTag) {
    parts.push(`Дополнительная тема или акцент: ${activeQuickTag}.`);
  }

  if (scenario) {
    parts.push(`Возьми за основу сценарий-референс "${scenario.title}" (${scenario.id}).`);
    parts.push(`Его цель: ${scenario.goal}.`);
    parts.push(`Ожидаемый результат: ${scenario.outcome}.`);

    if (scenario.risks?.length) {
      parts.push(`Учти риски: ${scenario.risks.join(", ")}.`);
    }

    parts.push(`Сохрани сильные стороны референса: ${scenario.plan.join(", ")}.`);
  }

  parts.push(
    "На выходе дай: 1. короткую концепцию, 2. пошаговый тайминг, 3. список ресурсов, 4. риски и предупреждения, 5. адаптацию под площадку, 6. короткий текст для анонса."
  );

  return parts.join("\n");
}

function updatePrompt() {
  promptOutput.value = buildPrompt();
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ё/g, "е")
    .trim();
}

function uniqueValues(key) {
  return [...new Set(scenarios.flatMap((scenario) => scenario[key]))].sort((a, b) =>
    a.localeCompare(b, "ru")
  );
}

function populateSelect(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function renderQuickTags() {
  quickTags.innerHTML = "";

  quickTagValues.forEach((tag) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tag-button${activeQuickTag === tag ? " active" : ""}`;
    button.textContent = tag;
    button.addEventListener("click", () => {
      activeQuickTag = activeQuickTag === tag ? "" : tag;
      renderQuickTags();
      applyFilters();
    });
    quickTags.append(button);
  });
}

function statusChipClass(status) {
  if (status === "Пилотирован" || status === "Одобрен") return "success";
  if (status === "На проверке") return "warning";
  return "";
}

function filterStateEntries() {
  const entries = [];

  if (filters.format.value !== "all") entries.push(`Формат: ${filters.format.value}`);
  if (filters.district.value !== "all") entries.push(`Район: ${filters.district.value}`);
  if (filters.audience.value !== "all") entries.push(`Аудитория: ${filters.audience.value}`);
  if (filters.duration.value !== "all") entries.push(`Длительность: ${filters.duration.value}`);
  if (filters.search.value.trim()) entries.push(`Поиск: ${filters.search.value.trim()}`);
  if (activeQuickTag) entries.push(`Тема: ${activeQuickTag}`);

  return entries;
}

function renderActiveFilters() {
  const entries = filterStateEntries();
  activeFilters.innerHTML = "";

  if (!entries.length) {
    activeFilters.innerHTML = '<span class="chip">Без активных фильтров</span>';
    return;
  }

  entries.forEach((entry) => {
    const chip = document.createElement("span");
    chip.className = "chip accent";
    chip.textContent = entry;
    activeFilters.append(chip);
  });
}

function matchesFilter(scenario) {
  const searchValue = normalize(filters.search.value);
  const quickTagValue = normalize(activeQuickTag);
  const searchable = normalize(
    [
      scenario.title,
      scenario.summary,
      scenario.goal,
      scenario.outcome,
      ...scenario.tags,
      ...(scenario.risks || [])
    ].join(" ")
  );

  const formatMatch =
    filters.format.value === "all" || scenario.format.includes(filters.format.value);
  const districtMatch =
    filters.district.value === "all" || scenario.district.includes(filters.district.value);
  const audienceMatch =
    filters.audience.value === "all" || scenario.audience.includes(filters.audience.value);
  const durationMatch =
    filters.duration.value === "all" || scenario.duration === filters.duration.value;
  const searchMatch = !searchValue || searchable.includes(searchValue);
  const quickTagMatch = !quickTagValue || searchable.includes(quickTagValue);

  const viewMatch =
    activeView === "catalog" ||
    activeView === "selection" ||
    (activeView === "pilot" && scenario.status === "Пилотирован") ||
    (activeView === "scaling" && scenario.quality >= 4.2 && scenario.status !== "На проверке");

  return (
    formatMatch &&
    districtMatch &&
    audienceMatch &&
    durationMatch &&
    searchMatch &&
    quickTagMatch &&
    viewMatch
  );
}

function renderScenarioList(items) {
  document.querySelector(".toolbar h3").textContent = viewTitles[activeView];

  scenarioList.innerHTML = "";
  resultBadge.textContent = `${items.length} результатов`;
  visibleScenarioCount.textContent = `${items.length}`;

  if (!items.length) {
    scenarioList.innerHTML = `
      <div class="empty-state">
        <h4 class="scenario-title">Совпадений не найдено</h4>
        <p>
          Попробуйте снять один из фильтров или заменить район на универсальные сценарии.
          Логика каталога поддерживает как точный подбор, так и сценарии для адаптации.
        </p>
      </div>
    `;
    renderEmptyDetail();
    return;
  }

  if (!items.some((scenario) => scenario.id === activeId)) {
    activeId = items[0].id;
  }

  items.forEach((scenario) => {
    const card = document.createElement("article");
    const statusClass = statusChipClass(scenario.status);

    card.className = `scenario-card${scenario.id === activeId ? " active" : ""}`;
    card.innerHTML = `
      <div class="scenario-card-top">
        <div class="scenario-meta">
          <span class="chip accent">${scenario.id}</span>
          <span class="chip ${statusClass}">${scenario.status}</span>
        </div>
        <span class="quality-inline">Качество ${scenario.quality}</span>
      </div>
      <h4 class="scenario-title">${scenario.title}</h4>
      <p class="scenario-summary">${scenario.summary}</p>
      <div class="scenario-meta">
        <span class="chip">${scenario.format.join(" / ")}</span>
        <span class="chip">${scenario.district.join(", ")}</span>
        <span class="chip">${scenario.duration}</span>
      </div>
      <div class="scenario-footer">
        <div class="scenario-meta">
          <span class="chip">Аудитория: ${scenario.audience.join(", ")}</span>
        </div>
        <span class="chip">v${scenario.version}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      activeId = scenario.id;
      renderScenarioList(items);
      renderDetail(scenario);
    });

    scenarioList.append(card);
  });

  renderDetail(items.find((scenario) => scenario.id === activeId));
  updatePrompt();
}

function renderEmptyDetail() {
  if (activeView === "standards") {
    detailCard.innerHTML = `
      <div class="detail-head">
        <p class="eyebrow">Стандарты</p>
        <h3 class="detail-title">Методический контур Репозитория</h3>
        <p class="detail-copy">
          В локальном прототипе этот режим показывает не сценарии, а опорные правила:
          Конституцию контента, фильтр качества, версионирование и требования MVP.
        </p>
      </div>
      <section class="detail-section">
        <h4>Ключевые блоки</h4>
        <div class="detail-tags">
          <span class="chip">Конституция контента</span>
          <span class="chip">Красные флаги</span>
          <span class="chip">Семантические версии</span>
          <span class="chip">MVP-конструктор</span>
          <span class="chip">Мобильный интерфейс</span>
        </div>
      </section>
      <section class="detail-section">
        <div class="detail-mini-card">
          <strong>Локальная логика кнопок</strong>
          Этот экран работает полностью офлайн: переключение разделов, фильтры, поиск
          и действия карточки выполняются прямо в браузере без сервера.
        </div>
      </section>
    `;
    updatePrompt();
    return;
  }

  detailCard.innerHTML = `
    <div class="detail-head">
      <p class="eyebrow">Карточка сценария</p>
      <h3 class="detail-title">Нет активного сценария</h3>
      <p class="detail-copy">
        После изменения фильтров здесь снова появится подробная карточка подходящего сценария.
      </p>
    </div>
  `;
  updatePrompt();
}

function renderDetail(scenario) {
  if (!scenario) return;

  const statusClass = statusChipClass(scenario.status);

  detailCard.innerHTML = `
    <div class="detail-head">
      <p class="eyebrow">Карточка сценария</p>
      <div class="detail-meta">
        <span class="chip accent">${scenario.id}</span>
        <span class="chip ${statusClass}">${scenario.status}</span>
        <span class="chip">Версия ${scenario.version}</span>
        <span class="chip">Качество ${scenario.quality}</span>
      </div>
      <h3 class="detail-title">${scenario.title}</h3>
      <p class="detail-copy">${scenario.summary}</p>
    </div>

    <section class="detail-section">
      <h4>Основные параметры</h4>
      <div class="detail-meta">
        <span class="chip">Формат: ${scenario.format.join(", ")}</span>
        <span class="chip">Район: ${scenario.district.join(", ")}</span>
        <span class="chip">Аудитория: ${scenario.audience.join(", ")}</span>
        <span class="chip">Длительность: ${scenario.duration}</span>
        <span class="chip">Ведущий: ${scenario.hostLevel}</span>
      </div>
    </section>

    <section class="detail-section">
      <h4>Цель и ожидаемый результат</h4>
      <p>${scenario.goal}</p>
      <p><strong>Результат:</strong> ${scenario.outcome}</p>
    </section>

    <section class="detail-section">
      <h4>Метаданные качества</h4>
      <div class="quality-grid">
        <div class="quality-item">
          <strong>${scenario.quality}</strong>
          <span>сводный балл качества</span>
        </div>
        <div class="quality-item">
          <strong>${scenario.status}</strong>
          <span>статус методической готовности</span>
        </div>
        <div class="quality-item">
          <strong>${scenario.version}</strong>
          <span>актуальная версия сценария</span>
        </div>
        <div class="quality-item">
          <strong>${scenario.hostLevel}</strong>
          <span>уровень подготовки ведущего</span>
        </div>
      </div>
    </section>

    <section class="detail-section">
      <h4>Теги и тематика</h4>
      <div class="detail-tags">
        ${scenario.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
      </div>
    </section>

    <section class="detail-section">
      <h4>Проверка по Конституции контента ЦМД</h4>
      <div class="detail-tags">
        <span class="chip">Запрос аудитории</span>
        <span class="chip">Соответствие площадке</span>
        <span class="chip">Безопасность темы</span>
        <span class="chip">Ресурсы центра</span>
        <span class="chip">Каналы привлечения</span>
      </div>
      <p>
        Для рабочего контура сценарий должен проходить чек-лист из 10 вопросов и не
        содержать красных флагов.
      </p>
      ${
        scenario.risks && scenario.risks.length
          ? `<p><strong>Зоны внимания:</strong> ${scenario.risks.join(", ")}.</p>`
          : "<p><strong>Зоны внимания:</strong> критичные риски не отмечены.</p>"
      }
    </section>

    <section class="detail-section">
      <h4>Сценарный план</h4>
      <ol class="timeline">
        ${scenario.plan.map((item) => `<li>${item}</li>`).join("")}
      </ol>
    </section>

    <div class="detail-actions">
      <button class="primary-button" type="button" data-action="materials" data-id="${scenario.id}">Открыть материалы</button>
      <button class="secondary-button" type="button" data-action="history" data-id="${scenario.id}">История версий</button>
      <button class="secondary-button" type="button" data-action="adapt" data-id="${scenario.id}">Адаптировать под площадку</button>
    </div>
  `;
}

function applyFilters() {
  if (activeView === "standards") {
    renderActiveFilters();
    resultBadge.textContent = "Режим стандартов";
    visibleScenarioCount.textContent = "0";
    scenarioList.innerHTML = `
      <div class="empty-state">
        <h4 class="scenario-title">Раздел стандартов</h4>
        <p>
          Здесь сценарии не фильтруются. Используйте этот режим как локальную витрину
          методических правил и требований к качеству контента.
        </p>
      </div>
    `;
    renderEmptyDetail();
    updatePrompt();
    return;
  }

  const filteredScenarios = scenarios.filter(matchesFilter);
  renderActiveFilters();
  renderScenarioList(filteredScenarios);
}

function setActiveView(view) {
  activeView = view;
  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });

  clearLocalMessage();

  if (view === "catalog") {
    showLocalMessage("Каталог показывает весь локальный пул сценариев.");
  } else if (view === "selection") {
    showLocalMessage("Режим подбора помогает быстро комбинировать поиск, фильтры и быстрые теги.");
  } else if (view === "pilot") {
    showLocalMessage("В этом режиме остаются только пилотированные сценарии.");
  } else if (view === "scaling") {
    showLocalMessage("Здесь видны сценарии, которые лучше подходят для тиражирования по сети.");
  } else if (view === "standards") {
    showLocalMessage("Открыт локальный методический раздел со стандартами и правилами.");
  }

  applyFilters();
}

function resetAllFilters() {
  filters.format.value = "all";
  filters.district.value = "all";
  filters.audience.value = "all";
  filters.duration.value = "all";
  filters.search.value = "";
  activeQuickTag = "";
  renderQuickTags();
}

function handleDetailAction(action, scenarioId) {
  const scenario = scenarios.find((item) => item.id === scenarioId);
  if (!scenario) return;

  if (action === "materials") {
    showLocalMessage(
      `${scenario.id}: локально доступны материалы сценария — сценарный план, список ресурсов и контрольные зоны внимания.`
    );
    updatePrompt();
    return;
  }

  if (action === "history") {
    showLocalMessage(
      `${scenario.id}: текущая версия ${scenario.version}. В реальном репозитории здесь открывается changelog и история методических изменений.`
    );
    updatePrompt();
    return;
  }

  if (action === "adapt") {
    showLocalMessage(
      `${scenario.id}: локальная адаптация соберет новый вариант под район, аудиторию и доступные ресурсы площадки.`
    );
    updatePrompt();
  }
}

populateSelect(filters.format, uniqueValues("format"));
populateSelect(filters.district, uniqueValues("district"));
populateSelect(filters.audience, uniqueValues("audience"));
populateSelect(filters.duration, uniqueValues("duration"));

Object.values(filters).forEach((input) => {
  input.addEventListener("input", applyFilters);
  input.addEventListener("change", applyFilters);
});

resetButton.addEventListener("click", () => {
  resetAllFilters();
  applyFilters();
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextView = button.dataset.view || "catalog";
    setActiveView(nextView);
  });
});

detailCard.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  handleDetailAction(button.dataset.action, button.dataset.id);
});

regeneratePromptButton.addEventListener("click", () => {
  updatePrompt();
  showLocalMessage("Prompt пересобран по текущим фильтрам, режиму и выбранному сценарию.");
});

copyPromptButton.addEventListener("click", async () => {
  updatePrompt();

  try {
    await navigator.clipboard.writeText(promptOutput.value);
    showLocalMessage("Готовый prompt скопирован в буфер обмена.");
  } catch {
    promptOutput.focus();
    promptOutput.select();
    showLocalMessage("Автокопирование недоступно. Текст prompt выделен для ручного копирования.");
  }
});

totalScenarioCount.textContent = String(scenarios.length);
visibleScenarioCount.textContent = String(scenarios.length);

renderQuickTags();
setActiveView("catalog");

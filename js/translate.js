const translateWords = {
  eng: {
    about: "About me",
    skills: "Skills | Extras",
    education: "Education",
    work: "Work experience",
    social: "My social",
    portfolio: "My portfolio",
    firstname: "Ina",
    lastname: "Kurets",
    position: "Front-end developer",
    "about-text": `I have experience building a website using Nuxt.JS, Vue,
    Vuex, Vue-router, JS, HTML, SCSS. Support for existing
    functionality or development. Work with API requests, Figma,
    Trello. Worked and interacted with more than a 10 developers
    from different teams. Building web app using Vue. Practical
    knowledge of SCRUM.`,
  },
  rus: {
    about: "Обо мне",
    skills: "Навыки",
    education: "Образование",
    work: "Работы",
    social: "Социальные сети",
    portfolio: "Портфолио",
    firstname: "Инна",
    lastname: "Курец",
    position: "Фронтенд разработчик",
    "about-text": `У меня есть опыт создания веб-сайта с использованием Nuxt.JS, Vue,
    Vuex, Vue-маршрутизатор, JS, HTML, SCSS. Поддержка существующих
    функциональность или развитие. Работа с запросами API, Figma,
    Трелло. Работал и взаимодействовал с более чем 10 разработчиками
    из разных команд. Создание веб-приложения с использованием Vue. Практичный
    знание SCRUM.`,
  },
  blr: {
    about: "Пра мяне",
    skills: "Навыкі",
    education: "Адукацыя",
    work: "Працы",
    social: "Сацыяльныя сеткі",
    portfolio: "Партфоліё",
    firstname: "Іна",
    lastname: "Курэц", 
    position: "Франтэнд распрацоўшчык",
    "about-text": `У мяне ёсць вопыт стварэння вэб-сайта з выкарыстаннем Nuxt.JS, Vue,
    Vuex, Vue-маршрутызатар, JS, HTML, SCSS. Падтрымка існуючых
    функцыянальнасць або развіццё. Праца з запытамі API, Figma,
    Трэла. Працаваў і ўзаемадзейнічаў з больш чым 10 распрацоўшчыкамі
    з розных каманд. Стварэнне вэб-прыкладанні з выкарыстаннем Vue. Практычны
    веданне SCRUM.`,
  },
};

const languageBtns = document.querySelectorAll(".settings__language-btn");

languageBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    languageBtns.forEach((btn) => btn.classList.remove("active"));
    localStorage.setItem("lng", e.target.textContent);
    translate(e.target.textContent);
    e.target.classList.add("active");
  });
});

const lngLocalStorage = localStorage.getItem("lng")
  ? localStorage.getItem("lng")
  : "eng";
translate(lngLocalStorage);

function translate(lng) {
  const translateWordsAll = document.querySelectorAll("[data-translate]");
  languageBtns.forEach((btn) => {
    if (lng == btn.textContent) {
      btn.classList.add("active");
    }
  });
  translateWordsAll.forEach(
    (el) => (el.textContent = translateWords[lng][el.dataset.translate])
  );
}

// const eng = document.getElementById("eng");
// const rus = document.getElementById("rus");
// const blr = document.getElementById("blr");

// eng.addEventListener("click", () => {
//   localStorage.setItem("lng", "eng");
//   translate("eng");
// });
// rus.addEventListener("click", () => {
//   localStorage.setItem("lng", "rus");
//   translate("rus");
// });
// blr.addEventListener("click", () => {
//   localStorage.setItem("lng", "blr");
//   translate("blr");
// });

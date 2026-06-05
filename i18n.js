// const translations = {
//   uz: {
//     title: "Diyorbek Uktamaliyev",
//     subtitle: "Astronomiya va dasturlashga qiziqaman",
//     cv: "CV yuklab olish",
//     install: "📱 Install"
//   },
//   ru: {
//     title: "Диёрбек Уктамалиев",
//     subtitle: "Интересуюсь астрономией и программированием",
//     cv: "Скачать резюме",
//     install: "📱 Установить"
//   },
//   en: {
//     title: "Diyorbek Uktamaliev",
//     subtitle: "Interested in astronomy and programming",
//     cv: "Download CV",
//     install: "📱 Install"
//   }
// };

// function setLang(lang) {
//   if (!translations[lang]) lang = "uz";

//   localStorage.setItem("lang", lang);

//   document.documentElement.lang = lang;

//   document.querySelectorAll("[data-i18n]").forEach(el => {
//     const key = el.getAttribute("data-i18n");
//     el.textContent = translations[lang][key] || key;
//   });

//   updateURL(lang);
// }

// function updateURL(lang) {
//   if (history.pushState) {
//     history.pushState(null, null, "/" + lang);
//   }
// }

// function getBrowserLang() {
//   const lang = navigator.language.slice(0, 2);
//   return ["uz", "ru", "en"].includes(lang) ? lang : "uz";
// }

// window.addEventListener("DOMContentLoaded", () => {
//   const savedLang = localStorage.getItem("lang");
//   const browserLang = getBrowserLang();

//   setLang(savedLang || browserLang);
// });

const translations = {
  uz: {
    title: "Diyorbek Uktamaliyev",
    subtitle: "Astronomiya va dasturlashga qiziqaman",

    skills: "📊 Til bilimlarim",
    uzbek: "🇺🇿 O'zbek tili",
    russian: "🇷🇺 Rus tili",
    tajik: "🇹🇯 Tojik tili",
    english: "🇬🇧 Ingliz tili",
    italian: "🇮🇹 Italyan tili",

    location: "📍 Joylashuv",
    map: "📍 Xaritada ko'rish",

    settings: "⚙️ Settings",
    theme: "Theme",

    cv: "📄 CV yuklab olish",
    email: "📧 Menga yozing",
    emailBtn: "Email yuborish",

    about: "👨‍💻 Men haqimda",
    aboutText: "Assalomu alaykum! Men Diyorbek Uktamaliyevman. Astronomiya, texnologiya va dasturlashga qiziqaman. Bo‘sh vaqtimda futbol o‘ynayman, kitob o‘qiyman va osmonni kuzataman.",

    astro: "🌌 Astronomiya",
    astroText: "Men Redmi Note 12 telefonim bilan yulduzlarni kuzataman.",

    gallery: "📸 Astronomiya Galereyasi",
    contact: "📱 Men bilan bog'lanish"
  },

  ru: {
    title: "Диёрбек Уктамалиев",
    subtitle: "Интересуюсь астрономией и программированием",

    skills: "📊 Знание языков",
    uzbek: "🇺🇿 Узбекский язык",
    russian: "🇷🇺 Русский язык",
    tajik: "🇹🇯 Таджикский язык",
    english: "🇬🇧 Английский язык",
    italian: "🇮🇹 Итальянский язык",

    location: "📍 Местоположение",
    map: "📍 Посмотреть на карте",

    settings: "⚙️ Настройки",
    theme: "Тема",

    cv: "📄 Скачать резюме",
    email: "📧 Написать мне",
    emailBtn: "Отправить email",

    about: "👨‍💻 Обо мне",
    aboutText: "Здравствуйте! Я Диёрбек Уктамалиев. Интересуюсь астрономией, технологиями и программированием. В свободное время играю в футбол, читаю книги и наблюдаю за небом.",

    astro: "🌌 Астрономия",
    astroText: "Я наблюдаю за звездами с помощью Redmi Note 12.",

    gallery: "📸 Астрономическая галерея",
    contact: "📱 Связаться со мной"
  },

  en: {
    title: "Diyorbek Uktamaliev",
    subtitle: "Interested in astronomy and programming",

    skills: "📊 Language skills",
    uzbek: "🇺🇿 Uzbek language",
    russian: "🇷🇺 Russian language",
    tajik: "🇹🇯 Tajik language",
    english: "🇬🇧 English language",
    italian: "🇮🇹 Italian language",

    location: "📍 Location",
    map: "📍 View on map",

    settings: "⚙️ Settings",
    theme: "Theme",

    cv: "📄 Download CV",
    email: "📧 Contact me",
    emailBtn: "Send email",

    about: "👨‍💻 About me",
    aboutText: "Hello! I am Diyorbek Uktamaliev. I am interested in astronomy, technology and programming. In my free time I play football, read books and observe the sky.",

    astro: "🌌 Astronomy",
    astroText: "I observe stars using Redmi Note 12.",

    gallery: "📸 Astronomy Gallery",
    contact: "📱 Contact me"
  },

  it: {
    title: "Diyorbek Uktamaliev",
    subtitle: "Interessato ad astronomia e programmazione",

    skills: "📊 Conoscenza delle lingue",
    uzbek: "🇺🇿 Lingua uzbeka",
    russian: "🇷🇺 Lingua russa",
    tajik: "🇹🇯 Lingua tagica",
    english: "🇬🇧 Lingua inglese",
    italian: "🇮🇹 Lingua italiana",

    location: "📍 Posizione",
    map: "📍 Visualizza sulla mappa",

    settings: "⚙️ Impostazioni",
    theme: "Tema",

    cv: "📄 Scarica CV",
    email: "📧 Contattami",
    emailBtn: "Invia email",

    about: "👨‍💻 Su di me",
    aboutText: "Ciao! Sono Diyorbek Uktamaliev. Sono interessato all'astronomia, alla tecnologia e alla programmazione. Nel tempo libero gioco a calcio, leggo libri e osservo il cielo.",

    astro: "🌌 Astronomia",
    astroText: "Osservo le stelle con Redmi Note 12.",

    gallery: "📸 Galleria astronomica",
    contact: "📱 Contattami"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setLang(localStorage.getItem("lang") || "uz");
});
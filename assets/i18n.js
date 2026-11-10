/* NomberObsidian — переводы интерфейса / UI translations.
   Ключи: data-i18n="key", data-i18n-attr="attr:key;attr2:key2". */
window.I18N = {
  ru: {
    "meta.title": "NOMBER — NomberObsidian · Плагины для Obsidian",
    "meta.desc": "NomberObsidian — плагины NOMBER для Obsidian. NF-Calendar скоро будет анонсирован, остальные материалы засекречены.",
    "og.desc": "Плагины для Obsidian. Хранилище отдела NomberObsidian.",
    "skip": "Перейти к плагинам", "a.top": "NomberObsidian — наверх", "a.sections": "Разделы", "a.lang": "Язык сайта",
    "nav.plugins": "Плагины", "nav.contact": "Связь",
    "donate": "Поддержать",
    "hero.kicker": "// nomberobsidian.github.io — хранилище плагинов",
    "hero.sub": "Плагины для Obsidian",
    "hero.alt": "Персонаж NOMBER: синий пушистый детектив в шляпе и костюме держит фиолетовый кристалл Obsidian",
    "plugins.t": "Плагины", "plugins.p": "Досье отдела. Часть материалов засекречена.",
    "contact.t": "Связь", "contact.tg": "написать в Telegram", "contact.mail": "нажмите, чтобы скопировать", "contact.copyaria": "Скопировать почту NomberContact@proton.me", "contact.copied": "Скопировано", "contact.copyfail": "Не удалось скопировать",
    "hub.t": "Экосистема", "hub.kicker": "хаб всех проектов", "hub.p": "Вернуться в главный штаб NOMBER",
    "card.soon": "Скоро",
    "secret.aria": "Засекреченный плагин", "secret.grif": "Гриф: СС", "secret.stamp": "СЕКРЕТНО", "secret.denied": "ДОСТУП ЗАПРЕЩЁН",
    "404.p": "Детектив обыскал всё хранилище — такой страницы нет.", "404.a": "На главную"
  },
  en: {
    "meta.title": "NOMBER — NomberObsidian · Plugins for Obsidian",
    "meta.desc": "NomberObsidian — NOMBER's plugins for Obsidian. NF-Calendar will be announced soon; other files remain classified.",
    "og.desc": "Plugins for Obsidian. The NomberObsidian vault.",
    "skip": "Skip to plugins", "a.top": "NomberObsidian — back to top", "a.sections": "Sections", "a.lang": "Site language",
    "nav.plugins": "Plugins", "nav.contact": "Contact",
    "donate": "Support",
    "hero.kicker": "// nomberobsidian.github.io — plugin vault",
    "hero.sub": "Plugins for Obsidian",
    "hero.alt": "NOMBER character: a fluffy blue detective in a hat and suit holding a purple Obsidian crystal",
    "plugins.t": "Plugins", "plugins.p": "Department files. Some materials are classified.",
    "contact.t": "Contact", "contact.tg": "message on Telegram", "contact.mail": "click to copy", "contact.copyaria": "Copy email NomberContact@proton.me", "contact.copied": "Copied", "contact.copyfail": "Couldn't copy",
    "hub.t": "Ecosystem", "hub.kicker": "hub of all projects", "hub.p": "Back to NOMBER headquarters",
    "card.soon": "Soon",
    "secret.aria": "Classified plugin", "secret.grif": "Top secret", "secret.stamp": "CLASSIFIED", "secret.denied": "ACCESS DENIED",
    "404.p": "The detective searched the whole vault — this page doesn't exist.", "404.a": "Back home"
  }
};
/* Язык: сохранённый выбор → языки браузера (ru/be/uk/kk → RU) → EN */
window.detectLang = function () {
  try { const s = localStorage.getItem("lang"); if (s === "ru" || s === "en") return s; } catch (e) {}
  const L = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"]);
  for (const l of L) { const b = String(l).toLowerCase().slice(0, 2); if (["ru", "be", "uk", "kk"].includes(b)) return "ru"; if (b === "en") return "en"; }
  return "en";
};
window.applyI18n = function (lang, root) {
  const d = window.I18N[lang] || window.I18N.en; root = root || document;
  document.documentElement.lang = lang;
  root.querySelectorAll("[data-i18n]").forEach(el => { const v = d[el.dataset.i18n]; if (v != null) el.textContent = v; });
  root.querySelectorAll("[data-i18n-attr]").forEach(el => el.dataset.i18nAttr.split(";").forEach(p => { const [a, k] = p.split(":"); if (d[k] != null) el.setAttribute(a, d[k]); }));
  if (d["meta.title"] && document.querySelector('meta[name="description"]')) {
    document.title = d["meta.title"];
    document.querySelector('meta[name="description"]').content = d["meta.desc"];
    const og = document.querySelector('meta[property="og:description"]'); if (og) og.content = d["og.desc"];
    const tw = document.querySelector('meta[name="twitter:description"]'); if (tw) tw.content = d["og.desc"];
    const ol = document.querySelector('meta[property="og:locale"]'); if (ol) ol.content = lang === "ru" ? "ru_RU" : "en_US";
  }
};
document.documentElement.lang = window.detectLang();

/* NomberObsidian — переводы интерфейса / UI translations.
   Ключи: data-i18n="key", data-i18n-attr="attr:key;attr2:key2". */
window.I18N = {
  ru: {
    "meta.title": "NOMBER — NomberObsidian · Плагины для Obsidian",
    "meta.desc": "NomberObsidian — плагины NOMBER для Obsidian. NF-Calendar уже вышел, остальные материалы засекречены.",
    "og.desc": "Плагины для Obsidian. Хранилище отдела NomberObsidian.",
    "skip": "Перейти к плагинам", "a.top": "NomberObsidian — наверх", "a.sections": "Разделы", "a.lang": "Язык сайта",
    "nav.plugins": "Плагины", "nav.contact": "Связь", "nav.blog": "Блог",
    "donate": "Поддержать",
    "hero.kicker": "// nomberobsidian.github.io — хранилище плагинов",
    "hero.sub": "Плагины для Obsidian",
    "hero.alt": "Персонаж NOMBER: синий пушистый детектив в шляпе и костюме держит фиолетовый кристалл Obsidian",
    "plugins.t": "Плагины", "plugins.p": "Досье отдела. Часть материалов засекречена.",
    "contact.t": "Связь", "contact.tg": "написать в Telegram", "contact.channel": "канал в Telegram", "contact.mail": "нажмите, чтобы скопировать", "contact.copyaria": "Скопировать почту NomberContact@proton.me", "contact.copied": "Скопировано", "contact.copyfail": "Не удалось скопировать",
    "hub.t": "Экосистема", "hub.kicker": "хаб всех проектов", "hub.p": "Вернуться в главный штаб NOMBER",
    "card.soon": "Скоро",
    "secret.aria": "Засекреченный плагин", "secret.grif": "Гриф: СС", "secret.stamp": "СЕКРЕТНО", "secret.denied": "ДОСТУП ЗАПРЕЩЁН",
        "404.p": "Детектив обыскал всё хранилище — такой страницы нет.", "404.a": "На главную",
    "blog.meta.title": "Блог — NomberObsidian · канал @NomberObsidian",
    "blog.meta.desc": "Лента Telegram-канала NomberObsidian: плагины для Obsidian, инструменты и эксперименты NOMBER.",
    "blog.og.desc": "Посты из Telegram-канала @NomberObsidian.",
    "blog.skip": "Перейти к ленте",
    "blog.kicker": "// t.me/NomberObsidian — канал плагинов",
    "blog.open": "Открыть канал",
    "blog.subscribe": "Подписаться",
    "blog.cta": "Подписывайтесь, чтобы не пропустить анонсы плагинов.",
    "blog.feed": "Лента",
    "blog.more": "Показать ещё",
    "blog.end": "Это все посты",
    "blog.empty": "Постов пока нет — подпишитесь на канал",
    "blog.error": "Не удалось загрузить ленту.",
    "blog.retry": "Попробовать снова",
    "blog.openpost": "Открыть в Telegram",
    "blog.video": "Видео",
    "blog.updated": "Обновлено",
    "blog.subs": "подписчиков",
    "blog.doc": "Файл"
  },
  en: {
    "meta.title": "NOMBER — NomberObsidian · Plugins for Obsidian",
    "meta.desc": "NomberObsidian — NOMBER's plugins for Obsidian. NF-Calendar is out; other files remain classified.",
    "og.desc": "Plugins for Obsidian. The NomberObsidian vault.",
    "skip": "Skip to plugins", "a.top": "NomberObsidian — back to top", "a.sections": "Sections", "a.lang": "Site language",
    "nav.plugins": "Plugins", "nav.contact": "Contact", "nav.blog": "Blog",
    "donate": "Support",
    "hero.kicker": "// nomberobsidian.github.io — plugin vault",
    "hero.sub": "Plugins for Obsidian",
    "hero.alt": "NOMBER character: a fluffy blue detective in a hat and suit holding a purple Obsidian crystal",
    "plugins.t": "Plugins", "plugins.p": "Department files. Some materials are classified.",
    "contact.t": "Contact", "contact.tg": "message on Telegram", "contact.channel": "Telegram channel", "contact.mail": "click to copy", "contact.copyaria": "Copy email NomberContact@proton.me", "contact.copied": "Copied", "contact.copyfail": "Couldn't copy",
    "hub.t": "Ecosystem", "hub.kicker": "hub of all projects", "hub.p": "Back to NOMBER headquarters",
    "card.soon": "Soon",
    "secret.aria": "Classified plugin", "secret.grif": "Top secret", "secret.stamp": "CLASSIFIED", "secret.denied": "ACCESS DENIED",
        "404.p": "The detective searched the whole vault — this page doesn't exist.", "404.a": "Back home",
    "blog.meta.title": "Blog — NomberObsidian · @NomberObsidian channel",
    "blog.meta.desc": "The NomberObsidian Telegram feed: Obsidian plugins, tools and experiments by NOMBER.",
    "blog.og.desc": "Posts from the @NomberObsidian Telegram channel.",
    "blog.skip": "Skip to the feed",
    "blog.kicker": "// t.me/NomberObsidian — plugins channel",
    "blog.open": "Open channel",
    "blog.subscribe": "Subscribe",
    "blog.cta": "Subscribe so you don't miss plugin announcements.",
    "blog.feed": "Feed",
    "blog.more": "Show more",
    "blog.end": "That's all the posts",
    "blog.empty": "No posts yet — subscribe to the channel",
    "blog.error": "Could not load the feed.",
    "blog.retry": "Try again",
    "blog.openpost": "Open in Telegram",
    "blog.video": "Video",
    "blog.updated": "Updated",
    "blog.subs": "subscribers",
    "blog.doc": "File"
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
  const page = document.documentElement.dataset.page || "home";
  const titleKey = page === "blog" ? "blog.meta.title" : "meta.title";
  const descKey = page === "blog" ? "blog.meta.desc" : "meta.desc";
  const ogKey = page === "blog" ? "blog.og.desc" : "og.desc";
  if (d[titleKey] && document.querySelector('meta[name="description"]')) {
    document.title = d[titleKey];
    document.querySelector('meta[name="description"]').content = d[descKey] || d["meta.desc"];
    const og = document.querySelector('meta[property="og:description"]'); if (og) og.content = d[ogKey] || d["og.desc"];
    const ot = document.querySelector('meta[property="og:title"]'); if (ot) ot.content = d[titleKey];
    const tw = document.querySelector('meta[name="twitter:description"]'); if (tw) tw.content = d[ogKey] || d["og.desc"];
    const tt = document.querySelector('meta[name="twitter:title"]'); if (tt) tt.content = d[titleKey];
    const ol = document.querySelector('meta[property="og:locale"]'); if (ol) ol.content = lang === "ru" ? "ru_RU" : "en_US";
  }
};
document.documentElement.lang = window.detectLang();

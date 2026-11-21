/* ============================================================
   NomberObsidian — данные сайта / site data.
   Текстовые поля — объекты { ru: "...", en: "..." } (или строка).
   Плагины: id, title, tagline, description, status, image, accent, links[{label,url,icon}]
   redacted:true — полностью засекреченная карточка.
   Игры: id, title, tagline, description, status, image, accent, desktopOnly, links
   Платформа: platform — отдельный герой на /games (не входит в games).
   ============================================================ */
window.NOMBER_OBSIDIAN = {
  plugins: [
    {
      id: "nf-calendar",
      title: "NF-Calendar",
      tagline: { ru: "Календарь для Obsidian", en: "Calendar for Obsidian" },
      description: {
        ru: "Продвинутая автоматизация по датам для Obsidian: шаблоны по правилам, повторяющиеся события, свои праздники, перенос задач и встроенная аналитика продуктивности.",
        en: "Advanced date-based automation for Obsidian: rule-based templates, recurring events, custom holidays, task carryover and built-in productivity analytics."
      },
      status: { ru: "Релиз v1.1.0", en: "Released v1.1.0" },
      image: "assets/nf-calendar.svg",
      accent: "#a77bff",
      links: [
        { label: "Obsidian", url: "https://community.obsidian.md/plugins/nf-calendar", icon: "obs" },
        { label: "GitHub", url: "https://github.com/NOMBER/NF-Calendar", icon: "gh" }
      ]
    },
    {
      id: "obsigama",
      title: "ObsiGama",
      tagline: { ru: "Игровой хаб для Obsidian", en: "Game hub for Obsidian" },
      description: {
        ru: "Каталог игр, профиль игрока с друзьями, достижениями, значками и таблицами лидеров — и синхронизация результатов из подключённых игровых плагинов. Нужен онлайн-аккаунт.",
        en: "Browse a game catalog, keep a player profile with friends, achievements, badges and leaderboards, and sync results from game plugins that opt in. Requires an online account."
      },
      status: { ru: "Релиз v1.0.4", en: "Released v1.0.4" },
      image: "assets/obsigama-logo.webp",
      accent: "#a77bff",
      links: [
        { label: "Obsidian", url: "https://community.obsidian.md/plugins/obsigama", icon: "obs" },
        { label: "GitHub", url: "https://github.com/NOMBER/ObsiGama", icon: "gh" }
      ]
    },
    { id: "x3", redacted: true },
    { id: "x4", redacted: true }
  ],
  platform: {
    id: "obsigama",
    title: "ObsiGama",
    badge: { ru: "Платформа", en: "Platform" },
    listedAs: { ru: "В каталоге Obsidian — GAMA Hub", en: "Listed in the Obsidian directory as GAMA Hub" },
    tagline: { ru: "Социальный игровой хаб внутри Obsidian", en: "Social gaming hub inside Obsidian" },
    description: {
      ru: "Каталог игр, профиль игрока с друзьями, достижениями, значками и таблицами лидеров — и синхронизация результатов из подключённых игровых плагинов. Нужен онлайн-аккаунт.",
      en: "Browse a game catalog, keep a player profile with friends, achievements, badges and leaderboards, and sync results from game plugins that opt in. Requires an online account."
    },
    status: { ru: "Релиз v1.0.4", en: "Released v1.0.4" },
    image: "assets/obsigama.webp",
    imageW: 1600,
    imageH: 900,
    accent: "#a77bff",
    features: [
      { ru: "Каталог", en: "Catalog" },
      { ru: "Библиотека", en: "Library" },
      { ru: "Достижения", en: "Achievements" },
      { ru: "Таблицы лидеров", en: "Leaderboards" },
      { ru: "Друзья", en: "Friends" },
      { ru: "SDK для игр", en: "SDK for game plugins" }
    ],
    note: {
      ru: "Mini Old Games и HELLVAULT уже умеют подключаться к ObsiGama.",
      en: "Mini Old Games and HELLVAULT can already connect to ObsiGama."
    },
    links: [
      { label: "Obsidian", url: "https://community.obsidian.md/plugins/obsigama", icon: "obs" },
      { label: "GitHub", url: "https://github.com/NOMBER/ObsiGama", icon: "gh" }
    ]
  },
  games: [
    {
      id: "mini-old-games",
      title: "Mini Old Games",
      tagline: { ru: "12 классических мини-игр", en: "12 classic mini-games" },
      description: {
        ru: "Заново откройте радость классических игр: 12 вневременных мини-игр прямо в хранилище Obsidian — змейка, Tetris, Flappy Bird, Space Invaders, Whack-a-Mole, 2048 и другие.",
        en: "Rediscover the joy of classic gaming with 12 timeless mini-games, right inside your Obsidian vault: Snake, Tetris, Flappy Bird, Space Invaders, Whack-a-Mole, 2048, and more."
      },
      status: { ru: "Вышла v1.1.0", en: "Out now v1.1.0" },
      image: "assets/mini-old-games.webp",
      imageW: 1200,
      imageH: 900,
      accent: "#ff8a1f",
      links: [
        { label: "Obsidian", url: "https://community.obsidian.md/plugins/good-old-games", icon: "obs" },
        { label: "GitHub", url: "https://github.com/NOMBER/Mini-Old-Games", icon: "gh" }
      ]
    },
    {
      id: "hellvault",
      title: "HELLVAULT",
      tagline: { ru: "Doom-подобный шутер", en: "Doom-like FPS" },
      description: {
        ru: "Doom-подобный шутер прямо внутри Obsidian: исследуйте хранилище, охваченное порчей, собирайте осколки и переживайте бесконечные волны.",
        en: "Doom-like FPS inside Obsidian: explore a corrupted vault, collect shards, and survive endless waves."
      },
      status: { ru: "Вышла v1.1.1", en: "Out now v1.1.1" },
      image: "assets/hellvault.webp",
      imageW: 1200,
      imageH: 901,
      accent: "#c084ff",
      desktopOnly: true,
      links: [
        { label: "Obsidian", url: "https://community.obsidian.md/plugins/vault-shards", icon: "obs" },
        { label: "GitHub", url: "https://github.com/NOMBER/HELLVAULT", icon: "gh" }
      ]
    }
  ]
};

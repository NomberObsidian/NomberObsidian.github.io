/* ============================================================
   NomberObsidian — данные сайта / site data.
   Текстовые поля — объекты { ru: "...", en: "..." } (или строка).
   Плагины: id, title, tagline, description, status, image, accent, links[{label,url,icon}]
   redacted:true — полностью засекреченная карточка.
   Игры: id, title, tagline, description, status, image, accent, desktopOnly, links
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
    { id: "x2", redacted: true },
    { id: "x3", redacted: true },
    { id: "x4", redacted: true }
  ],
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

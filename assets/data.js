/* ============================================================
   NomberObsidian — данные сайта / site data.
   Текстовые поля — объекты { ru: "...", en: "..." } (или строка).
   Плагины: id, title, tagline, description, status, image, accent, links[{label,url,icon}]
   redacted:true — полностью засекреченная карточка.
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
  ]
};

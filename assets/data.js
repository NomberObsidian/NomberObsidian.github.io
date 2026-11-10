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
        ru: "Календарный плагин для Obsidian. Анонс — совсем скоро.",
        en: "A calendar plugin for Obsidian. The announcement is coming soon."
      },
      status: { ru: "Скоро анонс", en: "Coming soon" },
      image: "assets/nf-calendar.svg",
      accent: "#a77bff",
      links: []
    },
    { id: "x2", redacted: true },
    { id: "x3", redacted: true },
    { id: "x4", redacted: true }
  ]
};

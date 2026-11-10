# NomberObsidian.github.io

Хранилище плагинов NOMBER для Obsidian — https://nomberobsidian.github.io/

Статический сайт без сборки (HTML/CSS/JS), готов для GitHub Pages.
Дизайн-язык общий с [NomberProjects](https://nomberprojects.github.io/).

## Структура
- `index.html` — разметка
- `assets/style.css` — стили
- `assets/main.js` — эффекты (частицы, параллакс, 3D-наклон карточек) и рендер карточек
- `assets/data.js` — **плагины здесь**: массив `plugins`
- `assets/i18n.js` — переводы интерфейса RU/EN и автоопределение языка
- `404.html`, `.nojekyll`

## Как добавить плагин
Откройте `assets/data.js` и добавьте объект в `plugins` (лучше сразу после NF-Calendar, вместо одной из карточек `redacted: true`):

```js
{
  id: "my-plugin",
  title: "My Plugin",
  tagline: { ru: "Кратко", en: "Short" },
  description: { ru: "Подробно", en: "Details" },
  status: { ru: "Доступен", en: "Available" },
  image: "assets/my-plugin.svg",
  accent: "#a77bff",
  url: "https://...",
  links: [{ label: "GitHub", url: "https://github.com/...", icon: "gh" }]
}
```

Иконки ссылок: `tg`, `web`, `gh`. Карточка с `redacted: true` рендерится как засекреченное досье.

## Локально
`python3 -m http.server 8000` → http://localhost:8000

## Языки (RU / EN)
Как на NomberProjects: сначала `localStorage.lang`, затем языки браузера (`ru`, `be`, `uk`, `kk` → русский). Переключатель RU | EN в шапке запоминает выбор.

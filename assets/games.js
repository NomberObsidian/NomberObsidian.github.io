(() => {
  "use strict";
  const D = window.NOMBER_OBSIDIAN || {};
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(pointer: fine)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ICONS = {
    gh: '<path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/>',
    obs: '<path d="M12 1.5 4.5 7.2l1.6 9.6L12 22.5l5.9-5.7 1.6-9.6zm0 3.1 4.6 3.5-1 6.1L12 18.6l-3.6-4.4-1-6.1z"/>'
  };
  const icon = k => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k] || ICONS.obs}</svg>`;
  const ext = u => /^https?:/.test(u) ? ' target="_blank" rel="noopener"' : "";
  const asset = src => {
    if (!src) return src;
    if (/^(https?:|data:|\/)/i.test(src)) return src;
    return "../" + src;
  };

  let lang = window.detectLang ? window.detectLang() : "ru";
  const tr = v => (v && typeof v === "object") ? (v[lang] ?? v.ru ?? v.en ?? "") : (v ?? "");
  const T = k => (window.I18N?.[lang] || {})[k] ?? k;
  const links = arr => (arr || []).map(l => `<a class="btn" href="${esc(l.url)}"${ext(l.url)}>${icon(l.icon)}${esc(tr(l.label))}</a>`).join("");

  const coverAlt = id => T("games.cover." + (id === "hellvault" ? "hellvault" : id === "obsigama" ? "obsigama" : "mini"));

  const card = g => {
    const title = tr(g.title);
    const href = g.links?.[0]?.url;
    const w = g.imageW || 1200, h = g.imageH || 900;
    const img = g.image
      ? `<img src="${esc(asset(g.image))}" alt="${esc(coverAlt(g.id))}" width="${w}" height="${h}" loading="lazy">`
      : "";
    const cover = href
      ? `<a class="game-cover" href="${esc(href)}"${ext(href)} aria-label="${esc(title)}">${img}</a>`
      : `<div class="game-cover">${img}</div>`;
    const desk = g.desktopOnly ? `<span class="game-note">${esc(T("games.desktop"))}</span>` : "";
    return `<article class="game-card reveal" id="${esc(g.id)}" style="--acc:${esc(g.accent || "#a77bff")}">
      <div class="game-card-in">
        ${cover}
        <div class="game-body">
          <div class="game-title-row"><h2>${esc(title)}</h2><span class="status">${esc(tr(g.status))}</span></div>
          <p class="tag">${esc(tr(g.tagline))}${desk ? " · " + desk : ""}</p>
          <p class="game-desc">${esc(tr(g.description))}</p>
          <div class="links">${links(g.links)}</div>
        </div>
      </div>
    </article>`;
  };


  const platformCard = p => {
    if (!p) return "";
    const title = tr(p.title);
    const href = p.links?.[0]?.url;
    const w = p.imageW || 1600, h = p.imageH || 900;
    const img = p.image
      ? `<img src="${esc(asset(p.image))}" alt="${esc(coverAlt(p.id))}" width="${w}" height="${h}">`
      : "";
    const cover = href
      ? `<a class="platform-cover" href="${esc(href)}"${ext(href)} aria-label="${esc(title)}">${img}</a>`
      : `<div class="platform-cover">${img}</div>`;
    const chips = (p.features || []).map(f => `<li>${esc(tr(f))}</li>`).join("");
    const listed = p.listedAs ? `<p class="platform-aka">${esc(tr(p.listedAs))}</p>` : "";
    const note = p.note ? `<p class="platform-note">${esc(tr(p.note))}</p>` : "";
    return `<article class="platform-card reveal" id="${esc(p.id)}" style="--acc:${esc(p.accent || "#a77bff")}">
      <div class="platform-card-in">
        ${cover}
        <div class="platform-body">
          <div class="platform-meta"><span class="platform-badge">${esc(tr(p.badge))}</span><span class="status">${esc(tr(p.status))}</span></div>
          <h2>${esc(title)}</h2>
          ${listed}
          <p class="platform-tagline">${esc(tr(p.tagline))}</p>
          <p class="platform-desc">${esc(tr(p.description))}</p>
          ${chips ? `<ul class="platform-chips">${chips}</ul>` : ""}
          ${note}
          <div class="links">${links(p.links)}</div>
        </div>
      </div>
    </article>`;
  };

  const render = () => {
    const slot = $("#platform-slot");
    if (slot) slot.innerHTML = platformCard(D.platform);
    const list = $("#game-list");
    if (list) list.innerHTML = (D.games || []).map(card).join("");
    window.applyI18n && window.applyI18n(lang);
    document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  };
  render();
  document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => {
    lang = b.dataset.lang; try { localStorage.setItem("lang", lang); } catch (e) {}
    render();
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
  }));

  const year = $("#y");
  if (year) year.textContent = new Date().getFullYear();

  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => reduce ? el.classList.add("in") : io.observe(el));

  const nav = $("#nav");
  addEventListener("scroll", () => nav && nav.classList.toggle("scrolled", scrollY > 30), { passive: true });
  if (nav) nav.classList.toggle("scrolled", scrollY > 30);

  const copyText = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) {}
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;left:-9999px;top:0";
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return !!ok;
    } catch (e) { return false; }
  };
  const toast = document.createElement("div");
  toast.className = "copy-toast";
  toast.setAttribute("role", "status");
  document.body.appendChild(toast);
  let tt;
  document.addEventListener("click", async (e) => {
    const a = e.target.closest("[data-copy]"); if (!a) return;
    e.preventDefault();
    const v = a.dataset.copy;
    const ok = await copyText(v);
    toast.textContent = ok ? T("contact.copied") : T("contact.copyfail");
    toast.classList.add("show");
    clearTimeout(tt); tt = setTimeout(() => toast.classList.remove("show"), 1800);
  });

  if (reduce) return;

  const glow = $(".cursor-glow"), par = [...document.querySelectorAll("[data-depth]")];
  let tx = 0, ty = 0, cx = 0, cy = 0, gx = innerWidth / 2, gy = innerHeight / 2;
  if (fine) addEventListener("pointermove", (e) => {
    tx = e.clientX / innerWidth - .5; ty = e.clientY / innerHeight - .5; gx = e.clientX; gy = e.clientY;
  }, { passive: true });

  const cv = $("#fx"); if (!cv) return;
  const ctx = cv.getContext("2d");
  let W, H, dpr, parts = [];
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr;
    const n = Math.round(Math.min(80, innerWidth / 16));
    parts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: (Math.random() * 1.6 + .4) * dpr, v: (Math.random() * .25 + .05) * dpr,
      a: Math.random() * .6 + .15,
      h: Math.random() < .55 ? "167,123,255" : (Math.random() < .5 ? "201,166,255" : "220,225,255"),
      p: Math.random() * 6
    }));
  };
  resize(); addEventListener("resize", resize);
  const tick = (t) => {
    cx += (tx - cx) * .06; cy += (ty - cy) * .06;
    par.forEach((el) => {
      const d = +el.dataset.depth;
      el.style.transform = `translate3d(${cx * d}px,${cy * d}px,0)${el.classList.contains("bg-city") ? " scale(1.08)" : ""}`;
    });
    if (glow) glow.style.transform = `translate(${gx - 260}px,${gy - 260}px)`;
    ctx.clearRect(0, 0, W, H);
    for (const p of parts) {
      p.y -= p.v; p.x += Math.sin(t / 2000 + p.p) * .2 * dpr;
      if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
      ctx.fillStyle = `rgba(${p.h},${p.a * (.6 + .4 * Math.sin(t / 700 + p.p))})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill();
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
})();

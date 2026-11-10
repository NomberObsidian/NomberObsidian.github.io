(() => {
  "use strict";
  const D = window.NOMBER_OBSIDIAN || {};
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(pointer: fine)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ICONS = {
    tg: '<path d="M21.9 4.3 18.6 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.2-8.3c.4-.4-.1-.6-.6-.2L6 13.6l-4.9-1.5c-1.1-.3-1.1-1 .2-1.6L20.5 3c.9-.3 1.7.2 1.4 1.3z"/>',
    web: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-3a15 15 0 0 0-1.3-3.9A8 8 0 0 1 18.9 8zM12 4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.8 1.9-4zM4.3 14a8 8 0 0 1 0-4h3.4a16 16 0 0 0 0 4zm.8 2h3a15 15 0 0 0 1.3 3.9A8 8 0 0 1 5.1 16zm3-8h-3a8 8 0 0 1 4.3-3.9A15 15 0 0 0 8.1 8zM12 20c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.8-1.9 4zm2.3-6H9.7a14 14 0 0 1 0-4h4.6a14 14 0 0 1 0 4zm.3 5.9c.6-1.2 1-2.5 1.3-3.9h3a8 8 0 0 1-4.3 3.9zm1.7-5.9a16 16 0 0 0 0-4h3.4a8 8 0 0 1 0 4z"/>',
    gh: '<path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/>'
  };
  const icon = k => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k] || ICONS.web}</svg>`;
  const ext = u => /^https?:/.test(u) ? ' target="_blank" rel="noopener"' : "";

  let lang = window.detectLang ? window.detectLang() : "ru";
  const tr = v => (v && typeof v === "object") ? (v[lang] ?? v.ru ?? v.en ?? "") : (v ?? "");
  const T = k => (window.I18N?.[lang] || {})[k] ?? k;
  const links = arr => (arr || []).map(l => `<a class="btn" href="${esc(l.url)}"${ext(l.url)}>${icon(l.icon)}${esc(tr(l.label))}</a>`).join("");

  const card = (p, cls = "") => {
    const title = tr(p.title);
    const href = p.url || p.links?.[0]?.url;
    const img = p.image
      ? (href
          ? `<a class="logo" href="${esc(href)}"${ext(href)} aria-label="${esc(title)}"><img src="${esc(p.image)}" alt="" width="58" height="58"></a>`
          : `<span class="logo"><img src="${esc(p.image)}" alt="" width="58" height="58"></span>`)
      : "";
    const soon = (p.links && p.links.length) ? `<div class="links">${links(p.links)}</div>` : "";
    const status = p.status ? `<span class="status">${esc(tr(p.status))}</span>` : "";
    return `<article class="card reveal ${cls}" style="--acc:${esc(p.accent || "#a77bff")}" tabindex="-1">
      <div class="card-in">
        <div class="card-top">${img}<div class="card-head"><div class="card-title-row"><h3>${esc(title)}</h3>${status}</div><p class="tag">${esc(tr(p.tagline))}</p></div></div>
        <div class="more"><div><p>${esc(tr(p.description))}</p></div></div>
        ${soon}
      </div></article>`;
  };

  const secretCard = () => `<article class="card secret full reveal" tabindex="0" aria-label="${esc(T("secret.aria"))}">
    <div class="card-in"><div class="card-title-row"><h3>████████</h3><span class="status">${esc(T("secret.grif"))}</span></div>
    <span class="redact" style="width:92%"></span><span class="redact" style="width:74%"></span><span class="redact" style="width:40%"></span>
    <span class="stamp">${esc(T("secret.stamp"))}</span><div class="denied">${esc(T("secret.denied"))}</div></div></article>`;

  const render = () => {
    const list = $("#plugin-list");
    if (list) {
      list.innerHTML = (D.plugins || []).map(p => p.redacted ? secretCard() : card(p, "featured")).join("");
    }
    window.applyI18n && window.applyI18n(lang);
    document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  };
  render();
  document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => {
    lang = b.dataset.lang; try { localStorage.setItem("lang", lang); } catch (e) {}
    render(); bindTilt();
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
  }));

  const year = $("#y");
  if (year) year.textContent = new Date().getFullYear();

  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => reduce ? el.classList.add("in") : io.observe(el));

  const nav = $("#nav"), navLinks = [...document.querySelectorAll(".nav nav a")];
  const secs = navLinks.map(a => $(a.getAttribute("href")));
  const onScroll = () => {
    if (nav) nav.classList.toggle("scrolled", scrollY > 30);
    let cur = 0; secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .45) cur = i; });
    navLinks.forEach((a, i) => a.classList.toggle("on", i === cur));
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  document.addEventListener("click", e => { const c = e.target.closest(".card"); if (c && !e.target.closest("a")) c.classList.toggle("open"); });


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
    } catch (e) {
      return false;
    }
  };
  let toastTimer;
  const showToast = (msg) => {
    const el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  };
  document.querySelectorAll(".copy-mail").forEach(a => {
    a.addEventListener("click", async ev => {
      ev.preventDefault();
      const text = a.dataset.copy || "NomberContact@proton.me";
      const ok = await copyText(text);
      const label = a.querySelector("small");
      if (ok) {
        showToast(T("contact.copied"));
        if (label) {
          const prev = label.textContent;
          label.textContent = T("contact.copied");
          a.classList.add("copied");
          setTimeout(() => {
            a.classList.remove("copied");
            if (label.textContent === T("contact.copied")) label.textContent = T("contact.mail");
          }, 2200);
        }
      } else {
        showToast(T("contact.copyfail") + " · " + text);
        try { window.prompt(T("contact.copyfail"), text); } catch (e) {}
      }
    });
  });

  if (reduce) return;

  function bindTilt() {
    if (reduce || !fine) return;
    document.querySelectorAll(".card").forEach(c => {
      c.addEventListener("pointermove", e => {
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.transform = `perspective(900px) rotateX(${(.5 - y) * 10}deg) rotateY(${(x - .5) * 12}deg) translateZ(0)`;
        c.style.setProperty("--mx", x * 100 + "%"); c.style.setProperty("--my", y * 100 + "%");
      });
      c.addEventListener("pointerleave", () => { c.style.transform = ""; });
    });
  }
  bindTilt();

  const glow = $(".cursor-glow"), par = [...document.querySelectorAll("[data-depth]")];
  let tx = 0, ty = 0, cx = 0, cy = 0, gx = innerWidth / 2, gy = innerHeight / 2;
  if (fine) addEventListener("pointermove", e => { tx = e.clientX / innerWidth - .5; ty = e.clientY / innerHeight - .5; gx = e.clientX; gy = e.clientY; }, { passive: true });

  const cv = $("#fx"), ctx = cv && cv.getContext("2d");
  if (!ctx) return;
  let W, H, dpr, parts = [];
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2); W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr;
    const n = Math.round(Math.min(90, innerWidth / 16));
    parts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: (Math.random() * 1.6 + .4) * dpr, v: (Math.random() * .25 + .05) * dpr,
      a: Math.random() * .6 + .15,
      h: Math.random() < .55 ? "167,123,255" : (Math.random() < .5 ? "201,166,255" : "220,225,255"),
      p: Math.random() * 6
    }));
  };
  resize(); addEventListener("resize", resize);

  const tick = t => {
    cx += (tx - cx) * .06; cy += (ty - cy) * .06;
    par.forEach(el => { const d = +el.dataset.depth; el.style.transform = `translate3d(${cx * d}px,${cy * d}px,0)${el.classList.contains("bg-city") ? " scale(1.08)" : ""}`; });
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

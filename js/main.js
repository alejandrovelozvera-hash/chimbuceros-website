const i18n = {
  es: {
    nav: ['La Película','Premios','Trailer','Galería','Equipo','Contacto'],
    heroEyebrow: 'Cortometraje Documental · 2026',
    heroSubtitle: 'Time to live',
    heroTrailer: 'Ver Trailer',
    heroSinopsis: 'Conoce la historia →',
    heroScroll: 'Scroll',
    patrocinadores: 'Gracias al apoyo de',
    sinopsisLabel: 'La Historia',
    sinopsisTitle: 'Sobre la <em>Película</em>',
    sinopsisP1: 'A través de su vida cotidiana, sus voces y sus instrumentos que se resisten al silencio, <strong>CHIMBUCEROS</strong> captura cómo la tradición lucha contra la desaparición y cómo perdura la memoria colectiva, incluso cuando ya solo quedan dos para recordarla.',
    sinopsisP2: 'Una mirada íntima hacia la resistencia cultural, filmada en una enriquecedora atmósfera sonora y visual nativa.',
    sinopsisCta: 'Solicitar proyección →',
    statDuracion: 'Duración',
    statAnio: 'Año',
    statGenero: 'Género',
    statLang: 'Quechua · Subt. EN / ES',
    premiosLabel: 'Trayectoria Festivalera',
    premiosTitle: 'Premios & <em>Selecciones</em>',
    premioGanador: 'Ganador',
    premioSeleccion: 'Selección Oficial',
    premioBeca: 'Beca Kunturñawi Lab',
    crewLabel: 'Ficha Técnica',
    crewTitle: 'El <em>Equipo</em> detrás',
    trailerEyebrow: 'Cortometraje Documental · 2026',
    trailerLabel: 'Reproducir Trailer',
    trailerDuration: '28 segundos',
    galeriaLabel: 'Detrás de Cámaras',
    galeriaTitle: 'Fotos de <em>Producción</em>',
    contactoLabel: 'Contacto Directo',
    contactoTitle: 'Póngase en <em>Contacto</em>',
    footerCopy: '© 2026 Chimbuceros — Todos los derechos reservados',
  },
  en: {
    nav: ['The Film','Awards','Trailer','Gallery','Team','Contact'],
    heroEyebrow: 'Documentary Short Film · 2026',
    heroSubtitle: 'Time to live',
    heroTrailer: 'Watch Trailer',
    heroSinopsis: 'Know the story →',
    heroScroll: 'Scroll',
    patrocinadores: 'With the support of',
    sinopsisLabel: 'The Story',
    sinopsisTitle: 'About the <em>Film</em>',
    sinopsisP1: 'Through their daily life, their voices and their instruments that resist silence, <strong>CHIMBUCEROS</strong> captures how tradition fights against disappearance and how collective memory endures, even when only two remain to remember it.',
    sinopsisP2: 'An intimate look at cultural resistance, filmed in an enriching native sound and visual atmosphere.',
    sinopsisCta: 'Request a screening →',
    statDuracion: 'Duration',
    statAnio: 'Year',
    statGenero: 'Genre',
    statLang: 'Quechua · Subs. EN / ES',
    premiosLabel: 'Festival Journey',
    premiosTitle: 'Awards & <em>Selections</em>',
    premioGanador: 'Winner',
    premioSeleccion: 'Official Selection',
    premioBeca: 'Kunturñawi Lab Grant',
    crewLabel: 'Credits',
    crewTitle: 'The <em>Team</em> behind',
    trailerEyebrow: 'Documentary Short Film · 2026',
    trailerLabel: 'Play Trailer',
    trailerDuration: '28 seconds',
    galeriaLabel: 'Behind the Scenes',
    galeriaTitle: 'Production <em>Photos</em>',
    contactoLabel: 'Direct Contact',
    contactoTitle: 'Get in <em>Touch</em>',
    footerCopy: '© 2026 Chimbuceros — All rights reserved',
  },
};

const floatUI = document.getElementById('floatUI');
const backToTop = document.getElementById('backToTop');
const langToggle = document.getElementById('langToggle');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  backToTop.style.opacity = (window.scrollY > 400) ? 1 : 0;
  backToTop.style.pointerEvents = (window.scrollY > 400) ? 'auto' : 'none';
  floatUI.classList.add('ready');
}, { passive: true });

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

function toggleMenu() {
  const links = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  links.classList.toggle('open');
  ham.classList.toggle('open');
  document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
}

document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => {
    const links = document.getElementById('navLinks');
    const ham = document.getElementById('hamburger');
    links.classList.remove('open');
    ham.classList.remove('open');
    document.body.style.overflow = '';
  });
});

document.querySelectorAll('.premio-titulo').forEach((el) => {
  if (!el.getAttribute('data-base')) el.setAttribute('data-base', el.textContent.trim());
});

let lang = localStorage.getItem('chimbuceros-lang') || 'es';
applyLang(lang);

langToggle.addEventListener('click', (e) => {
  const seg = e.target.closest('.nav-lang-seg');
  if (!seg) return;
  const target = seg.getAttribute('data-lang');
  if (target === lang) return;
  lang = target;
  localStorage.setItem('chimbuceros-lang', lang);
  applyLang(lang);
});

function applyLang(l) {
  const t = i18n[l];

  document.querySelectorAll('#navLinks li a').forEach((a, i) => {
    if (t.nav[i]) a.textContent = t.nav[i];
  });

  document.querySelector('.hero-eyebrow-text').textContent = t.heroEyebrow;
  document.querySelector('.hero-subtitle').textContent = t.heroSubtitle;
  document.querySelector('.btn-primary span').textContent = t.heroTrailer;
  document.querySelector('#hero a.hero-scroll').textContent = t.heroScroll;
  document.querySelector('.patrocinadores-label').textContent = t.patrocinadores;
  document.querySelector('.sinopsis-text .section-label').textContent = t.sinopsisLabel;
  document.querySelector('.sinopsis-text .section-title').innerHTML = t.sinopsisTitle;
  const sinP = document.querySelectorAll('.sinopsis-text p');
  sinP[0].innerHTML = t.sinopsisP1;
  sinP[1].innerHTML = t.sinopsisP2;
  document.querySelector('.sinopsis-text .btn-ghost').textContent = t.sinopsisCta;
  const stats = document.querySelectorAll('.stat-label');
  stats[0].textContent = t.statDuracion;
  stats[1].textContent = t.statAnio;
  stats[2].textContent = t.statGenero;
  stats[3].textContent = t.statLang;
  document.querySelector('#premios .section-label').textContent = t.premiosLabel;
  document.querySelector('#premios .section-title').innerHTML = t.premiosTitle;
  document.querySelector('#crew .section-label').textContent = t.crewLabel;
  document.querySelector('#crew .section-title').innerHTML = t.crewTitle;
  document.querySelector('.trailer-eyebrow-text').textContent = t.trailerEyebrow;
  document.querySelector('.trailer-label').textContent = t.trailerLabel;
  document.querySelector('.trailer-duration').textContent = t.trailerDuration;
  document.querySelector('#galeria .section-label').textContent = t.galeriaLabel;
  document.querySelector('#galeria .section-title').innerHTML = t.galeriaTitle;
  document.querySelector('#contacto .section-label').textContent = t.contactoLabel;
  document.querySelector('#contacto .section-title').innerHTML = t.contactoTitle;
  document.querySelector('.footer-copy').textContent = t.footerCopy;

  const premioTitles = document.querySelectorAll('.premio-titulo');
  premioTitles.forEach((el) => {
    const base = el.getAttribute('data-base');
    if (base === 'Ganador') el.textContent = t.premioGanador;
    if (base === 'Selección Oficial') el.textContent = t.premioSeleccion;
    if (base === 'Beca Kunturñawi Lab') el.textContent = t.premioBeca;
  });

  document.querySelectorAll('.nav-lang-seg').forEach((s) => {
    s.classList.toggle('active', s.getAttribute('data-lang') === l);
  });
  langToggle.setAttribute('aria-label', l === 'es' ? 'Cambiar idioma' : 'Change language');
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.premios-grid .premio-card, .crew-grid .crew-card, .galeria-grid .galeria-item').forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 0.08 + 's';
});

function loadTrailer() {
  const wrap = document.getElementById('trailerWrap');
  wrap.style.cursor = 'default';
  wrap.onclick = null;
  wrap.innerHTML = `<iframe src="https://www.youtube.com/embed/PlttSPH3AxY?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
}
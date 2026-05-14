/* ═══════════════════════════════════════════════════════════
   PAMELA CHOVAN ECHEVERRÍA — BITÁCORA · main.js
   ═══════════════════════════════════════════════════════════ */

/* ─── NAV SCROLL ─── */
(function () {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  function update() {
    nav.classList.toggle('nav-scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ─── MOBILE NAV TOGGLE ─── */
(function () {
  const btn = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* ─── REVEAL ON SCROLL ─── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

/* ─── FICHA TÉCNICA TOGGLE ─── */
(function () {
  document.querySelectorAll('.ficha-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      if (!body || !body.classList.contains('ficha-body')) return;
      const open = body.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });
})();

/* ─── WAVEFORM GENERATOR ─── */
(function () {
  const heights = [12,20,35,28,48,60,52,44,34,56,70,60,48,38,58,72,62,50,40,68,80,65,52,42,66,58,44,32,55,68,58,46,36,54,65,55,45,35,52,62,48,38,58,70,60,48,38,28,45,56,44,34,22,40,52,42,30,20];
  document.querySelectorAll('.waveform, .reel-hero__wv').forEach(wv => {
    heights.forEach(h => {
      const bar = document.createElement('div');
      bar.className = 'wv';
      bar.style.height = h + 'px';
      wv.appendChild(bar);
    });
  });
})();

/* ─── CONTACT FORM VALIDATION ─── */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  function validateField(group, input) {
    const val = input.value.trim();
    let ok = true;
    if (input.required && !val) ok = false;
    if (input.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) ok = false;
    group.classList.toggle('form-g--err', !ok);
    return ok;
  }

  form.querySelectorAll('.form-inp, .form-ta').forEach(inp => {
    inp.addEventListener('blur', () => {
      const g = inp.closest('.form-g');
      if (g) validateField(g, inp);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(inp => {
      const g = inp.closest('.form-g');
      if (g && !validateField(g, inp)) valid = false;
    });
    if (!valid) return;
    const success = document.getElementById('form-success');
    form.style.display = 'none';
    if (success) success.style.display = 'block';
  });
})();

/* ─── SMOOTH ANCHOR (offset for fixed nav) ─── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 72,
        behavior: 'smooth'
      });
    });
  });
})();

// ===== Theme: respect saved choice, then system preference =====
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);

  function syncIcon() {
    const icon = document.querySelector('.theme-toggle__icon');
    if (icon) icon.textContent = root.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  }

  document.addEventListener('DOMContentLoaded', function () {
    syncIcon();
    const toggle = document.getElementById('themeToggle');
    toggle && toggle.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      syncIcon();
    });

    // Year in footer
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    // Nav shadow on scroll
    const nav = document.getElementById('nav');
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Little hello for the curious folks who open devtools 👀
    try {
      console.log(
        '%c👋 Hey, you opened the console!',
        'font-size:15px;font-weight:700;color:#ef4f2b'
      );
      console.log(
        '%cIf you like poking under the hood, we should talk. — Thanh\n→ lamchithanh1997@gmail.com',
        'font-size:12px;color:#0d9488'
      );
    } catch (e) {}

    // Reveal-on-scroll for sections
    const reveals = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window && reveals.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add('is-visible'));
    }
  });
})();

// Ribbon dismiss
const ribbon = document.getElementById('ribbon');
const ribbonX = document.getElementById('ribbonX');
if (ribbonX) {
  ribbonX.addEventListener('click', () => ribbon.classList.add('is-hidden'));
}

// Sticky header shadow
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  }, { passive: true });
}

// Mobile burger
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });
}

// Menu tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    panels.forEach(p => p.classList.remove('is-active'));

    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    const target = document.getElementById(tab.getAttribute('aria-controls'));
    if (target) target.classList.add('is-active');
  });
});

// Footer year
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

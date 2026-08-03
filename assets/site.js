(() => {
  'use strict';

  const toggle = document.querySelector('[data-nav-toggle]');
  if (!toggle) return;

  const controlledId = toggle.getAttribute('aria-controls');
  if (!controlledId) return;

  const navigation = document.getElementById(controlledId);
  if (!navigation) return;

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  });

  toggle.removeAttribute('hidden');
  document.documentElement.classList.add('nav-ready');
})();

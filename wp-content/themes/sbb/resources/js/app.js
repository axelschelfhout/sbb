import.meta.glob([
  '../images/**',
  '../fonts/**',
]);

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.navigation-toggle');
  const menu = document.querySelector('.nav-primary');

  if (toggleButton && menu) {
    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('is-open');
      const isExpanded = menu.classList.contains('is-open');
      toggleButton.setAttribute('aria-expanded', isExpanded);
    });
  }
});

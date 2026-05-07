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

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('li.menu-item.menu-item-has-children');

  if (dropdowns) {
    dropdowns.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();

            const dropdownMenu = link.querySelector('ul.sub-menu');

            if (dropdownMenu) {
              dropdownMenu.classList.toggle('is-open');

              const isExpanded = menu.classList.contains('is-open');
              toggleButton.setAttribute('aria-expanded', isExpanded);
            }
        });
    });
  }
});

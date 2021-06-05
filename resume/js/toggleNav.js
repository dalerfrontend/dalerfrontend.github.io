bars.addEventListener('click', () => {
  nav.classList.remove('header-nav--closed');
  nav.classList.add('header-nav--opened');
});

closeNav.addEventListener('click', () => {
  nav.classList.remove('header-nav--opened');
  nav.classList.add('header-nav--closed');
});

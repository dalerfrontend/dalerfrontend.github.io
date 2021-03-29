toggle_icon.onclick = (e) => {
  nav.classList.remove('nav_anim-close');
  nav.classList.add('nav_anim-open');
};

close_icon.onclick = (e) => {
  nav.classList.remove('nav_anim-open');
  nav.classList.add('nav_anim-close');
};

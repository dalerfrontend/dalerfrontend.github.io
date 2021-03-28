// headerNavToggle
let currentClass = '';

function setClass() {
  headerNavToggle.className = 'header__nav-toggle ' + currentClass;
}

navToggleTimes.onclick = () => {
  currentClass = 'anim-nav-close';
  setClass();
};

bars.onclick = () => {
  currentClass = 'anim-nav-open';
  setClass();
};

popupClose.onclick = (e) => {
  popup.classList.replace('anim-down', 'anim-up');
};

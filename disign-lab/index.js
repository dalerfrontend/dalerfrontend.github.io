const menuIcon = document.getElementById('menu-icon')
const sideNav = document.getElementById('side-nav')
const closeIcon = document.getElementById('close-icon')

menuIcon.addEventListener('click', () => {
  sideNav.classList.remove('sidenav__anim-close')
  sideNav.classList.add('sidenav__anim-open')
})

closeIcon.addEventListener('click', () => {
  sideNav.classList.remove('sidenav__anim-open')
  sideNav.classList.add('sidenav__anim-close')
})

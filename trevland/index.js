$(() => {

  const $burgerBtn = $('.header__burger-btn')
  const $burgerMenu = $('.header__burger-menu')
  const $closeBurgerMenuBtn = $('.header__burger-menu-close-btn')
  const $body = $('body')

  $burgerBtn.click(function (e) {
    $burgerMenu.addClass('header__burger-menu--opened')
    $body.addClass('lock')
  })

  $closeBurgerMenuBtn.click(function (e) {
    $burgerMenu.removeClass('header__burger-menu--opened')
    $body.removeClass('lock')
  })
  
})

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    }
  }

})


swiper_close.onclick = () => {
  swiper.classList.remove('swiper_anim-open');
  swiper.classList.add('swiper_anim-close');
};

bars_icon.onclick = () => {
  swiper.classList.remove('swiper_anim-close');
  swiper.classList.add('swiper_anim-open');
};

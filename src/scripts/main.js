import 'swiper/css/bundle';
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,

  navigation: {
    nextEl: '.button[data-button="next"]',
    prevEl: '.button[data-button="prev"]',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

console.log(swiper);

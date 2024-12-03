import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperHpHero() {
  const swiperVideoContainers = document.querySelectorAll('.swiper.is-hp-hero');

  swiperVideoContainers.forEach((container) => {
    new Swiper(container, {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 32,
      effect: 'fade',
      mousewheel: {
        forceToAxis: true,
      },
      autoplay: {
        delay: 30000,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      speed: 2000,
      navigation: {
        nextEl: '.hp_hero_navigation-right',
        prevEl: '.hp_hero_navigation-left',
      },
      pagination: {
        el: '.hp_hero_pagination-wrapper',
        dynamicBullets: false,
        clickable: true,
      },
    });
  });
}

export function swiperHpCellar() {
  const swiperTestimonialsContainers = document.querySelectorAll('.swiper.is-hp-cellar');

  swiperTestimonialsContainers.forEach((container) => {
    new Swiper(container, {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 32,
      mousewheel: {
        forceToAxis: true,
      },
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      speed: 2000,
    });
  });
}

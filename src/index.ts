import './index.css';

import { initNavbarScroll } from '$utils/ic/component/navbar';
import {
  boucleHpNews,
  parallaxHpHero,
  parallaxHpNews,
  parallaxHpNewsletter,
} from '$utils/ic/home/gsap';
import { swiperHpCellar, swiperHpHero } from '$utils/ic/home/swiper';
import { loadModelViewerScript, resetGlbCoin } from '$utils/script/modalviewer';

window.Webflow ||= [];
window.Webflow.push(() => {
  initNavbarScroll();
  swiperHpHero();
  swiperHpCellar();
  loadModelViewerScript();
  resetGlbCoin();

  /* animation */
  parallaxHpHero();
  parallaxHpNewsletter();
  boucleHpNews();
  parallaxHpNews();
});

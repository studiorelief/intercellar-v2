import './index.css';

import { initNavbarScroll } from '$utils/ic/component/navbar';
import { swiperConceptRadial } from '$utils/ic/concept/concept-slider';
import { darkMode } from '$utils/ic/global/darkmode';
import {
  boucleHpNews,
  parallaxHpHero,
  parallaxHpNews,
  parallaxHpNewsletter,
} from '$utils/ic/home/gsap';
import { swiperHpCellar, swiperHpHero } from '$utils/ic/home/swiper';
import { loadScript } from '$utils/script/attributes';
import { loadModelViewerScript, resetGlbCoin } from '$utils/script/modalviewer';

window.Webflow ||= [];
window.Webflow.push(() => {
  /* global */
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'),
  ]);
  darkMode(
    // variables
    `
      text-color--text-primary,
      background-color--background-primary,
      background-color--background-secondary,
      background-color--background-tertiary,
      background-color--background-alternate,
      border-color--border-primary-0-1
      `.replace(/\s+/g, ''),
    // durée
    0.2,
    // ease
    'power1.inOut'
  );

  /* function */
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

  if (window.location.href.includes('/concept') && window.innerWidth > 990) {
    swiperConceptRadial();
  }
});

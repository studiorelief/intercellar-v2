import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function parallaxHpNewsletter() {
  const mockup = document.querySelector('.hp_newsletter_mockup');
  const section = document.querySelector('.section_hp_newsletter');

  if (!mockup || !section) return;

  gsap.fromTo(
    mockup,
    {
      y: '-2.5rem',
    },
    {
      y: '5rem',
      ease: 'none',
      scrollTrigger: {
        markers: false,
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    }
  );
}

export function boucleHpNews() {
  const mockup = document.querySelector('.hp_newsletter_mockup-y-move');

  if (!mockup) return;

  gsap.to(mockup, {
    y: '2rem',
    duration: 2,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1,
  });
}

export function parallaxHpHero() {
  const videoHero1 = document.querySelector('#video-hero-1');
  const videoHero2 = document.querySelector('#video-hero-2');
  const videoHero3 = document.querySelector('#video-hero-3');
  const section = document.querySelector('.section_hp_hero');

  if (!videoHero1 || !videoHero2 || !videoHero3 || !section) return;

  const elements = [videoHero1, videoHero2, videoHero3];

  elements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: '0rem',
      },
      {
        y: '25vh',
        ease: 'none',
        scrollTrigger: {
          markers: false,
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      }
    );
  });
}

export function parallaxHpNews() {
  const videoNewsletter = document.querySelector('#video-newsletter-1');
  const section = document.querySelector('.section_hp_newsletter');

  if (!videoNewsletter || !section) return;
  gsap.fromTo(
    videoNewsletter,
    {
      y: '-12.5vh',
    },
    {
      y: '25vh',
      ease: 'none',
      scrollTrigger: {
        markers: false,
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    }
  );
}

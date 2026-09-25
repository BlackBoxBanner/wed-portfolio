import type gsap from 'gsap';
import {
  isDesktopPin,
  parallaxLayers,
} from '@/components/motion/timelines/shared';

/**
 * Cinematic intro: pinned scrub on desktop — watermark, copy, and portrait
 * move at different rates. Content stays fully visible (CSS is-in).
 */
export function createIntroTimeline(gsapApi: typeof gsap, root: HTMLElement) {
  const section = root.querySelector<HTMLElement>('#introduction');
  if (!section) return;

  const watermark = section.querySelector<HTMLElement>(
    '[data-motion="name-watermark"]',
  );
  const copy = section.querySelector<HTMLElement>('[data-motion="intro-copy"]');
  const portraitWrap = section.querySelector<HTMLElement>(
    '[data-motion="intro-portrait-wrap"]',
  );
  const portrait = section.querySelector<HTMLElement>(
    '[data-motion="intro-portrait"]',
  );
  const lineEls = gsapApi.utils.toArray<HTMLElement>(
    section.querySelectorAll('[data-motion="intro-line"]'),
  );
  const metaEls = gsapApi.utils.toArray<HTMLElement>(
    section.querySelectorAll('[data-motion="intro-meta"]'),
  );
  const stats = gsapApi.utils.toArray<HTMLElement>(
    section.querySelectorAll('[data-motion="intro-stat"]'),
  );

  // Enter: CSS class stagger
  const hero = [...lineEls, ...metaEls, ...(portrait ? [portrait] : [])];
  hero.forEach((el, i) => {
    window.setTimeout(() => el.classList.add('is-in'), 60 + i * 65);
  });

  const pin = isDesktopPin();

  const tl = gsapApi.timeline({
    scrollTrigger: {
      trigger: section,
      start: pin ? 'top top+=56' : 'top bottom',
      end: pin ? '+=140%' : 'bottom top',
      scrub: 0.65,
      pin,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  if (watermark) {
    tl.fromTo(
      watermark,
      { yPercent: 15, xPercent: -10, scale: 1.18 },
      { yPercent: -110, xPercent: 16, scale: 0.88, ease: 'none' },
      0,
    );
  }

  if (copy) {
    tl.fromTo(copy, { y: 0 }, { y: pin ? -200 : -100, ease: 'none' }, 0);
  }

  if (portraitWrap) {
    tl.fromTo(
      portraitWrap,
      { y: 80, rotate: -3.5 },
      { y: pin ? -280 : -140, rotate: 3.5, ease: 'none' },
      0,
    );
  }

  if (portrait) {
    tl.fromTo(portrait, { scale: 1.16 }, { scale: 1, ease: 'none' }, 0);
  }

  if (stats.length) {
    parallaxLayers(gsapApi, stats, section, [70, 95, 80, 110]);
  }
}

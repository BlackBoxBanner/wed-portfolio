import type gsap from 'gsap';
import { isDesktopPin } from '@/components/motion/timelines/shared';

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
      { yPercent: 8, xPercent: -4, scale: 1.08 },
      { yPercent: -42, xPercent: 6, scale: 0.92, ease: 'none' },
      0,
    );
  }

  if (copy) {
    tl.fromTo(
      copy,
      { y: 0 },
      { y: pin ? -80 : -40, ease: 'none' },
      0,
    );
  }

  if (portraitWrap) {
    tl.fromTo(
      portraitWrap,
      { y: 40, rotate: -1.5 },
      { y: pin ? -120 : -60, rotate: 1.5, ease: 'none' },
      0,
    );
  }

  if (portrait) {
    tl.fromTo(
      portrait,
      { scale: 1.08 },
      { scale: 1, ease: 'none' },
      0,
    );
  }
}

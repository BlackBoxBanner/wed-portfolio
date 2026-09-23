import type gsap from 'gsap';
import { ScrollTrigger } from '@/lib/motion/gsap-register';

/** Strong scrubbed depth on oversized section marks (transform only). */
export function parallaxMark(
  gsapApi: typeof gsap,
  section: HTMLElement,
  range: { from?: number; to?: number; x?: number } = {},
) {
  const mark = section.querySelector<HTMLElement>(
    '[data-motion="section-mark-text"]',
  );
  if (!mark) return;

  const from = range.from ?? 35;
  const to = range.to ?? -55;
  const x = range.x ?? 0;

  gsapApi.fromTo(
    mark,
    { yPercent: from, xPercent: x ? -x : 0, scale: 1.05 },
    {
      yPercent: to,
      xPercent: x,
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.6,
      },
    },
  );
}

/** Toggle CSS `.is-in` — never writes opacity inline. */
export function revealOnce(
  elements: HTMLElement[],
  opts?: { start?: string; stagger?: number },
) {
  if (!elements.length) return;

  const start = opts?.start ?? 'top 88%';
  const staggerMs = (opts?.stagger ?? 0) * 1000;

  const show = (el: HTMLElement, delay = 0) => {
    window.setTimeout(() => el.classList.add('is-in'), delay);
  };

  if (staggerMs > 0 && elements.length > 1) {
    ScrollTrigger.create({
      trigger: elements[0],
      start,
      once: true,
      onEnter: () => elements.forEach((el, i) => show(el, i * staggerMs)),
      onRefresh(self) {
        if (self.scroll() >= self.start) {
          elements.forEach((el) => el.classList.add('is-in'));
        }
      },
    });
    return;
  }

  elements.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: () => show(el),
      onRefresh(self) {
        if (self.scroll() >= self.start) el.classList.add('is-in');
      },
    });
  });
}

/** Layered Y parallax on a list of elements (numbers, asides, etc.). */
export function parallaxLayers(
  gsapApi: typeof gsap,
  elements: HTMLElement[],
  section: HTMLElement,
  speeds: number[],
) {
  elements.forEach((el, i) => {
    const speed = speeds[i % speeds.length] ?? 40;
    gsapApi.fromTo(
      el,
      { y: speed },
      {
        y: -speed,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      },
    );
  });
}

export function revealResetVisible(root: HTMLElement) {
  root
    .querySelectorAll<HTMLElement>(
      '.motion-reveal, .motion-reveal-hero, [data-motion="experience-row"], [data-motion="project-item"], [data-motion="cascade-item"], [data-motion="intro-line"], [data-motion="intro-meta"], [data-motion="intro-portrait"]',
    )
    .forEach((el) => {
      el.classList.add('is-in');
      el.style.opacity = '';
      el.style.visibility = '';
      el.style.transform = '';
    });
}

export function isDesktopPin() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(min-width: 1024px)').matches
  );
}

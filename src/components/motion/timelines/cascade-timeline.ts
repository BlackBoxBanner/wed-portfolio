import type gsap from 'gsap';
import { parallaxMark, revealOnce } from '@/components/motion/timelines/shared';

const SECTIONS = ['#skills', '#blog', '#contact'] as const;

export function createCascadeTimeline(gsapApi: typeof gsap, root: HTMLElement) {
  SECTIONS.forEach((id, sectionIndex) => {
    const section = root.querySelector<HTMLElement>(id);
    if (!section) return;

    parallaxMark(gsapApi, section, {
      from: 80,
      to: -135,
      x: sectionIndex % 2 === 0 ? 16 : -16,
    });

    const items = gsapApi.utils.toArray<HTMLElement>(
      section.querySelectorAll('[data-motion="cascade-item"]'),
    );
    revealOnce(items, {
      start: 'top 90%',
      stagger: 0.09,
    });

    // Opposing drift on cascade cards while section is in view
    items.forEach((item, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      gsapApi.fromTo(
        item,
        { y: 65 * dir },
        {
          y: -65 * dir,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        },
      );
    });
  });
}

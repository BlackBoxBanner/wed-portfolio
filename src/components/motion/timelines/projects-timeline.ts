import type gsap from 'gsap';
import { parallaxMark, revealOnce } from '@/components/motion/timelines/shared';

/**
 * Smooth projects motion — no pin, no competing transforms on articles.
 * Soft section-mark parallax + staggered CSS enter reveals.
 */
export function createProjectsTimeline(
  gsapApi: typeof gsap,
  root: HTMLElement,
) {
  const section = root.querySelector<HTMLElement>('#projects');
  if (!section) return;

  const items = gsapApi.utils.toArray<HTMLElement>(
    section.querySelectorAll('[data-motion="project-item"]'),
  );
  const nums = gsapApi.utils.toArray<HTMLElement>(
    section.querySelectorAll('[data-motion="project-num"]'),
  );

  // Wipe leftover pin/scrub transforms from earlier buggy builds / HMR
  gsapApi.set([...items, ...nums], {
    clearProps: 'transform,translate,scale,x,y,rotation',
  });

  parallaxMark(gsapApi, section, { from: 18, to: -32, x: -2 });

  if (!items.length) return;

  revealOnce(items, { start: 'top 88%', stagger: 0.12 });
}

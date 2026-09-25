import type gsap from 'gsap';
import {
  parallaxMark,
  parallaxLayers,
  revealOnce,
} from '@/components/motion/timelines/shared';

/**
 * Smooth projects motion — no pin, no competing transforms on articles.
 * Strong section-mark parallax + project-num layers + staggered CSS enter reveals.
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

  parallaxMark(gsapApi, section, { from: 50, to: -90, x: -6 });

  if (nums.length) {
    parallaxLayers(gsapApi, nums, section, [55, 75, 65, 90]);
  }

  if (!items.length) return;

  revealOnce(items, { start: 'top 88%', stagger: 0.12 });
}

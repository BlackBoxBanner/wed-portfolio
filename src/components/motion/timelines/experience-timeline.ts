import type gsap from 'gsap';
import {
  parallaxMark,
  parallaxLayers,
  revealOnce,
} from '@/components/motion/timelines/shared';

export function createExperienceTimeline(
  gsapApi: typeof gsap,
  root: HTMLElement,
) {
  const section = root.querySelector<HTMLElement>('#experience');
  if (!section) return;

  parallaxMark(gsapApi, section, { from: 100, to: -180, x: 20 });

  const rows = gsapApi.utils.toArray<HTMLElement>(
    section.querySelectorAll('[data-motion="experience-row"]'),
  );
  revealOnce(rows, { start: 'top 90%' });

  const dates = gsapApi.utils.toArray<HTMLElement>(
    section.querySelectorAll('[data-motion="experience-date"]'),
  );
  parallaxLayers(gsapApi, dates, section, [70, 105, 90, 125]);
}

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

  parallaxMark(gsapApi, section, { from: 40, to: -70, x: 8 });

  const rows = gsapApi.utils.toArray<HTMLElement>(
    section.querySelectorAll('[data-motion="experience-row"]'),
  );
  revealOnce(rows, { start: 'top 90%' });

  const dates = gsapApi.utils.toArray<HTMLElement>(
    section.querySelectorAll('[data-motion="experience-date"]'),
  );
  parallaxLayers(gsapApi, dates, section, [28, 42, 36, 50]);
}

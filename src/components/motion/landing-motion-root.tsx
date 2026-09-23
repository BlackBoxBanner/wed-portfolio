'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { AmbientDepthLayer } from '@/components/motion/ambient-depth-layer';
import { createIntroTimeline } from '@/components/motion/timelines/intro-timeline';
import { createExperienceTimeline } from '@/components/motion/timelines/experience-timeline';
import { createProjectsTimeline } from '@/components/motion/timelines/projects-timeline';
import { createCascadeTimeline } from '@/components/motion/timelines/cascade-timeline';
import { registerGsap, ScrollTrigger } from '@/lib/motion/gsap-register';
import { prefersReducedMotion } from '@/lib/motion/prefers-reduced-motion';
import { revealResetVisible } from '@/components/motion/timelines/shared';

export function LandingMotionRoot({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = rootRef.current;
    if (!root) return;

    const gsap = registerGsap();
    let ctx: ReturnType<typeof gsap.context> | undefined;

    const build = () => {
      ctx?.revert();
      revealResetVisible(root);

      ctx = gsap.context(() => {
        // Depth orbs + cinematic planes — strong scrub travel
        gsap.utils
          .toArray<HTMLElement>('[data-motion="orb"], [data-motion="plane"]')
          .forEach((el) => {
            const speed = Number(el.dataset.speed ?? 0.15);
            gsap.fromTo(
              el,
              { y: 120 * speed * 8 },
              {
                y: -ScrollTrigger.maxScroll(window) * speed * 0.85,
                ease: 'none',
                scrollTrigger: {
                  trigger: document.documentElement,
                  start: 'top top',
                  end: 'bottom bottom',
                  scrub: 0.4,
                },
              },
            );
          });

        createIntroTimeline(gsap, root);
        createExperienceTimeline(gsap, root);
        createProjectsTimeline(gsap, root);
        createCascadeTimeline(gsap, root);
      }, root);

      ScrollTrigger.refresh();
    };

    build();

    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => build();
    mq.addEventListener('change', onChange);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    void document.fonts?.ready?.then(refresh);
    window.addEventListener('load', refresh);

    return () => {
      mq.removeEventListener('change', onChange);
      window.removeEventListener('load', refresh);
      revealResetVisible(root);
      ctx?.revert();
    };
  }, []);

  return (
    <main ref={rootRef} className='relative pt-14' data-cinematic='root'>
      <AmbientDepthLayer />
      <div className='relative z-10 max-w-[1100px] mx-auto px-6 sm:px-10'>
        {children}
      </div>
    </main>
  );
}

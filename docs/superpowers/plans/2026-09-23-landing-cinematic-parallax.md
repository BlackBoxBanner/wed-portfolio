# Landing Cinematic Parallax Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use
> superpowers:subagent-driven-development (recommended) or
> superpowers:executing-plans to implement this plan task-by-task. Steps use
> checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add high-drama GSAP ScrollTrigger cinematic parallax to the landing
page (`/`) while preserving the existing folio UI.

**Architecture:** A client `LandingMotionRoot` wraps the landing sections, gates
on `prefers-reduced-motion`, mounts an `AmbientDepthLayer` (folio-blue orbs),
and builds per-section ScrollTrigger timelines (pinned Intro + Projects on
`lg+`; cascade elsewhere). Existing section components stay; they gain
`data-motion` hooks and optional `SectionMark` slots only.

**Tech Stack:** Next.js 16 App Router, React 19, GSAP 3.15 + ScrollTrigger,
Tailwind 4 folio tokens.

**Spec:**
[`docs/superpowers/specs/2026-09-23-landing-cinematic-parallax-design.md`](../specs/2026-09-23-landing-cinematic-parallax-design.md)

## Global Constraints

- Scope: public landing route `/` only — do not add motion to blog or CV.
- Engine: existing `gsap` dependency only — do not add Lenis or framer-motion.
- Depth: giant faded section marks + soft folio-blue orbs (no rainbow spores, no
  new imagery).
- Choreography: Full cinema — pin Intro + Projects on desktop (`lg+`); disable
  pins below `lg`.
- Visual: reuse folio tokens; no purple/glow drift; no hero overlays/cards.
- Accessibility: `prefers-reduced-motion: reduce` → static final layout, no
  pins/parallax/scrub.
- Hash nav: `#experience`, `#projects`, `#skills`, `#blog`, `#contact` must
  still land under the fixed 56px header.
- No new test framework — verify with `npm run type-check`, `npm run lint`, and
  manual browser checks.
- Commit only when the user explicitly asks (do not auto-commit mid-plan unless
  requested).

---

## File map

| Path                                                            | Role                                     |
| --------------------------------------------------------------- | ---------------------------------------- |
| Create `src/lib/motion/prefers-reduced-motion.ts`               | SSR-safe reduced-motion helper           |
| Create `src/lib/motion/gsap-register.ts`                        | Register ScrollTrigger once              |
| Create `src/components/motion/section-mark.tsx`                 | Oversized faded section mark             |
| Create `src/components/motion/ambient-depth-layer.tsx`          | Fixed soft orbs + scrub parallax         |
| Create `src/components/motion/timelines/intro-timeline.ts`      | Intro pin/scrub                          |
| Create `src/components/motion/timelines/experience-timeline.ts` | Experience mark + row reveals            |
| Create `src/components/motion/timelines/projects-timeline.ts`   | Projects pin/scrub beats                 |
| Create `src/components/motion/timelines/cascade-timeline.ts`    | Skills / blog / contact cascade          |
| Create `src/components/motion/landing-motion-root.tsx`          | Root client orchestrator                 |
| Modify `src/app/page.tsx`                                       | Wrap sections in `LandingMotionRoot`     |
| Modify `src/components/pages/home.tsx`                          | Motion hooks + name watermark            |
| Modify `src/components/pages/work.tsx`                          | Section mark + `data-motion` on rows     |
| Modify `src/components/pages/project.tsx`                       | Section mark + `data-motion` on articles |
| Modify `src/components/pages/skill.tsx`                         | Section mark + cascade targets           |
| Modify `src/components/pages/blog.tsx`                          | Section mark + cascade targets           |
| Modify `src/components/pages/contact-section.tsx`               | Cascade targets                          |
| Delete `src/components/scrollToView.tsx`                        | Unused broken fade wrapper               |
| Delete `src/components/floating-spores.tsx`                     | Replaced by ambient depth                |

---

### Task 1: Motion utilities

**Files:**

- Create: `src/lib/motion/prefers-reduced-motion.ts`
- Create: `src/lib/motion/gsap-register.ts`

**Interfaces:**

- Produces: `prefersReducedMotion(): boolean`
- Produces: `registerGsap(): typeof gsap` (idempotent ScrollTrigger
  registration)

- [ ] **Step 1: Create reduced-motion helper**

```ts
// src/lib/motion/prefers-reduced-motion.ts
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
```

- [ ] **Step 2: Create GSAP register helper**

```ts
// src/lib/motion/gsap-register.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function registerGsap() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

export { ScrollTrigger };
```

- [ ] **Step 3: Type-check**

Run: `npm run type-check` Expected: exit 0 (or only pre-existing unrelated
errors).

---

### Task 2: SectionMark + AmbientDepthLayer

**Files:**

- Create: `src/components/motion/section-mark.tsx`
- Create: `src/components/motion/ambient-depth-layer.tsx`

**Interfaces:**

- Consumes: `registerGsap`, `ScrollTrigger`, `prefersReducedMotion`
- Produces: `SectionMark({ label: string })` — absolute oversized faded text
- Produces: `AmbientDepthLayer({ rootRef })` — fixed orbs, scrubbed Y parallax;
  no-op when reduced motion

- [ ] **Step 1: Create `SectionMark`**

```tsx
// src/components/motion/section-mark.tsx
import { cn } from '@/lib/utils';

type SectionMarkProps = {
  label: string;
  className?: string;
};

export function SectionMark({ label, className }: SectionMarkProps) {
  return (
    <div
      aria-hidden
      data-motion='section-mark'
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden select-none',
        className,
      )}
    >
      <span
        className='absolute right-0 top-0 translate-x-[8%] -translate-y-[10%] font-semibold tracking-[-0.05em] leading-none text-folio-fg/[0.045] text-[clamp(5rem,18vw,11rem)] whitespace-nowrap'
        data-motion='section-mark-text'
      >
        {label}
      </span>
    </div>
  );
}
```

- [ ] **Step 2: Create `AmbientDepthLayer`**

Use deterministic orb positions (not `Math.random` on every mount) so
SSR/hydration stay stable. Four soft orbs, folio-blue only:

```tsx
// src/components/motion/ambient-depth-layer.tsx
'use client';

import { useEffect, type RefObject } from 'react';
import { registerGsap, ScrollTrigger } from '@/lib/motion/gsap-register';
import { prefersReducedMotion } from '@/lib/motion/prefers-reduced-motion';

const ORBS = [
  { left: '8%', top: '12%', size: 220, speed: 0.15 },
  { left: '72%', top: '28%', size: 160, speed: 0.25 },
  { left: '18%', top: '62%', size: 200, speed: 0.2 },
  { left: '65%', top: '78%', size: 140, speed: 0.3 },
] as const;

type Props = {
  rootRef: RefObject<HTMLElement | null>;
};

export function AmbientDepthLayer({ rootRef }: Props) {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = rootRef.current;
    if (!root) return;

    const gsap = registerGsap();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-motion="orb"]').forEach((el) => {
        const speed = Number(el.dataset.speed ?? 0.2);
        gsap.to(el, {
          y: () => -window.innerHeight * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      });
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [rootRef]);

  return (
    <div
      aria-hidden
      className='pointer-events-none fixed inset-0 z-0 overflow-hidden'
    >
      {ORBS.map((orb, i) => (
        <div
          key={i}
          data-motion='orb'
          data-speed={orb.speed}
          className='absolute rounded-full blur-3xl bg-folio-brand/10'
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
          }}
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Type-check**

Run: `npm run type-check` Expected: exit 0.

---

### Task 3: Timeline modules

**Files:**

- Create: `src/components/motion/timelines/intro-timeline.ts`
- Create: `src/components/motion/timelines/experience-timeline.ts`
- Create: `src/components/motion/timelines/projects-timeline.ts`
- Create: `src/components/motion/timelines/cascade-timeline.ts`

**Interfaces:**

- Consumes: `gsap` instance + root `HTMLElement`
- Produces: `createIntroTimeline(gsap, root, { pin: boolean }): void` (creates
  ScrollTriggers inside current `gsap.context`)
- Same pattern for experience / projects / cascade

Each function queries `root` with `[data-motion="..."]` selectors. Callers must
ensure attributes exist (Task 4–5).

- [ ] **Step 1: Intro timeline**

```ts
// src/components/motion/timelines/intro-timeline.ts
import type gsap from 'gsap';

type Opts = { pin: boolean };

export function createIntroTimeline(
  gsapApi: typeof gsap,
  root: HTMLElement,
  { pin }: Opts,
) {
  const section = root.querySelector<HTMLElement>('#introduction');
  if (!section) return;

  const watermark = section.querySelector('[data-motion="name-watermark"]');
  const lines = section.querySelectorAll('[data-motion="intro-line"]');
  const portrait = section.querySelector('[data-motion="intro-portrait"]');
  const meta = section.querySelectorAll('[data-motion="intro-meta"]');

  gsapApi.set([lines, meta], { opacity: 0, y: 40 });
  if (portrait) gsapApi.set(portrait, { opacity: 0, y: 60, scale: 1.04 });

  const tl = gsapApi.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top+=56',
      end: pin ? '+=120%' : 'bottom top',
      scrub: true,
      pin: pin,
      anticipatePin: 1,
    },
  });

  if (watermark) {
    tl.fromTo(watermark, { yPercent: 10 }, { yPercent: -20, ease: 'none' }, 0);
  }
  tl.to(lines, { opacity: 1, y: 0, stagger: 0.08, ease: 'none' }, 0.05);
  if (portrait) {
    tl.to(portrait, { opacity: 1, y: 0, scale: 1, ease: 'none' }, 0.1);
  }
  tl.to(meta, { opacity: 1, y: 0, stagger: 0.05, ease: 'none' }, 0.35);
}
```

- [ ] **Step 2: Experience timeline**

```ts
// src/components/motion/timelines/experience-timeline.ts
import type gsap from 'gsap';

export function createExperienceTimeline(
  gsapApi: typeof gsap,
  root: HTMLElement,
) {
  const section = root.querySelector<HTMLElement>('#experience');
  if (!section) return;

  const mark = section.querySelector('[data-motion="section-mark-text"]');
  const rows = section.querySelectorAll('[data-motion="experience-row"]');

  if (mark) {
    gsapApi.to(mark, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  rows.forEach((row) => {
    gsapApi.fromTo(
      row,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: row,
          start: 'top 85%',
          end: 'top 45%',
          scrub: true,
        },
      },
    );
  });
}
```

- [ ] **Step 3: Projects timeline**

```ts
// src/components/motion/timelines/projects-timeline.ts
import type gsap from 'gsap';

type Opts = { pin: boolean };

export function createProjectsTimeline(
  gsapApi: typeof gsap,
  root: HTMLElement,
  { pin }: Opts,
) {
  const section = root.querySelector<HTMLElement>('#projects');
  if (!section) return;

  const mark = section.querySelector('[data-motion="section-mark-text"]');
  const items = gsapApi.utils.toArray<HTMLElement>(
    section.querySelectorAll('[data-motion="project-item"]'),
  );
  if (!items.length) return;

  if (mark) {
    gsapApi.to(mark, {
      yPercent: -25,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  if (!pin) {
    items.forEach((item) => {
      gsapApi.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 50%',
            scrub: true,
          },
        },
      );
    });
    return;
  }

  gsapApi.set(items, { opacity: 0.22, y: 24 });
  gsapApi.set(items[0], { opacity: 1, y: 0 });

  const tl = gsapApi.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top+=56',
      end: `+=${Math.max(items.length, 1) * 70}%`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });

  items.forEach((item, i) => {
    if (i === 0) return;
    const prev = items[i - 1];
    tl.to(prev, { opacity: 0.22, y: -16, ease: 'none' }, i);
    tl.to(item, { opacity: 1, y: 0, ease: 'none' }, i);
  });
}
```

- [ ] **Step 4: Cascade timeline (skills / blog / contact)**

```ts
// src/components/motion/timelines/cascade-timeline.ts
import type gsap from 'gsap';

const SECTIONS = ['#skills', '#blog', '#contact'] as const;

export function createCascadeTimeline(gsapApi: typeof gsap, root: HTMLElement) {
  SECTIONS.forEach((id) => {
    const section = root.querySelector<HTMLElement>(id);
    if (!section) return;

    const mark = section.querySelector('[data-motion="section-mark-text"]');
    if (mark) {
      gsapApi.to(mark, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    const items = section.querySelectorAll('[data-motion="cascade-item"]');
    items.forEach((item) => {
      gsapApi.fromTo(
        item,
        { opacity: 0, y: id === '#contact' ? 56 : 32 },
        {
          opacity: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
          },
        },
      );
    });
  });
}
```

- [ ] **Step 5: Type-check**

Run: `npm run type-check` Expected: exit 0.

---

### Task 4: LandingMotionRoot + wire `page.tsx`

**Files:**

- Create: `src/components/motion/landing-motion-root.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**

- Consumes: all timeline creators + `AmbientDepthLayer` + helpers
- Produces: `LandingMotionRoot({ children })` client wrapper

- [ ] **Step 1: Create root orchestrator**

```tsx
// src/components/motion/landing-motion-root.tsx
'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { AmbientDepthLayer } from '@/components/motion/ambient-depth-layer';
import { createIntroTimeline } from '@/components/motion/timelines/intro-timeline';
import { createExperienceTimeline } from '@/components/motion/timelines/experience-timeline';
import { createProjectsTimeline } from '@/components/motion/timelines/projects-timeline';
import { createCascadeTimeline } from '@/components/motion/timelines/cascade-timeline';
import { registerGsap, ScrollTrigger } from '@/lib/motion/gsap-register';
import { prefersReducedMotion } from '@/lib/motion/prefers-reduced-motion';

export function LandingMotionRoot({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = rootRef.current;
    if (!root) return;

    const gsap = registerGsap();
    const mq = window.matchMedia('(min-width: 1024px)'); // Tailwind lg
    let ctx: gsap.Context;

    const build = () => {
      ctx?.revert();
      ctx = gsap.context(() => {
        const pin = mq.matches;
        createIntroTimeline(gsap, root, { pin });
        createExperienceTimeline(gsap, root);
        createProjectsTimeline(gsap, root, { pin });
        createCascadeTimeline(gsap, root);
      }, root);
      ScrollTrigger.refresh();
    };

    build();

    const onResize = () => {
      build();
    };
    mq.addEventListener('change', onResize);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      mq.removeEventListener('change', onResize);
      window.removeEventListener('load', onLoad);
      ctx?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main ref={rootRef} className='relative pt-14'>
      <AmbientDepthLayer rootRef={rootRef} />
      <div className='relative z-10 max-w-[1100px] mx-auto px-6 sm:px-10'>
        {children}
      </div>
    </main>
  );
}
```

Note: move the existing `<main className='relative pt-14'>` and inner max-width
wrapper from `page.tsx` into this component so motion queries stay under one
root.

- [ ] **Step 2: Update `page.tsx`**

```tsx
import IntroductionSection from '@/components/pages/home';
import WorkSection from '@/components/pages/work';
import ProjectSection from '@/components/pages/project';
import SkillSection from '@/components/pages/skill';
import BlogSection from '@/components/pages/blog';
import ContactSection from '@/components/pages/contact-section';
import { LandingMotionRoot } from '@/components/motion/landing-motion-root';

export default function Home() {
  return (
    <LandingMotionRoot>
      <IntroductionSection />
      <WorkSection />
      <ProjectSection />
      <SkillSection />
      <BlogSection />
      <ContactSection />
    </LandingMotionRoot>
  );
}
```

- [ ] **Step 3: Type-check + lint**

Run: `npm run type-check && npm run lint` Expected: exit 0.

- [ ] **Step 4: Manual smoke**

Run: `npm run dev` → open `/` Expected: page renders; orbs visible faintly; if
hooks not yet on sections, timelines no-op safely without crashing.

---

### Task 5: Hook section markup

**Files:**

- Modify: `src/components/pages/home.tsx`
- Modify: `src/components/pages/work.tsx`
- Modify: `src/components/pages/project.tsx`
- Modify: `src/components/pages/skill.tsx`
- Modify: `src/components/pages/blog.tsx`
- Modify: `src/components/pages/contact-section.tsx`

**Interfaces:**

- Consumes: `SectionMark`
- Produces: `data-motion` attributes matching timeline selectors

- [ ] **Step 1: Intro (`home.tsx`)**

- Make section `relative overflow-hidden`.
- Add absolute name watermark:

```tsx
<span
  aria-hidden
  data-motion='name-watermark'
  className='pointer-events-none absolute left-0 top-8 font-semibold tracking-[-0.05em] leading-none text-folio-fg/[0.04] text-[clamp(4rem,22vw,14rem)]'
>
  {firstName}
</span>
```

- Add `data-motion='intro-line'` on eyebrow, each name line / title blocks as
  appropriate (split headline so first/last name can stagger).
- Wrap CTAs + stats container with `data-motion='intro-meta'` on each group.
- Add `data-motion='intro-portrait'` on the portrait wrapper (`lg:sticky` may
  fight pin — on `lg+` keep sticky only when reduced motion; simplest fix:
  remove `lg:sticky lg:top-24` so the pin timeline owns portrait motion).

- [ ] **Step 2: Experience (`work.tsx`)**

- Section: `relative overflow-hidden`.
- Import and render `<SectionMark label="EXPERIENCE" />`.
- Add `data-motion='experience-row'` to each `<article>`.

- [ ] **Step 3: Projects (`project.tsx`)**

- Section: `relative overflow-hidden`.
- `<SectionMark label="PROJECTS" />`.
- Add `data-motion='project-item'` to each project `<article>`.

- [ ] **Step 4: Skills / Blog / Contact**

- Each section `relative overflow-hidden` where a mark is used.
- Skills: `<SectionMark label="SKILLS" />`; mark grid cells / category blocks
  `data-motion='cascade-item'`.
- Blog: `<SectionMark label="WRITING" />`; each post teaser
  `data-motion='cascade-item'`.
- Contact: mark optional (`CONTACT`) or skip mark; primary columns / form blocks
  `data-motion='cascade-item'`.

Inspect each file’s structure and attach attributes to the largest meaningful
interactive content units (not every tiny span).

- [ ] **Step 5: Verify selectors**

In browser console on `/`:

```js
[
  'name-watermark',
  'intro-line',
  'intro-portrait',
  'intro-meta',
  'experience-row',
  'project-item',
  'cascade-item',
  'section-mark-text',
  'orb',
].map((k) => [k, document.querySelectorAll(`[data-motion="${k}"]`).length]);
```

Expected: non-zero counts for all keys used by timelines (contact mark may be 0
if skipped).

- [ ] **Step 6: Type-check**

Run: `npm run type-check` Expected: exit 0.

---

### Task 6: Cleanup dead motion code + hash/nav refresh

**Files:**

- Delete: `src/components/scrollToView.tsx`
- Delete: `src/components/floating-spores.tsx`
- Modify: `src/components/motion/landing-motion-root.tsx` (if needed)

- [ ] **Step 1: Confirm nothing imports the dead files**

Run: `rg "scrollToView|floating-spores|FloatingSpores" src` Expected: no matches
(or only the files themselves).

- [ ] **Step 2: Delete both unused files**

- [ ] **Step 3: Ensure hash navigation still works**

After mount, call `ScrollTrigger.refresh()` once on `requestAnimationFrame` and
after fonts:

```ts
document.fonts?.ready?.then(() => ScrollTrigger.refresh());
```

If menu uses `scrollToHash`, test clicking Experience / Projects / Contact from
the nav — target section top should sit below the fixed header (~56px).

- [ ] **Step 4: Lint + type-check**

Run: `npm run type-check && npm run lint` Expected: exit 0.

---

### Task 7: Acceptance pass

**Files:** none (verification only)

- [ ] **Step 1: Desktop (`lg+`) check**

- Intro pins; name watermark and portrait scrub with scroll.
- Experience rows scrub in; giant mark drifts.
- Projects pins; active project crossfades through beats.
- Skills / blog / contact cascade in.
- Soft blue orbs drift slower than content.
- Folio look intact (no purple glow, no layout redesign).

- [ ] **Step 2: Below `lg` check**

- No pins (page never feels stuck).
- Reveals + light parallax still present.

- [ ] **Step 3: Reduced motion**

DevTools → Rendering → emulate `prefers-reduced-motion: reduce` → reload.
Expected: fully visible static content; no scrub/pin; orbs may still paint but
must not animate (or omit layer when reduced — either is acceptable if content
is static). Prefer skipping orb animation via existing early return.

- [ ] **Step 4: Client navigation**

Visit `/blog` then back to `/`. Expected: no stuck pins; no ScrollTrigger errors
in console; motion re-inits cleanly.

- [ ] **Step 5: Update spec status if needed**

Set implementation notes as done in the spec only if the user asks for doc
updates.

---

## Spec coverage checklist

| Spec requirement                  | Task    |
| --------------------------------- | ------- |
| Landing `/` only                  | 4       |
| GSAP ScrollTrigger, no Lenis      | 1–3     |
| Marks + soft folio-blue orbs      | 2, 5    |
| Full cinema Intro + Projects pins | 3, 4    |
| Pins only `lg+`                   | 3, 4    |
| Reduced motion static             | 1, 2, 4 |
| Hash nav + header offset          | 6       |
| Preserve section UI               | 5       |
| Remove dead scrollToView / spores | 6       |
| Acceptance criteria               | 7       |

## Plan self-review

- No TBD placeholders in steps.
- Timeline selector names match Task 5 attribute names.
- `LandingMotionRoot` owns `<main>` so `page.tsx` does not double-wrap.
- Portrait sticky removed on intro to avoid fighting pin (documented in Task 5).

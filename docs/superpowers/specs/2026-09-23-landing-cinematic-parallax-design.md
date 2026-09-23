# Landing Page Cinematic Parallax Design

**Date:** 2026-09-23 **Status:** Approved — ready for implementation **Scope:**
Public landing route `/` only

## Problem

The portfolio landing is a static editorial folio (Inter + JetBrains Mono,
hairline borders, cool near-white background). GSAP is installed but unused. The
user wants **high-drama scroll parallax** without changing the existing UI
design language.

## Goals

- Deliver a cinematic scroll experience on `/` that feels premium and
  intentional.
- Preserve current layout, typography, colors, and section content.
- Add ambient depth (not new product imagery).
- Respect accessibility (`prefers-reduced-motion`) and mobile usability.

## Non-goals

- Blog (`/blog`, `/blog/[slug]`) and CV (`/cv`) motion.
- Lenis or other smooth-scroll libraries.
- New project screenshots or photo galleries.
- Visual redesign, theme toggle, or dark-mode work.
- Changing section copy or data sources.

## Decisions (locked)

| Decision     | Choice                                                                           |
| ------------ | -------------------------------------------------------------------------------- |
| Scope        | Landing `/` only                                                                 |
| Intensity    | High drama                                                                       |
| Depth style  | Giant faded section marks + soft folio-blue orbs                                 |
| Engine       | Existing GSAP + ScrollTrigger                                                    |
| Choreography | Full cinema: pinned Intro + pinned Projects; scrubbed/staggered motion elsewhere |

## Experience design

### Ambient depth layer

- Fixed, pointer-events-none layer behind content.
- Soft blurred orbs using folio brand blue at low opacity (retheme/replace
  unused `floating-spores.tsx`; no rainbow palette).
- Orbs parallax at slower Y rates than content (multi-speed depth).
- Per-section oversized faded marks (e.g. `EXPERIENCE`, `PROJECTS`, or index
  numbers) drift via ScrollTrigger scrub; never reduce text contrast.

### Section choreography

1. **Introduction (pinned ~100–140vh on desktop)** Name watermark drifts slower
   than copy. Headline lines scrub in. Portrait drifts/scales opposite the text
   column. Stats and CTAs stagger near end of pin, then release.

2. **Experience** Section mark parallax. Timeline/job rows reveal with scrubbed
   opacity + Y.

3. **Projects (pinned ~120–180vh on desktop)** Scrubbed “beats” advance through
   projects (opacity/translate crossfade of active item). Background plane +
   section mark at different rates.

4. **Skills / Blog / Contact** Cascade/stagger reveals for grid cells and list
   items. Contact closes with a stronger fade-up.

### Responsive behavior

- **Desktop (`lg+`):** full pin lengths and parallax distances.
- **Below `lg`:** disable pins entirely (continuous scroll); keep staggered
  reveals and lighter parallax so the page does not feel stuck.
- **`prefers-reduced-motion: reduce`:** skip pins, parallax, and scrub
  timelines; show final static layout (instant opacity 1 / no transforms).

### Navigation

- Existing hash links and 56px header offset must continue to work after
  ScrollTrigger mounts.
- Refresh ScrollTrigger after fonts/images load if layout shift breaks start/end
  positions.

## Architecture

```
src/app/page.tsx
  └── LandingMotionRoot (client)
        ├── AmbientDepthLayer
        └── existing sections (with data attributes / refs for GSAP)

src/components/motion/
  ├── landing-motion-root.tsx   # reduced-motion gate, context, cleanup
  ├── ambient-depth-layer.tsx   # orbs + global depth
  ├── section-mark.tsx          # oversized faded mark
  └── timelines/
        ├── intro-timeline.ts
        ├── experience-timeline.ts
        ├── projects-timeline.ts
        └── cascade-timeline.ts   # skills / blog / contact

src/lib/motion/
  └── prefers-reduced-motion.ts
```

### Lifecycle

- Register ScrollTrigger once on the client.
- Create all timelines inside a GSAP context scoped to the landing root; kill on
  unmount.
- Do not leave the old `scrollToView.tsx` fade wrapper in place — replace its
  role with scrub timelines (delete or rewrite that file so dead code is not
  confusing).

### Content components

- Keep `home.tsx`, `work.tsx`, `project.tsx`, `skill.tsx`, `blog.tsx`,
  `contact-section.tsx` structure and styling.
- Add minimal hooks: wrappers, `data-motion` attributes, or small presentational
  slots for section marks / watermark — no layout redesign.

## Visual constraints

- Reuse folio tokens from `globals.css` (`folio-bg`, `folio-fg`, `folio-muted`,
  `folio-border`, `folio-brand`).
- No purple/glow aesthetic drift; orbs stay soft and low-contrast.
- Do not introduce cards, badges, or overlays on hero media.
- Ambient layers must not steal focus from brand name / headings.

## Testing / acceptance

- Desktop: Intro and Projects feel pinned; scrub advances tied to scroll; other
  sections cascade in.
- Mobile / tablet (below `lg`): no pins; staggered reveals and light parallax
  still work; page never feels stuck.
- Reduced motion: no animated transforms/opacity scrubbing; content fully
  visible.
- Hash navigation to `#experience`, `#projects`, `#skills`, `#blog`, `#contact`
  lands correctly under the fixed header.
- No console errors from orphaned ScrollTriggers after client navigations away
  from `/` and back.

## Open implementation notes (not product decisions)

- Exact pin duration (vh multipliers) tuned during implementation against real
  section heights.
- Project “beats” should map to existing project list items in `project.tsx` /
  data — no new content model.

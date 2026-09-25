'use client';

const ORBS = [
  { left: '-5%', top: '5%', size: 420, speed: 0.2, opacity: 0.14 },
  { left: '70%', top: '8%', size: 320, speed: 0.45, opacity: 0.11 },
  { left: '10%', top: '45%', size: 380, speed: 0.35, opacity: 0.12 },
  { left: '75%', top: '55%', size: 280, speed: 0.65, opacity: 0.1 },
  { left: '40%', top: '78%', size: 360, speed: 0.5, opacity: 0.09 },
] as const;

/** Large soft depth orbs — ScrollTrigger owned by LandingMotionRoot. */
export function AmbientDepthLayer() {
  return (
    <div
      aria-hidden
      data-cinematic='depth'
      className='pointer-events-none fixed inset-0 z-0 overflow-hidden'
    >
      {ORBS.map((orb) => (
        <div
          key={`${orb.left}-${orb.top}`}
          data-motion='orb'
          data-speed={orb.speed}
          className='absolute rounded-full blur-3xl'
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            backgroundColor: `color-mix(in oklch, var(--color-folio-brand) ${Math.round(orb.opacity * 100)}%, transparent)`,
          }}
        />
      ))}
      {/* Cinematic horizon planes */}
      <div
        data-motion='plane'
        data-speed='0.28'
        className='absolute -left-[20%] top-[18%] h-[40vh] w-[140%] rotate-[-4deg] bg-gradient-to-r from-folio-brand/[0.07] via-transparent to-folio-brand/[0.04]'
      />
      <div
        data-motion='plane'
        data-speed='0.55'
        className='absolute -left-[10%] top-[58%] h-[32vh] w-[140%] rotate-[3deg] bg-gradient-to-r from-transparent via-folio-brand/[0.06] to-transparent'
      />
    </div>
  );
}

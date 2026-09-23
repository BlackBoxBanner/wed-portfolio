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
        'pointer-events-none absolute inset-x-0 -top-6 h-[min(80%,32rem)] overflow-visible select-none z-0',
        className,
      )}
    >
      <span
        className='absolute -right-6 top-0 sm:right-0 font-semibold tracking-[-0.07em] leading-none text-folio-fg/[0.07] text-[clamp(5.5rem,20vw,12rem)] whitespace-nowrap'
        data-motion='section-mark-text'
      >
        {label}
      </span>
    </div>
  );
}

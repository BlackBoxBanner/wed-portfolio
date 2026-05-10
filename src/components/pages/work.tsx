import { experiences } from '@/data';
import type { ExperienceType } from '@/data';
import { cn } from '@/lib/utils';

function formatPeriod(exp: ExperienceType): string {
  if (exp.current) {
    return `${exp.fromMonth.slice(0, 3)} ${exp.fromYear} – Present`;
  }
  return `${exp.fromMonth.slice(0, 3)} ${exp.fromYear} – ${exp.toMonth?.slice(0, 3)} ${exp.toYear}`;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className='font-mono text-[10px] uppercase tracking-[0.14em] text-folio-muted mb-12 flex items-center gap-3'>
      <span className='shrink-0'>{children}</span>
      <span className='h-px flex-1 bg-folio-border min-w-[2rem]' aria-hidden />
    </p>
  );
}

const WorkSection = () => {
  return (
    <section
      id='experience'
      className='py-16 sm:py-20 border-t border-folio-border'
    >
      <SectionLabel>Experience</SectionLabel>
      <div className='flex flex-col'>
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.title}-${exp.fromYear}`}
            className='grid sm:grid-cols-[200px_1fr] gap-6 sm:gap-10 py-8 border-b border-folio-border last:border-b-0 first:pt-0'
          >
            <div className='flex flex-col gap-1.5 sm:flex-col'>
              <span className='font-mono text-[11px] text-folio-muted tracking-[0.04em] tabular-nums'>
                {formatPeriod(exp)}
              </span>
              <span
                className={cn(
                  'font-mono text-[11px] uppercase tracking-[0.06em]',
                  'text-folio-brand',
                )}
              >
                {exp.type}
              </span>
            </div>
            <div>
              <h3 className='font-semibold text-[17px] tracking-[-0.02em] text-folio-fg mb-1'>
                {exp.title}
              </h3>
              <p className='text-sm text-folio-muted mb-3.5'>
                {exp.company} — {exp.city}, {exp.country}
              </p>
              <p className='text-sm leading-[1.65] text-folio-muted max-w-xl mb-4'>
                {exp.description}
              </p>
              <div className='flex flex-wrap gap-1.5'>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className='font-mono text-[11px] px-2 py-0.5 border border-folio-border rounded-[3px] text-folio-muted tracking-[0.02em]'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;

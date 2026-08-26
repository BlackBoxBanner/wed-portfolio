import Link from 'next/link';
import { projects } from '@/data';
import type { ProjectType } from '@/data';
import { cn } from '@/lib/utils';

const SHOWCASE_TITLES = [
  'SOPet Multi-Vendor E-Commerce Platform',
  'CPE Space - Full-Stack Platform',
  'SmartPlanner - Planning Tool',
  'Song Request System',
] as const;

const SUBTYPE: Partial<Record<(typeof SHOWCASE_TITLES)[number], string>> = {
  'SOPet Multi-Vendor E-Commerce Platform': 'Full-Stack / Mobile',
  'CPE Space - Full-Stack Platform': 'Full-Stack / Web',
  'SmartPlanner - Planning Tool': 'Full-Stack / Web',
  'Song Request System': 'Full-Stack / Web',
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className='font-mono text-[10px] uppercase tracking-[0.14em] text-folio-muted mb-12 flex items-center gap-3'>
      <span className='shrink-0'>{children}</span>
      <span className='h-px flex-1 bg-folio-border min-w-8' aria-hidden />
    </p>
  );
}

const showcaseProjects: ProjectType[] = SHOWCASE_TITLES.map((title) =>
  projects.find((p) => p.title === title),
).filter((p): p is ProjectType => Boolean(p));

const ProjectSection = () => {
  return (
    <section
      id='projects'
      className='py-16 sm:py-20 border-t border-folio-border'
    >
      <SectionLabel>Selected Projects</SectionLabel>
      <div className='flex flex-col'>
        {showcaseProjects.map((project, index) => {
          const num = String(index + 1).padStart(2, '0');
          const isDone = project.status === 'Completed';
          const body = project.fullDescription?.trim() || project.description;
          const subtype =
            SUBTYPE[project.title as keyof typeof SUBTYPE] ?? project.category;

          return (
            <article
              key={project.title}
              className='grid lg:grid-cols-[1fr_280px] gap-8 lg:gap-16 py-10 border-b border-folio-border last:border-b-0 items-start'
            >
              <div>
                <p className='font-mono text-[11px] text-folio-border mb-4 tabular-nums tracking-[0.04em]'>
                  {num}
                </p>
                <h2 className='text-[clamp(1.375rem,3vw,1.875rem)] font-semibold tracking-[-0.03em] text-folio-fg mb-3 leading-tight'>
                  {project.title ===
                  'SOPet Multi-Vendor E-Commerce Platform' ? (
                    <>
                      SOPet Multi-Vendor
                      <br />
                      E-Commerce Platform
                    </>
                  ) : (
                    project.title
                      .replace(' - Full-Stack Platform', '')
                      .replace(' - Planning Tool', '')
                  )}
                </h2>
                <p className='text-sm leading-[1.65] text-folio-muted max-w-xl mb-5'>
                  {body}
                </p>
                <ul className='list-none flex flex-col gap-1.5 mb-6 space-y-0'>
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className='text-[13px] text-folio-muted flex gap-2 items-baseline'
                    >
                      <span className='text-folio-border shrink-0'>–</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className='flex flex-wrap gap-1.5'>
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className='font-mono text-[11px] px-2 py-0.5 border border-folio-border rounded-[3px] text-folio-muted'
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <aside className='lg:pt-7'>
                <p className='inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.06em] mb-5'>
                  <span
                    className={cn(
                      'w-1.5 h-1.5 rounded-full shrink-0',
                      isDone ? 'bg-folio-success' : 'bg-folio-brand',
                    )}
                    aria-hidden
                  />
                  {project.status}
                </p>
                <p className='font-mono text-[11px] uppercase tracking-[0.06em] text-folio-muted mb-2'>
                  Type
                </p>
                <p className='text-[13px] text-folio-muted mb-4'>{subtype}</p>
                {project.git && project.git !== '#' ? (
                  <Link
                    href={project.git}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1 text-[13px] text-folio-brand hover:opacity-70 transition-opacity mt-2'
                  >
                    GitHub →
                  </Link>
                ) : null}
              </aside>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;

import Link from 'next/link';
import { personalInfo } from '@/data';
import { educationKMUTT } from '@/data/education';
import { mailtoHref } from '@/lib/mailto';
import { siteConfig } from '@/lib/metadata';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className='font-mono text-[10px] uppercase tracking-[0.14em] text-folio-muted mb-12 flex items-center gap-3'>
      <span className='shrink-0'>{children}</span>
      <span className='h-px flex-1 bg-folio-border min-w-8' aria-hidden />
    </p>
  );
}

export default function ContactSection() {
  const githubUrl = personalInfo.github;
  const ghDisplay = githubUrl.replace(/^https?:\/\//, '');

  return (
    <section
      id='contact'
      className='py-16 sm:py-20 border-t border-folio-border'
    >
      <SectionLabel>Contact</SectionLabel>
      <div className='grid md:grid-cols-2 gap-12 md:gap-20 items-start'>
        <div>
          <h2 className='text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] leading-tight text-folio-fg mb-4'>
            Open to new
            <br />
            opportunities.
          </h2>
          <p className='text-[15px] text-folio-muted leading-relaxed mb-8 max-w-sm'>
            Full-stack roles, contract work, or interesting collaborations.
            Based in Bangkok — available remotely.
          </p>
          <div className='flex flex-col gap-0'>
            <a
              href={mailtoHref(personalInfo.email)}
              className='flex items-center gap-3 text-sm text-folio-fg py-3.5 border-b border-folio-border hover:text-folio-brand transition-colors'
            >
              <span className='font-mono text-[10px] uppercase tracking-widest text-folio-muted w-[60px] shrink-0'>
                Email
              </span>
              {personalInfo.email}
            </a>
            <a
              href={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 text-sm text-folio-fg py-3.5 border-b border-folio-border hover:text-folio-brand transition-colors'
            >
              <span className='font-mono text-[10px] uppercase tracking-widest text-folio-muted w-[60px] shrink-0'>
                GitHub
              </span>
              {ghDisplay}
            </a>
            <a
              href={personalInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 text-sm text-folio-fg py-3.5 border-b border-folio-border hover:text-folio-brand transition-colors'
            >
              <span className='font-mono text-[10px] uppercase tracking-widest text-folio-muted w-[60px] shrink-0'>
                LinkedIn
              </span>
              linkedin.com/in/{siteConfig.author.linkedin}
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-5 pt-2'>
          <div className='flex flex-col gap-1'>
            <span className='font-mono text-[10px] uppercase tracking-widest text-folio-muted'>
              Location
            </span>
            <span className='text-[15px] text-folio-fg tracking-[-0.01em]'>
              {personalInfo.location}
            </span>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='font-mono text-[10px] uppercase tracking-widest text-folio-muted'>
              Education
            </span>
            <span className='text-[15px] text-folio-fg tracking-[-0.01em]'>
              {educationKMUTT.institution.replace(
                "King Mongkut's University of Technology Thonburi (KMUTT)",
                'KMUTT',
              )}{' '}
              — {educationKMUTT.fieldOfStudy}, {educationKMUTT.endYear}
            </span>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='font-mono text-[10px] uppercase tracking-widest text-folio-muted'>
              Currently
            </span>
            <span className='text-[15px] text-folio-fg tracking-[-0.01em]'>
              Full-Stack Developer at SOPet Co., Ltd
            </span>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='font-mono text-[10px] uppercase tracking-widest text-folio-muted'>
              Status
            </span>
            <span className='text-[15px] text-folio-brand tracking-[-0.01em]'>
              Open to opportunities
            </span>
          </div>
          <Link
            href='/cv'
            className='font-mono text-[11px] text-folio-brand hover:opacity-80 transition-opacity mt-2 w-fit'
          >
            View CV →
          </Link>
        </div>
      </div>
    </section>
  );
}

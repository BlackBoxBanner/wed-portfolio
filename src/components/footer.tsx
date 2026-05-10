import Link from 'next/link';
import { siteConfig } from '@/lib/metadata';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className='max-w-[1100px] mx-auto px-6 sm:px-10 py-6 border-t border-folio-border flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left'>
      <span className='font-mono text-[11px] text-folio-muted tracking-[0.04em]'>
        © {CURRENT_YEAR} {siteConfig.author.name}
      </span>
      <div className='flex gap-6'>
        <a
          href={`https://github.com/${siteConfig.author.github}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-xs text-folio-muted hover:text-folio-fg transition-colors'
        >
          GitHub
        </a>
        <a
          href={`https://linkedin.com/in/${siteConfig.author.linkedin}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-xs text-folio-muted hover:text-folio-fg transition-colors'
        >
          LinkedIn
        </a>
        <Link
          href='/cv'
          className='text-xs text-folio-muted hover:text-folio-fg transition-colors'
        >
          CV
        </Link>
      </div>
    </footer>
  );
}

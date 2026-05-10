'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Writing', href: '/#blog' },
] as const;

const MenuBar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const scrollToHash = useCallback((href: string) => {
    if (!href.includes('#')) return;
    const id = href.split('#')[1];
    const el =
      typeof document !== 'undefined' ? document.getElementById(id) : null;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      scrollToHash(href);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 sm:px-10',
        'border-b border-folio-border bg-folio-bg/85 backdrop-blur-md',
      )}
    >
      <Link
        href='/'
        className='text-sm font-semibold tracking-tight text-folio-fg hover:opacity-80 transition-opacity'
      >
        SV
      </Link>

      <nav className='hidden sm:flex items-center gap-8' aria-label='Primary'>
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => onNavClick(e, item.href)}
            className='text-[13px] text-folio-muted hover:text-folio-fg transition-colors'
          >
            {item.label}
          </Link>
        ))}
        <Link
          href='/#contact'
          onClick={(e) => onNavClick(e, '/#contact')}
          className='text-[13px] font-medium text-folio-brand'
        >
          Contact
        </Link>
      </nav>

      <button
        type='button'
        className='sm:hidden p-2 -mr-2 text-folio-fg'
        aria-expanded={open}
        aria-controls='mobile-nav'
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open ? (
        <div
          id='mobile-nav'
          className='absolute top-14 left-0 right-0 sm:hidden border-b border-folio-border bg-folio-bg/95 backdrop-blur-md py-4 px-6 flex flex-col gap-3 shadow-sm'
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => onNavClick(e, item.href)}
              className='text-sm text-folio-muted hover:text-folio-fg py-1'
            >
              {item.label}
            </Link>
          ))}
          <Link
            href='/#contact'
            onClick={(e) => onNavClick(e, '/#contact')}
            className='text-sm font-medium text-folio-brand py-1'
          >
            Contact
          </Link>
        </div>
      ) : null}
    </header>
  );
};

export default MenuBar;

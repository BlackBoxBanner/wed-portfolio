import Link from 'next/link';
import { cn } from '@/lib/utils';

export function FolioPageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-[1100px] mx-auto px-6 sm:px-10 pt-24 pb-20',
        className,
      )}
    >
      {children}
    </div>
  );
}

export type FolioBreadcrumbItem = { label: string; href?: string };

export function FolioBreadcrumb({ items }: { items: FolioBreadcrumbItem[] }) {
  return (
    <nav aria-label='Breadcrumb' className='mb-10'>
      <ol className='flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-mono text-folio-muted'>
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className='flex items-center gap-2'>
            {i > 0 ? (
              <span className='text-folio-border select-none' aria-hidden>
                /
              </span>
            ) : null}
            {item.href ? (
              <Link
                href={item.href}
                className='hover:text-folio-fg transition-colors'
              >
                {item.label}
              </Link>
            ) : (
              <span className='text-folio-fg'>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FolioPageTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className='mb-12 border-b border-folio-border pb-10'>
      {eyebrow ? (
        <p className='font-mono text-[10px] uppercase tracking-[0.14em] text-folio-brand mb-4'>
          {eyebrow}
        </p>
      ) : null}
      <h1 className='text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-folio-fg mb-3'>
        {title}
      </h1>
      {description ? (
        <p className='text-[15px] text-folio-muted leading-relaxed max-w-2xl'>
          {description}
        </p>
      ) : null}
    </header>
  );
}

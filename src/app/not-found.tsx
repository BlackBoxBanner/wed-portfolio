import Link from 'next/link';
import { generateMetadata } from '@/lib/metadata';
import { FolioPageShell } from '@/components/folio-layout';

export const metadata = generateMetadata({
  title: 'Page Not Found | Sueksit Vachirakumthorn',
  description:
    'The page you are looking for does not exist. Return to the portfolio homepage.',
  noIndex: true,
});

const primaryBtn =
  'inline-flex w-full justify-center items-center gap-1.5 px-[22px] py-[11px] text-sm font-medium text-folio-bg bg-folio-fg rounded-md hover:opacity-[0.82] transition-opacity';
const outlineBtn =
  'inline-flex w-full justify-center items-center gap-1.5 px-[22px] py-[11px] text-sm font-medium text-folio-fg bg-transparent border border-folio-border rounded-md hover:border-folio-muted transition-colors';

export default function NotFound() {
  return (
    <FolioPageShell className='min-h-[calc(100vh-3.5rem)] flex flex-col justify-center pt-24 pb-20'>
      <div className='text-center max-w-md mx-auto w-full'>
        <p className='font-mono text-[11px] uppercase tracking-[0.12em] text-folio-brand mb-6'>
          Error
        </p>
        <div className='font-mono text-5xl sm:text-6xl font-semibold text-folio-border mb-4 tabular-nums'>
          404
        </div>
        <h1 className='text-xl font-semibold text-folio-fg mb-2 tracking-tight'>
          Page not found
        </h1>
        <p className='text-[15px] text-folio-muted mb-8 leading-relaxed'>
          The page you&apos;re looking for doesn&apos;t exist. It might have
          been moved, deleted, or the URL may be wrong.
        </p>

        <div className='space-y-3'>
          <Link href='/' className={primaryBtn}>
            Return to portfolio
          </Link>
          <Link href='/#contact' className={outlineBtn}>
            Get in touch
          </Link>
        </div>

        <p className='mt-10 text-[13px] text-folio-muted'>
          Need help? Use the contact section on the homepage.
        </p>
      </div>
    </FolioPageShell>
  );
}

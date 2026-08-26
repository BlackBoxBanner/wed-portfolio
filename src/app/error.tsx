'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Portfolio Error:', error);
  }, [error]);

  const primaryBtn =
    'inline-flex w-full sm:w-auto justify-center items-center px-[22px] py-[11px] text-sm font-medium text-folio-bg bg-folio-fg rounded-md hover:opacity-[0.82] transition-opacity';
  const outlineBtn =
    'inline-flex w-full sm:w-auto justify-center items-center px-[22px] py-[11px] text-sm font-medium text-folio-fg bg-transparent border border-folio-border rounded-md hover:border-folio-muted transition-colors';

  return (
    <div className='min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6 pt-20 pb-16'>
      <div className='text-center max-w-md mx-auto w-full'>
        <p className='font-mono text-[11px] uppercase tracking-[0.12em] text-folio-brand mb-6'>
          Something went wrong
        </p>
        <div
          className='mx-auto w-12 h-12 rounded-full border border-folio-border flex items-center justify-center mb-5 text-folio-brand'
          aria-hidden
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-1.964-.833-2.732 0l-5.898 6.5c-.77.833.192 2.5 1.732 2.5z'
            />
          </svg>
        </div>
        <h2 className='text-xl font-semibold text-folio-fg mb-2 tracking-tight'>
          Unexpected error
        </h2>
        <p className='text-[15px] text-folio-muted mb-8 leading-relaxed'>
          An error occurred while loading this page. You can try again or return
          home.
        </p>

        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <button type='button' onClick={reset} className={primaryBtn}>
            Try again
          </button>
          <Link href='/' className={outlineBtn}>
            Go to homepage
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' ? (
          <details className='mt-10 text-left'>
            <summary className='text-[13px] text-folio-muted cursor-pointer hover:text-folio-fg'>
              Error details (development)
            </summary>
            <pre className='mt-3 text-xs font-mono bg-folio-surface border border-folio-border p-3 rounded-md overflow-auto text-folio-brand whitespace-pre-wrap'>
              {error.message}
            </pre>
          </details>
        ) : null}
      </div>
    </div>
  );
}

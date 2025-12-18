'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Portfolio Error:', error);
  }, [error]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-background px-4'>
      <div className='text-center max-w-md mx-auto'>
        <div className='mb-6'>
          <div className='mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4'>
            <svg
              className='w-8 h-8 text-red-600'
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
          <h2 className='text-2xl font-bold text-foreground mb-2'>
            Something went wrong
          </h2>
          <p className='text-muted-foreground mb-6'>
            We apologize for the inconvenience. An unexpected error has occurred
            while loading the portfolio.
          </p>
        </div>

        <div className='space-y-3'>
          <Button onClick={reset} className='w-full'>
            Try again
          </Button>
          <Button
            variant='outline'
            onClick={() => (window.location.href = '/')}
            className='w-full'
          >
            Go to homepage
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className='mt-6 text-left'>
            <summary className='text-sm text-muted-foreground cursor-pointer hover:text-foreground'>
              Error details (development)
            </summary>
            <pre className='mt-2 text-xs bg-gray-100 p-3 rounded overflow-auto text-red-600'>
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Page Not Found | Sueksit Vachirakumthorn',
  description:
    'The page you are looking for does not exist. Return to the portfolio homepage.',
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background px-4'>
      <div className='text-center max-w-md mx-auto'>
        <div className='mb-6'>
          <div className='text-6xl font-bold text-muted-foreground mb-4'>
            404
          </div>
          <h1 className='text-2xl font-bold text-foreground mb-2'>
            Page Not Found
          </h1>
          <p className='text-muted-foreground mb-6'>
            The page you&apos;re looking for doesn&apos;t exist. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className='space-y-3'>
          <Button asChild className='w-full'>
            <Link href='/'>Return to Portfolio</Link>
          </Button>
          <Button variant='outline' asChild className='w-full'>
            <Link href='/#contact'>Get in Touch</Link>
          </Button>
        </div>

        <div className='mt-8 text-sm text-muted-foreground'>
          <p>Need help? Feel free to reach out!</p>
        </div>
      </div>
    </div>
  );
}

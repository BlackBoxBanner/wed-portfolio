import type { Metadata } from 'next';
import { Outfit as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Menu from '@/components/menu';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { generateMetadata, generateStructuredData } from '@/lib/metadata';
import FloatingSpores from '@/components/floating-spores';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-sans',
});

export const metadata: Metadata = generateMetadata();
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateStructuredData();

  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased text-lg relative',
          fontSans.variable,
        )}
      >
        <FloatingSpores />
        <Toaster />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}

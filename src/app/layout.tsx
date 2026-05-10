import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Menu from '@/components/menu';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { generateMetadata, generateStructuredData } from '@/lib/metadata';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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
        {/* Globally inlined JSON-LD: Person + WebSite (see generateStructuredData). */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-folio-bg font-sans antialiased text-[15px] text-folio-fg leading-relaxed',
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <Toaster />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}

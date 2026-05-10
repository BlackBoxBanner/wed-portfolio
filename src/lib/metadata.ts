import type { Metadata } from 'next';

/** Stable origin for absolute URLs (no trailing slash). */
export function siteOrigin(): string {
  return (
    process.env.NEXT_PUBLIC_APP_URL || 'https://sueksit.vercel.app'
  ).replace(/\/+$/, '');
}

export const siteConfig = {
  name: 'Sueksit Vachirakumthorn',
  title: 'Sueksit Vachirakumthorn | Full-Stack Developer',
  description:
    'Full-Stack Developer passionate about building web and mobile applications that solve real-world problems. Specializing in React, Next.js, React Native, and modern web technologies.',
  ogImage: '/og-image.jpg',
  keywords: [
    'Sueksit Vachirakumthorn',
    'Full-Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'React Native',
    'Portfolio',
    'Bangkok',
    'Thailand',
  ],
  author: {
    name: 'Sueksit Vachirakumthorn',
    email: 'svac.mai+work@gmail.com',
    linkedin: 'sueksit',
    github: 'BlackBoxBanner',
  },
  creator: 'Sueksit Vachirakumthorn',
  publisher: 'Sueksit Vachirakumthorn',
};

export function generateMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = `${siteOrigin()}/`,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const origin = siteOrigin();
  const ogImage = image.startsWith('http') ? image : `${origin}${image}`;

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author.name, url: `${origin}/` }],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@sueksitv',
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#000000' },
      ],
    },
    manifest: '/site.webmanifest',
    metadataBase: new URL(`${origin}/`),
    alternates: {
      canonical: url,
    },
    category: 'technology',
    classification: 'Portfolio Website',
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': siteConfig.name,
      'application-name': siteConfig.name,
      'msapplication-TileColor': '#000000',
      'theme-color': '#ffffff',
    },
  };
}

/** Person + WebSite JSON-LD for homepage rich results. */
export function generateStructuredData() {
  const origin = siteOrigin();
  const siteUrl = `${origin}/`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    alternateName: ['Sueksit', 'Vachirakumthorn'],
    url: siteUrl,
    image: `${origin}/avatar.jpg`,
    description: siteConfig.description,
    jobTitle: 'Full-Stack Developer',
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Developer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Thailand',
      },
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    nationality: {
      '@type': 'Country',
      name: 'Thailand',
    },
    homeLocation: {
      '@type': 'Place',
      name: 'Thailand',
    },
    email: siteConfig.author.email,
    sameAs: [
      `https://linkedin.com/in/${siteConfig.author.linkedin}`,
      `https://github.com/${siteConfig.author.github}`,
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'React Native',
      'TypeScript',
      'Node.js',
      'Full-Stack Development',
      'Web Development',
    ],
    subjectOf: {
      '@type': 'WebSite',
      '@id': siteUrl,
      name: siteConfig.name,
      description: siteConfig.description,
    },
    '@id': siteUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteUrl,
    },
  };
}

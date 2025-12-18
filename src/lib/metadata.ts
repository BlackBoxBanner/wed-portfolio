import { Metadata } from 'next';

export const siteConfig = {
  name: 'Sueksit Vachirakumthorn',
  title: 'Sueksit Vachirakumthorn | Full-Stack Developer',
  description:
    'Full-Stack Developer passionate about building web and mobile applications that solve real-world problems. Specializing in React, Next.js, React Native, and modern web technologies.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://sueksit.vercel.app/',
  ogImage: '/og-image.jpg',
  keywords: [
    'Sueksit Vachirakumthorn',
    'Sueksit',
    'Vachirakumthorn',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'React Native Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Web Developer',
    'Mobile App Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Thai Developer',
    'Portfolio',
    'Sueksit Vachirakumthorn Portfolio',
    'Web Development Portfolio',
    'Software Developer Portfolio',
    'Thailand Developer',
    'Bangkok Developer',
    'Freelance Developer',
    'Remote Developer',
    'Tech Professional',
    'Programmer',
    'Software Development',
    'Web Design',
    'UI/UX Developer',
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
  url = siteConfig.url,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const ogImage = image.startsWith('http')
    ? image
    : `${siteConfig.url}${image}`;

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
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
    metadataBase: new URL(siteConfig.url),
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

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    alternateName: ['Sueksit', 'Vachirakumthorn'],
    url: siteConfig.url,
    image: `${siteConfig.url}/avatar.jpg`,
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
      'JavaScript',
      'Node.js',
      'Full-Stack Development',
      'Mobile App Development',
      'Web Development',
      'Frontend Development',
      'Backend Development',
      'Software Engineering',
      'UI/UX Development',
      'Database Management',
      'API Development',
    ],
    subjectOf: {
      '@type': 'WebSite',
      '@id': siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
    },
    '@id': siteConfig.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteConfig.url,
    },
  };
}

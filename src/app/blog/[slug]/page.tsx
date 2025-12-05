import { getBlogPost, getAllBlogPosts, formatDate } from '@/lib/blog/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import 'highlight.js/styles/github-dark.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light dark',
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || 'https://sueksit.vercel.app';
  const postUrl = `${baseUrl}/blog/${post.slug}`;
  const ogImageUrl = post.ogImage
    ? `${baseUrl}${post.ogImage}`
    : `${baseUrl}/blog/${post.slug}/opengraph-image`;

  return {
    title: `${post.title} | Sueksit Vachirakumthorn`,
    description: post.description,
    keywords: post.tags?.join(', '),
    authors: [{ name: post.author || 'Sueksit Vachirakumthorn', url: baseUrl }],
    creator: post.author || 'Sueksit Vachirakumthorn',
    publisher: 'Sueksit Vachirakumthorn',

    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      siteName: 'Sueksit Vachirakumthorn - Web Developer',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Sueksit Vachirakumthorn'],
      tags: post.tags,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
    },

    alternates: {
      canonical: postUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Additional SEO metadata
    applicationName: 'Sueksit Vachirakumthorn Portfolio',
    referrer: 'origin-when-cross-origin',
    verification: {
      // Add your verification codes here if you have them
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // yahoo: 'your-yahoo-verification-code',
    },
    category: 'Technology',
    classification: 'Blog Post',
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || 'https://sueksit.vercel.app';
  const postUrl = `${baseUrl}/blog/${post.slug}`;
  const ogImageUrl = post.ogImage
    ? `${baseUrl}${post.ogImage}`
    : `${baseUrl}/blog/${post.slug}/opengraph-image`;

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author || 'Sueksit Vachirakumthorn',
      url: baseUrl,
      jobTitle: 'Full-Stack Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance',
      },
      sameAs: [
        'https://linkedin.com/in/sueksit',
        'https://github.com/BlackBoxBanner',
      ],
    },
    publisher: {
      '@type': 'Person',
      name: 'Sueksit Vachirakumthorn',
      url: baseUrl,
      jobTitle: 'Full-Stack Developer',
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    url: postUrl,
    image: {
      '@type': 'ImageObject',
      url: ogImageUrl,
      width: 1200,
      height: 630,
    },
    keywords: post.tags?.join(', '),
    articleSection: 'Technology',
    inLanguage: 'en-US',
    wordCount: post.content.split(' ').length,
    genre: ['Technology', 'Web Development', 'Programming'],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto'>
          {/* Breadcrumb navigation for SEO */}
          <nav aria-label='Breadcrumb' className='mb-8'>
            <ol className='flex items-center space-x-2 text-sm text-muted-foreground'>
              <li>
                <Link href='/' className='hover:text-primary transition-colors'>
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href='/blog'
                  className='hover:text-primary transition-colors'
                >
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className='text-foreground' aria-current='page'>
                {post.title}
              </li>
            </ol>
          </nav>
          {/* Back to blog link */}
          <Link
            href='/blog'
            className='inline-flex items-center text-primary hover:underline mb-8'
          >
            ← Back to blog
          </Link>

          {/* Article header with semantic markup */}
          <header className='mb-8'>
            <div className='flex items-center justify-between mb-4'>
              <time
                className='text-sm text-muted-foreground'
                dateTime={post.date}
              >
                {formatDate(post.date)}
              </time>
              {post.tags && post.tags.length > 0 && (
                <div className='flex flex-wrap gap-2'>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className='inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary'
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <h1 className='text-4xl font-bold text-foreground mb-4'>
              {post.title}
            </h1>

            <p className='text-xl text-muted-foreground mb-4'>
              {post.description}
            </p>

            {post.author && (
              <address className='text-muted-foreground not-italic'>
                By <span className='font-medium'>{post.author}</span>
              </address>
            )}
          </header>

          {/* Divider */}
          <hr className='my-8' />

          {/* Article content */}
          <article className='prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted'>
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkFrontmatter],
                  rehypePlugins: [rehypeHighlight, rehypeSlug],
                },
              }}
            />
          </article>

          {/* Article footer */}
          <footer className='mt-12 pt-8 border-t border-border'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <span>Published on</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className='flex flex-wrap gap-2'>
                  <span className='text-sm text-muted-foreground'>Tags:</span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className='inline-flex items-center px-2 py-1 rounded text-xs bg-muted text-muted-foreground'
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

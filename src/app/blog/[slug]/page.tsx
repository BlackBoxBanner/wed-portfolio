import { getBlogPost, getAllBlogPosts, formatDate } from '@/lib/blog/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import 'highlight.js/styles/github-dark.css';
import { FolioBreadcrumb, FolioPageShell } from '@/components/folio-layout';
import { MdxAnchor } from '@/components/mdx-anchor';
import { siteOrigin } from '@/lib/metadata';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light dark',
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const base = siteOrigin();
  const postUrl = `${base}/blog/${post.slug}`;
  const ogImageUrl = post.ogImage
    ? `${base}${post.ogImage}`
    : `${base}/blog/${post.slug}/opengraph-image`;

  return {
    title: `${post.title} | Sueksit Vachirakumthorn`,
    description: post.description,
    ...(post.tags?.length ? { keywords: post.tags } : {}),
    authors: [
      { name: post.author || 'Sueksit Vachirakumthorn', url: `${base}/` },
    ],
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

    applicationName: 'Sueksit Vachirakumthorn Portfolio',
    referrer: 'origin-when-cross-origin',
    category: 'Technology',
    classification: 'Blog Post',
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const base = siteOrigin();
  const postUrl = `${base}/blog/${post.slug}`;
  const ogImageUrl = post.ogImage
    ? `${base}${post.ogImage}`
    : `${base}/blog/${post.slug}/opengraph-image`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author || 'Sueksit Vachirakumthorn',
      url: `${base}/`,
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
      url: `${base}/`,
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

      <FolioPageShell>
        <FolioBreadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        <Link
          href='/blog'
          className='inline-flex text-sm font-medium text-folio-brand hover:opacity-80 transition-opacity mb-10'
        >
          ← Back to blog
        </Link>

        <header className='mb-10 pb-10 border-b border-folio-border'>
          <div className='flex flex-wrap items-center justify-between gap-3 mb-4'>
            <time
              className='font-mono text-[11px] text-folio-muted tabular-nums'
              dateTime={post.date}
            >
              {formatDate(post.date)}
            </time>
            {post.tags && post.tags.length > 0 ? (
              <div className='flex flex-wrap gap-1.5'>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className='font-mono text-[10px] uppercase tracking-[0.08em] text-folio-brand border border-folio-border px-2 py-0.5 rounded-[3px]'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <h1 className='text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.03em] text-folio-fg mb-4'>
            {post.title}
          </h1>

          <p className='text-[15px] text-folio-muted leading-relaxed mb-4 max-w-3xl'>
            {post.description}
          </p>

          {post.author ? (
            <address className='text-[13px] text-folio-muted not-italic'>
              By{' '}
              <span className='text-folio-fg font-medium'>{post.author}</span>
            </address>
          ) : null}
        </header>

        <article
          className='prose-folio max-w-none'
          itemScope
          itemType='https://schema.org/BlogPosting'
        >
          <MDXRemote
            source={post.content}
            components={{ a: MdxAnchor }}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkFrontmatter],
                rehypePlugins: [rehypeHighlight, rehypeSlug],
              },
            }}
          />
        </article>

        <footer className='mt-14 pt-8 border-t border-folio-border'>
          <div className='flex flex-wrap items-start justify-between gap-6'>
            <div className='flex items-center gap-2 text-[13px] text-folio-muted'>
              <span>Published</span>
              <time className='font-mono tabular-nums' dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>
            {post.tags && post.tags.length > 0 ? (
              <div className='flex flex-wrap items-center gap-2'>
                <span className='text-[13px] text-folio-muted'>Tags</span>
                <div className='flex flex-wrap gap-1.5'>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className='font-mono text-[10px] uppercase tracking-[0.06em] border border-folio-border px-2 py-1 rounded-[3px] text-folio-muted'
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </footer>
      </FolioPageShell>
    </>
  );
}

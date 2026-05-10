import Link from 'next/link';
import { getAllBlogPosts, formatDate } from '@/lib/blog/utils';
import {
  generateMetadata as buildPageMetadata,
  siteOrigin,
} from '@/lib/metadata';
import {
  FolioBreadcrumb,
  FolioPageShell,
  FolioPageTitle,
} from '@/components/folio-layout';

export const metadata = buildPageMetadata({
  title: 'Blog | Sueksit Vachirakumthorn',
  description:
    'Thoughts, tutorials, and insights about web development, technology, and programming from Sueksit Vachirakumthorn.',
  url: `${siteOrigin()}/blog`,
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const base = siteOrigin();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: "Sueksit Vachirakumthorn's Blog",
    description:
      'Thoughts, tutorials, and insights about web development and technology',
    url: `${base}/blog`,
    author: {
      '@type': 'Person',
      name: 'Sueksit Vachirakumthorn',
      url: `${base}/`,
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `${base}/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author || 'Sueksit Vachirakumthorn',
      },
      keywords: post.tags?.join(', '),
    })),
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <FolioPageShell>
        <FolioBreadcrumb
          items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        />

        <FolioPageTitle
          eyebrow='Writing'
          title='Blog'
          description='Thoughts, tutorials, and insights about web development and technology.'
        />

        {posts.length === 0 ? (
          <p className='text-sm text-folio-muted text-center py-16'>
            No blog posts found.
          </p>
        ) : (
          <main>
            <div className='border border-folio-border bg-folio-border'>
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className='border-b border-folio-border last:border-b-0 bg-folio-bg p-7 hover:bg-folio-surface transition-colors'
                  itemScope
                  itemType='https://schema.org/BlogPosting'
                >
                  <div className='flex flex-col gap-3 max-w-3xl'>
                    <div className='flex flex-wrap items-center justify-between gap-3'>
                      <time
                        className='font-mono text-[11px] text-folio-muted tabular-nums'
                        dateTime={post.date}
                        itemProp='datePublished'
                      >
                        {formatDate(post.date)}
                      </time>
                      {post.tags && post.tags.length > 0 ? (
                        <div className='flex flex-wrap gap-1.5'>
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className='font-mono text-[10px] uppercase tracking-[0.08em] text-folio-brand border border-folio-border px-2 py-0.5 rounded-[3px]'
                              itemProp='keywords'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <Link href={`/blog/${post.slug}`} className='group'>
                      <h2
                        className='text-xl font-semibold tracking-[-0.02em] text-folio-fg group-hover:text-folio-brand transition-colors'
                        itemProp='headline'
                      >
                        {post.title}
                      </h2>
                    </Link>

                    <p
                      className='text-[15px] text-folio-muted leading-relaxed'
                      itemProp='description'
                    >
                      {post.description}
                    </p>

                    {post.author ? (
                      <address
                        className='text-[13px] text-folio-muted not-italic'
                        itemProp='author'
                        itemScope
                        itemType='https://schema.org/Person'
                      >
                        By <span itemProp='name'>{post.author}</span>
                      </address>
                    ) : null}

                    <Link
                      href={`/blog/${post.slug}`}
                      className='inline-flex items-center text-sm font-medium text-folio-brand hover:opacity-80 transition-opacity w-fit mt-1'
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read more →
                    </Link>
                    <meta
                      itemProp='url'
                      content={`${base}/blog/${post.slug}`}
                    />
                  </div>
                </article>
              ))}
            </div>
          </main>
        )}
      </FolioPageShell>
    </>
  );
}

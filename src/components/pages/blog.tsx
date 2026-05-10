import Link from 'next/link';
import { getAllBlogPosts, formatDate } from '@/lib/blog/utils';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className='font-mono text-[10px] uppercase tracking-[0.14em] text-folio-muted mb-12 flex items-center gap-3'>
      <span className='shrink-0'>{children}</span>
      <span className='h-px flex-1 bg-folio-border min-w-[2rem]' aria-hidden />
    </p>
  );
}

export default function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section id='blog' className='py-16 sm:py-20 border-t border-folio-border'>
      <SectionLabel>Writing</SectionLabel>
      {posts.length > 0 ? (
        <>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 border border-folio-border bg-folio-border gap-px'>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className='bg-folio-bg p-7 flex flex-col gap-3 text-inherit hover:bg-folio-surface transition-colors min-h-[180px]'
              >
                <p className='font-mono text-[10px] uppercase tracking-[0.12em] text-folio-brand'>
                  {post.tags?.[0] ?? 'Article'}
                </p>
                <p className='font-semibold text-base tracking-[-0.02em] leading-snug text-folio-fg'>
                  {post.title}
                </p>
                <p className='text-[13px] leading-relaxed text-folio-muted flex-1'>
                  {post.description}
                </p>
                <p className='font-mono text-[11px] text-folio-muted tabular-nums mt-auto'>
                  {formatDate(post.date)}
                </p>
              </Link>
            ))}
          </div>
          <div className='mt-10 text-center'>
            <Link
              href='/blog'
              className='inline-flex text-sm font-medium text-folio-fg border border-folio-border rounded-md px-5 py-2.5 hover:border-folio-muted transition-colors'
            >
              All articles
            </Link>
          </div>
        </>
      ) : (
        <p className='text-sm text-folio-muted'>
          No posts yet — check back soon.
        </p>
      )}
    </section>
  );
}

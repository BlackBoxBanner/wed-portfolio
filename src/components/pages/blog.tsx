import Link from 'next/link';
import { getAllBlogPosts, formatDate } from '@/lib/blog/utils';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 3); // Show only the 3 most recent posts

  return (
    <section id='blog' className='py-20 bg-muted/50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 text-primary mb-4'>
            <BookOpen className='w-6 h-6' />
            <span className='text-lg font-semibold'>Blog</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Latest Articles
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Sharing my thoughts, experiences, and insights about web
            development, technology, and more.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className='max-w-6xl mx-auto'>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className='bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group'
                >
                  <div className='flex flex-col h-full'>
                    <div className='flex items-center justify-between mb-3'>
                      <time className='text-sm text-muted-foreground'>
                        {formatDate(post.date)}
                      </time>
                      {post.tags && post.tags.length > 0 && (
                        <span className='inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary'>
                          {post.tags[0]}
                        </span>
                      )}
                    </div>

                    <h3 className='text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors'>
                      {post.title}
                    </h3>

                    <p className='text-muted-foreground text-sm leading-relaxed mb-4 flex-grow'>
                      {post.description}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className='inline-flex items-center text-primary hover:underline mt-auto'
                    >
                      Read more
                      <ArrowRight className='w-4 h-4 ml-1 transition-transform group-hover:translate-x-1' />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className='text-center mt-12'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors'
              >
                View All Articles
                <BookOpen className='w-4 h-4' />
              </Link>
            </div>
          </div>
        ) : (
          <div className='text-center py-12'>
            <BookOpen className='w-16 h-16 text-muted-foreground mx-auto mb-4' />
            <p className='text-muted-foreground'>
              No blog posts available yet.
            </p>
            <p className='text-sm text-muted-foreground mt-2'>
              Check back soon for new articles!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

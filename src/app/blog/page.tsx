import { getAllBlogPosts } from '@/lib/blog/utils';
import Link from 'next/link';
import { formatDate } from '@/lib/blog/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Sueksit Vachirakumthorn - Web Developer',
  description: 'Thoughts, tutorials, and insights about web development, technology, and programming from Sueksit Vachirakumthorn.',
  keywords: 'web development, programming, tutorials, Next.js, React, TypeScript, CSS, JavaScript, blog',
  authors: [{ name: 'Sueksit Vachirakumthorn' }],
  creator: 'Sueksit Vachirakumthorn',
  
  openGraph: {
    title: 'Blog | Sueksit Vachirakumthorn',
    description: 'Thoughts, tutorials, and insights about web development and technology.',
    url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://sueksit.vercel.app'}/blog`,
    siteName: 'Sueksit Vachirakumthorn - Web Developer',
    type: 'website',
    locale: 'en_US',
  },
  
  twitter: {
    card: 'summary',
    title: 'Blog | Sueksit Vachirakumthorn',
    description: 'Thoughts, tutorials, and insights about web development and technology.',
    creator: '@sueksitv', // Replace with your Twitter handle
  },
  
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL || 'https://sueksit.vercel.app'}/blog`,
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
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://sueksit.vercel.app';

  // Structured data for blog listing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Sueksit Vachirakumthorn's Blog",
    "description": "Thoughts, tutorials, and insights about web development and technology",
    "url": `${baseUrl}/blog`,
    "author": {
      "@type": "Person",
      "name": "Sueksit Vachirakumthorn",
      "url": baseUrl
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "url": `${baseUrl}/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author || "Sueksit Vachirakumthorn"
      },
      "keywords": post.tags?.join(', ')
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>
          
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Thoughts, tutorials, and insights about web development
            </p>
          </header>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts found.</p>
          </div>
        ) : (
          <main>
            <div className="grid gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <time 
                        className="text-sm text-muted-foreground"
                        dateTime={post.date}
                        itemProp="datePublished"
                      >
                        {formatDate(post.date)}
                      </time>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                              itemProp="keywords"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <h2 
                        className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                        itemProp="headline"
                      >
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p 
                      className="text-muted-foreground leading-relaxed"
                      itemProp="description"
                    >
                      {post.description}
                    </p>
                    
                    {post.author && (
                      <address 
                        className="text-sm text-muted-foreground not-italic"
                        itemProp="author"
                        itemScope
                        itemType="https://schema.org/Person"
                      >
                        By <span itemProp="name">{post.author}</span>
                      </address>
                    )}
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:underline"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read more →
                    </Link>
                    <meta itemProp="url" content={`${baseUrl}/blog/${post.slug}`} />
                  </div>
                </article>
              ))}
            </div>
          </main>
        )}
      </div>
    </div>
    </>
  );
}
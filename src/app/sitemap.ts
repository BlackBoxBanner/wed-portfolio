import type { MetadataRoute } from 'next';
import { siteOrigin } from '@/lib/metadata';
import { getAllBlogPosts } from '@/lib/blog/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteOrigin();
  const lastMod = new Date();
  const blogPosts = getAllBlogPosts();

  // Omit hash-only URLs — crawlers dedupe them to "/" and clutter the sitemap.
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/cv`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

import type { MetadataRoute } from 'next';
import { siteOrigin } from '@/lib/metadata';

export default function robots(): MetadataRoute.Robots {
  const host = siteOrigin();
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}

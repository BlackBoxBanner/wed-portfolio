import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
  image?: string;
  ogImage?: string;
  content: string;
}

const BLOG_CONTENT_PATH = path.join(process.cwd(), 'content/blog');

export function getAllBlogPosts(): BlogPost[] {
  try {
    const files = fs.readdirSync(BLOG_CONTENT_PATH);
    const posts = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => {
        const filePath = path.join(BLOG_CONTENT_PATH, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug: file.replace('.mdx', ''),
          title: data.title || '',
          description: data.description || '',
          date: data.date || '',
          author: data.author,
          tags: data.tags || [],
          image: data.image,
          ogImage: data.ogImage,
          content,
        } as BlogPost;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_CONTENT_PATH, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author,
      tags: data.tags || [],
      image: data.image,
      ogImage: data.ogImage,
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.tags?.includes(tag));
}

export function getAllTags(): string[] {
  const allPosts = getAllBlogPosts();
  const tags = new Set<string>();

  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

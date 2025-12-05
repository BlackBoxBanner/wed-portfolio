import { ImageResponse } from 'next/og'
import { getBlogPost } from '@/lib/blog/utils'
 
// Image metadata
export const alt = 'Blog post with title, description, and details by Sueksit Vachirakumthorn'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  // If post has a custom ogImage, redirect to that image
  if (post?.ogImage) {
    const response = await fetch(new URL(post.ogImage, process.env.NEXT_PUBLIC_APP_URL || 'https://localhost:3000'))
    return new Response(response.body, {
      headers: {
        'Content-Type': 'image/jpeg',
      },
    })
  }
  
  if (!post) {
    // Fallback if post is not found
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 64,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'system-ui',
            textAlign: 'center',
          }}
        >
          Blog Post Not Found
        </div>
      ),
      { ...size }
    )
  }
 
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '1000px',
            width: '100%',
          }}
        >
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px',
              lineHeight: '1.2',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            {post.title}
          </h1>
          
          {post.description && (
            <p
              style={{
                fontSize: '28px',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '32px',
                lineHeight: '1.4',
                maxWidth: '800px',
              }}
            >
              {post.description}
            </p>
          )}
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            {post.author && (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                By {post.author}
              </span>
            )}
            {post.date && (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginTop: '24px',
                justifyContent: 'center',
              }}
            >
              {post.tags.slice(0, 4).map((tag, index) => (
                <span
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '500',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}
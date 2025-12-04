import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Sueksit Vachirakumthorn'
    const subtitle = searchParams.get('subtitle') || 'Full-Stack Developer specializing in React, Next.js & Mobile Development'
    const type = searchParams.get('type') || 'default' // 'blog', 'default'
    const date = searchParams.get('date')
    const tags = searchParams.get('tags')?.split(',') || []

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: type === 'blog' ? '#0a0a0a' : '#000',
            backgroundImage: type === 'blog' 
              ? 'linear-gradient(45deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)'
              : 'linear-gradient(45deg, #000 0%, #1a1a1a 100%)',
            fontSize: 60,
            fontWeight: 700,
            padding: 60,
          }}
        >
          {type === 'blog' && (
            <div
              style={{
                position: 'absolute',
                top: 40,
                left: 60,
                color: '#666',
                fontSize: 24,
                fontWeight: 500,
              }}
            >
              📝 Blog Post
            </div>
          )}
          
          {date && (
            <div
              style={{
                position: 'absolute',
                top: 40,
                right: 60,
                color: '#666',
                fontSize: 20,
                fontWeight: 400,
              }}
            >
              {new Date(date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          )}

          <div
            style={{
              backgroundImage: 'linear-gradient(90deg, #fff 0%, #e5e5e5 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontSize: type === 'blog' ? 52 : 72,
              fontWeight: 900,
              marginBottom: 30,
              textAlign: 'center',
              lineHeight: 1.1,
              maxWidth: '90%',
            }}
          >
            {title}
          </div>
          
          <div
            style={{
              color: '#a0a0a0',
              fontSize: type === 'blog' ? 28 : 36,
              fontWeight: 400,
              textAlign: 'center',
              maxWidth: '85%',
              lineHeight: 1.2,
              marginBottom: tags.length > 0 ? 30 : 0,
            }}
          >
            {subtitle}
          </div>

          {tags.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 15,
                justifyContent: 'center',
                marginBottom: 20,
              }}
            >
              {tags.slice(0, 4).map((tag, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ccc',
                    padding: '8px 16px',
                    borderRadius: 20,
                    fontSize: 18,
                    fontWeight: 500,
                  }}
                >
                  #{tag.trim()}
                </div>
              ))}
            </div>
          )}
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#666',
              fontSize: type === 'blog' ? 20 : 24,
              marginTop: 'auto',
            }}
          >
            {type === 'blog' ? '🚀 sueksit.vercel.app' : '🚀 Building digital experiences that matter'}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
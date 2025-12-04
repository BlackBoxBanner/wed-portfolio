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
            position: 'relative',
          }}
        >
          {/* Background Image */}
          <img
            src={`${process.env.NEXT_PUBLIC_APP_URL || 'https://sueksit.vercel.app'}/graduation-bg.jpg`}
            alt="Background"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          
          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              background: type === 'blog' 
                ? 'linear-gradient(45deg, rgba(10, 10, 10, 0.85) 0%, rgba(26, 26, 26, 0.8) 50%, rgba(42, 42, 42, 0.75) 100%)'
                : 'linear-gradient(45deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 26, 0.7) 100%)',
            }}
          />
          
          {/* Content */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 60,
              fontWeight: 700,
              padding: 60,
              zIndex: 10,
            }}
          >
          {type === 'blog' && (
            <div
              style={{
                position: 'absolute',
                top: 40,
                left: 60,
                color: '#fff',
                fontSize: 24,
                fontWeight: 500,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
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
                color: '#fff',
                fontSize: 20,
                fontWeight: 400,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
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
              color: '#fff',
              fontSize: type === 'blog' ? 52 : 72,
              fontWeight: 900,
              marginBottom: 30,
              textAlign: 'center',
              lineHeight: 1.1,
              maxWidth: '90%',
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            {title}
          </div>
          
          <div
            style={{
              color: '#e0e0e0',
              fontSize: type === 'blog' ? 28 : 36,
              fontWeight: 400,
              textAlign: 'center',
              maxWidth: '85%',
              lineHeight: 1.2,
              marginBottom: tags.length > 0 ? 30 : 0,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
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
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: 20,
                    fontSize: 18,
                    fontWeight: 500,
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
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
              color: '#fff',
              fontSize: type === 'blog' ? 20 : 24,
              marginTop: 'auto',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            }}
          >
            {type === 'blog' ? '🚀 sueksit.vercel.app' : '🚀 Building digital experiences that matter'}
          </div>
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
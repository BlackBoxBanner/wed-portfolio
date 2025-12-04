import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  try {
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
            backgroundColor: '#000',
            backgroundImage: 'linear-gradient(45deg, #000 0%, #1a1a1a 100%)',
            fontSize: 60,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              backgroundImage: 'linear-gradient(90deg, #fff 0%, #e5e5e5 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontSize: 72,
              fontWeight: 900,
              marginBottom: 30,
            }}
          >
            Sueksit Vachirakumthorn
          </div>
          <div
            style={{
              color: '#a0a0a0',
              fontSize: 36,
              fontWeight: 400,
              textAlign: 'center',
              maxWidth: '80%',
              lineHeight: 1.2,
            }}
          >
            Full-Stack Developer specializing in React, Next.js & Mobile Development
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 40,
              color: '#666',
              fontSize: 24,
            }}
          >
            🚀 Building digital experiences that matter
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
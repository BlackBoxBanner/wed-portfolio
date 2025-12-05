import { ImageResponse } from 'next/og';

export const alt = 'CV - Sueksit Vachirakumthorn - Full-Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui',
        textAlign: 'center',
        padding: '40px',
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: '20px' }}>
        Curriculum Vitae
      </div>
      <div style={{ fontSize: 36 }}>Sueksit Vachirakumthorn</div>
      <div style={{ fontSize: 28, marginTop: '20px', opacity: 0.9 }}>
        Full-Stack Developer
      </div>
    </div>,
    {
      ...size,
    },
  );
}

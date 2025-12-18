'use client';

import { useEffect, useState } from 'react';

interface Spore {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  layer: 'background' | 'foreground';
}

export default function FloatingSpores() {
  const [spores, setSpores] = useState<Spore[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Create ambient orb-like spores similar to your profile decoration
    const colors = [
      'rgba(99, 102, 241, 0.1)', // Indigo
      'rgba(139, 92, 246, 0.1)', // Violet
      'rgba(59, 130, 246, 0.1)', // Blue - like your decoration
      'rgba(16, 185, 129, 0.1)', // Emerald
      'rgba(245, 158, 11, 0.1)', // Amber
      'rgba(239, 68, 68, 0.1)', // Red
      'rgba(168, 85, 247, 0.1)', // Purple
      'rgba(34, 197, 94, 0.1)', // Green
    ];

    const generateSpores = () => {
      const newSpores: Spore[] = [];

      // Large ambient orbs (foreground)
      for (let i = 0; i < 4; i++) {
        newSpores.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 120 + 80, // Much bigger sizes (80-200px)
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 25 + 20, // Slower, more ambient movement (20-45s)
          delay: Math.random() * 15,
          layer: 'foreground',
        });
      }

      setSpores(newSpores);
    };

    generateSpores();
  }, []);

  if (!mounted) return null;

  return (
    <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>
      {spores.map((spore) => (
        <div
          key={spore.id}
          className={`absolute rounded-full animate-float-gentle ${
            spore.layer === 'foreground' ? 'blur-xl' : 'blur-sm opacity-50'
          }`}
          style={{
            left: `${spore.x}%`,
            top: `${spore.y}%`,
            width: `${spore.size}px`,
            height: `${spore.size}px`,
            backgroundColor: spore.color,
            animationDuration: `${spore.duration}s`,
            animationDelay: `${spore.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

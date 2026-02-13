'use client';

import { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  bgImage?: string;
  bgColor?: string;
  speed?: number;
  overlay?: string;
  className?: string;
  minHeight?: string;
}

export default function ParallaxSection({
  children,
  bgImage,
  bgColor,
  speed = 0.3,
  overlay = 'bg-primary-950/80',
  className = '',
  minHeight = 'auto',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.bottom > 0 && rect.top < windowHeight) {
        setOffset(rect.top * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundColor: bgColor,
            transform: `translateY(${offset}px) scale(1.15)`,
          }}
        />
      )}
      {overlay && <div className={`absolute inset-0 ${overlay}`} />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

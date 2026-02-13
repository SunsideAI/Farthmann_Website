'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'zoom-in' | 'zoom-out' | 'flip-up' | 'blur-in';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
  stagger?: number;
  staggerIndex?: number;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = '',
  once = true,
  stagger = 0,
  staggerIndex = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const totalDelay = delay + stagger * staggerIndex;

  const baseStyles: React.CSSProperties = {
    transitionProperty: 'opacity, transform, filter',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    transitionDelay: `${totalDelay}ms`,
  };

  const hiddenStyles: Record<AnimationType, React.CSSProperties> = {
    'fade-up': { opacity: 0, transform: 'translateY(50px)' },
    'fade-down': { opacity: 0, transform: 'translateY(-50px)' },
    'fade-left': { opacity: 0, transform: 'translateX(-50px)' },
    'fade-right': { opacity: 0, transform: 'translateX(50px)' },
    'fade': { opacity: 0 },
    'zoom-in': { opacity: 0, transform: 'scale(0.85)' },
    'zoom-out': { opacity: 0, transform: 'scale(1.15)' },
    'flip-up': { opacity: 0, transform: 'perspective(600px) rotateX(15deg) translateY(30px)' },
    'blur-in': { opacity: 0, filter: 'blur(12px)', transform: 'translateY(20px)' },
  };

  const visibleStyles: React.CSSProperties = {
    opacity: 1,
    transform: 'translateY(0) translateX(0) scale(1) rotateX(0deg)',
    filter: 'blur(0px)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseStyles,
        ...(isVisible ? visibleStyles : hiddenStyles[animation]),
      }}
    >
      {children}
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

const slides = [
  {
    heading: "Ihr Immobilienexperte in Ostwestfalen-Lippe",
    subtitle: "Seit über 30 Jahren – Makler, Gutachter, Partner.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
  },
  {
    heading: "DEKRA-zertifizierte Immobilienbewertung",
    subtitle: "Fundierte Kurzgutachten für wohnwirtschaftliche Objekte.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
  },
  {
    heading: "Zwei Standorte in OWL",
    subtitle: "Persönliche Beratung in Werther und Borgholzhausen.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80",
  },
];

const SLIDE_DURATION = 8000;
const PROGRESS_CIRCUMFERENCE = 2 * Math.PI * 19; // ≈ 119.38

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setSlideKey((prev) => prev + 1);
  }, []);

  const advanceSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setSlideKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(advanceSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [advanceSlide, slideKey]);

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Ken Burns keyframe + progress ring animation */}
      <style jsx>{`
        @keyframes kenburns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        @keyframes progressRing {
          from {
            stroke-dashoffset: ${PROGRESS_CIRCUMFERENCE};
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Slide images */}
      {slides.map((slide, index) => (
        <div
          key={`${index}-${slideKey}`}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: index === currentSlide ? 1 : 0 }}
          aria-hidden={index !== currentSlide}
        >
          <div
            className="absolute inset-0"
            style={
              index === currentSlide
                ? {
                    animation: "kenburns 8s ease-out forwards",
                  }
                : undefined
            }
          >
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/70 to-primary-900/40" />

      {/* Text content */}
      <div className="relative z-10 container-custom flex items-center min-h-[600px] lg:min-h-[700px]">
        <div className="max-w-2xl py-24 lg:py-32">
          {/* Badge */}
          <div
            key={`badge-${slideKey}`}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-accent-400 mb-6"
            style={{
              animation: "fadeInUp 0.6s ease-out forwards",
              opacity: 0,
            }}
          >
            <Award size={16} />
            <span>DEKRA-zertifizierter Sachverständiger</span>
          </div>

          {/* Heading */}
          <h1
            key={`heading-${slideKey}`}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{
              animation: "fadeInUp 0.6s 0.15s ease-out forwards",
              opacity: 0,
            }}
          >
            {slides[currentSlide].heading}
          </h1>

          {/* Subtitle */}
          <p
            key={`subtitle-${slideKey}`}
            className="text-lg md:text-xl text-primary-100 mb-8 max-w-xl"
            style={{
              animation: "fadeInUp 0.6s 0.3s ease-out forwards",
              opacity: 0,
            }}
          >
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            key={`cta-${slideKey}`}
            className="flex flex-wrap gap-4"
            style={{
              animation: "fadeInUp 0.6s 0.45s ease-out forwards",
              opacity: 0,
            }}
          >
            <Link
              href="/bewertung"
              className="btn-accent inline-flex items-center gap-2"
            >
              Kostenlose Bewertung
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/immobilien"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-all duration-300 text-sm"
            >
              Immobilien entdecken
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators (right side, vertically centered) */}
      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-6">
        {slides.map((_, index) => {
          const isActive = index === currentSlide;
          const label = String(index + 1).padStart(2, "0");

          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative flex items-center justify-center w-11 h-11 group"
              aria-label={`Slide ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
            >
              {isActive ? (
                <>
                  {/* Progress ring SVG */}
                  <svg
                    key={`ring-${slideKey}`}
                    className="absolute inset-0 -rotate-90"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    {/* Background circle */}
                    <circle
                      cx="22"
                      cy="22"
                      r="19"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="2"
                    />
                    {/* Animated progress circle */}
                    <circle
                      cx="22"
                      cy="22"
                      r="19"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray={PROGRESS_CIRCUMFERENCE}
                      strokeDashoffset={PROGRESS_CIRCUMFERENCE}
                      strokeLinecap="round"
                      style={{
                        animation: `progressRing ${SLIDE_DURATION}ms linear forwards`,
                      }}
                    />
                  </svg>
                  <span className="relative text-sm font-semibold text-white">
                    {label}
                  </span>
                </>
              ) : (
                <span className="text-sm font-medium text-white/40 group-hover:text-white/70 transition-colors duration-200">
                  {label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

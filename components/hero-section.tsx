'use client'

import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Image with Edge Lighting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bread.jpg"
          alt="Artisan sourdough with edge lighting"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-8">
          {/* Logo/Brand Name */}
          <div>
            <p className="text-sm md:text-base font-display font-bold text-primary tracking-widest uppercase">
              Small Batch Sourdough
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="hero-text text-primary leading-tight">
            Toast Face Bread Co
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-muted font-body max-w-xl leading-relaxed">
            Fresh out of the oven. Downtown Edmonton. <span className="text-primary font-semibold">Order on Instagram.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#menu"
              className="button-primary"
            >
              This Week's Menu
            </Link>
            <a
              href="https://instagram.com/toastfacebreadco"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              @toastfacebreadco
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </header>
  )
}

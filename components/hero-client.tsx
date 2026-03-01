'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function HeroClient() {
  const [menuButtonHovered, setMenuButtonHovered] = useState(false)
  const [instagramButtonHovered, setInstagramButtonHovered] = useState(false)

  return (
    <header style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', paddingTop: '4rem', backgroundColor: '#F5F0E8' }}>
      {/* Subtle background element */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%', zIndex: 0, opacity: 0.4 }}>
        <Image
          src="/hero-bread.jpg"
          alt="Artisan sourdough background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center right' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, rgba(245,240,232,0.1) 0%, rgba(245,240,232,0.95) 100%)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '600px', margin: '0 auto', padding: '4rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', color: '#D4A574', textTransform: 'uppercase', marginBottom: '2rem' }}>
          {'★'} SMALL BATCH SOURDOUGH
        </p>
        
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 1.1, color: '#6B4423', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Toast Face Bread Co
        </h1>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.05rem, 2vw, 1.4rem)', color: '#9E8B7E', maxWidth: '45ch', lineHeight: 1.7, marginBottom: '3rem', fontWeight: 400 }}>
          Fresh sourdough delivered every week, right out of the oven. Downtown Edmonton. Order on Instagram.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '280px' }}>
          <Link
            href="#menu"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', padding: '1rem 1.75rem', backgroundColor: menuButtonHovered ? '#8B5A3C' : '#6B4423', color: '#F5F0E8', display: 'block', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
            onMouseEnter={() => setMenuButtonHovered(true)}
            onMouseLeave={() => setMenuButtonHovered(false)}
          >
            View This Week's Menu
          </Link>
          <a
            href="https://www.instagram.com/toastfacebreadco"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', padding: '1rem 1.75rem', border: '2.5px solid #6B4423', color: instagramButtonHovered ? '#F5F0E8' : '#6B4423', backgroundColor: instagramButtonHovered ? '#6B4423' : 'transparent', display: 'block', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
            onMouseEnter={() => setInstagramButtonHovered(true)}
            onMouseLeave={() => setInstagramButtonHovered(false)}
          >
            Order @toastfacebreadco
          </a>
        </div>

        <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#D4A574' }} />
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.15em', color: '#D4A574', textTransform: 'uppercase', margin: 0 }}>
            Est. 2022
          </p>
        </div>
      </div>
    </header>
  )
}

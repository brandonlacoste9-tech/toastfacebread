'use client'

import Link from 'next/link'

export function ContactSection() {
  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title mb-6">Order & Connect</h2>

        <p className="text-lg md:text-2xl font-body text-muted mb-12 leading-relaxed max-w-2xl mx-auto">
          Order through Instagram DM. Payment via e-transfer. Fresh pickup downtown Edmonton.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="https://instagram.com/toastfacebreadco"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            DM @toastfacebreadco
          </a>

          <a
            href="https://instagram.com/toastfacebreadco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent font-display font-bold uppercase tracking-wider transition-colors text-lg"
          >
            Follow for Updates →
          </a>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 pt-12 border-t-2 border-primary/20">
          <p className="text-sm text-muted font-display uppercase tracking-widest mb-4">
            Based in
          </p>
          <p className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
            Downtown Edmonton
          </p>
          <p className="text-muted font-body">Alberta, Canada</p>
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 bg-primary text-cream border-t-4 border-accent">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="font-display font-bold text-2xl mb-2">
              Toast Face Bread Co
            </h3>
            <p className="text-cream/80 font-body">
              Small batch sourdough, downtown Edmonton
            </p>
          </div>

          <div className="flex gap-6 items-center">
            <a
              href="https://instagram.com/toastfacebreadco"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors font-display font-bold uppercase tracking-wider"
            >
              Instagram
            </a>
            <span className="text-cream/40">•</span>
            <a
              href="#menu"
              className="hover:text-accent transition-colors font-display font-bold uppercase tracking-wider"
            >
              Menu
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cream/20">
          <p className="text-cream/60 text-sm font-body">
            © 2024 Toast Face Bread Co. All rights reserved. Est. 2022.
          </p>
        </div>
      </div>
    </footer>
  )
}

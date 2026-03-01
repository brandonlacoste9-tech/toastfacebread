import type { Metadata, Viewport } from 'next'
import { Crimson_Text, Space_Mono } from 'next/font/google'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-display',
})

const crimsonText = Crimson_Text({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Toast Face Bread Co | Artisan Sourdough & Small Batch Brunch',
  description:
    'Premium artisan brunch boxes delivered in downtown Edmonton. Small batch sourdough, fresh boules, focaccia, and bagels. Order fresh out of the oven. Est. 2022.',
  keywords: [
    'sourdough Edmonton',
    'artisan bread',
    'Edmonton bakery',
    'brunch delivery Edmonton',
    'artisan boule Edmonton',
    'small batch bread',
    'downtown Edmonton bakery',
    'fresh bread delivery',
    'focaccia Edmonton',
    'local Edmonton bakery',
  ],
  openGraph: {
    title: 'Toast Face Bread Co | Artisan Sourdough',
    description: 'Premium artisan brunch boxes delivered in downtown Edmonton.',
    type: 'website',
    url: 'https://toastfacebreadco.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6B4423',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${spaceMono.variable} ${crimsonText.variable} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}

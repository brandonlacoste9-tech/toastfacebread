import { HeroSection } from '@/components/hero-section'
import { WeeklyMenuSection } from '@/components/weekly-menu'
import { ProductGallery } from '@/components/product-gallery'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <WeeklyMenuSection />
      <ProductGallery />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

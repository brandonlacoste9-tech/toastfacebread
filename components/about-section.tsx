'use client'

export function AboutSection() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title mb-6 sm:mb-8">About Toast Face Bread Co</h2>

        <div className="space-y-6 sm:space-y-8 font-body text-base sm:text-lg leading-relaxed text-muted">
          <p>
            Based in downtown Edmonton, Toast Face Bread Co brings small-batch, artisan sourdough to your table. Every boule, focaccia, and bagel is made with intention—locally sourced when possible, fermented low and slow for maximum flavor.
          </p>

          <p>
            We're a playful take on the confidence of Wu-Tang Clan meets the warmth of a neighborhood bakery. Every loaf carries the grit of genuine craft and the golden warmth of something made with care.
          </p>

          <p>
            Fresh out of the oven every week. Order through Instagram, pay via e-transfer, and taste the difference that small-batch sourdough makes.
          </p>

          <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-primary/5 border-l-4 border-primary">
            <p className="font-display font-bold text-primary text-base sm:text-lg uppercase tracking-wider mb-2">
              Est. 2022
            </p>
            <p className="text-foreground font-semibold text-sm sm:text-base">
              Small batch sourdough culture, Edmonton
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

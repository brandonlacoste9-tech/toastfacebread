'use client'

import Image from 'next/image'

export function ProductGallery() {
  const products = [
    {
      name: 'Boule',
      description: 'Classic round artisan loaf. Plain or with inclusions.',
      image: '/brunch-box.jpg',
    },
    {
      name: 'Focaccia',
      description: 'Crispy exterior, pillowy crumb. Various toppings.',
      image: '/focaccia-detail.jpg',
    },
    {
      name: 'Bagels',
      description: 'Mix and match your favorites. Traditional New York style.',
      image: '/hero-bread.jpg',
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">Our Products</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* Image Container with Edge Lighting Effect */}
              <div className="relative h-80 md:h-96 mb-6 overflow-hidden bg-muted/20">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={85}
                />
                {/* Shadow overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Product Info */}
              <h3 className="font-display font-bold text-2xl text-primary mb-2">
                {product.name}
              </h3>
              <p className="text-muted font-body text-lg leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Toast Face Bread Co',
    image: 'https://toastfacebreadco.com/hero-bread.jpg',
    description: 'Premium artisan brunch boxes with small batch sourdough, fresh boules, focaccia, and bagels.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Downtown Edmonton',
      addressLocality: 'Edmonton',
      addressRegion: 'AB',
      postalCode: '',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.5461,
      longitude: -113.4938,
    },
    url: 'https://toastfacebreadco.com',
    sameAs: ['https://instagram.com/toastfacebreadco'],
    priceRange: '$$$',
    areaServed: {
      '@type': 'City',
      name: 'Edmonton',
      '@context': 'https://schema.org',
    },
    foundingDate: '2022',
    serviceType: 'Food & Beverage / Bakery',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      url: 'https://instagram.com/toastfacebreadco',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

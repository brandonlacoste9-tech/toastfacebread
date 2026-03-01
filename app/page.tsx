import Image from 'next/image'
import Link from 'next/link'

const menu = [
  {
    name: 'Boules',
    price: '$10 Basic / $12 Inclusion',
    items: ['Cheddar Jalapeno', 'Cheddar Dill', 'Sundried Tomato Parm', 'Cranberry Walnut', 'Olive Lemon Thyme & Parm'],
  },
  {
    name: 'Focaccia',
    price: '$12 – $15',
    items: ['Plain', 'Tomato Pesto Mozza', 'Cinnamon Roll', 'Rosemary'],
  },
  {
    name: 'Bagels — Mix & Match',
    price: '$15 for 6 / $28 for 12',
    items: ['Plain', 'Cheddar Jalapeno', 'Everything', 'Sesame', 'Poppyseed', 'Cinnamon Crunch'],
  },
  {
    name: 'Guest Duo',
    price: 'Ask for this week\'s special',
    items: ['Hot Honey & Feta', "Za'atar & Olive Oil"],
  },
]

export default function Home() {
  return (
    <main style={{ backgroundColor: '#F5F0E8', color: '#1a1a1a', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(245,240,232,0.95)', borderBottom: '1px solid rgba(107,68,35,0.15)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', color: '#6B4423', textTransform: 'uppercase' }}>
          Toast Face Bread Co
        </span>
        <a
          href="https://www.instagram.com/toastfacebreadco"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', color: '#6B4423', textTransform: 'uppercase', textDecoration: 'none' }}
        >
          Order via IG
        </a>
      </nav>

      {/* HERO */}
      <header style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '4rem' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/hero-bread.jpg"
            alt="Artisan sourdough loaf with dramatic edge lighting"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            quality={90}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(245,240,232,0.95) 0%, rgba(245,240,232,0.85) 40%, rgba(245,240,232,0.3) 100%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '960px', margin: '0 auto', padding: '4rem 1.5rem' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.25em', color: '#D4A574', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Small Batch Sourdough — Est. 2022
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 1.05, color: '#6B4423', marginBottom: '1.5rem', maxWidth: '14ch' }}>
            Toast Face Bread Co
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', color: '#9E8B7E', maxWidth: '42ch', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Fresh out of the oven every week. Downtown Edmonton. Order through Instagram, pay via e-transfer.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link
              href="#menu"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', padding: '0.875rem 1.75rem', backgroundColor: '#6B4423', color: '#F5F0E8', display: 'inline-block' }}
            >
              This Week's Menu
            </Link>
            <a
              href="https://www.instagram.com/toastfacebreadco"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', padding: '0.875rem 1.75rem', border: '2px solid #6B4423', color: '#6B4423', display: 'inline-block' }}
            >
              @toastfacebreadco
            </a>
          </div>
        </div>
      </header>

      {/* MENU */}
      <section id="menu" style={{ padding: 'clamp(4rem, 10vw, 7rem) 1.5rem', backgroundColor: '#F5F0E8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.25em', color: '#D4A574', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Fresh weekly
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#6B4423', marginBottom: '3.5rem', lineHeight: 1.1 }}>
            This Week's Menu
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '3rem' }}>
            {menu.map((cat, i) => (
              <div key={i}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: '#6B4423', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {cat.name}
                </h3>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: '#D4A574', marginBottom: '1rem' }}>
                  {cat.price}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {cat.items.map((item, j) => (
                    <li key={j} style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: '#9E8B7E', lineHeight: 1.7 }}>
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', padding: '2rem', borderLeft: '4px solid #D4A574', backgroundColor: 'rgba(212,165,116,0.08)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', color: '#6B4423', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              How to Order
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: '#9E8B7E', lineHeight: 1.7 }}>
              DM <strong style={{ color: '#6B4423' }}>@toastfacebreadco</strong> on Instagram to place your order. Payment via e-transfer. Pickup downtown Edmonton.
            </p>
          </div>
        </div>
      </section>

      {/* BRUNCH BOX */}
      <section style={{ padding: 'clamp(4rem, 10vw, 7rem) 1.5rem', backgroundColor: '#EDE8DF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.25em', color: '#D4A574', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Signature offering
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#6B4423', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              The. Brunch. Box.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', color: '#9E8B7E', lineHeight: 1.7, marginBottom: '2rem' }}>
              Sourdough bagels mixed & matched, paired with smoked salmon, cream cheese, capers, cucumber, red onion, lemon — and everything in between. Perfect for brunch, events, or a serious Saturday morning.
            </p>
            <a
              href="https://www.instagram.com/toastfacebreadco"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', padding: '0.875rem 1.75rem', backgroundColor: '#6B4423', color: '#F5F0E8', display: 'inline-block' }}
            >
              Order Your Box
            </a>
          </div>
          <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: '2px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(107,68,35,0.25)' }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QTUImbcSmp8Fuh3o9tBNJpidfFzvoG.png"
              alt="The Brunch Box - sourdough bagels with smoked salmon and all the fixings"
              fill
              style={{ objectFit: 'cover' }}
              quality={90}
            />
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section style={{ padding: 'clamp(4rem, 10vw, 7rem) 1.5rem', backgroundColor: '#F5F0E8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.25em', color: '#D4A574', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Made fresh
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#6B4423', marginBottom: '3.5rem', lineHeight: 1.1 }}>
            Our Products
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uqfKnugGed2H64w29yd5G99akFMkXL.png', alt: 'Artisan boules and bagels', label: 'Boules & Bagels' },
              { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HTbTijF9e8Qeb4HWuMuz93X9AQX1kg.png', alt: 'Fresh out of the oven weekly menu', label: 'Weekly Menu' },
              { src: '/focaccia-detail.jpg', alt: 'Artisan focaccia with rosemary', label: 'Focaccia' },
            ].map((p, i) => (
              <div key={i} style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', boxShadow: '0 8px 30px rgba(107,68,35,0.15)' }}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  quality={85}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem', background: 'linear-gradient(to top, rgba(107,68,35,0.85), transparent)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', color: '#F5F0E8', textTransform: 'uppercase' }}>
                    {p.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: 'clamp(4rem, 10vw, 7rem) 1.5rem', backgroundColor: '#EDE8DF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.25em', color: '#D4A574', textTransform: 'uppercase', marginBottom: '1rem' }}>
            The story
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#6B4423', lineHeight: 1.1, marginBottom: '2rem' }}>
            About Us
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', color: '#9E8B7E', lineHeight: 1.75 }}>
              Toast Face Bread Co is a small-batch artisan sourdough bakery based in downtown Edmonton. Every loaf is made with intention — slow fermented, locally sourced where possible, baked with the confidence of someone who grew up in a bakery and listens to Wu-Tang.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', color: '#9E8B7E', lineHeight: 1.75 }}>
              The name is a playful nod to Ghostface Killah. The bread is no joke. Small batches mean quality over quantity — every week we drop a fresh menu and it sells out fast.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', color: '#9E8B7E', lineHeight: 1.75 }}>
              Order on Instagram, pay via e-transfer, and pick up downtown. That's it. No middleman, no fluff — just really good bread.
            </p>
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ width: '48px', height: '2px', backgroundColor: '#D4A574' }} />
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.2em', color: '#6B4423', textTransform: 'uppercase' }}>
              Edmonton, Alberta — Est. 2022
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: 'clamp(4rem, 10vw, 7rem) 1.5rem', backgroundColor: '#6B4423', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.25em', color: '#D4A574', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Ready to order?
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#F5F0E8', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Order & Connect
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', color: 'rgba(245,240,232,0.75)', lineHeight: 1.7, marginBottom: '3rem' }}>
            Slide into our DMs on Instagram to place your order. Payment via e-transfer. Fresh pickup downtown Edmonton weekly.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a
              href="https://www.instagram.com/toastfacebreadco"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', padding: '1rem 2rem', backgroundColor: '#D4A574', color: '#1a1a1a', display: 'inline-block' }}
            >
              DM @toastfacebreadco
            </a>
            <a
              href="https://www.instagram.com/toastfacebreadco"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', padding: '1rem 2rem', border: '2px solid rgba(245,240,232,0.5)', color: '#F5F0E8', display: 'inline-block' }}
            >
              Follow for Updates
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '2.5rem 1.5rem', backgroundColor: '#3d2510', borderTop: '3px solid #D4A574' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#F5F0E8', marginBottom: '0.25rem' }}>
              Toast Face Bread Co
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(245,240,232,0.6)' }}>
              Small batch sourdough — Downtown Edmonton
            </p>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="https://www.instagram.com/toastfacebreadco" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', color: '#D4A574', textTransform: 'uppercase', textDecoration: 'none' }}>
              Instagram
            </a>
            <a href="#menu" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', color: '#D4A574', textTransform: 'uppercase', textDecoration: 'none' }}>
              Menu
            </a>
          </div>
        </div>
        <div style={{ maxWidth: '1100px', margin: '1.5rem auto 0', paddingTop: '1.5rem', borderTop: '1px solid rgba(245,240,232,0.1)' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(245,240,232,0.35)' }}>
            © 2024 Toast Face Bread Co. All rights reserved. Est. 2022.
          </p>
        </div>
      </footer>

    </main>
  )
}

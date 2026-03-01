'use client'

export function WeeklyMenuSection() {
  const menu = [
    {
      name: '$10 Basic Boule',
      items: ['plain'],
    },
    {
      name: '$12 Inclusion Boule',
      items: [
        'cheddar jalapeno',
        'cheddar dill',
        'sundried tomato parm',
        'cranberry walnut',
      ],
    },
    {
      name: '$12 - $15 Focaccia',
      items: ['plain', 'tomato pesto mozza', 'cinnamon roll', 'rosemary'],
    },
    {
      name: 'Bagels Mix and Match',
      price: '$15 for 6 or $28 for 12',
      items: [
        'plain',
        'cheddar jalapeno',
        'everything',
        'sesame',
        'poppyseed',
        'cinnamon crunch',
      ],
    },
  ]

  return (
    <section id="menu" className="w-full py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-3 sm:mb-4">This Week's Menu</h2>
        <p className="text-muted text-base sm:text-lg mb-8 sm:mb-12 font-body">Fresh out of the oven every week</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {menu.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-primary">
                {category.name}
              </h3>
              {category.price && (
                <p className="text-base sm:text-lg font-display font-bold text-accent">
                  {category.price}
                </p>
              )}
              <ul className="space-y-2">
                {category.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="text-muted text-base sm:text-lg font-body leading-relaxed"
                  >
                    -{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-accent/10 border-2 border-accent">
          <p className="font-display font-bold text-primary text-base sm:text-lg uppercase tracking-wider">
            Order through Instagram @toastfacebreadco
          </p>
          <p className="text-muted mt-2 sm:mt-3 font-body text-sm sm:text-base">
            Payment via e-transfer. Pickup available downtown Edmonton.
          </p>
        </div>
      </div>
    </section>
  )
}

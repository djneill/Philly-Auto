'use client'

import { useState } from 'react'
import { services, serviceCategories, type ServiceCategory } from '@/lib/data/services'
import ServiceCard from '@/components/services/ServiceCard'
import ServiceFilter from '@/components/services/ServiceFilter'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

const categoryLabels: Record<ServiceCategory, string> = {
  all: 'All Services',
  maintenance: 'Maintenance',
  repairs: 'Professional Repairs',
  performance: 'Performance Upgrades',
  diagnostics: 'Diagnostics',
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all')

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory)

  const categories =
    activeCategory === 'all'
      ? (['maintenance', 'repairs', 'performance', 'diagnostics'] as const)
      : ([activeCategory] as const)

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg py-20 border-b border-eagles-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeader
              eyebrow="Expert Service Catalog"
              headline="Find the Right Service for Your Vehicle"
              subtext="From routine maintenance to high-performance upgrades — transparent pricing, ASE-certified technicians, and a warranty on every job."
              accentWord="Right"
            />
          </AnimateIn>

          <AnimateIn delay={0.2} className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-eagles-silver/70">
            {[
              { icon: '✓', text: 'Certified Mechanics' },
              { icon: '✓', text: 'Warranty Guaranteed' },
              { icon: '✓', text: 'Upfront Pricing' },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-1.5">
                <span className="text-eagles-green font-bold">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </AnimateIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="mb-10">
            <ServiceFilter
              categories={serviceCategories}
              activeCategory={activeCategory}
              onSelect={setActiveCategory}
            />
          </div>

          {/* "All" mode — grouped by category */}
          {activeCategory === 'all' ? (
            <div className="space-y-14">
              {categories.map((cat) => {
                const group = services.filter((s) => s.category === cat)
                return (
                  <div key={cat}>
                    <AnimateIn>
                      <h2 className="font-display text-3xl text-site-text mb-6 flex items-center gap-3">
                        <span className="inline-block w-1 h-7 bg-eagles-green rounded-full" />
                        {categoryLabels[cat]}
                      </h2>
                    </AnimateIn>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                      {group.map((service, i) => (
                        <AnimateIn key={service.id} delay={i * 0.08}>
                          <ServiceCard service={service} />
                        </AnimateIn>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            /* Filtered mode */
            <div>
              <AnimateIn>
                <h2 className="font-display text-3xl text-site-text mb-6 flex items-center gap-3">
                  <span className="inline-block w-1 h-7 bg-eagles-green rounded-full" />
                  {categoryLabels[activeCategory]}
                </h2>
              </AnimateIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredServices.map((service, i) => (
                  <AnimateIn key={service.id} delay={i * 0.08}>
                    <ServiceCard service={service} />
                  </AnimateIn>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Don't see what you need CTA */}
      <section className="py-16 bg-eagles-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-4xl text-white mb-2">Don&apos;t See What You Need?</h2>
              <p className="text-white/70">
                Our expert mechanics can handle almost any specialized request. Get a custom quote
                today.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button variant="primary" href="/contact">
                Request Custom Quote
              </Button>
              <Button
                variant="ghost"
                href="/contact"
                className="text-white border border-white/30 hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

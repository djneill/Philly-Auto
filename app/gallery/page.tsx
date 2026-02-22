'use client'

import { useState } from 'react'
import { galleryItems } from '@/lib/data/gallery'
import type { GalleryItem } from '@/lib/types'
import { reviews } from '@/lib/data/reviews'
import BeforeAfterCard from '@/components/gallery/BeforeAfterCard'
import ReviewCard from '@/components/gallery/ReviewCard'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

type GalleryCategory = 'all' | GalleryItem['category']

const galleryCategories: GalleryCategory[] = ['all', 'body-work', 'detailing', 'engine']

const categoryLabels: Record<GalleryCategory, string> = {
  all: 'All Work',
  'body-work': 'Body Work',
  detailing: 'Detailing',
  engine: 'Engine',
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all')

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg py-20 border-b border-eagles-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <SectionHeader
              eyebrow="Real Results, Real Stories"
              headline="See the Work. Hear from the Drivers."
              subtext="From major collision repairs to meticulous engine detailing — see how we restore vehicles to peak performance and pristine condition."
              accentWord="Work"
            />
          </AnimateIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <AnimateIn>
              <h2 className="font-display text-3xl text-site-text">Transformation Gallery</h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="flex gap-2">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
                      activeCategory === cat
                        ? 'bg-eagles-green text-white'
                        : 'bg-white text-gray-500 border border-gray-200 hover:border-eagles-green hover:text-eagles-green'
                    )}
                  >
                    {categoryLabels[cat]}
                  </button>
                ))}
              </div>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item, i) => (
              <AnimateIn key={item.id} delay={i * 0.1}>
                <BeforeAfterCard item={item} />
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3} className="mt-10 text-center">
            <Button variant="primary" href="/booking">
              Book Service Now
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* Reviews stats bar */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <AnimateIn direction="left" className="flex items-center gap-4">
              <div>
                <p className="font-display text-6xl text-site-text">4.9</p>
                <div className="flex text-eagles-gold text-xl">{'★'.repeat(5)}</div>
              </div>
              <div>
                <p className="text-lg font-semibold text-site-text">1,280+ Reviews</p>
                <p className="text-sm text-gray-400">Trustworthy service since 2009</p>
              </div>
            </AnimateIn>

            <div className="hidden sm:block h-12 w-px bg-gray-200" />

            <AnimateIn className="flex flex-wrap gap-6">
              {[
                { icon: '✓', label: 'ASE Certified' },
                { icon: '🛡', label: 'Fully Insured' },
                { icon: '⚡', label: 'Fast Turnaround' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-eagles-green font-bold">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-10">
            <SectionHeader
              eyebrow="Customer Stories"
              headline="What Philly Drivers Are Saying"
              subtext="Verified reviews from real customers across the Philadelphia area."
              accentWord="Philly"
            />
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <AnimateIn key={review.id} delay={i * 0.08}>
                <ReviewCard review={review} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-eagles-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-display text-5xl text-white mb-4">Satisfied With Our Work?</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Your feedback helps us grow and assists other Philadelphia drivers in making informed
              decisions about their car care.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="primary" href={`https://google.com`}>
                Leave a Review
              </Button>
              <Button
                variant="ghost"
                href="/booking"
                className="text-white border border-white/30 hover:bg-white/10"
              >
                Schedule a Repair
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}

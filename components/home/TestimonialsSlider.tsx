'use client'

import { motion } from 'motion/react'
import { reviews } from '@/lib/data/reviews'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Badge from '@/components/ui/Badge'

function getAvatarColor(initials: string): string {
  const colors = ['#2D4A3E', '#1A3A4A', '#3A2D1A', '#4A2D3A', '#2D3A4A', '#3A4A2D']
  const index = initials.charCodeAt(0) % colors.length
  return colors[index]
}

export default function TestimonialsSlider() {
  // Duplicate for seamless loop
  const doubled = [...reviews, ...reviews]

  return (
    <section className="py-20 bg-light-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <AnimateIn>
          <SectionHeader
            eyebrow="Real Reviews"
            headline="What Philadelphia Drivers Say"
            subtext="Don't just take our word for it. Here's what our customers across the city have to say about their experience."
            accentWord="Philadelphia"
          />
        </AnimateIn>
      </div>

      {/* Scrolling strip */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-light-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-light-bg to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          >
            {doubled.map((review, i) => (
              <div
                key={`${review.id}-${i}`}
                className="flex-shrink-0 w-72 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                {/* Stars */}
                <div className="flex text-eagles-gold text-sm mb-3">
                  {'★'.repeat(review.stars)}
                  {'☆'.repeat(5 - review.stars)}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-4">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: getAvatarColor(review.initials) }}
                  >
                    {review.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-site-text truncate">{review.name}</p>
                    <Badge variant="green" className="mt-0.5">
                      {review.serviceTag}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

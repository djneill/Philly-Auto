import { services } from '@/lib/data/services'
import { iconMap, formatPrice } from '@/lib/utils'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function ServicesGrid() {
  const featured = services.filter((s) => s.featured)

  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeader
            eyebrow="Our Expertise"
            headline="Comprehensive Auto Solutions"
            subtext="From routine oil changes to complex transmission overhauls, our team uses state-of-the-art technology to keep your vehicle running at its peak."
            accentWord="Auto"
          />
        </AnimateIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((service, index) => {
            const Icon = iconMap[service.iconName]
            return (
              <AnimateIn key={service.id} delay={index * 0.1}>
                <Card hover className="h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-eagles-green/10 flex items-center justify-center mb-4">
                    {Icon && <Icon className="text-eagles-green" size={22} />}
                  </div>
                  <h3 className="font-display text-2xl text-site-text mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      Starting at{' '}
                      <span className="font-semibold text-site-text">{formatPrice(service.price)}</span>
                    </span>
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-eagles-green hover:text-eagles-green/70 transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                </Card>
              </AnimateIn>
            )
          })}
        </div>

        <AnimateIn delay={0.3} className="mt-10 text-center">
          <Button variant="outline" href="/services" size="md">
            View All Services
          </Button>
        </AnimateIn>
      </div>
    </section>
  )
}

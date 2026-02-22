import { whyUsItems } from '@/lib/data/whyUs'
import { iconMap } from '@/lib/utils'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'

export default function WhyUs() {
  return (
    <section className="py-20 bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <AnimateIn direction="left">
              <SectionHeader
                eyebrow="Why Choose Us"
                headline="The Philly Difference"
                subtext="We're not just a shop — we're your neighbors. Old-school integrity, modern expertise, and a genuine passion for keeping Philly moving."
                align="left"
                accentWord="Philly"
              />
            </AnimateIn>

            <div className="mt-10 space-y-8">
              {whyUsItems.map((item, index) => {
                const Icon = iconMap[item.iconName]
                return (
                  <AnimateIn key={item.id} delay={index * 0.1} direction="left">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-eagles-green/20 flex items-center justify-center mt-1">
                        {Icon && <Icon className="text-eagles-gold" size={18} />}
                      </div>
                      <div>
                        <h4 className="font-display text-xl text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-eagles-silver/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>
          </div>

          {/* Right: visual */}
          <AnimateIn direction="right">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-eagles-green/10 border border-eagles-green/20">
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                  <div className="w-24 h-24 rounded-full bg-eagles-gold/10 border-2 border-eagles-gold/30 flex items-center justify-center">
                    <span className="font-display text-5xl text-eagles-gold">15</span>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl text-white tracking-wide">YEARS OF EXCELLENCE</p>
                    <p className="text-sm text-eagles-silver/60 mt-2">Serving South Philadelphia since 2009</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 w-full mt-4">
                    {[
                      { label: 'Vehicles Serviced', value: '12k+' },
                      { label: 'Happy Customers', value: '2.5k+' },
                      { label: 'Expert Techs', value: '8' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="font-display text-2xl text-eagles-gold">{stat.value}</p>
                        <p className="text-xs text-eagles-silver/50 mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-eagles-gold text-dark-bg rounded-xl px-5 py-3 shadow-xl">
                <p className="font-display text-sm tracking-wider">ASE BLUE SEAL</p>
                <p className="text-xs font-medium opacity-70">Certified Shop</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

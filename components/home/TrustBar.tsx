import { trustItems } from '@/lib/data/trustItems'
import { iconMap } from '@/lib/utils'

export default function TrustBar() {
  return (
    <section className="bg-eagles-green py-6 border-b border-eagles-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustItems.map((item) => {
            const Icon = iconMap[item.iconName]
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 justify-center lg:justify-start"
              >
                {Icon && <Icon className="text-eagles-gold flex-shrink-0" size={20} />}
                <div>
                  <p className="text-xs font-medium text-white/60 uppercase tracking-wide leading-none mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-white leading-none">{item.value}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

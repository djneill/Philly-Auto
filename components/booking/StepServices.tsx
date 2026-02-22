'use client'

import { services } from '@/lib/data/services'
import { iconMap, formatPrice, cn } from '@/lib/utils'

interface StepServicesProps {
  selectedIds: string[]
  onToggle: (id: string) => void
}

export default function StepServices({ selectedIds, onToggle }: StepServicesProps) {
  return (
    <div>
      <h2 className="font-display text-3xl text-site-text mb-1">Step 2: Services Needed</h2>
      <p className="text-sm text-gray-500 mb-8">
        Select all the services you need — we&apos;ll quote a bundled price before we begin.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service) => {
          const Icon = iconMap[service.iconName]
          const selected = selectedIds.includes(service.id)

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onToggle(service.id)}
              className={cn(
                'relative text-left rounded-xl border-2 p-4 transition-all duration-200',
                selected
                  ? 'border-eagles-green bg-eagles-green/5 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-eagles-green/40'
              )}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    'flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors',
                    selected ? 'bg-eagles-green text-white' : 'bg-gray-100 text-gray-500'
                  )}
                >
                  {Icon && <Icon size={16} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-site-text">{service.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <p className="text-xs font-semibold text-eagles-green mt-1">
                    Starting at {formatPrice(service.price)}
                  </p>
                </div>
                {/* Checkmark */}
                {selected && (
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-eagles-green flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

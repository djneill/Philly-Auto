import { ServiceItem } from '@/lib/types'
import { iconMap, formatPrice } from '@/lib/utils'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface ServiceCardProps {
  service: ServiceItem
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.iconName]

  return (
    <Card hover className="flex flex-col h-full">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-eagles-green/10 flex items-center justify-center">
          {Icon && <Icon className="text-eagles-green" size={20} />}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl text-site-text leading-tight">{service.name}</h3>
        </div>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{service.description}</p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Starting At</p>
          <p className="text-lg font-bold text-eagles-green">{formatPrice(service.price)}</p>
        </div>
        <Button variant="outline" href="/booking" size="sm">
          Book Now
        </Button>
      </div>
    </Card>
  )
}

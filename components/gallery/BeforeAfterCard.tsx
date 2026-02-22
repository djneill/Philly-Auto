import { GalleryItem } from '@/lib/types'
import Badge from '@/components/ui/Badge'

interface BeforeAfterCardProps {
  item: GalleryItem
}

const categoryColors: Record<GalleryItem['category'], string> = {
  'body-work': '#2D4A3E',
  detailing: '#1A3A4A',
  engine: '#3A2D1A',
}

const categoryLabels: Record<GalleryItem['category'], string> = {
  'body-work': 'Body Work',
  detailing: 'Detailing',
  engine: 'Engine',
}

export default function BeforeAfterCard({ item }: BeforeAfterCardProps) {
  const bg = categoryColors[item.category]

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-shadow duration-300">
      {/* Before/After image pair */}
      <div className="grid grid-cols-2 h-48">
        {/* Before */}
        <div className="relative overflow-hidden" style={{ backgroundColor: `${bg}33` }}>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute top-2 left-2 bg-black/60 text-white text-xs font-bold px-2 py-0.5 rounded">
            BEFORE
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-2">
                <span className="text-2xl">🚗</span>
              </div>
              <p className="text-xs text-white/60 px-2 text-center">{item.beforeAlt}</p>
            </div>
          </div>
        </div>

        {/* After */}
        <div className="relative overflow-hidden" style={{ backgroundColor: bg }}>
          <div className="absolute top-2 right-2 bg-eagles-green text-white text-xs font-bold px-2 py-0.5 rounded">
            AFTER
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-2">
                <span className="text-2xl">✨</span>
              </div>
              <p className="text-xs text-white/70 px-2 text-center">{item.afterAlt}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="green">{categoryLabels[item.category]}</Badge>
          <span className="text-xs text-gray-400">{item.date}</span>
        </div>
        <h3 className="font-display text-lg text-site-text mb-1">{item.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}

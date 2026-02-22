'use client'

import { ServiceCategory } from '@/lib/data/services'
import { cn } from '@/lib/utils'

interface ServiceFilterProps {
  categories: readonly ServiceCategory[]
  activeCategory: ServiceCategory
  onSelect: (category: ServiceCategory) => void
}

export default function ServiceFilter({ categories, activeCategory, onSelect }: ServiceFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize',
            activeCategory === cat
              ? 'bg-eagles-green text-white shadow-sm'
              : 'bg-white text-gray-500 border border-gray-200 hover:border-eagles-green hover:text-eagles-green'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

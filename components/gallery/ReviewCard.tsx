import { Review } from '@/lib/types'
import Badge from '@/components/ui/Badge'

interface ReviewCardProps {
  review: Review
}

function getAvatarColor(initials: string): string {
  const colors = ['#2D4A3E', '#1A3A4A', '#3A2D1A', '#4A2D3A', '#2D3A4A', '#3A4A2D']
  return colors[initials.charCodeAt(0) % colors.length]
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
            style={{ backgroundColor: getAvatarColor(review.initials) }}
          >
            {review.initials}
          </div>
          <div>
            <p className="font-semibold text-site-text text-sm">{review.name}</p>
            {review.verified && (
              <p className="text-xs text-eagles-green flex items-center gap-1">
                <span>✓</span> Verified Purchase
              </p>
            )}
          </div>
        </div>
        <div className="flex text-eagles-gold text-sm flex-shrink-0">
          {'★'.repeat(review.stars)}
          {'☆'.repeat(5 - review.stars)}
        </div>
      </div>

      {/* Quote */}
      <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">&ldquo;{review.quote}&rdquo;</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <Badge variant="green">{review.serviceTag}</Badge>
        <span className="text-xs text-gray-400">{review.timeAgo}</span>
      </div>
    </div>
  )
}

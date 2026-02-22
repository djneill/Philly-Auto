import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  headline: string
  subtext?: string
  align?: 'left' | 'center'
  accentWord?: string
  className?: string
}

export default function SectionHeader({
  eyebrow,
  headline,
  subtext,
  align = 'center',
  accentWord,
  className,
}: SectionHeaderProps) {
  const renderHeadline = () => {
    if (!accentWord) return headline
    const parts = headline.split(new RegExp(`(${accentWord})`, 'gi'))
    return parts.map((part, i) =>
      part.toLowerCase() === accentWord.toLowerCase() ? (
        <span key={i} className="text-eagles-green">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest uppercase text-eagles-green mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-display leading-tight text-site-text">
        {renderHeadline()}
      </h2>
      {subtext && (
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  )
}

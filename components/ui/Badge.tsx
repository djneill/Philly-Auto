import { cn } from '@/lib/utils'

interface BadgeProps {
  variant?: 'green' | 'gold' | 'gray' | 'dark'
  children: React.ReactNode
  className?: string
}

const variantClasses = {
  green: 'bg-eagles-green/10 text-eagles-green border border-eagles-green/20',
  gold: 'bg-eagles-gold/10 text-[#8B6A00] border border-eagles-gold/30',
  gray: 'bg-eagles-silver/20 text-[#555] border border-eagles-silver/30',
  dark: 'bg-dark-bg text-eagles-silver border border-eagles-silver/20',
}

export default function Badge({ variant = 'green', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

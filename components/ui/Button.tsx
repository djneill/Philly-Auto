import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variantClasses = {
  primary:
    'bg-eagles-gold text-dark-bg font-semibold hover:bg-[#E6A310] active:scale-95',
  outline:
    'border-2 border-eagles-green text-eagles-green hover:bg-eagles-green hover:text-white active:scale-95',
  ghost:
    'text-eagles-green hover:bg-eagles-green/10 active:scale-95',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-body transition-all duration-200 cursor-pointer select-none',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}

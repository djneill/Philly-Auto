'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface CardProps {
  variant?: 'default' | 'dark' | 'bordered'
  children: React.ReactNode
  className?: string
  hover?: boolean
}

const variantClasses = {
  default: 'bg-white border border-gray-100 shadow-sm',
  dark: 'bg-dark-bg border border-eagles-silver/10 text-white',
  bordered: 'bg-white border-2 border-eagles-green/20 shadow-sm',
}

export default function Card({ variant = 'default', children, className, hover = false }: CardProps) {
  const classes = cn('rounded-xl p-6', variantClasses[variant], className)

  if (hover) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className={classes}>
        {children}
      </motion.div>
    )
  }

  return <div className={classes}>{children}</div>
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { navLinks } from '@/lib/data/navLinks'
import { shopInfo } from '@/lib/data/shopInfo'
import { iconMap, cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const MenuIcon = iconMap['RiMenuLine']
const CloseIcon = iconMap['RiCloseLine']
const PhoneIcon = iconMap['FaPhone']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'bg-dark-bg border-t-[3px] border-eagles-green',
          scrolled ? 'shadow-lg shadow-black/40' : ''
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-display text-2xl tracking-wider text-white group-hover:text-eagles-gold transition-colors">
                PHILLY
              </span>
              <span className="font-display text-2xl tracking-wider text-eagles-green group-hover:text-eagles-gold transition-colors">
                AUTO
              </span>
              <span className="font-display text-2xl tracking-wider text-eagles-silver group-hover:text-eagles-gold transition-colors">
                REPAIR
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200 hover:text-eagles-gold',
                    pathname === link.href ? 'text-eagles-gold' : 'text-eagles-silver'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${shopInfo.phone}`}
                className="text-sm text-eagles-silver hover:text-white flex items-center gap-1.5 transition-colors"
              >
                {PhoneIcon && <PhoneIcon className="w-3.5 h-3.5" />}
                {shopInfo.phone}
              </a>
              <Button variant="primary" href="/booking" size="sm">
                Book Appointment
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 rounded-md hover:bg-eagles-green/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen
                ? CloseIcon && <CloseIcon size={22} />
                : MenuIcon && <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-dark-bg border-b border-eagles-green/30 md:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-lg font-medium py-2 border-b border-eagles-green/10 transition-colors',
                    pathname === link.href ? 'text-eagles-gold' : 'text-eagles-silver hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={`tel:${shopInfo.phone}`}
                  className="flex items-center gap-2 text-eagles-silver text-base"
                >
                  {PhoneIcon && <PhoneIcon />}
                  {shopInfo.phone}
                </a>
                <Button variant="primary" href="/booking" className="w-full justify-center">
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16" />

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-dark-bg border-t border-eagles-green/30 flex">
        <a
          href={`tel:${shopInfo.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-white bg-eagles-green"
        >
          {PhoneIcon && <PhoneIcon size={14} />}
          Call Now
        </a>
        <Link
          href="/booking"
          className="flex-1 flex items-center justify-center py-3 text-sm font-medium text-dark-bg bg-eagles-gold"
        >
          Book Online
        </Link>
      </div>
    </>
  )
}

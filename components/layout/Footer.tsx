import Link from 'next/link'
import { navLinks } from '@/lib/data/navLinks'
import { shopInfo } from '@/lib/data/shopInfo'
import { iconMap } from '@/lib/utils'

const FacebookIcon = iconMap['FaFacebook']
const InstagramIcon = iconMap['FaInstagram']
const GoogleIcon = iconMap['FaGoogle']

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const hoursRows = [
    { day: 'Mon – Fri', hours: shopInfo.hours.weekdays },
    { day: 'Saturday', hours: shopInfo.hours.saturday },
    { day: 'Sunday', hours: shopInfo.hours.sunday },
  ]

  return (
    <footer className="bg-dark-bg border-t-[3px] border-eagles-green pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-xl tracking-wider text-white">PHILLY </span>
              <span className="font-display text-xl tracking-wider text-eagles-green">AUTO </span>
              <span className="font-display text-xl tracking-wider text-eagles-silver">REPAIR</span>
            </Link>
            <p className="text-sm text-eagles-silver/70 leading-relaxed mb-5">
              Premium automotive repair and maintenance services in South Philadelphia. Dedicated to
              quality craftsmanship and exceptional customer care since 2009.
            </p>
            <div className="flex items-center gap-4">
              {FacebookIcon && (
                <a
                  href={shopInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-eagles-silver/60 hover:text-eagles-gold transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
              )}
              {InstagramIcon && (
                <a
                  href={shopInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-eagles-silver/60 hover:text-eagles-gold transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
              )}
              {GoogleIcon && (
                <a
                  href={shopInfo.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-eagles-silver/60 hover:text-eagles-gold transition-colors"
                  aria-label="Google"
                >
                  <GoogleIcon size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg text-white tracking-wide mb-4">QUICK LINKS</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-eagles-silver/70 hover:text-eagles-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/booking"
                  className="text-sm text-eagles-silver/70 hover:text-eagles-gold transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-lg text-white tracking-wide mb-4">HOURS</h3>
            <ul className="space-y-2">
              {hoursRows.map((row) => (
                <li key={row.day} className="flex justify-between gap-4 text-sm">
                  <span className="text-eagles-silver/70">{row.day}</span>
                  <span
                    className={
                      row.hours === 'Closed'
                        ? 'text-red-400'
                        : 'text-white font-medium'
                    }
                  >
                    {row.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg text-white tracking-wide mb-4">CONTACT</h3>
            <ul className="space-y-3 text-sm text-eagles-silver/70">
              <li>
                <p className="text-xs uppercase tracking-wider text-eagles-silver/40 mb-0.5">Address</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(shopInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {shopInfo.address}
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-wider text-eagles-silver/40 mb-0.5">Phone</p>
                <a href={`tel:${shopInfo.phone}`} className="hover:text-white transition-colors">
                  {shopInfo.phone}
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-wider text-eagles-silver/40 mb-0.5">Email</p>
                <a href={`mailto:${shopInfo.email}`} className="hover:text-white transition-colors">
                  {shopInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-eagles-silver/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-eagles-silver/40">
          <p>© {currentYear} {shopInfo.name}. All rights reserved. Built for drivers by Philadelphians.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-eagles-silver transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-eagles-silver transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

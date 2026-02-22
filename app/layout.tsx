import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas',
  subsets: ['latin'],
  weight: '400',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Philly Auto Repair | Philadelphia\'s Trusted Auto Experts',
  description:
    'ASE-certified mechanics in South Philly. Engine diagnostics, brake service, transmission, collision repair & more. 15+ years serving Philadelphia families.',
  keywords: ['auto repair Philadelphia', 'mechanic Philly', 'car repair South Philadelphia', 'ASE certified mechanic'],
  openGraph: {
    title: 'Philly Auto Repair',
    description: 'Philadelphia\'s trusted auto repair shop since 2009. ASE certified, transparent pricing, 24-month warranty.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${dmSans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import ServicesGrid from '@/components/home/ServicesGrid'
import WhyUs from '@/components/home/WhyUs'
import TestimonialsSlider from '@/components/home/TestimonialsSlider'
import BookingCTA from '@/components/home/BookingCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <hr className="border-eagles-green/10" />
      <WhyUs />
      <TestimonialsSlider />
      <BookingCTA />
    </>
  )
}

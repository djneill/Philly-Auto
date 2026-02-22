import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'
import { shopInfo } from '@/lib/data/shopInfo'

export default function BookingCTA() {
  const hoursRows = [
    { day: 'Mon – Fri', hours: shopInfo.hours.weekdays },
    { day: 'Saturday', hours: shopInfo.hours.saturday },
    { day: 'Sunday', hours: shopInfo.hours.sunday },
  ]

  return (
    <section className="py-20 bg-eagles-green relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: form / CTA */}
          <AnimateIn direction="left">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-eagles-gold mb-3">
                Ready to Get Back on the Road?
              </p>
              <h2 className="font-display text-5xl md:text-6xl text-white leading-tight mb-4">
                Book Your Appointment Today
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Book online and get a free multi-point digital inspection with your first visit. No
                hidden fees, no surprise charges — just honest service from your Philly neighbors.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  href="/booking"
                  size="lg"
                  className="bg-eagles-gold text-dark-bg font-semibold"
                >
                  Book Appointment Online
                </Button>
                <Button
                  variant="ghost"
                  href={`tel:${shopInfo.phone}`}
                  size="lg"
                  className="text-white border border-white/30 hover:bg-white/10"
                >
                  {shopInfo.phone}
                </Button>
              </div>

              <p className="text-white/50 text-xs mt-5">
                ✓ No payment required today &nbsp; ✓ Free digital inspection included &nbsp; ✓ 24-month warranty
              </p>
            </div>
          </AnimateIn>

          {/* Right: hours card */}
          <AnimateIn direction="right">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-eagles-gold/20 flex items-center justify-center">
                  <span className="text-eagles-gold text-xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-white">{shopInfo.name}</p>
                  <p className="text-white/60 text-sm">{shopInfo.address}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {hoursRows.map((row) => (
                  <div key={row.day} className="flex justify-between text-sm">
                    <span className="text-white/60">{row.day}</span>
                    <span className={row.hours === 'Closed' ? 'text-red-300' : 'text-white font-medium'}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-eagles-gold flex items-center gap-1.5">
                  <span>🕐</span>
                  Same-day service available — call to check availability
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import StepVehicle from '@/components/booking/StepVehicle'
import StepServices from '@/components/booking/StepServices'
import StepSchedule from '@/components/booking/StepSchedule'
import BookingSummary from '@/components/booking/BookingSummary'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface VehicleData {
  year: string
  make: string
  model: string
  mileage: string
}

interface ScheduleData {
  date: string
  time: string
  notes: string
}

const steps = [
  { number: 1, label: 'Vehicle Info', sublabel: 'Tell us about your car' },
  { number: 2, label: 'Services', sublabel: 'What do you need?' },
  { number: 3, label: 'Schedule', sublabel: 'Pick a date & time' },
]

type Direction = 1 | -1

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [direction, setDirection] = useState<Direction>(1)
  const [submitted, setSubmitted] = useState(false)

  const [vehicle, setVehicle] = useState<VehicleData>({ year: '', make: '', model: '', mileage: '' })
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([])
  const [schedule, setSchedule] = useState<ScheduleData>({ date: '', time: '', notes: '' })

  const goToStep = (step: number) => {
    setDirection(step > currentStep ? 1 : -1)
    setCurrentStep(step)
  }

  const handleNext = () => {
    if (currentStep < 3) goToStep(currentStep + 1)
    else setSubmitted(true)
  }

  const handleBack = () => {
    if (currentStep > 1) goToStep(currentStep - 1)
  }

  const toggleService = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const variants = {
    enter: (dir: Direction) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: Direction) => ({ x: dir > 0 ? -50 : 50, opacity: 0 }),
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-light-bg flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-10 shadow-lg text-center max-w-lg w-full border border-gray-100"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-eagles-green/10 flex items-center justify-center mb-6">
            <span className="text-3xl">✅</span>
          </div>
          <h2 className="font-display text-4xl text-site-text mb-3">Booking Confirmed!</h2>
          <p className="text-gray-500 mb-2">
            We&apos;ve received your request and will confirm your appointment within 1 hour.
          </p>
          <p className="text-sm text-gray-400 mb-8">
            Check your email for a confirmation. Questions? Call us at{' '}
            <a href="tel:(215)555-0192" className="text-eagles-green hover:underline">(215) 555-0192</a>
          </p>
          <Button variant="primary" href="/" className="w-full justify-center">
            Back to Home
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-light-bg py-10 pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-display text-4xl md:text-5xl text-site-text">Book Your Appointment</h1>
          <p className="text-gray-500 mt-1">No payment required today. Free inspection with first visit.</p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
          {/* Left: Step indicators */}
          <aside className="hidden lg:block">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sticky top-24">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
                Booking Status
              </p>
              <div className="space-y-1">
                {steps.map((step, i) => {
                  const status =
                    step.number < currentStep
                      ? 'complete'
                      : step.number === currentStep
                      ? 'active'
                      : 'pending'
                  return (
                    <div key={step.number}>
                      <button
                        onClick={() => step.number <= currentStep && goToStep(step.number)}
                        className={cn(
                          'w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors text-left',
                          status === 'active' ? 'bg-eagles-green/10' : 'hover:bg-gray-50',
                          step.number > currentStep && 'cursor-default'
                        )}
                      >
                        <div
                          className={cn(
                            'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors',
                            status === 'complete' && 'bg-eagles-green text-white',
                            status === 'active' && 'bg-eagles-green text-white ring-4 ring-eagles-green/20',
                            status === 'pending' && 'bg-gray-100 text-gray-400'
                          )}
                        >
                          {status === 'complete' ? '✓' : step.number}
                        </div>
                        <div>
                          <p
                            className={cn(
                              'text-sm font-semibold leading-tight',
                              status === 'active' ? 'text-eagles-green' : status === 'complete' ? 'text-site-text' : 'text-gray-400'
                            )}
                          >
                            {step.label}
                          </p>
                          <p className="text-xs text-gray-400">{step.sublabel}</p>
                        </div>
                      </button>
                      {i < steps.length - 1 && (
                        <div className="ml-7 pl-3 py-1">
                          <div className={cn('w-px h-4', status === 'complete' ? 'bg-eagles-green/40' : 'bg-gray-200')} />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="bg-eagles-green/5 rounded-lg p-3 border border-eagles-green/10">
                  <p className="text-xs text-eagles-green font-medium">
                    🔒 256-bit secure booking. No payment required today.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Center: Step content */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {currentStep === 1 && (
                    <StepVehicle data={vehicle} onChange={setVehicle} />
                  )}
                  {currentStep === 2 && (
                    <StepServices selectedIds={selectedServiceIds} onToggle={toggleService} />
                  )}
                  {currentStep === 3 && (
                    <StepSchedule data={schedule} onChange={setSchedule} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="px-6 md:px-8 py-5 border-t border-gray-100 flex justify-between">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="text-gray-500"
              >
                Cancel
              </Button>
              <Button variant="primary" onClick={handleNext}>
                {currentStep === 3 ? 'Confirm Booking' : 'Continue →'}
              </Button>
            </div>
          </div>

          {/* Right: Summary */}
          <aside className="hidden lg:block">
            <BookingSummary
              vehicle={vehicle}
              selectedServiceIds={selectedServiceIds}
              schedule={schedule}
            />

            {/* Trust icons below summary */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { icon: '✓', label: 'Certified Techs', sub: '15+ yrs experience' },
                { icon: '⚡', label: 'Fast Turnaround', sub: 'Most jobs under 90 min' },
                { icon: '🛡', label: 'Service Warranty', sub: '12-mo / 12k mile' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-lg p-3 text-center border border-gray-100 shadow-sm">
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-xs font-semibold text-site-text mt-1">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Mobile step indicator */}
        <div className="lg:hidden mt-8 bg-white rounded-xl border border-gray-100 p-4 flex justify-around">
          {steps.map((step) => {
            const status =
              step.number < currentStep ? 'complete' : step.number === currentStep ? 'active' : 'pending'
            return (
              <div key={step.number} className="flex flex-col items-center gap-1">
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
                    status === 'complete' && 'bg-eagles-green text-white',
                    status === 'active' && 'bg-eagles-green text-white',
                    status === 'pending' && 'bg-gray-100 text-gray-400'
                  )}
                >
                  {status === 'complete' ? '✓' : step.number}
                </div>
                <p className="text-xs text-gray-500">{step.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

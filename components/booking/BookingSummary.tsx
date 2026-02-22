import { services } from '@/lib/data/services'
import { formatPrice } from '@/lib/utils'
import { shopInfo } from '@/lib/data/shopInfo'

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

interface BookingSummaryProps {
  vehicle: VehicleData
  selectedServiceIds: string[]
  schedule: ScheduleData
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
}

export default function BookingSummary({ vehicle, selectedServiceIds, schedule }: BookingSummaryProps) {
  const selectedServices = services.filter((s) => selectedServiceIds.includes(s.id))
  const total = selectedServices.reduce((sum, s) => sum + s.price, 0)

  const hasVehicle = vehicle.year || vehicle.make || vehicle.model

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden sticky top-24">
      <div className="bg-eagles-green px-5 py-4">
        <h3 className="font-display text-xl text-white tracking-wide">Booking Summary</h3>
      </div>

      <div className="p-5 space-y-5">
        {/* Vehicle */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Selected Vehicle</p>
          {hasVehicle ? (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-eagles-green/10 flex items-center justify-center text-xl">
                🚗
              </div>
              <div>
                <p className="text-sm font-semibold text-site-text">
                  {[vehicle.year, vehicle.make, vehicle.model].filter(Boolean).join(' ') || '—'}
                </p>
                {vehicle.mileage && (
                  <p className="text-xs text-gray-400">{vehicle.mileage} miles</p>
                )}
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-400 italic">No vehicle selected yet</p>
          )}
        </div>

        {/* Services */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Services ({selectedServices.length})
          </p>
          {selectedServices.length > 0 ? (
            <ul className="space-y-2">
              {selectedServices.map((s) => (
                <li key={s.id} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700 flex-1 mr-2 truncate">{s.name}</span>
                  <span className="text-site-text font-medium flex-shrink-0">{formatPrice(s.price)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400 italic">No services selected yet</p>
          )}
        </div>

        {/* Appointment */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Appointment</p>
          {schedule.date && schedule.time ? (
            <div className="text-sm text-gray-700">
              <p className="font-medium">{formatDate(schedule.date)}</p>
              <p className="text-gray-500">{schedule.time}</p>
            </div>
          ) : (
            <p className="text-sm text-gray-400 italic bg-gray-50 rounded-lg px-3 py-2 border border-dashed border-gray-200">
              Date & time will be selected in next step
            </p>
          )}
        </div>

        {/* Total */}
        {selectedServices.length > 0 && (
          <div className="pt-4 border-t border-gray-100">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs text-gray-400">Estimated Total</p>
                <p className="font-display text-3xl text-eagles-green">{formatPrice(total)}</p>
              </div>
              <p className="text-xs text-gray-400 text-right">
                Plus taxes & fees
                <br />
                Pay at shop after service
              </p>
            </div>
          </div>
        )}

        {/* Security badge */}
        <div className="bg-eagles-green/5 rounded-lg p-3 border border-eagles-green/10">
          <p className="text-xs text-eagles-green font-medium flex items-center gap-2">
            <span>🔒</span>
            Your booking is secured. No payment required today.
          </p>
        </div>

        {/* Shop location */}
        <div className="text-xs text-gray-400">
          <p className="font-semibold text-gray-600 mb-0.5">{shopInfo.name}</p>
          <p>{shopInfo.address}</p>
        </div>
      </div>
    </div>
  )
}

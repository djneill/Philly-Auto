'use client'

interface VehicleData {
  year: string
  make: string
  model: string
  mileage: string
}

interface StepVehicleProps {
  data: VehicleData
  onChange: (data: VehicleData) => void
}

const years = Array.from({ length: 30 }, (_, i) => String(new Date().getFullYear() - i))

const makes = [
  'Acura', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge',
  'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jeep', 'Kia', 'Lexus', 'Lincoln',
  'Mazda', 'Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Subaru',
  'Tesla', 'Toyota', 'Volkswagen', 'Volvo',
]

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-site-text focus:outline-none focus:border-eagles-green focus:ring-1 focus:ring-eagles-green transition-colors'

const selectClass =
  'w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-site-text focus:outline-none focus:border-eagles-green focus:ring-1 focus:ring-eagles-green transition-colors appearance-none cursor-pointer'

export default function StepVehicle({ data, onChange }: StepVehicleProps) {
  const handleChange = (field: keyof VehicleData, value: string) => {
    onChange({ ...data, [field]: value })
  }

  return (
    <div>
      <h2 className="font-display text-3xl text-site-text mb-1">Step 1: Your Vehicle</h2>
      <p className="text-sm text-gray-500 mb-8">
        Tell us about the car you&apos;re bringing in so we can be prepared.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Year
          </label>
          <select
            value={data.year}
            onChange={(e) => handleChange('year', e.target.value)}
            className={selectClass}
          >
            <option value="">Select Year</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Make
          </label>
          <select
            value={data.make}
            onChange={(e) => handleChange('make', e.target.value)}
            className={selectClass}
          >
            <option value="">Select Make</option>
            {makes.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Model
          </label>
          <input
            type="text"
            value={data.model}
            onChange={(e) => handleChange('model', e.target.value)}
            placeholder="e.g. Camry, F-150"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Approx. Mileage
          </label>
          <input
            type="text"
            value={data.mileage}
            onChange={(e) => handleChange('mileage', e.target.value)}
            placeholder="Optional"
            className={inputClass}
          />
        </div>
      </div>
    </div>
  )
}

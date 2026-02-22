"use client";

import { cn } from "@/lib/utils";

interface ScheduleData {
  date: string;
  time: string;
  notes: string;
}

interface StepScheduleProps {
  data: ScheduleData;
  onChange: (data: ScheduleData) => void;
}

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-site-text focus:outline-none focus:border-eagles-green focus:ring-1 focus:ring-eagles-green transition-colors";

// Get next 14 available weekdays (excluding Sundays)
function getAvailableDates(): string[] {
  const dates: string[] = [];
  const today = new Date();
  const d = new Date(today);
  d.setDate(d.getDate() + 1);

  while (dates.length < 14) {
    if (d.getDay() !== 0) {
      // not Sunday
      dates.push(d.toISOString().split("T")[0]);
    }
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

function formatDateLabel(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export default function StepSchedule({ data, onChange }: StepScheduleProps) {
  const availableDates = getAvailableDates();

  const handleChange = (field: keyof ScheduleData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div>
      <h2 className="font-display text-3xl text-site-text mb-1">
        Step 3: Schedule It
      </h2>
      <p className="text-sm text-gray-500 mb-8">
        Pick a date and time that works for you. We&apos;ll confirm within 1
        hour.
      </p>

      {/* Date picker */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Select a Date
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {availableDates.map((date) => (
            <button
              key={date}
              type="button"
              onClick={() => handleChange("date", date)}
              className={cn(
                "py-2.5 px-1 rounded-lg border text-center text-xs font-medium transition-all",
                data.date === date
                  ? "border-eagles-green bg-eagles-green text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-eagles-green/50",
              )}
            >
              {formatDateLabel(date)}
            </button>
          ))}
        </div>
      </div>

      {/* Time slots */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Select a Time
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => handleChange("time", slot)}
              className={cn(
                "py-2.5 px-1 rounded-lg border text-xs font-medium transition-all",
                data.time === slot
                  ? "border-eagles-green bg-eagles-green text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-eagles-green/50",
              )}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
          Additional Notes (Optional)
        </label>
        <textarea
          value={data.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
          placeholder="Anything else we should know? (specific sounds, symptoms, etc.)"
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>
    </div>
  );
}

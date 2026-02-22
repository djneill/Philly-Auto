"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { shopInfo } from "@/lib/data/shopInfo";
import { services } from "@/lib/data/services";
import { iconMap } from "@/lib/utils";
import AnimateIn from "@/components/ui/AnimateIn";
import Button from "@/components/ui/Button";

const PhoneIcon = iconMap["FaPhone"];
const FacebookIcon = iconMap["FaFacebook"];
const InstagramIcon = iconMap["FaInstagram"];

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-site-text focus:outline-none focus:border-eagles-green focus:ring-1 focus:ring-eagles-green transition-colors placeholder:text-gray-400";

const errorClass = "mt-1 text-xs text-red-500";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form submitted:", data);
  };

  const hoursRows = [
    { day: "Monday – Friday", hours: shopInfo.hours.weekdays },
    { day: "Saturday", hours: shopInfo.hours.saturday },
    { day: "Sunday", hours: shopInfo.hours.sunday },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-dark-bg">
        <Image
          src="/contactImage.jpg"
          alt="Philly Auto Repair shop front"
          fill
          priority
          className="object-contain object-right"
        />
        {/* Mobile: flat dark overlay */}
        <div className="absolute inset-0 bg-dark-bg/75 md:hidden" />
        {/* Desktop: left-to-right gradient so image shows on the right */}
        <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to right, #0A0A0A 40%, #0A0A0ACC 60%, transparent 85%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-eagles-gold mb-3">
              Get in Touch
            </p>
            <h1 className="font-display text-6xl md:text-7xl text-white leading-tight mb-5">
              Let&apos;s Talk{" "}
              <span className="text-eagles-green">Auto Repair</span>
            </h1>
            <p className="text-eagles-silver/70 max-w-xl leading-relaxed">
              Have a question about your vehicle? Ready to schedule? Want a
              quote? We&apos;re here Monday through Saturday, and we always get
              back to you fast.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimateIn direction="left">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2 className="font-display text-3xl text-site-text mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-gray-500 mb-8">
                  We typically respond within 2 business hours.
                </p>

                {isSubmitSuccessful ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-eagles-green/10 flex items-center justify-center mb-5">
                      <span className="text-3xl">✅</span>
                    </div>
                    <h3 className="font-display text-2xl text-site-text mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Thanks for reaching out. We&apos;ll get back to you within
                      2 business hours.
                    </p>
                    <div className="mt-6">
                      <Button variant="primary" href="/booking">
                        Book an Appointment
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                          Full Name *
                        </label>
                        <input
                          {...register("name")}
                          type="text"
                          placeholder="John Smith"
                          className={inputClass}
                        />
                        {errors.name && (
                          <p className={errorClass}>{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                          Phone *
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="(215) 555-0000"
                          className={inputClass}
                        />
                        {errors.phone && (
                          <p className={errorClass}>{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@example.com"
                        className={inputClass}
                      />
                      {errors.email && (
                        <p className={errorClass}>{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Service Type *
                      </label>
                      <select
                        {...register("serviceType")}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="">Select a service type</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="Other">Other / Not Listed</option>
                      </select>
                      {errors.serviceType && (
                        <p className={errorClass}>
                          {errors.serviceType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Message *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Describe what's going on with your vehicle, or ask us anything..."
                        className={`${inputClass} resize-none`}
                      />
                      {errors.message && (
                        <p className={errorClass}>{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </AnimateIn>

            {/* Shop info */}
            <AnimateIn direction="right" className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-display text-2xl text-site-text mb-5">
                  Shop Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">📍</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                        Address
                      </p>
                      <p className="text-sm text-site-text font-medium">
                        {shopInfo.address}
                      </p>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(shopInfo.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-eagles-green hover:underline"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">📞</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${shopInfo.phone}`}
                        className="text-sm text-site-text font-medium hover:text-eagles-green transition-colors"
                      >
                        {shopInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">✉️</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${shopInfo.email}`}
                        className="text-sm text-site-text font-medium hover:text-eagles-green transition-colors"
                      >
                        {shopInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-display text-2xl text-site-text mb-5">
                  Hours of Operation
                </h3>
                <div className="space-y-3">
                  {hoursRows.map((row) => (
                    <div
                      key={row.day}
                      className="flex justify-between items-center text-sm py-2 border-b border-gray-50 last:border-0"
                    >
                      <span className="text-gray-600">{row.day}</span>
                      <span
                        className={
                          row.hours === "Closed"
                            ? "text-red-400 font-medium"
                            : "text-site-text font-semibold"
                        }
                      >
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-eagles-green mt-4 flex items-center gap-1">
                  <span>🕐</span>
                  Same-day service available — call ahead to confirm
                </p>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 relative overflow-hidden">
                <div
                  className="h-40 rounded-xl flex flex-col items-center justify-center gap-3"
                  style={{
                    background:
                      "linear-gradient(135deg, #004C54 0%, #0A3A40 50%, #0A0A0A 100%)",
                  }}
                >
                  <span className="text-4xl">📍</span>
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm">
                      {shopInfo.name}
                    </p>
                    <p className="text-white/60 text-xs">{shopInfo.address}</p>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(shopInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-eagles-gold hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {[
                  {
                    icon: FacebookIcon,
                    href: shopInfo.social.facebook,
                    label: "Facebook",
                  },
                  {
                    icon: InstagramIcon,
                    href: shopInfo.social.instagram,
                    label: "Instagram",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-600 hover:border-eagles-green hover:text-eagles-green transition-colors"
                  >
                    {Icon && <Icon size={16} />}
                    {label}
                  </a>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}

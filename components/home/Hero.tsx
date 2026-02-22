"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-dark-bg">
      {/* Hero background image */}
      <Image
        src="/heroImageNissan.jpg"
        alt="Nissan in the Philly Auto Repair shop"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-dark-bg/60" />

      {/* Subtle gear pattern overlay */}
      <div
        className="absolute inset-0 opacity-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #A5ACAF 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Green accent line left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-eagles-gold via-eagles-green to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-eagles-gold" />
            <span className="text-xs font-semibold tracking-widest uppercase text-eagles-gold">
              ASE Certified Master Technicians
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.95] text-white mb-6"
          >
            <span
              className="text-eagles-green"
              style={{
                WebkitTextStroke: "2px black",
                paintOrder: "stroke fill",
              }}
            >
              Philadelphia&apos;s
            </span>
            <br />
            Trusted Auto
            <br />
            Experts
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-base md:text-lg text-eagles-silver/80 max-w-xl mb-8 leading-relaxed"
          >
            Experience dealership-quality service without the dealership price
            tag. We specialize in diagnostics, repairs, and preventive
            maintenance for all makes and models — right here in South Philly.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button variant="primary" href="/booking" size="lg">
              Schedule Your Service
            </Button>
            <Button variant="outline" href="/services" size="lg">
              View Our Services
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex items-center gap-4 mt-10"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              {["#2D4A3E", "#1A3A4A", "#3A2D1A", "#4A3A2D"].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-dark-bg flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: color }}
                >
                  {["M", "S", "D", "R"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-eagles-gold text-sm">
                {"★".repeat(5)}
              </div>
              <p className="text-xs text-eagles-silver/60">
                Trusted by 2,500+ Local Drivers
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-eagles-green to-transparent" />
    </section>
  );
}

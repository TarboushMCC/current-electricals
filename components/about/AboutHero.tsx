"use client";

import { motion } from "framer-motion";
import { ElectricalGrid } from "@/components/ui/ElectricalGrid";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

export function AboutHero() {
  return (
    <section className="relative min-h-[62vh] flex items-end pb-0 overflow-hidden pt-28 bg-hero">
      <ElectricalGrid variant="hero" />

      {/* Side decorative lines */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden xl:block" />
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden xl:block" />

      <div className="section-container relative pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-300 animate-pulse-blue" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand-200">
              About CurrentElectricals
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Engineering Excellence
            <span className="gradient-text-hero block mt-1">Since 2010</span>
          </h1>

          <p className="text-lg text-blue-100/75 leading-relaxed max-w-2xl">
            Founded in Abu Dhabi&apos;s Musafah Industrial Area, CurrentElectricals has grown to
            become one of the UAE&apos;s most trusted names in low voltage switchgear
            manufacturing and electrical solutions.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="hero-glass-card px-5 py-4">
              <span className="text-2xl font-bold font-heading text-white">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <p className="text-xs text-blue-200/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Wave bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style={{ height: "40px" }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" fill="white">
          <path d="M0,20 C360,0 720,40 1080,20 C1260,10 1380,30 1440,20 L1440,40 L0,40 Z" />
        </svg>
      </div>
    </section>
  );
}

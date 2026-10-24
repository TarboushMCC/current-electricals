"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Zap, ChevronDown, CheckCircle } from "lucide-react";
import { ElectricalGrid } from "@/components/ui/ElectricalGrid";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const itemVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const trustBadges = [
  { icon: Shield, label: "ASTA Tested" },
  { icon: Award,  label: "QCC Approved" },
  { icon: Zap,    label: "IEC 61439" },
];

const highlights = [
  "Manufactured in Abu Dhabi",
  "Serving airports, oil & gas, infrastructure",
  "15+ years UAE market experience",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero">
      <ElectricalGrid variant="hero" />

      {/* Decorative side lines */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden xl:block" />
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden xl:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Trust badge */}
            <motion.div variants={itemVariants} className="mb-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-300 animate-pulse-blue" />
                <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand-200">
                  UAE&apos;s Premier Electrical Panel Manufacturer
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.06] tracking-tight text-white mb-6"
            >
              Precision
              <span className="block gradient-text-hero mt-1">
                Electrical
              </span>
              Solutions
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-blue-100/80 leading-relaxed mb-8 max-w-xl"
            >
              ASTA-tested, QCC-approved LV switchgear and panel manufacturer in
              Abu Dhabi. Delivering industrial-grade MDB, MCC, ATS and custom
              panel solutions for UAE&apos;s airports, oil & gas, and infrastructure.
            </motion.p>

            {/* Highlights */}
            <motion.ul variants={itemVariants} className="flex flex-col gap-2 mb-9">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-sm text-blue-100/75">
                  <CheckCircle className="w-4 h-4 text-brand-300 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/contact" className="btn-white text-base px-7 py-3.5 justify-center sm:justify-start">
                Request a Quotation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base text-white border border-white/30 hover:bg-white/10 transition-all duration-200 cursor-pointer justify-center sm:justify-start"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="hero-glass-card flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white/90">
                  <Icon className="w-3.5 h-3.5 text-brand-300" />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Stats & floating card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-5"
          >
            {/* Floating panel visual */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="hero-glass-card p-6 shadow-hero-float"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">MDB Panel — 2000A</p>
                  <p className="text-blue-200/70 text-xs">IEC 61439 Verified</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-xs text-green-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Tested & Certified
                </div>
              </div>

              {/* Panel diagram */}
              <svg viewBox="0 0 320 140" className="w-full opacity-80" fill="none">
                <rect x="20" y="10" width="280" height="120" rx="6" stroke="rgba(147,197,253,0.5)" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
                <rect x="20" y="10" width="280" height="24" rx="6" fill="rgba(37,99,235,0.4)" />
                <text x="160" y="27" textAnchor="middle" fill="rgba(191,219,254,0.9)" fontSize="10" fontFamily="monospace">MAIN DISTRIBUTION BOARD</text>
                {/* Busbar */}
                <rect x="40" y="52" width="240" height="7" rx="2" fill="rgba(96,165,250,0.6)" />
                {/* Breakers */}
                {[0,1,2,3,4,5].map(i => (
                  <g key={i}>
                    <rect x={42+(i%3)*86} y={74+Math.floor(i/3)*30} width="58" height="24" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(147,197,253,0.35)" strokeWidth="1" />
                    <rect x={58+(i%3)*86} y={80+Math.floor(i/3)*30} width="14" height="12" rx="2" fill={i<4?"rgba(96,165,250,0.5)":"rgba(255,255,255,0.15)"} />
                    <line x1={70+(i%3)*86} y1={59} x2={70+(i%3)*86} y2={74+Math.floor(i/3)*30} stroke="rgba(147,197,253,0.25)" strokeWidth="1" strokeDasharray="3 3" />
                  </g>
                ))}
              </svg>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  className="hero-glass-card p-4 text-center"
                >
                  <p className="text-2xl font-bold text-white font-heading">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000} />
                  </p>
                  <p className="text-xs text-blue-200/70 mt-1 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-14 lg:hidden"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="hero-glass-card p-4 text-center">
              <p className="text-xl font-bold text-white font-heading">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-blue-200/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style={{ height: "60px" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full" fill="white">
          <path d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

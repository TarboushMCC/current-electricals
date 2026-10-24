"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const milestones = [
  "Established in Abu Dhabi's Musafah Industrial Area",
  "ISO-certified quality management system",
  "ASTA-tested switchgear assemblies",
  "QCC-approved for UAE government projects",
  "500+ successful projects across the GCC",
  "Serving airports, oil & gas, and infrastructure sectors",
];

export function CompanyStory() {
  return (
    <section className="py-24 bg-section-steel relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-55 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Top center glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
      />
      {/* Bottom-right glow */}
      <div
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
      />

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="label-chip mb-6">Our Story</div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight font-heading">
              Built on a Foundation of
              <span className="gradient-text block">Technical Excellence</span>
            </h2>

            <p className="text-slate-500 leading-relaxed mb-5">
              CurrentElectricals was established with a single mission: to provide
              UAE&apos;s engineering and construction sectors with world-class electrical
              panel manufacturing that meets international standards and local regulatory
              requirements.
            </p>
            <p className="text-slate-500 leading-relaxed mb-5">
              From our Musafah manufacturing facility, our team of qualified electrical
              engineers and skilled technicians designs, manufactures, and tests every
              panel assembly before it leaves our facility. Our commitment to quality is
              not a promise — it is a process.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Today, our panels power airports, hospitals, government buildings, oil & gas
              facilities, luxury hotels, and industrial complexes across the UAE and beyond.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {milestones.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual panel diagram side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden border border-brand-100"
              style={{
                height: "420px",
                background: "linear-gradient(135deg, #1238A4 0%, #1741B8 50%, #1D52D4 100%)",
                boxShadow: "0 20px 60px rgba(37,99,235,0.25)",
              }}
            >
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Animated electrical panel graphic */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 500 420"
                fill="none"
                aria-hidden="true"
              >
                {/* Panel cabinet outline */}
                <rect x="100" y="50" width="300" height="320" rx="8"
                  stroke="rgba(255,255,255,0.35)" strokeWidth="2"
                  fill="rgba(255,255,255,0.05)" />
                {/* Header bar */}
                <rect x="100" y="50" width="300" height="40" rx="8"
                  fill="rgba(255,255,255,0.15)" />
                {/* Busbar */}
                <rect x="130" y="120" width="240" height="8" rx="2"
                  fill="rgba(147,197,253,0.7)" />
                {/* Circuit breakers */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <g key={i}>
                    <rect
                      x={130 + (i % 3) * 85}
                      y={160 + Math.floor(i / 3) * 100}
                      width="60" height="70" rx="4"
                      fill="rgba(255,255,255,0.08)"
                      stroke="rgba(255,255,255,0.25)" strokeWidth="1"
                    />
                    <rect
                      x={152 + (i % 3) * 85}
                      y={175 + Math.floor(i / 3) * 100}
                      width="16" height="28" rx="2"
                      fill={i < 4 ? "rgba(147,197,253,0.5)" : "rgba(255,255,255,0.15)"}
                    />
                    <line
                      x1={160 + (i % 3) * 85} y1={128}
                      x2={160 + (i % 3) * 85} y2={160 + Math.floor(i / 3) * 100}
                      stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4"
                    />
                  </g>
                ))}
                {/* Label */}
                <text x="250" y="80" textAnchor="middle"
                  fill="rgba(191,219,254,0.9)" fontSize="11" fontFamily="monospace">
                  MDB — 2000A
                </text>
              </svg>

              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: "linear-gradient(to top, rgba(18,56,164,0.95) 0%, transparent 100%)" }}>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-200 mb-1">
                  Manufactured in Abu Dhabi
                </p>
                <p className="text-sm text-blue-200/70">
                  Every panel hand-assembled and tested at our Musafah facility
                </p>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-3"
              style={{ boxShadow: "0 8px 32px rgba(37,99,235,0.18)", border: "1px solid #DBEAFE" }}>
              <p className="text-2xl font-bold text-brand-700 font-heading">500+</p>
              <p className="text-xs text-slate-500">Projects Completed</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3"
              style={{ boxShadow: "0 8px 32px rgba(37,99,235,0.18)", border: "1px solid #DBEAFE" }}>
              <p className="text-2xl font-bold text-brand-700 font-heading">IEC</p>
              <p className="text-xs text-slate-500">61439 Compliant</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const capabilities = [
  {
    category: "Design & Engineering",
    accent: "from-brand-500 to-brand-400",
    dot: "text-brand-500",
    items: [
      "In-house electrical design team",
      "AutoCAD Electrical & EPLAN proficiency",
      "Single-line diagram preparation",
      "Panel schedule generation",
      "Load flow and fault level analysis",
      "BIM coordination support",
    ],
  },
  {
    category: "Manufacturing",
    accent: "from-sky-500 to-sky-400",
    dot: "text-sky-500",
    items: [
      "CNC busbar processing",
      "Sheet metal fabrication",
      "Panel assembly & wiring",
      "Cable management systems",
      "Surface treatment & powder coating",
      "IP-rated enclosure fabrication",
    ],
  },
  {
    category: "Testing & Quality",
    accent: "from-indigo-500 to-indigo-400",
    dot: "text-indigo-500",
    items: [
      "IEC 61439 routine testing",
      "Insulation resistance tests",
      "High-voltage withstand tests",
      "Functional & operational tests",
      "Thermal imaging inspection",
      "Factory acceptance testing (FAT)",
    ],
  },
  {
    category: "Site Services",
    accent: "from-violet-500 to-violet-400",
    dot: "text-violet-500",
    items: [
      "Site installation supervision",
      "Commissioning & handover",
      "Protection relay testing",
      "Power quality analysis",
      "AMC & maintenance contracts",
      "Emergency breakdown support",
    ],
  },
];

export function ManufacturingCapabilities() {
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
      {/* Top glow */}
      <div
        className="absolute -top-28 left-1/2 -translate-x-1/2 w-[600px] h-56 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
      />
      {/* Bottom-left accent */}
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)" }}
      />

      <div className="section-container relative">
        <SectionHeader
          label="Manufacturing"
          title="Full-Spectrum"
          titleHighlight="Capabilities"
          description="From engineering design to site commissioning — complete in-house capabilities under one roof in Abu Dhabi."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-2xl bg-white transition-all duration-300"
              style={{
                border: "1px solid rgba(191,219,254,0.55)",
                boxShadow: "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 48px rgba(37,99,235,0.20), 0 4px 12px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,1)";
                (e.currentTarget as HTMLElement).style.borderColor = "#60A5FA";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,219,254,0.55)";
                (e.currentTarget as HTMLElement).style.transform = "";
              }}
            >
              <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${cap.accent} mb-5`} />
              <h3 className="font-heading font-semibold text-slate-900 text-base mb-4">
                {cap.category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <CheckCircle className={`w-3.5 h-3.5 ${cap.dot} mt-0.5 flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

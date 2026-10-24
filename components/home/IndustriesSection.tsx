"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Flame, Plane, Building2, Shield, Hotel,
  Factory, HeartPulse, Building, ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Flame, Plane, Building2, Shield, Hotel, Factory, HeartPulse, Building,
};

const iconColors = [
  "text-red-600 bg-red-50",
  "text-sky-600 bg-sky-50",
  "text-slate-600 bg-slate-50",
  "text-green-600 bg-green-50",
  "text-purple-600 bg-purple-50",
  "text-orange-600 bg-orange-50",
  "text-pink-600 bg-pink-50",
  "text-brand-600 bg-brand-50",
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-section-steel relative overflow-hidden">
      {/* Top accent line */}
      <div className="section-divider mb-0 absolute top-0 left-0 right-0" />
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)" }}
      />

      <div className="section-container">
        <SectionHeader
          label="Industries We Serve"
          title="Trusted Across"
          titleHighlight="Every Sector"
          description="From world-class airports to offshore oil platforms — our electrical solutions power UAE's most critical infrastructure."
          className="mb-16"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon] || Building;
            const colorClass = iconColors[index % iconColors.length];
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/industries"
                  className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white cursor-pointer transition-all duration-300"
                  style={{
                    border: "1px solid rgba(191,219,254,0.55)",
                    boxShadow: "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 48px rgba(37,99,235,0.20), 0 4px 12px rgba(37,99,235,0.10)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#60A5FA";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,219,254,0.55)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  <div className={`w-12 h-12 rounded-2xl ${colorClass} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-slate-900 text-sm group-hover:text-brand-700 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                    {industry.description.split(".")[0]}.
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/industries" className="btn-outline">
            Explore All Industries <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

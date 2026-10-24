"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap, LayoutGrid, Network, Settings, RefreshCw,
  Battery, Grid, Cpu, CheckCircle, Wrench, ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Zap, LayoutGrid, Network, Settings, RefreshCw,
  Battery, Grid, Cpu, CheckCircle, Wrench,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const accentColors = [
  { bg: "bg-brand-50",  icon: "text-brand-600",  glow: "rgba(37,99,235,0.12)" },
  { bg: "bg-sky-50",    icon: "text-sky-600",    glow: "rgba(14,165,233,0.12)" },
  { bg: "bg-indigo-50", icon: "text-indigo-600", glow: "rgba(99,102,241,0.12)" },
  { bg: "bg-violet-50", icon: "text-violet-600", glow: "rgba(139,92,246,0.12)" },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-section-steel relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Top-right glow */}
      <div
        className="absolute -top-24 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)" }}
      />
      {/* Bottom-left glow */}
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)" }}
      />

      <div className="section-container relative">
        <SectionHeader
          label="What We Manufacture"
          title="Complete Electrical"
          titleHighlight="Panel Solutions"
          description="From main distribution boards to custom industrial panels — every product engineered to international IEC standards at our Abu Dhabi facility."
          className="mb-16"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {SERVICES.map((service, index) => {
            const Icon   = iconMap[service.icon] || Zap;
            const accent = accentColors[index % accentColors.length];
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full p-5 rounded-2xl bg-white cursor-pointer transition-all duration-300"
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
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${accent.bg} flex items-center justify-center flex-shrink-0`}
                      style={{ boxShadow: `0 4px 12px ${accent.glow}` }}
                    >
                      <Icon className={`w-5 h-5 ${accent.icon}`} />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all duration-200" />
                  </div>

                  <h3 className="font-heading font-semibold text-slate-900 text-[15px] mb-2 leading-snug group-hover:text-brand-700 transition-colors">
                    {service.shortTitle}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1">
                      {service.applications.slice(0, 2).map((app) => (
                        <span key={app} className="text-[10px] px-2 py-0.5 rounded-md bg-brand-50 text-brand-600 border border-brand-100">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-outline">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

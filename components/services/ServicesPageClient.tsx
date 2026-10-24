"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap, LayoutGrid, Network, Settings, RefreshCw,
  Battery, Grid, Cpu, CheckCircle, Wrench, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Zap, LayoutGrid, Network, Settings, RefreshCw,
  Battery, Grid, Cpu, CheckCircle, Wrench,
};

const accentColors = [
  { bg: "bg-brand-50",  icon: "text-brand-600",  dot: "bg-brand-500",  bar: "from-brand-500 to-brand-400" },
  { bg: "bg-sky-50",    icon: "text-sky-600",    dot: "bg-sky-500",    bar: "from-sky-500 to-sky-400" },
  { bg: "bg-indigo-50", icon: "text-indigo-600", dot: "bg-indigo-500", bar: "from-indigo-500 to-indigo-400" },
  { bg: "bg-violet-50", icon: "text-violet-600", dot: "bg-violet-500", bar: "from-violet-500 to-violet-400" },
];

export function ServicesPageClient() {
  return (
    <section className="py-20 bg-section-steel relative overflow-hidden">
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
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
      />
      <div className="section-container relative">
        <div className="flex flex-col gap-5">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Zap;
            const accent = accentColors[index % accentColors.length];
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl bg-white overflow-hidden transition-all duration-300"
                style={{
                  border: "1px solid rgba(191,219,254,0.55)",
                  boxShadow: "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 48px rgba(37,99,235,0.20), 0 4px 12px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#60A5FA";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,219,254,0.55)";
                }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  {/* Info */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-11 h-11 rounded-xl ${accent.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${accent.icon}`} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-400 mb-0.5">
                          Service {String(index + 1).padStart(2, "0")}
                        </p>
                        <h2 className="font-heading font-bold text-slate-900 text-xl">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.features.slice(0, 4).map((f) => (
                        <div key={f} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className={`w-3.5 h-3.5 ${accent.icon} mt-0.5 flex-shrink-0`} />
                          {f}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors group/link"
                    >
                      Learn more about {service.shortTitle}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Applications panel */}
                  <div
                    className="relative min-h-[200px] lg:min-h-0 overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
                    }}
                  >
                    {/* Dot grid */}
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.12) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />

                    <div className="absolute inset-0 flex flex-col justify-center p-8 relative">
                      {/* Accent bar */}
                      <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${accent.bar} mb-5`} />

                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-600 mb-4">
                        Applications
                      </p>
                      <div className="flex flex-col gap-2 mb-6">
                        {service.applications.map((app) => (
                          <div key={app} className="flex items-center gap-2 text-sm text-slate-700">
                            <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} flex-shrink-0`} />
                            {app}
                          </div>
                        ))}
                      </div>

                      <div className="pt-5 border-t border-brand-200">
                        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-600 mb-3">
                          Key Benefits
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.benefits.map((b) => (
                            <span
                              key={b}
                              className="text-xs px-2.5 py-1 rounded-lg bg-white/70 border border-brand-200 text-slate-600"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

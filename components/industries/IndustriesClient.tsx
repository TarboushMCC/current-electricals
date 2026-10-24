"use client";

import { motion } from "framer-motion";
import {
  Flame, Plane, Building2, Shield, Hotel,
  Factory, HeartPulse, Building, CheckCircle,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Flame, Plane, Building2, Shield, Hotel, Factory, HeartPulse, Building,
};

const iconColors = [
  { bg: "bg-red-50",    icon: "text-red-600",    dot: "text-red-500" },
  { bg: "bg-sky-50",    icon: "text-sky-600",    dot: "text-sky-500" },
  { bg: "bg-slate-50",  icon: "text-slate-600",  dot: "text-slate-500" },
  { bg: "bg-green-50",  icon: "text-green-600",  dot: "text-green-500" },
  { bg: "bg-purple-50", icon: "text-purple-600", dot: "text-purple-500" },
  { bg: "bg-orange-50", icon: "text-orange-600", dot: "text-orange-500" },
  { bg: "bg-pink-50",   icon: "text-pink-600",   dot: "text-pink-500" },
  { bg: "bg-brand-50",  icon: "text-brand-600",  dot: "text-brand-500" },
];

export function IndustriesClient() {
  return (
    <section className="py-20 bg-section-frost relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-55 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
      />
      <div className="section-container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon] || Building;
            const color = iconColors[index % iconColors.length];
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-6 rounded-2xl bg-white transition-all duration-300 overflow-hidden"
                style={{
                  border: "1px solid rgba(191,219,254,0.55)",
                  boxShadow: "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 48px rgba(37,99,235,0.20), 0 4px 12px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#60A5FA";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,219,254,0.55)";
                  (e.currentTarget as HTMLElement).style.transform = "";
                }}
              >
                {/* Background number watermark */}
                <div className="absolute top-4 right-5 font-mono text-6xl font-bold text-brand-50 select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${color.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${color.icon}`} />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-slate-900 text-xl mb-1 group-hover:text-brand-700 transition-colors">
                      {industry.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-400 mb-3">
                    Typical Solutions
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.applications.map((app) => (
                      <div key={app} className="flex items-start gap-1.5 text-xs text-slate-500">
                        <CheckCircle className={`w-3 h-3 ${color.dot} mt-0.5 flex-shrink-0`} />
                        {app}
                      </div>
                    ))}
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

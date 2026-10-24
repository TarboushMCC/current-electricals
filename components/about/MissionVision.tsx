"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver precision-engineered, internationally certified electrical panel solutions that power UAE's most critical infrastructure — on time, within budget, and to the highest safety standards.",
    iconColor: "text-brand-600",
    iconBg: "bg-brand-50",
    accent: "from-brand-500 to-brand-400",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the GCC's most trusted electrical panel manufacturer — recognized for engineering excellence, uncompromising quality, and innovation in low voltage switchgear solutions.",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50",
    accent: "from-sky-500 to-sky-400",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Quality without compromise. Integrity in every interaction. Engineering precision in every product. Safety as a non-negotiable standard. Partnership with every client.",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    accent: "from-violet-500 to-violet-400",
  },
];

export function MissionVision() {
  return (
    <section className="py-24 bg-section-frost relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-55 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Top accent line */}
      <div className="section-divider mb-0 absolute top-0 left-0 right-0" />
      {/* Center glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.09) 0%, transparent 70%)" }}
      />

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group p-7 rounded-2xl bg-white transition-all duration-300"
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
                {/* Accent top bar */}
                <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${item.accent} mb-6`} />

                <div className={`w-11 h-11 rounded-2xl ${item.iconBg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>

                <h3 className="font-heading font-bold text-slate-900 text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

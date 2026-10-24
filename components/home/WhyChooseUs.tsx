"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Clock, Award, Users, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: ShieldCheck,
    title: "ASTA Tested & QCC Approved",
    description: "All switchgear assemblies type-tested to IEC 61439 by ASTA International. QCC approval ensures full UAE regulatory compliance.",
    color: "text-brand-600", bg: "bg-brand-50",
  },
  {
    icon: Award,
    title: "15+ Years UAE Experience",
    description: "Deep UAE market experience with an established track record across Abu Dhabi, Dubai, and beyond. We know local project requirements.",
    color: "text-sky-600", bg: "bg-sky-50",
  },
  {
    icon: Cpu,
    title: "In-House Engineering",
    description: "Full in-house design team. From single-line diagrams to CAD panel layouts, every project is engineered to exact specification.",
    color: "text-indigo-600", bg: "bg-indigo-50",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Dedicated production planning ensures your panels arrive on schedule — critical for UAE construction project timelines.",
    color: "text-violet-600", bg: "bg-violet-50",
  },
  {
    icon: Users,
    title: "Experienced Technical Team",
    description: "Certified engineers and technicians with extensive experience across complex industrial and commercial projects.",
    color: "text-teal-600", bg: "bg-teal-50",
  },
  {
    icon: Wrench,
    title: "After-Sales Support",
    description: "Comprehensive AMC contracts, emergency breakdown response, spare parts, and on-site technical support.",
    color: "text-orange-600", bg: "bg-orange-50",
  },
];

export function WhyChooseUs() {
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
      {/* Bottom-right glow */}
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)" }}
      />
      {/* Top-left glow */}
      <div
        className="absolute -top-32 -left-32 w-72 h-72 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)" }}
      />

      <div className="section-container relative">
        <SectionHeader
          label="Why CurrentElectricals"
          title="Built for UAE's Most"
          titleHighlight="Demanding Projects"
          description="When reliability, compliance, and technical precision matter most — leading UAE contractors choose CurrentElectricals."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="group h-full p-7 rounded-2xl bg-white border border-brand-100/70 cursor-default transition-all duration-300"
                  style={{ boxShadow: "0 2px 8px rgba(37,99,235,0.07), 0 8px 28px rgba(37,99,235,0.09)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 48px rgba(37,99,235,0.20), 0 4px 12px rgba(37,99,235,0.10)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#60A5FA";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(37,99,235,0.07), 0 8px 28px rgba(37,99,235,0.09)";
                    (e.currentTarget as HTMLElement).style.borderColor = "";
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  <div className={`w-12 h-12 rounded-2xl ${reason.bg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-5 h-5 ${reason.color}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-slate-900 text-[17px] mb-3 leading-snug">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

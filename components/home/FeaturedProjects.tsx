"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/lib/constants";

const featured = PROJECTS.filter((p) => p.featured);

const categoryConfig: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  Airport:     { bg: "bg-sky-50",    text: "text-sky-700",    border: "border-sky-200",    accent: "bg-sky-500" },
  Industrial:  { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200", accent: "bg-orange-500" },
  Hospitality: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", accent: "bg-purple-500" },
  Government:  { bg: "bg-green-50",  text: "text-green-700",  border: "border-green-200",  accent: "bg-green-500" },
};

const heroGradients = [
  "from-brand-700 to-brand-500",
  "from-sky-700 to-sky-500",
  "from-indigo-700 to-indigo-500",
];

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-ice-section relative overflow-hidden">
      {/* Richer dot grid */}
      <div
        className="absolute inset-0 opacity-55 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Top glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
      />

      <div className="section-container relative">
        <SectionHeader
          label="Our Work"
          title="Featured"
          titleHighlight="Projects"
          description="A selection of landmark electrical installations delivered across UAE's most prestigious developments."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => {
            const cat = categoryConfig[project.category] || categoryConfig.Industrial;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col rounded-2xl bg-white overflow-hidden transition-all duration-300"
                style={{
                  border: "1px solid rgba(191,219,254,0.55)",
                  boxShadow: "0 4px 12px rgba(37,99,235,0.08), 0 16px 40px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 56px rgba(37,99,235,0.22), 0 4px 16px rgba(37,99,235,0.12), inset 0 1px 0 rgba(255,255,255,1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#60A5FA";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(37,99,235,0.08), 0 16px 40px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,0.9)";
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,219,254,0.55)";
                }}
              >
                {/* Image / visual header */}
                <div className={`relative h-48 bg-gradient-to-br ${heroGradients[index % heroGradients.length]} overflow-hidden`}>
                  {/* Grid overlay */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  {/* Circuit SVG */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 200" fill="none">
                    <path d="M30 100 H120 V45 H200" stroke="white" strokeWidth="2" />
                    <path d="M200 45 H290 V120 H370" stroke="white" strokeWidth="2" />
                    <path d="M120 100 V160 H270 V100" stroke="white" strokeWidth="1" />
                    <circle cx="120" cy="100" r="6" fill="white" />
                    <circle cx="200" cy="45" r="6" fill="white" />
                    <circle cx="290" cy="120" r="6" fill="white" />
                    <rect x="165" y="70" width="70" height="36" stroke="white" strokeWidth="1" rx="3" />
                  </svg>
                  {/* Year watermark */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold font-heading text-white/10">{project.year}</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-xl text-xs font-semibold border ${cat.bg} ${cat.text} ${cat.border} bg-white/80 backdrop-blur-sm`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-semibold text-slate-900 text-lg mb-2.5 leading-snug group-hover:text-brand-700 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3 h-3" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="w-3 h-3" /> {project.year}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">{project.description}</p>

                  <div className="grid grid-cols-2 gap-1.5">
                    {project.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-1.5 text-xs text-slate-500">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${cat.accent}`} />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
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
          <Link href="/projects" className="btn-outline">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const categories = ["All", "Airport", "Industrial", "Hospitality", "Government", "Infrastructure", "Oil & Gas"];

const categoryConfig: Record<string, { bg: string; text: string; border: string; accent: string; gradient: string }> = {
  Airport:        { bg: "bg-sky-50",     text: "text-sky-700",     border: "border-sky-200",     accent: "bg-sky-500",     gradient: "from-sky-700 to-sky-500" },
  Industrial:     { bg: "bg-orange-50",  text: "text-orange-700",  border: "border-orange-200",  accent: "bg-orange-500",  gradient: "from-orange-700 to-orange-500" },
  Hospitality:    { bg: "bg-purple-50",  text: "text-purple-700",  border: "border-purple-200",  accent: "bg-purple-500",  gradient: "from-purple-700 to-purple-500" },
  Government:     { bg: "bg-green-50",   text: "text-green-700",   border: "border-green-200",   accent: "bg-green-500",   gradient: "from-green-700 to-green-500" },
  Infrastructure: { bg: "bg-amber-50",   text: "text-amber-700",   border: "border-amber-200",   accent: "bg-amber-500",   gradient: "from-amber-700 to-amber-500" },
  "Oil & Gas":    { bg: "bg-red-50",     text: "text-red-700",     border: "border-red-200",     accent: "bg-red-500",     gradient: "from-red-700 to-red-500" },
};

const heroGradients = [
  "from-brand-700 to-brand-500",
  "from-sky-700 to-sky-500",
  "from-indigo-700 to-indigo-500",
  "from-violet-700 to-violet-500",
  "from-teal-700 to-teal-500",
  "from-orange-700 to-orange-500",
];

export function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

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
      {/* Top glow */}
      <div
        className="absolute -top-28 left-1/2 -translate-x-1/2 w-[600px] h-56 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
      />
      <div className="section-container relative">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border",
                activeCategory === cat
                  ? "bg-brand-600 border-brand-600 text-white shadow-sm"
                  : "border-brand-200 bg-white text-slate-600 hover:border-brand-400 hover:text-brand-700"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const cat = categoryConfig[project.category] || categoryConfig.Industrial;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col rounded-2xl bg-white overflow-hidden transition-all duration-300"
                  style={{
                    border: "1px solid rgba(191,219,254,0.55)",
                    boxShadow: "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 56px rgba(37,99,235,0.22), 0 4px 16px rgba(37,99,235,0.12), inset 0 1px 0 rgba(255,255,255,1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#60A5FA";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,219,254,0.55)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  {/* Gradient header */}
                  <div className={`relative h-40 bg-gradient-to-br ${heroGradients[i % heroGradients.length]} overflow-hidden`}>
                    {/* Grid overlay */}
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />
                    {/* Circuit lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 160" fill="none">
                      <path d="M20 80 H110 V35 H200" stroke="white" strokeWidth="2" />
                      <path d="M200 35 H290 V100 H370" stroke="white" strokeWidth="2" />
                      <circle cx="110" cy="80" r="5" fill="white" />
                      <circle cx="200" cy="35" r="5" fill="white" />
                      <circle cx="290" cy="100" r="5" fill="white" />
                    </svg>
                    {/* Year watermark */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold font-heading text-white/10">{project.year}</span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-xl text-xs font-semibold border ${cat.bg} ${cat.text} ${cat.border} bg-white/80 backdrop-blur-sm`}>
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-xl text-xs font-semibold bg-amber-50/80 border border-amber-200 text-amber-700 backdrop-blur-sm">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading font-semibold text-slate-900 text-base mb-2 leading-snug group-hover:text-brand-700 transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <MapPin className="w-3 h-3" /> {project.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar className="w-3 h-3" /> {project.year}
                      </span>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100">
                      <div className="grid grid-cols-2 gap-1.5">
                        {project.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-1.5 text-xs text-slate-500">
                            <span className={`w-1.5 h-1.5 rounded-full ${cat.accent} mt-1.5 flex-shrink-0`} />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}

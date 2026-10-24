import type { Metadata } from "next";
import { ElectricalGrid } from "@/components/ui/ElectricalGrid";
import { CTABanner } from "@/components/home/CTABanner";
import { ProjectsClient } from "@/components/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects & Portfolio — Electrical Panel Installations UAE",
  description:
    "View CurrentElectricals' completed project portfolio: airports, oil & gas, hospitality, government, and industrial electrical installations across the UAE.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative min-h-[52vh] flex items-end pb-0 overflow-hidden pt-28 bg-hero">
        <ElectricalGrid variant="hero" />

        <div className="section-container relative pb-16 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-300 animate-pulse-blue" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand-200">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Landmark Electrical
            <span className="gradient-text-hero block mt-1">Installations</span>
          </h1>
          <p className="text-lg text-blue-100/75 max-w-2xl leading-relaxed">
            A showcase of CurrentElectricals&apos; completed projects across UAE&apos;s most
            prestigious airports, infrastructure, and industrial facilities.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style={{ height: "40px" }}>
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" fill="white">
            <path d="M0,20 C360,0 720,40 1080,20 C1260,10 1380,30 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      <ProjectsClient />
      <CTABanner />
    </>
  );
}

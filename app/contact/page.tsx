import type { Metadata } from "next";
import { ElectricalGrid } from "@/components/ui/ElectricalGrid";
import { ContactClient } from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quotation for Electrical Panels UAE",
  description:
    "Contact CurrentElectricals for electrical panel quotations, project inquiries, and technical support. Based in Abu Dhabi, Musafah. Response within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[48vh] flex items-end pb-0 overflow-hidden pt-28 bg-hero">
        <ElectricalGrid variant="hero" />

        <div className="section-container relative pb-16 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-300 animate-pulse-blue" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand-200">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Let&apos;s Discuss Your
            <span className="gradient-text-hero block mt-1">Electrical Project</span>
          </h1>
          <p className="text-lg text-blue-100/75 max-w-2xl leading-relaxed">
            Our engineering team responds to all inquiries within 24 hours.
            Request a quotation, ask a technical question, or simply say hello.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style={{ height: "40px" }}>
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" fill="white">
            <path d="M0,20 C360,0 720,40 1080,20 C1260,10 1380,30 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      <ContactClient />
    </>
  );
}

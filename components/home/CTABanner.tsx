"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Sparkles } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Deep blue gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1239A5 0%, #1741B8 35%, #1D52D4 65%, #1E4ED8 100%)",
        }}
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-5 left-5 w-14 h-14 border-t-2 border-l-2 border-white/20 rounded-tl-xl pointer-events-none" />
      <div className="absolute bottom-5 right-5 w-14 h-14 border-b-2 border-r-2 border-white/20 rounded-br-xl pointer-events-none" />

      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-200" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/90">
              Ready to Start Your Project?
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight font-heading">
            Let&apos;s Engineer Your
            <span className="block mt-1" style={{ color: "#93C5FD" }}>
              Electrical Solution
            </span>
          </h2>

          <p className="text-lg text-blue-100/75 max-w-2xl mx-auto mb-10 leading-relaxed">
            Get a detailed technical proposal from our engineering team.
            We respond to all inquiries within 24 hours.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base bg-white text-brand-700 hover:bg-blue-50 transition-all duration-200 w-full sm:w-auto justify-center shadow-lg"
            >
              Request a Free Quotation
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${COMPANY.phone[0]}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base border border-white/30 text-white hover:bg-white/10 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone[0]}
            </a>

            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-base text-white transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #128C7E 0%, #25D366 100%)" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          <p className="mt-7 text-sm text-blue-200/60">
            Plot M16, Musafah Industrial Area, Abu Dhabi, UAE
          </p>
        </motion.div>
      </div>
    </section>
  );
}

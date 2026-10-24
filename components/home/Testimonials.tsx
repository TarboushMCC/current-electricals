"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-24 bg-section-navy relative overflow-hidden">
      {/* Dot grid on dark */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Top center radial glow */}
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-80 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.35) 0%, transparent 70%)" }}
      />
      {/* Bottom-right soft glow */}
      <div
        className="absolute -bottom-32 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 70%)" }}
      />
      {/* Horizontal accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5) 40%, rgba(99,102,241,0.5) 60%, transparent)" }}
      />

      <div className="section-container relative">
        <SectionHeader
          label="Client Testimonials"
          title="Trusted by UAE's"
          titleHighlight="Leading Projects"
          description="What our clients say about working with CurrentElectricals on their most demanding electrical projects."
          theme="dark"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col p-7 rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.13)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.13)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.10)";
                (e.currentTarget as HTMLElement).style.transform = "";
              }}
            >
              {/* Quote decoration */}
              <div className="absolute top-5 right-5 opacity-10">
                <Quote className="w-10 h-10 text-white" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-white/80 text-sm leading-relaxed mb-6 flex-1 italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="h-px mb-5"
                style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.15), transparent)" }}
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                    boxShadow: "0 4px 12px rgba(37,99,235,0.35)",
                  }}
                >
                  <span className="text-sm font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">{testimonial.name}</p>
                  <p className="text-xs text-white/50 mt-0.5">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4) 40%, rgba(99,102,241,0.4) 60%, transparent)" }}
      />
    </section>
  );
}

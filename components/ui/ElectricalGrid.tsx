"use client";

import { motion } from "framer-motion";

interface ElectricalGridProps {
  variant?: "hero" | "light";
}

export function ElectricalGrid({ variant = "hero" }: ElectricalGridProps) {
  if (variant === "light") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-25"
          style={{
            background: "radial-gradient(ellipse at center top, rgba(37,99,235,0.25) 0%, transparent 65%)",
          }}
        />
      </div>
    );
  }

  /* Hero variant (dark blue background) */
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Fine grid lines */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial hero glow */}
      <div
        className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[700px] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(96,165,250,0.35) 0%, rgba(37,99,235,0.15) 40%, transparent 70%)",
        }}
      />

      {/* Right side accent orb */}
      <div
        className="absolute -right-32 top-1/4 w-[500px] h-[500px] opacity-20 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(147,197,253,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.5) 30%, rgba(96,165,250,0.8) 50%, rgba(147,197,253,0.5) 70%, transparent 100%)",
        }}
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
      />

      {/* Corner circuit - top left */}
      <svg className="absolute top-8 left-8 w-20 h-20 opacity-25" viewBox="0 0 80 80" fill="none">
        <path d="M0 80 L0 14 Q0 0 14 0 L80 0" stroke="rgba(147,197,253,0.8)" strokeWidth="1" />
        <path d="M6 80 L6 18 Q6 6 18 6 L80 6" stroke="rgba(147,197,253,0.4)" strokeWidth="0.5" />
        <circle cx="14" cy="14" r="3" fill="rgba(96,165,250,0.8)" />
      </svg>

      {/* Corner circuit - bottom right */}
      <svg className="absolute bottom-8 right-8 w-20 h-20 opacity-25 rotate-180" viewBox="0 0 80 80" fill="none">
        <path d="M0 80 L0 14 Q0 0 14 0 L80 0" stroke="rgba(147,197,253,0.8)" strokeWidth="1" />
        <circle cx="14" cy="14" r="3" fill="rgba(96,165,250,0.8)" />
      </svg>

      {/* Floating nodes */}
      {[
        { x: "12%",  y: "25%", delay: 0 },
        { x: "88%",  y: "20%", delay: 1.2 },
        { x: "75%",  y: "72%", delay: 0.6 },
        { x: "20%",  y: "78%", delay: 2.0 },
        { x: "50%",  y: "15%", delay: 0.9 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ left: dot.x, top: dot.y, background: "rgba(147,197,253,0.9)" }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

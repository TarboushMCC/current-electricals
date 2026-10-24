"use client";

import { motion } from "framer-motion";

const events = [
  {
    year: "2010",
    title: "Company Founded",
    description:
      "CurrentElectricals established in Musafah Industrial Area, Abu Dhabi, with a focus on LV switchgear manufacturing.",
  },
  {
    year: "2013",
    title: "First Major Airport Project",
    description:
      "Completed supply and installation of MDB/SMDB systems for Abu Dhabi International Airport expansion works.",
  },
  {
    year: "2015",
    title: "QCC Approval Obtained",
    description:
      "Received Qatar Conformity Certification, enabling access to GCC government and infrastructure projects.",
  },
  {
    year: "2017",
    title: "ASTA Type Testing",
    description:
      "Complete switchgear range type-tested to IEC 61439-1 & 2 by ASTA International for global market acceptance.",
  },
  {
    year: "2019",
    title: "Oil & Gas Expansion",
    description:
      "Expanded into hazardous-area-rated switchgear, completing first ATEX-certified panels for Ruwais Industrial Complex.",
  },
  {
    year: "2022",
    title: "200th Major Project",
    description:
      "Marked delivery of the 200th major project across UAE, serving airports, hospitals, and infrastructure.",
  },
  {
    year: "2024",
    title: "500+ Projects Milestone",
    description:
      "Reached 500+ completed projects milestone, cementing position as one of UAE's most trusted panel manufacturers.",
  },
];

export function Timeline() {
  return (
    <section className="py-24 bg-ice-section relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-55 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Center radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
      />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="label-chip mx-auto mb-4">Our Journey</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading">
            A Decade of Growth &{" "}
            <span className="gradient-text">Engineering Excellence</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-brand-300 via-brand-200 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content card */}
                <div className="flex-1 md:max-w-[45%]">
                  <div
                    className={`p-5 rounded-2xl bg-white transition-all duration-300 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                    style={{
                      border: "1px solid rgba(191,219,254,0.55)",
                      boxShadow: "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                    }}
                  >
                    <h3 className="font-heading font-semibold text-slate-900 text-lg mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Year dot */}
                <div className="flex flex-col items-center gap-1.5 flex-shrink-0 z-10">
                  <div
                    className="w-12 h-12 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center"
                    style={{ boxShadow: "0 0 0 4px rgba(37,99,235,0.1)" }}
                  >
                    <span className="text-xs font-bold text-brand-600 font-mono">
                      {event.year.slice(2)}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-brand-600 font-heading">
                    {event.year}
                  </span>
                </div>

                {/* Empty side spacer */}
                <div className="flex-1 md:max-w-[45%] hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle, FileCheck, ClipboardCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const certifications = [
  {
    icon: ShieldCheck,
    title: "ASTA Type Testing",
    issuer: "ASTA International, UK",
    standard: "IEC 61439-1 & IEC 61439-2",
    description:
      "Our complete LV switchgear range is type-tested by ASTA International (UK) to IEC 61439-1 and IEC 61439-2. This independent third-party testing confirms full compliance with international assembly standards.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
    dotColor: "text-brand-500",
    badgeBg: "bg-brand-50",
    badgeText: "text-brand-700",
    badgeBorder: "border-brand-200",
    items: [
      "Temperature rise verification",
      "Short-circuit withstand testing",
      "Dielectric properties verification",
      "Protection against electrical shock",
      "Mechanical operation testing",
      "Degree of protection (IP) verification",
    ],
  },
  {
    icon: Award,
    title: "QCC Approval",
    issuer: "Quality & Conformity Commission, UAE",
    standard: "UAE ESMA Conformity",
    description:
      "CurrentElectricals holds QCC (Quality and Conformity Commission) approval for our switchgear and distribution board range, enabling supply to UAE government, semi-government, and regulated projects.",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    dotColor: "text-sky-500",
    badgeBg: "bg-sky-50",
    badgeText: "text-sky-700",
    badgeBorder: "border-sky-200",
    items: [
      "UAE ESMA product conformity",
      "Government project eligibility",
      "Infrastructure project qualification",
      "Federal authority acceptance",
      "Municipality project eligibility",
      "Periodic QCC audit compliance",
    ],
  },
  {
    icon: FileCheck,
    title: "IEC 61439 Compliance",
    issuer: "International Electrotechnical Commission",
    standard: "IEC 61439-1, -2, -3",
    description:
      "All panel assemblies comply with the IEC 61439 standard series for low-voltage switchgear and controlgear assemblies, covering design, manufacturing, and verification requirements.",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    dotColor: "text-indigo-500",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    badgeBorder: "border-indigo-200",
    items: [
      "IEC 61439-1: General requirements",
      "IEC 61439-2: Power switchgear assemblies",
      "IEC 61439-3: Distribution boards",
      "Design verification documentation",
      "Routine verification records",
      "Technical data package",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Management System",
    issuer: "Internal Quality System",
    standard: "ISO 9001 Aligned",
    description:
      "Our manufacturing quality management system covers design review, material inspection, in-process quality checks, final inspection, and test record management for every panel shipped.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    dotColor: "text-green-500",
    badgeBg: "bg-green-50",
    badgeText: "text-green-700",
    badgeBorder: "border-green-200",
    items: [
      "Design review process",
      "Approved supplier list",
      "Incoming material inspection",
      "In-process quality checks",
      "Final inspection & test records",
      "Non-conformance management",
    ],
  },
];

const standards = [
  "IEC 61439-1 General Requirements",
  "IEC 61439-2 Power Switchgear",
  "IEC 61439-3 Distribution Boards",
  "IEC 60947 Low-Voltage Switchgear",
  "IEC 60529 IP Protection Ratings",
  "BS EN 60529 Ingress Protection",
  "UAE DEWA Regulations",
  "UAE ADDC Regulations",
  "UAE SEWA Regulations",
  "UAE FEWA Regulations",
  "Dubai Electricity Standards",
  "Abu Dhabi Grid Code",
];

export function CertificationsClient() {
  return (
    <>
      <section className="py-20 bg-section-steel relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-55 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Top center glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
        />
        <div className="section-container relative">
          <SectionHeader
            label="Our Certifications"
            title="Quality You Can"
            titleHighlight="Rely On"
            description="Every panel that leaves our Musafah facility carries verified certification documentation. No exceptions."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="p-7 rounded-2xl bg-white transition-all duration-300"
                  style={{
                    border: "1px solid rgba(191,219,254,0.55)",
                    boxShadow: "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 48px rgba(37,99,235,0.20), 0 4px 12px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#60A5FA";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,219,254,0.55)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${cert.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${cert.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-xl mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-500">{cert.issuer}</p>
                      <span className={`inline-block mt-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-semibold border ${cert.badgeBorder} ${cert.badgeBg} ${cert.badgeText}`}>
                        {cert.standard}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cert.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className={`w-3.5 h-3.5 ${cert.dotColor} mt-0.5 flex-shrink-0`} />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards compliance */}
      <section className="py-16 bg-section-frost relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-55 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-48 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
        />
        <div className="section-container relative">
          <SectionHeader
            label="Standards"
            title="Regulatory Compliance"
            titleHighlight="Reference"
            description="CurrentElectricals designs and manufactures to the following standards and regulations."
            className="mb-12"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {standards.map((std, i) => (
              <motion.div
                key={std}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white text-sm text-slate-600 transition-all duration-200"
                style={{ border: "1px solid rgba(191,219,254,0.55)", boxShadow: "0 1px 4px rgba(37,99,235,0.05), 0 4px 12px rgba(37,99,235,0.06)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#60A5FA";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,99,235,0.14)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,219,254,0.55)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(37,99,235,0.05), 0 4px 12px rgba(37,99,235,0.06)";
                }}
              >
                <CheckCircle className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                {std}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

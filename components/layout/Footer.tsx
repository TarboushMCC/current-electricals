"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Zap,
  Linkedin,
  Facebook,
  ArrowRight,
} from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";

const footerServices = SERVICES.slice(0, 8);

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Projects", href: "/projects" },
      { label: "Certifications", href: "/certifications" },
      { label: "Industries", href: "/industries" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="relative border-t border-slate-800"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #0B1120 100%)" }}
    >
      {/* Top gradient accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 w-fit">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-[17px] leading-none">
                  Current<span className="text-brand-400">Electricals</span>
                </p>
                <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-slate-500 mt-0.5">
                  Abu Dhabi, UAE
                </p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              UAE&apos;s premier low voltage switchgear and electrical panel
              manufacturer. ASTA-tested, QCC-approved solutions for industrial,
              commercial, and infrastructure projects.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${COMPANY.phone[0]}`}
                className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                <span>{COMPANY.phone[0]}</span>
              </a>
              <a
                href={`tel:${COMPANY.phone[1]}`}
                className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                <span>{COMPANY.phone[1]}</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                <span>
                  {COMPANY.address.line1}
                  <br />
                  {COMPANY.address.line2}
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-700 hover:border-brand-600 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-700 hover:border-brand-600 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-green-700 hover:border-green-600 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-heading font-semibold text-white text-xs tracking-[0.12em] uppercase mb-5">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-500 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            {footerLinks.map((col) => (
              <div key={col.title} className="mb-8 last:mb-0">
                <h3 className="font-heading font-semibold text-white text-xs tracking-[0.12em] uppercase mb-4">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                      >
                        <ArrowRight className="w-3 h-3 text-brand-500 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter + Certifications */}
          <div>
            <h3 className="font-heading font-semibold text-white text-xs tracking-[0.12em] uppercase mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Subscribe to receive project updates and industry insights.
            </p>
            <form
              className="flex gap-2 mb-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 min-w-0 px-3 py-2.5 text-sm rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
              />
              <button
                type="submit"
                className="px-3 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white transition-colors flex-shrink-0"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Certification badges */}
            <h3 className="font-heading font-semibold text-white text-xs tracking-[0.12em] uppercase mb-4">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {["ASTA Tested", "QCC Approved", "IEC 61439", "ISO 9001"].map((cert) => (
                <span
                  key={cert}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wide text-brand-300 border border-brand-800/60 bg-brand-900/30"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} CurrentElectricals LLC. All rights reserved. Abu Dhabi, UAE.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">·</span>
            <Link
              href="/terms-conditions"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

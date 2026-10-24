import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle, ArrowRight, ArrowLeft,
  Zap, LayoutGrid, Network, Settings, RefreshCw,
  Battery, Grid, Cpu, Wrench,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { CTABanner } from "@/components/home/CTABanner";
import { ElectricalGrid } from "@/components/ui/ElectricalGrid";

const iconMap: Record<string, React.ElementType> = {
  Zap, LayoutGrid, Network, Settings, RefreshCw,
  Battery, Grid, Cpu, CheckCircle, Wrench,
};

const accentColors = [
  { bg: "bg-brand-50",  icon: "text-brand-600",  dot: "bg-brand-500",  num: "text-brand-400" },
  { bg: "bg-sky-50",    icon: "text-sky-600",    dot: "bg-sky-500",    num: "text-sky-400" },
  { bg: "bg-indigo-50", icon: "text-indigo-600", dot: "bg-indigo-500", num: "text-indigo-400" },
  { bg: "bg-violet-50", icon: "text-violet-600", dot: "bg-violet-500", num: "text-violet-400" },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — UAE Electrical Panel Manufacturer`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Zap;
  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const next = SERVICES[(currentIndex + 1) % SERVICES.length];
  const prev = SERVICES[(currentIndex - 1 + SERVICES.length) % SERVICES.length];
  const accent = accentColors[currentIndex % accentColors.length];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-0 overflow-hidden pt-28 bg-hero">
        <ElectricalGrid variant="hero" />

        <div className="section-container relative pb-16 w-full">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-blue-200/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-200 mb-2">
                Our Services
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-lg text-blue-100/75 max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style={{ height: "40px" }}>
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" fill="white">
            <path d="M0,20 C360,0 720,40 1080,20 C1260,10 1380,30 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-section-steel relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.09) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="section-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Features */}
              <div>
                <h2 className="font-heading font-bold text-slate-900 text-2xl mb-6">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white transition-all duration-200"
                      style={{
                        border: "1px solid rgba(191,219,254,0.55)",
                        boxShadow: "0 1px 4px rgba(37,99,235,0.06), 0 4px 12px rgba(37,99,235,0.07)",
                      }}
                    >
                      <CheckCircle className={`w-4 h-4 ${accent.icon} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm text-slate-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="font-heading font-bold text-slate-900 text-2xl mb-6">
                  Applications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.applications.map((app) => (
                    <div
                      key={app}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white"
                      style={{
                        border: "1px solid rgba(191,219,254,0.55)",
                        boxShadow: "0 1px 4px rgba(37,99,235,0.06), 0 4px 12px rgba(37,99,235,0.07)",
                      }}
                    >
                      <span className={`w-2 h-2 rounded-full ${accent.dot} flex-shrink-0`} />
                      <span className="text-sm text-slate-600">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-heading font-bold text-slate-900 text-2xl mb-6">
                  Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((b, i) => (
                    <div
                      key={b}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white"
                      style={{
                        border: "1px solid rgba(191,219,254,0.55)",
                        boxShadow: "0 1px 4px rgba(37,99,235,0.06), 0 4px 12px rgba(37,99,235,0.07)",
                      }}
                    >
                      <span className={`font-mono text-xs ${accent.num} w-6 flex-shrink-0 font-bold`}>
                        0{i + 1}
                      </span>
                      <span className="text-sm text-slate-600">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5">
              {/* Quote CTA */}
              <div
                className="p-6 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-600 to-brand-700 text-white"
                style={{ boxShadow: "0 8px 32px rgba(37,99,235,0.25)" }}
              >
                <h3 className="font-heading font-semibold text-white text-lg mb-3">
                  Request a Quotation
                </h3>
                <p className="text-sm text-blue-100/80 mb-5 leading-relaxed">
                  Get a detailed technical proposal for your {service.shortTitle} requirements.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold text-sm bg-white text-brand-700 hover:bg-blue-50 transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related services */}
              <div
                className="p-5 rounded-2xl bg-white"
                style={{
                  border: "1px solid rgba(191,219,254,0.55)",
                  boxShadow: "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                <h3 className="font-heading font-semibold text-slate-900 text-sm mb-4 uppercase tracking-wider">
                  Other Services
                </h3>
                <div className="flex flex-col gap-2">
                  {[prev, next].map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-brand-600 transition-colors group py-1"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-brand-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                      {s.shortTitle}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="text-sm text-brand-600 hover:text-brand-700 transition-colors pt-2 border-t border-slate-100 mt-1"
                  >
                    View all services →
                  </Link>
                </div>
              </div>

              {/* Compliance badges */}
              <div
                className="p-5 rounded-2xl bg-white"
                style={{
                  border: "1px solid rgba(191,219,254,0.55)",
                  boxShadow: "0 2px 8px rgba(37,99,235,0.07), 0 8px 24px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                <h3 className="font-heading font-semibold text-slate-900 text-sm mb-4 uppercase tracking-wider">
                  Compliance
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["ASTA Tested", "QCC Approved", "IEC 61439", "UAE Compliant"].map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2.5 py-1 rounded-lg border border-brand-200 bg-brand-50 text-brand-700 font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

import type { Metadata } from "next";
import { ElectricalGrid } from "@/components/ui/ElectricalGrid";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions — CurrentElectricals",
  description: "Terms and Conditions for CurrentElectricals website and services.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <>
      <section className="relative min-h-[38vh] flex items-end pb-0 overflow-hidden pt-28 bg-hero">
        <ElectricalGrid variant="hero" />
        <div className="section-container relative pb-12 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6">
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand-200">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Terms & Conditions</h1>
          <p className="text-blue-200/60 mt-2 text-sm">Last updated: May 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style={{ height: "30px" }}>
          <svg viewBox="0 0 1440 30" preserveAspectRatio="none" className="w-full h-full" fill="white">
            <path d="M0,15 C360,0 720,30 1080,15 C1260,7 1380,22 1440,15 L1440,30 L0,30 Z" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-section-steel relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto">
            <div
              className="p-8 sm:p-12 rounded-2xl bg-white"
              style={{
                border: "1px solid rgba(191,219,254,0.55)",
                boxShadow: "0 4px 12px rgba(37,99,235,0.07), 0 16px 40px rgba(37,99,235,0.09), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
            <article className="prose prose-slate prose-sm max-w-none [&_h2]:font-heading [&_h2]:text-slate-900 [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-semibold [&_p]:text-slate-600 [&_p]:leading-relaxed [&_ul]:text-slate-600 [&_li]:mt-1 [&_strong]:text-slate-700">
              <p className="text-lg text-slate-600">
                These Terms and Conditions govern your use of the CurrentElectricals
                website and the services we provide. By accessing our website or engaging
                our services, you agree to these terms.
              </p>

              <h2>1. Website Use</h2>
              <p>
                This website is provided for general information and business purposes
                only. You may use this website for lawful purposes in accordance with
                these Terms. You must not use this website in any way that is unlawful,
                fraudulent, or harmful.
              </p>

              <h2>2. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, images,
                technical documents, and design — is the property of CurrentElectricals
                or its licensors and is protected by UAE copyright law. You may not
                reproduce, distribute, or create derivative works without our express
                written permission.
              </p>

              <h2>3. Quotations and Proposals</h2>
              <p>
                Quotations provided by CurrentElectricals via our website, email, or
                verbal communication are subject to the following:
              </p>
              <ul>
                <li>Quotations are valid for 30 days from the date of issue unless otherwise stated.</li>
                <li>Quoted prices are subject to material price fluctuations after the validity period.</li>
                <li>Quotations do not constitute a binding contract until a formal purchase order is accepted.</li>
                <li>Technical specifications in quotations are based on information provided by the client.</li>
                <li>Additional requirements discovered during detailed engineering may result in revised pricing.</li>
              </ul>

              <h2>4. Project and Product Liability</h2>
              <p>
                CurrentElectricals&apos; liability for any product or service is limited to
                the value of the contracted supply. We are not liable for:
              </p>
              <ul>
                <li>Consequential losses arising from product failure</li>
                <li>Losses caused by improper installation or maintenance by third parties</li>
                <li>Losses caused by force majeure events</li>
                <li>Losses arising from use outside the rated specifications</li>
              </ul>

              <h2>5. Warranty</h2>
              <p>
                All panel assemblies manufactured by CurrentElectricals carry a standard
                12-month warranty from date of delivery, covering manufacturing defects
                under normal operating conditions. Warranty does not cover damage due to
                misuse, unauthorized modification, or electrical surge events.
              </p>

              <h2>6. Delivery and Risk</h2>
              <p>
                Risk in goods passes to the client upon delivery to the agreed location.
                Delivery timelines stated in quotations are estimates and may be affected
                by material supply conditions, client drawing approvals, or force majeure.
              </p>

              <h2>7. Payment Terms</h2>
              <p>
                Payment terms are as agreed in each individual contract or purchase order.
                Standard terms are 30% advance payment with order, balance on delivery.
                Late payments may attract interest in accordance with UAE commercial law.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the United Arab Emirates.
                Any disputes shall be subject to the exclusive jurisdiction of the
                courts of Abu Dhabi, UAE.
              </p>

              <h2>9. Website Disclaimer</h2>
              <p>
                This website is provided &ldquo;as is&rdquo;. While we endeavour to keep
                information accurate and up to date, we make no warranties about
                the completeness or accuracy of the content. Technical specifications
                shown on the website are indicative and subject to change without notice.
              </p>

              <h2>10. Contact</h2>
              <p>
                For any queries regarding these Terms, contact us at:
                <br />
                CurrentElectricals, {COMPANY.address.line1}, {COMPANY.address.line2}
                <br />
                Email: <a href={`mailto:${COMPANY.email}`} className="text-brand-600">{COMPANY.email}</a>
                <br />
                Phone: {COMPANY.phone[0]}
              </p>
            </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { ElectricalGrid } from "@/components/ui/ElectricalGrid";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — CurrentElectricals",
  description: "Privacy Policy for CurrentElectricals website and services.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative min-h-[38vh] flex items-end pb-0 overflow-hidden pt-28 bg-hero">
        <ElectricalGrid variant="hero" />
        <div className="section-container relative pb-12 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6">
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand-200">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Privacy Policy</h1>
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
                CurrentElectricals (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                and safeguard your personal information when you use our website
                at {process.env.NEXT_PUBLIC_SITE_URL || "www.currentelectricals.ae"}.
              </p>

              <h2>1. Information We Collect</h2>
              <p>We collect the following types of information:</p>
              <ul>
                <li><strong>Contact information:</strong> Name, email address, phone number, company name when you submit a contact or quotation form.</li>
                <li><strong>Application information:</strong> CV, work experience, education details when you apply for a job.</li>
                <li><strong>Usage data:</strong> IP address, browser type, pages visited, time spent — collected automatically via cookies and analytics.</li>
                <li><strong>Communications:</strong> Messages you send us via email or our contact forms.</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Respond to your inquiries and provide quotations</li>
                <li>Process job applications</li>
                <li>Improve our website and services</li>
                <li>Send project updates if you have subscribed</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and security threats</li>
              </ul>

              <h2>3. Data Sharing</h2>
              <p>
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes. We may share data with:
              </p>
              <ul>
                <li>Service providers who assist us in operating our website (hosting, email delivery)</li>
                <li>Legal authorities when required by UAE law</li>
                <li>Professional advisors (legal, accounting) under confidentiality obligations</li>
              </ul>

              <h2>4. Data Retention</h2>
              <p>
                We retain your personal data for as long as necessary to fulfil
                the purposes described in this policy. Contact form data is
                retained for 2 years. Job applications are retained for 12
                months. You may request deletion at any time.
              </p>

              <h2>5. Cookies</h2>
              <p>
                Our website uses cookies for analytics and functionality. You
                may disable cookies in your browser settings; however, some
                features may not function correctly. We use Google Analytics to
                understand website usage patterns.
              </p>

              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2>7. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. Our website uses HTTPS
                encryption for all data transmission.
              </p>

              <h2>8. UAE Legal Compliance</h2>
              <p>
                This Privacy Policy is designed to comply with UAE Federal
                Decree Law No. 45 of 2021 on the Protection of Personal Data
                (PDPL) and applicable UAE regulations.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                For privacy-related inquiries, contact us at:
                <br />
                CurrentElectricals, {COMPANY.address.line1}, {COMPANY.address.line2}
                <br />
                Email: <a href={`mailto:${COMPANY.email}`} className="text-brand-600">{COMPANY.email}</a>
                <br />
                Phone: {COMPANY.phone[0]}
              </p>

              <h2>10. Changes to this Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated revision date.
                Continued use of our website constitutes acceptance of the
                updated policy.
              </p>
            </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.currentelectricals.ae";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CurrentElectricals — Premium LV Switchgear & Electrical Panel Manufacturer | UAE",
    template: "%s | CurrentElectricals UAE",
  },
  description:
    "UAE's leading manufacturer of low voltage switchgear, MDB panels, SMDB panels, MCC panels, ATS panels, and capacitor banks. ASTA-tested, QCC-approved. Serving airports, oil & gas, infrastructure, and commercial sectors across Abu Dhabi & Dubai.",
  keywords: [
    "electrical switchgear UAE",
    "LV switchgear manufacturer Abu Dhabi",
    "MDB panel manufacturer UAE",
    "SMDB panels Dubai",
    "MCC panels UAE",
    "ATS panels Abu Dhabi",
    "electrical distribution boards UAE",
    "capacitor banks UAE",
    "switchgear company Abu Dhabi",
    "panel manufacturer UAE",
    "industrial electrical solutions UAE",
    "electrical engineering UAE",
    "ASTA tested switchgear",
    "QCC approved electrical panels",
    "Musafah electrical company",
  ],
  authors: [{ name: "CurrentElectricals", url: siteUrl }],
  creator: "CurrentElectricals",
  publisher: "CurrentElectricals",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: "CurrentElectricals",
    title: "CurrentElectricals — Premium LV Switchgear & Electrical Solutions | UAE",
    description:
      "ASTA-tested, QCC-approved electrical switchgear manufacturer in Abu Dhabi. MDB, SMDB, MCC, ATS panels and more for UAE's industrial, commercial, and infrastructure sectors.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CurrentElectricals — UAE Electrical Switchgear Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CurrentElectricals — Premium LV Switchgear | UAE",
    description:
      "UAE's leading electrical panel manufacturer. MDB, SMDB, MCC, ATS panels. ASTA-tested & QCC-approved.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050B18",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CurrentElectricals",
              description:
                "UAE-based low voltage switchgear and electrical panel manufacturer",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plot M16, Musafah Industrial Area",
                addressLocality: "Abu Dhabi",
                addressCountry: "AE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971-2-555-0000",
                contactType: "sales",
                areaServed: "AE",
                availableLanguage: ["English", "Arabic"],
              },
              sameAs: [
                "https://www.linkedin.com/company/currentelectricals",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-navy-900 text-metallic-200 min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

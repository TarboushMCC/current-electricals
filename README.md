# CurrentElectricals

Enterprise corporate website for CurrentElectricals, a UAE low-voltage switchgear manufacturer — built to stand next to Schneider Electric and Siemens in visual quality.

> **Note:** This repository currently contains documentation only. The source code will be published at a later date.

## Pages (28 static)

- **Home** — hero, services grid, why-us, industries, projects, testimonials, CTA
- **About** — company story, timeline, mission/vision, manufacturing capabilities
- **Services** — overview plus 10 statically-generated service detail pages
- **Industries** — 8 industry sectors
- **Projects** — filterable portfolio
- **Certifications** — ASTA, QCC, IEC 61439, QMS
- **Careers** — job listings with an application form
- **Contact** — tabbed general-inquiry and quote-request forms
- Privacy policy, terms & conditions, sitemap.xml, robots.txt, custom 404

## API routes

Three form endpoints (contact, quote request, job application), each delivering templated email over SMTP — all with Zod validation and rate limiting.

## Design system

Industrial dark theme: deep navy backgrounds, electric-blue primary, metallic text tones, grid overlays and glow effects. Space Grotesk headings with Inter body. Custom components include an animated electrical-grid backdrop, animated counters, and reusable section/CTA banners.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + custom design tokens |
| Animation | Framer Motion |
| Components | Radix UI primitives, Lucide icons |
| Forms | React Hook Form + Zod |
| Email | Nodemailer (SMTP) |

## Architecture

All company data — services, projects, testimonials, jobs — lives in a single constants module, making the entire site content-editable from one file. Production build outputs 28 static pages with zero errors, and the repo ships deployment guides for cPanel, VPS, and Docker.

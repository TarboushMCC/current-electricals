import type { Service, Industry, Project, Testimonial, JobOpening, Stat, NavItem } from "@/types";

export const COMPANY = {
  name: "CurrentElectricals",
  tagline: "Precision Engineered Electrical Solutions",
  description:
    "UAE's premier low voltage switchgear and electrical panel manufacturer. Delivering ASTA-tested, QCC-approved solutions for industrial, commercial, and infrastructure projects across the Emirates.",
  phone: ["+971 2 555 0000", "+971 50 555 0000"],
  email: "info@currentelectricals.ae",
  salesEmail: "sales@currentelectricals.ae",
  address: {
    line1: "Plot M16, Musafah Industrial Area",
    line2: "Abu Dhabi, United Arab Emirates",
    city: "Abu Dhabi",
    country: "UAE",
    poBox: "P.O. Box 00000",
  },
  whatsapp: "+971505550000",
  founded: 2010,
  license: "UAE Industrial License",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Low Voltage Switchgear", href: "/services/low-voltage-switchgear" },
      { label: "MDB Panels", href: "/services/mdb-panels" },
      { label: "SMDB Panels", href: "/services/smdb-panels" },
      { label: "MCC Panels", href: "/services/mcc-panels" },
      { label: "ATS Panels", href: "/services/ats-panels" },
      { label: "Capacitor Banks", href: "/services/capacitor-banks" },
      { label: "Distribution Boards", href: "/services/distribution-boards" },
      { label: "Custom Panels", href: "/services/custom-panels" },
      { label: "Electrical Testing", href: "/services/electrical-testing" },
      { label: "Electrical Maintenance", href: "/services/electrical-maintenance" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const STATS: Stat[] = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "%", label: "Quality Assured" },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    slug: "low-voltage-switchgear",
    title: "Low Voltage Switchgear Systems",
    shortTitle: "LV Switchgear",
    description:
      "Engineered low voltage switchgear assemblies designed and manufactured to IEC 61439 standards. Our LV switchgear solutions handle up to 6300A with full type-tested ratings for maximum operational reliability.",
    icon: "Zap",
    features: [
      "IEC 61439 type-tested assemblies",
      "Up to 6300A current rating",
      "Fully compartmentalized design",
      "Arc-flash protection options",
      "Remote monitoring capability",
      "Custom busbar arrangements",
    ],
    applications: [
      "Power distribution centers",
      "Commercial high-rises",
      "Industrial plants",
      "Data centers",
      "Airport infrastructure",
    ],
    benefits: [
      "Enhanced operational safety",
      "Reduced downtime",
      "Scalable architecture",
      "Compliance with UAE regulations",
    ],
  },
  {
    id: "2",
    slug: "mdb-panels",
    title: "Main Distribution Boards",
    shortTitle: "MDB Panels",
    description:
      "Precision-manufactured main distribution boards engineered for seamless power management. Our MDB panels integrate advanced protection devices and metering systems for full operational control.",
    icon: "LayoutGrid",
    features: [
      "Custom-engineered per project",
      "Integrated metering & monitoring",
      "Modular breaker configurations",
      "IP54/IP65 protection ratings",
      "DIN rail and fixed mounting",
      "Emergency bypass options",
    ],
    applications: [
      "Commercial buildings",
      "Shopping malls",
      "Hotels & hospitality",
      "Government facilities",
      "Industrial complexes",
    ],
    benefits: [
      "Optimized power distribution",
      "Real-time monitoring",
      "Reduced installation time",
      "Future expansion ready",
    ],
  },
  {
    id: "3",
    slug: "smdb-panels",
    title: "Sub-Main Distribution Boards",
    shortTitle: "SMDB Panels",
    description:
      "Sub-main distribution boards providing intermediate power distribution with integrated protection. Engineered for high-density commercial and industrial environments requiring granular circuit control.",
    icon: "Network",
    features: [
      "Multi-tier distribution",
      "Integrated earth leakage protection",
      "Surge protection ready",
      "Compact form factor",
      "Flush or surface mounting",
      "Dual supply capability",
    ],
    applications: [
      "Office floors",
      "Retail units",
      "Residential towers",
      "Healthcare facilities",
      "Educational institutions",
    ],
    benefits: [
      "Granular circuit isolation",
      "Improved safety compliance",
      "Space-efficient design",
      "Easy maintenance access",
    ],
  },
  {
    id: "4",
    slug: "mcc-panels",
    title: "Motor Control Centers",
    shortTitle: "MCC Panels",
    description:
      "Industrial-grade Motor Control Centers with intelligent motor management for complex industrial environments. Supporting DOL, Star-Delta, VFD, and soft-starter configurations.",
    icon: "Settings",
    features: [
      "DOL, Star-Delta, VFD integration",
      "PLC-ready I/O modules",
      "Motor protection relays",
      "Auto/Manual changeover",
      "SCADA integration capability",
      "IEC 61439-2 compliant",
    ],
    applications: [
      "Water treatment plants",
      "HVAC systems",
      "Oil & gas facilities",
      "Manufacturing plants",
      "Pumping stations",
    ],
    benefits: [
      "Centralized motor management",
      "Predictive maintenance",
      "Energy efficiency tracking",
      "Process automation ready",
    ],
  },
  {
    id: "5",
    slug: "ats-panels",
    title: "Automatic Transfer Switches",
    shortTitle: "ATS Panels",
    description:
      "Intelligent automatic transfer switch panels ensuring seamless power continuity. Providing sub-second switching between utility and backup power sources for mission-critical environments.",
    icon: "RefreshCw",
    features: [
      "Sub-second transfer time",
      "Programmable time delays",
      "Generator auto-start control",
      "Remote monitoring & control",
      "3-position (Normal/Off/Emergency)",
      "Motorized changeover",
    ],
    applications: [
      "Hospitals & healthcare",
      "Data centers",
      "Airports",
      "Hotels",
      "Critical infrastructure",
    ],
    benefits: [
      "Zero downtime power",
      "Generator life extension",
      "Remote operation",
      "Full audit trail logging",
    ],
  },
  {
    id: "6",
    slug: "capacitor-banks",
    title: "Capacitor Banks",
    shortTitle: "Capacitor Banks",
    description:
      "Automatic power factor correction capacitor banks reducing reactive power consumption and improving energy efficiency. Compliant with DEWA, ADDC, and SEWA utility requirements.",
    icon: "Battery",
    features: [
      "Automatic PFC controllers",
      "Detuned reactor protection",
      "Thyristor switching options",
      "Power quality monitoring",
      "Harmonic filtering",
      "DEWA/ADDC compliant",
    ],
    applications: [
      "Industrial plants",
      "Commercial buildings",
      "Data centers",
      "Manufacturing facilities",
      "Utility substations",
    ],
    benefits: [
      "Reduced electricity bills",
      "Penalty avoidance",
      "Improved voltage stability",
      "Extended equipment life",
    ],
  },
  {
    id: "7",
    slug: "distribution-boards",
    title: "Distribution Boards",
    shortTitle: "Distribution Boards",
    description:
      "Comprehensive range of final distribution boards for residential, commercial, and light industrial applications. Manufactured to BS EN 61439-3 with MCB, RCCB, and RCBO configurations.",
    icon: "Grid",
    features: [
      "MCB/RCCB/RCBO options",
      "Consumer unit range",
      "Industrial DB range",
      "Anti-tamper mechanisms",
      "Lockable enclosures",
      "DIN rail construction",
    ],
    applications: [
      "Residential villas",
      "Apartments",
      "Retail shops",
      "Small offices",
      "Light industrial units",
    ],
    benefits: [
      "Affordable protection",
      "Quick installation",
      "Modular expansion",
      "Long service life",
    ],
  },
  {
    id: "8",
    slug: "custom-panels",
    title: "Custom Electrical Panels",
    shortTitle: "Custom Panels",
    description:
      "Bespoke electrical panel solutions engineered to exact project specifications. From concept through to type testing and commissioning, our engineering team delivers purpose-built solutions.",
    icon: "Cpu",
    features: [
      "Full design & engineering",
      "CAD/CAE development",
      "Type testing available",
      "Factory acceptance testing",
      "Site commissioning",
      "As-built documentation",
    ],
    applications: [
      "Oil & gas platforms",
      "Desalination plants",
      "Power generation",
      "Offshore installations",
      "Process industries",
    ],
    benefits: [
      "Exact specification match",
      "Single-source responsibility",
      "Full documentation package",
      "Extended warranty options",
    ],
  },
  {
    id: "9",
    slug: "electrical-testing",
    title: "Electrical Testing & Commissioning",
    shortTitle: "Testing & Commissioning",
    description:
      "Comprehensive electrical testing and commissioning services by certified engineers. Covering pre-commissioning, functional testing, and full system acceptance testing per IEC standards.",
    icon: "CheckCircle",
    features: [
      "Insulation resistance testing",
      "High-pot testing",
      "Thermal imaging",
      "Power quality analysis",
      "Protection relay testing",
      "Full commissioning reports",
    ],
    applications: [
      "New installations",
      "System upgrades",
      "Annual maintenance",
      "Post-fault verification",
      "Pre-handover testing",
    ],
    benefits: [
      "Safety compliance verification",
      "Reduced fault risk",
      "Detailed test reports",
      "Regulatory compliance",
    ],
  },
  {
    id: "10",
    slug: "electrical-maintenance",
    title: "Electrical Maintenance Services",
    shortTitle: "Maintenance",
    description:
      "Preventive and corrective electrical maintenance programs for industrial and commercial facilities. Our AMC packages ensure maximum uptime and system reliability throughout the year.",
    icon: "Wrench",
    features: [
      "Preventive maintenance schedules",
      "Emergency breakdown response",
      "Thermal scanning",
      "Contact cleaning & tightening",
      "Trip testing",
      "Maintenance reports",
    ],
    applications: [
      "Industrial facilities",
      "Commercial complexes",
      "Government buildings",
      "Healthcare facilities",
      "Educational campuses",
    ],
    benefits: [
      "Maximized uptime",
      "Extended equipment life",
      "Cost predictability",
      "24/7 emergency support",
    ],
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: "1",
    title: "Oil & Gas",
    description:
      "ATEX and hazardous area electrical solutions for upstream, midstream, and downstream oil & gas operations across the GCC.",
    icon: "Flame",
    applications: ["Process control panels", "Hazardous area DB", "MCC systems", "Emergency shutdown panels"],
  },
  {
    id: "2",
    title: "Airports & Aviation",
    description:
      "Mission-critical electrical distribution systems for UAE international airports, ground support facilities, and aviation infrastructure.",
    icon: "Plane",
    applications: ["Airfield lighting panels", "Ground power units", "ATS systems", "Main distribution"],
  },
  {
    id: "3",
    title: "Infrastructure",
    description:
      "Large-scale electrical solutions for highways, bridges, tunnels, metro systems, and public infrastructure projects.",
    icon: "Building2",
    applications: ["Tunnel ventilation MCC", "Street lighting DB", "Traffic management panels", "Pumping station MCC"],
  },
  {
    id: "4",
    title: "Government & Military",
    description:
      "High-security, reliable electrical systems for government facilities, ministries, and defense installations across the UAE.",
    icon: "Shield",
    applications: ["Secure distribution boards", "UPS integration", "Critical power systems", "Custom security panels"],
  },
  {
    id: "5",
    title: "Real Estate & Hospitality",
    description:
      "Premium electrical solutions for luxury towers, five-star hotels, mixed-use developments, and residential communities.",
    icon: "Hotel",
    applications: ["MDB/SMDB systems", "Floor distribution boards", "Emergency lighting", "Smart building integration"],
  },
  {
    id: "6",
    title: "Industrial & Manufacturing",
    description:
      "Robust electrical and automation panels for factories, manufacturing plants, and industrial zones across the UAE.",
    icon: "Factory",
    applications: ["Production line MCC", "Power factor correction", "VFD panels", "Control room DB"],
  },
  {
    id: "7",
    title: "Healthcare",
    description:
      "Life-safety electrical solutions for hospitals, clinics, and pharmaceutical facilities requiring uninterrupted power.",
    icon: "HeartPulse",
    applications: ["Medical distribution boards", "ATS systems", "Isolated power systems", "Critical care panels"],
  },
  {
    id: "8",
    title: "Commercial",
    description:
      "Complete electrical distribution solutions for office towers, shopping malls, retail centres, and mixed-use commercial properties.",
    icon: "Building",
    applications: ["Retail distribution boards", "Office MDB systems", "Escalator MCC", "Carpark distribution"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Abu Dhabi International Airport Expansion",
    client: "Major Airport Authority",
    location: "Abu Dhabi, UAE",
    year: "2024",
    category: "Airport",
    description:
      "Supply and installation of main distribution boards, sub-main panels, and motor control centers for the terminal expansion project.",
    highlights: [
      "42 MDB panels supplied",
      "120 SMDB units installed",
      "Full commissioning completed",
      "Delivered on schedule",
    ],
    featured: true,
  },
  {
    id: "2",
    title: "Musafah Industrial Complex",
    client: "Leading Industrial Developer",
    location: "Abu Dhabi, UAE",
    year: "2024",
    category: "Industrial",
    description:
      "Complete LV switchgear, MCC, and power factor correction system for a large-scale industrial manufacturing facility.",
    highlights: [
      "2000A main switchboard",
      "12 MCC starters",
      "Automatic PFC banks",
      "SCADA integration",
    ],
    featured: true,
  },
  {
    id: "3",
    title: "Luxury Hotel Tower — Dubai Marina",
    client: "Premium Hospitality Group",
    location: "Dubai, UAE",
    year: "2023",
    category: "Hospitality",
    description:
      "Full electrical distribution system for 45-floor five-star hotel including ATS, MDB, and 200+ distribution boards.",
    highlights: [
      "45-floor complete distribution",
      "ATS for critical power",
      "200+ distribution boards",
      "BMS integration",
    ],
    featured: true,
  },
  {
    id: "4",
    title: "Government Ministry Complex",
    client: "UAE Federal Authority",
    location: "Abu Dhabi, UAE",
    year: "2023",
    category: "Government",
    description:
      "High-security electrical distribution system with redundant power supplies and advanced monitoring for federal government campus.",
    highlights: [
      "Dual-redundant power supply",
      "N+1 UPS integration",
      "Remote monitoring system",
      "Security compliance certified",
    ],
    featured: false,
  },
  {
    id: "5",
    title: "Water Treatment Plant — ADWEC",
    client: "Water Authority",
    location: "Abu Dhabi, UAE",
    year: "2023",
    category: "Infrastructure",
    description:
      "Motor control centers and distribution systems for water treatment infrastructure serving Abu Dhabi metropolitan area.",
    highlights: [
      "6 MCC assemblies",
      "Pump control integration",
      "SCADA-ready I/O",
      "ATEX zone compliance",
    ],
    featured: false,
  },
  {
    id: "6",
    title: "Oil Refinery Upgrade — Ruwais",
    client: "ADNOC Refinery Contractor",
    location: "Ruwais, Abu Dhabi",
    year: "2022",
    category: "Oil & Gas",
    description:
      "Supply of hazardous-area-rated MCC and distribution panels for refinery process upgrade at Ruwais Industrial Complex.",
    highlights: [
      "ATEX Zone 1 & 2 rated",
      "IP65 protection class",
      "Stainless steel enclosures",
      "Full IEC type testing",
    ],
    featured: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Eng. Khalid Al Mansoori",
    role: "Chief Electrical Engineer",
    company: "Abu Dhabi Aviation Authority",
    content:
      "CurrentElectricals delivered exceptional quality on our airport expansion project. Their MDB panels met every specification and the commissioning was flawless. A truly professional team.",
    rating: 5,
  },
  {
    id: "2",
    name: "Mr. Rajesh Kumar",
    role: "Project Director",
    company: "Al Falah Industrial Contractors",
    content:
      "We have been sourcing switchgear from CurrentElectricals for three years. Their product quality is consistently excellent and delivery is always on time. Highly recommended for large industrial projects.",
    rating: 5,
  },
  {
    id: "3",
    name: "Eng. Mohammed Al Rashidi",
    role: "MEP Manager",
    company: "Aldar Properties",
    content:
      "Their technical team understood our luxury development requirements perfectly. The quality of distribution boards supplied was premium-grade and the support throughout the project was outstanding.",
    rating: 5,
  },
  {
    id: "4",
    name: "Eng. Sarah Al Shamsi",
    role: "Facilities Director",
    company: "Abu Dhabi Health Services",
    content:
      "CurrentElectricals' ATS panels and critical power distribution have been running flawlessly in our hospital facilities for two years. The reliability is exactly what healthcare demands.",
    rating: 5,
  },
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "1",
    title: "Senior Electrical Design Engineer",
    department: "Engineering",
    location: "Abu Dhabi, UAE",
    type: "full-time",
    experience: "5-8 years",
    description:
      "Lead the design and engineering of LV switchgear and panel systems. Prepare single-line diagrams, panel schedules, and technical specifications for major projects.",
    requirements: [
      "B.Eng in Electrical Engineering",
      "5+ years LV switchgear design experience",
      "Proficient in AutoCAD Electrical / EPLAN",
      "Knowledge of IEC 61439 standards",
      "UAE driving license preferred",
    ],
    posted: "2026-05-01",
  },
  {
    id: "2",
    title: "Panel Wiring Technician",
    department: "Manufacturing",
    location: "Abu Dhabi, UAE",
    type: "full-time",
    experience: "3-5 years",
    description:
      "Perform panel wiring, cable termination, and in-process quality checks for MDB, SMDB, and MCC assemblies in our Musafah manufacturing facility.",
    requirements: [
      "Diploma / ITI in Electrical",
      "3+ years panel wiring experience",
      "Knowledge of IEC wiring standards",
      "Ability to read single-line diagrams",
      "UAE residency preferred",
    ],
    posted: "2026-05-10",
  },
  {
    id: "3",
    title: "Site Commissioning Engineer",
    department: "Projects",
    location: "UAE (Site-based)",
    type: "full-time",
    experience: "4-7 years",
    description:
      "Perform site commissioning, testing, and handover of electrical switchgear and distribution systems on major construction projects across the UAE.",
    requirements: [
      "B.Eng Electrical or equivalent",
      "4+ years electrical commissioning",
      "Testing certifications (preferred)",
      "Fluent English",
      "UAE driving license",
    ],
    posted: "2026-05-15",
  },
  {
    id: "4",
    title: "Sales Engineer — Electrical Systems",
    department: "Sales",
    location: "Abu Dhabi / Dubai, UAE",
    type: "full-time",
    experience: "3-5 years",
    description:
      "Develop business with contractors, consultants, and end-users across the UAE. Prepare technical proposals, conduct product presentations, and manage the full sales cycle.",
    requirements: [
      "B.Eng Electrical or Business",
      "3+ years electrical sales",
      "Existing UAE contractor network preferred",
      "Excellent communication skills",
      "UAE driving license",
    ],
    posted: "2026-05-20",
  },
];

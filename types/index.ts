export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  features: string[];
  applications: string[];
  benefits: string[];
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: string;
  description: string;
  highlights: string[];
  image?: string;
  featured?: boolean;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  applications: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  year?: string;
  icon?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract";
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  services: string[];
  location: string;
  timeline: string;
  budget?: string;
  description: string;
}

export interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  education: string;
  coverLetter: string;
  cvFile?: File;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon?: string;
}

import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "CurrentElectricals — Premium LV Switchgear & Electrical Panel Manufacturer | UAE",
  description:
    "UAE's leading low voltage switchgear manufacturer in Abu Dhabi. ASTA-tested MDB, SMDB, MCC, ATS panels and electrical solutions for airports, oil & gas, and infrastructure.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <IndustriesSection />
      <FeaturedProjects />
      <Testimonials />
      <CTABanner />
    </>
  );
}

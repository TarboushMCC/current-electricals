import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { MissionVision } from "@/components/about/MissionVision";
import { Timeline } from "@/components/about/Timeline";
import { ManufacturingCapabilities } from "@/components/about/ManufacturingCapabilities";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us — UAE Electrical Switchgear Manufacturer",
  description:
    "Learn about CurrentElectricals — 15+ years of engineering excellence in Abu Dhabi. Our story, mission, certifications, and manufacturing capabilities.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <Timeline />
      <MissionVision />
      <ManufacturingCapabilities />
      <CTABanner />
    </>
  );
}

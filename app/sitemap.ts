import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.currentelectricals.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: siteUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/about`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/industries`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/projects`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/certifications`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${siteUrl}/careers`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const servicePages = SERVICES.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...servicePages].map((page) => ({
    ...page,
    lastModified: new Date().toISOString(),
  }));
}

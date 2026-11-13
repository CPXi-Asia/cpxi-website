import type { MetadataRoute } from "next";
import { CASE_STUDIES, caseStudyPath } from "./_lib/case-studies";
import { SERVICE_PAGES, servicePath } from "./_lib/services";
import { SITE_URL } from "./_lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = CASE_STUDIES.map((c) => c.updated).sort().at(-1);
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: latest ? new Date(latest) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: `${SITE_URL}/services`, lastModified: new Date("2026-10-30"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date("2026-10-30"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/faq`, lastModified: new Date("2026-10-22"), changeFrequency: "monthly", priority: 0.7 },
    ...SERVICE_PAGES.map((s) => ({
      url: `${SITE_URL}${servicePath(s.slug)}`,
      lastModified: new Date(s.updated),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...CASE_STUDIES.map((c) => ({
      url: `${SITE_URL}${caseStudyPath(c.slug)}`,
      lastModified: new Date(c.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

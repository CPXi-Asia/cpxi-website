import { SERVICE_PAGE_ENTRIES } from "../_content/services";

// Service pages are written for the questions buyers type into search and AI
// assistants: an H1 naming the service and market, a plain definition, an
// honest "who it's for" answer, then question-led sections and an FAQ.
export type ServicePage = {
  slug: string;
  practice: "Growth" | "Technology";
  // Matches a name in GROWTH / TECHNOLOGY (services.tsx) so the home page can link to it.
  service: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  definition: string;
  fit: string;
  sections: ServiceSection[];
  faqs: { q: string; a: string }[];
  relatedCaseStudies: string[];
  // Case-study service labels this page covers; matching case studies link
  // back here ("Related service").
  caseStudyServices: string[];
  published: string;
  updated: string;
};

export type ServiceSection = {
  heading: string;
  intro?: string;
  // Rendered as a numbered sequence.
  steps?: { name: string; detail: string }[];
  // Rendered as a term/description list.
  items?: { name: string; detail: string }[];
  outro?: string;
};

export const SERVICE_PAGES: readonly ServicePage[] = SERVICE_PAGE_ENTRIES;

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}

export function servicePath(slug: string) {
  return `/services/${slug}`;
}

// Service pages a case study should link to, by shared service labels.
export function servicePagesForCaseStudy(services: readonly string[]) {
  return SERVICE_PAGES.filter((s) => s.caseStudyServices.some((x) => services.includes(x)));
}

// Home-page service names that have a page of their own.
export function servicePageFor(serviceName: string) {
  return SERVICE_PAGES.find((s) => s.service === serviceName);
}

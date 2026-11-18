import { INSIGHT_ENTRIES } from "../_content/insights";

// Articles answering one buyer question each, laid out the way AI answer
// engines read: a direct answer up top, the evidence in question-led
// sections, then the nuance. Each links to the service pages it supports.
export type Insight = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  // The direct answer, in under ~80 words. Shown first and used as the
  // article's schema.org description.
  answer: string;
  keyPoints: string[];
  sections: InsightSection[];
  faqs: { q: string; a: string }[];
  // Service page slugs this article supports; they link back to it.
  relatedServices: string[];
  relatedCaseStudies?: string[];
  sources?: { name: string; url: string }[];
  published: string;
  updated: string;
};

export type InsightSection = {
  heading: string;
  paragraphs?: string[];
  // Rendered as a term/description list.
  items?: { name: string; detail: string }[];
  // Rendered as a comparison table; the first column is the row label.
  table?: { columns: string[]; rows: string[][] };
  after?: string[];
};

// Newest first.
export const INSIGHTS: readonly Insight[] = [...INSIGHT_ENTRIES].sort((a, b) =>
  b.published.localeCompare(a.published),
);

export function getInsight(slug: string) {
  return INSIGHTS.find((i) => i.slug === slug);
}

export function insightPath(slug: string) {
  return `/insights/${slug}`;
}

export function insightsForService(serviceSlug: string) {
  return INSIGHTS.filter((i) => i.relatedServices.includes(serviceSlug));
}

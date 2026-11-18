import { CASE_STUDY_ENTRIES } from "../_content/case-studies/registry.generated";

// One shape for every case study so pages, llms.txt, the sitemap and JSON-LD
// all read the same fields. Results lead with hard numbers in plain text:
// that is what search and AI engines quote.
//
// This repo is public: entries hold publishable copy only. Source documents
// and reviewer notes live outside the repo.
export type CaseStudy = {
  slug: string;
  client: string;
  project: string;
  // Agency CPXi worked through, if any (shown as "with X").
  via?: string;
  industry: Industry;
  market: string;
  // Campaign year, e.g. "2025" or "2023–2025". null when the source has none.
  year: string | null;
  period?: string;
  services: string[];
  channels: string[];
  headline: string;
  summary: string;
  objective: string;
  challenge: string;
  approach: string[];
  // Most important first; the first result is the card's hero number.
  results: { value: string; label: string }[];
  // Honest takeaways, including what underperformed. Optional.
  learnings?: string[];
  // ISO dates: when this page was first published / last edited.
  published: string;
  updated: string;
};

export type Industry =
  | "Property"
  | "Financial Services"
  | "Automotive"
  | "Consumer Electronics"
  | "FMCG"
  | "Beauty & Personal Care"
  | "Retail & Fashion"
  | "Food & Beverage"
  | "Travel & Aviation"
  | "B2B & Industrial"
  | "Home & Living"
  | "Healthcare"
  | "Education"
  | "Technology";

// Newest campaigns first; undated (legacy) entries last.
export const CASE_STUDIES: readonly CaseStudy[] = [...CASE_STUDY_ENTRIES].sort(
  (a, b) => (b.year ?? "").localeCompare(a.year ?? ""),
);

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

// Same industry first, then the most recent others.
export function relatedCaseStudies(current: CaseStudy, count = 3) {
  const others = CASE_STUDIES.filter((c) => c.slug !== current.slug);
  const same = others.filter((c) => c.industry === current.industry);
  const rest = others.filter((c) => c.industry !== current.industry);
  return [...same, ...rest].slice(0, count);
}

export function caseStudyPath(slug: string) {
  return `/case-studies/${slug}`;
}

// "UOL Group · Property · Singapore · 2025"
export function caseStudyMeta(c: CaseStudy) {
  return [c.industry, c.market, c.year].filter(Boolean).join(" · ");
}

import Link from "next/link";
import { caseStudyMeta, caseStudyPath, type CaseStudy } from "../_lib/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [lead] = study.results;
  return (
    <li className="h-full">
      <Link
        href={caseStudyPath(study.slug)}
        className="group flex h-full flex-col rounded-xl border border-surface-border bg-surface p-6 transition-colors hover:border-accent sm:p-8"
      >
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          {caseStudyMeta(study)}
        </p>
        {lead && (
          <p className="mt-5">
            <span className="block text-4xl font-bold tracking-tight text-accent sm:text-5xl">
              {lead.value}
            </span>
            <span className="mt-1 block text-sm text-muted">{lead.label}</span>
          </p>
        )}
        <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground group-hover:text-accent-hover">
          {study.headline}
        </h3>
        <p className="mt-auto pt-6 text-sm font-medium text-foreground">
          {study.client}
          <span aria-hidden className="ml-2 text-accent">
            →
          </span>
        </p>
      </Link>
    </li>
  );
}

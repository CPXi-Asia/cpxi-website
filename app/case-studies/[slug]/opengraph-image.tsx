import { ImageResponse } from "next/og";
import { OG_SIZE, OgCard } from "../../_components/og-card";
import { CASE_STUDIES, getCaseStudy } from "../../_lib/case-studies";
import { SITE_NAME } from "../../_lib/site";

export const alt = `${SITE_NAME} case study`;
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const lead = study?.results[0];
  return new ImageResponse(
    <OgCard
      eyebrow={study ? `Case study · ${study.industry}` : SITE_NAME}
      title={study?.headline ?? SITE_NAME}
      metric={lead?.value}
      metricLabel={lead?.label}
    />,
    size,
  );
}

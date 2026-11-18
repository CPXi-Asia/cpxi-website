import { ImageResponse } from "next/og";
import { OG_SIZE, OgCard } from "../../_components/og-card";
import { INSIGHTS, getInsight } from "../../_lib/insights";
import { SITE_NAME } from "../../_lib/site";

export const alt = `${SITE_NAME} insight`;
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  return new ImageResponse(<OgCard eyebrow="Insights" title={insight?.title ?? SITE_NAME} />, size);
}

import { ImageResponse } from "next/og";
import { OG_SIZE, OgCard } from "../../_components/og-card";
import { SERVICE_PAGES, getServicePage } from "../../_lib/services";
import { SITE_NAME } from "../../_lib/site";

export const alt = `${SITE_NAME} service`;
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  return new ImageResponse(
    <OgCard eyebrow={page ? `${page.practice} · ${page.service}` : SITE_NAME} title={page?.title ?? SITE_NAME} />,
    size,
  );
}

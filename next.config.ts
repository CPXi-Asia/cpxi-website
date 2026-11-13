import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // One canonical host: the apex domain and the stable Vercel alias both
      // served the site with a 200, splitting ranking signals three ways.
      // (Per-deployment preview URLs are untouched — Vercel already noindexes
      // those.)
      ...["cpxi-asia.com", "cpxi-website.vercel.app"].map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://www.cpxi-asia.com/:path*",
        permanent: true,
      })),
      // Legacy CodeIgniter case studies (/read/<id>/<slug>, also live on
      // sg.cpxi-asia.com) now have republished pages; send each to its own.
      ...Object.entries({
        "1": "fmcg-retailer-ecommerce-growth",
        "2": "luxury-retailer-ecommerce-roas",
        "3": "tertiary-institution-student-recruitment",
        "4": "property-developer-overseas-leads",
      }).map(([id, slug]) => ({
        source: `/read/${id}/:rest*`,
        destination: `/case-studies/${slug}`,
        permanent: true,
      })),
      { source: "/page/privacy", destination: "/privacy", permanent: true },
      // Other legacy URLs still in Google's index (/page/career, other /read/
      // posts) have no equivalents yet, so send them home instead of 404ing.
      { source: "/page/:path*", destination: "/", permanent: true },
      { source: "/read/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

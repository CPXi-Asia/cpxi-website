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
      // Legacy CodeIgniter URLs still in Google's index (/page/career,
      // /page/privacy, /read/<id>/<slug> blog posts). The one-pager has no
      // equivalents yet, so send them home instead of 404ing.
      { source: "/page/:path*", destination: "/", permanent: true },
      { source: "/read/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

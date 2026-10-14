import type { MetadataRoute } from "next";
import { SITE_URL } from "./_lib/site";

// Open to every crawler, AI ones included (GPTBot, ClaudeBot, PerplexityBot,
// Google-Extended…) — being quotable by AI answers is the point.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

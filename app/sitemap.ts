import type { MetadataRoute } from "next";
import { blog } from "@/.velite";

const BASE = "https://www.automationwarrior.ai";
const paths = [
  "", "/blog", "/fractional-caio", "/ai-consulting", "/ai-implementation",
  "/agent-teams", "/ai-operator-plans", "/about", "/book-a-call",
  "/affiliate-disclosure", "/privacy-policy", "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Omit lastModified where no content revision date is maintained.
    // A deployment alone does not mean every page changed.
    ...paths.map(path => ({ url: BASE + path })),
    ...blog.filter(post => !post.draft).map(post => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.updatedDate || post.date),
    })),
  ];
}

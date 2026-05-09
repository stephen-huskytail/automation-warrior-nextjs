import { MetadataRoute } from "next";
import { blog } from "@/.velite";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.automationwarrior.ai";

  const blogEntries: MetadataRoute.Sitemap = blog
    .filter((p) => !p.draft)
    .map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}

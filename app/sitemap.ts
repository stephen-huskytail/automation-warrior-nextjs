import { MetadataRoute } from "next";

const BASE = "https://www.automationwarrior.ai";

type VelitePost = {
  slug?: string;
  date?: string;
  draft?: boolean;
};

function safeDate(value: unknown): Date {
  if (typeof value === "string" || value instanceof Date) {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }
  return new Date();
}

async function getBlogEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const { blog } = await import("@/.velite");
    if (!Array.isArray(blog)) return [];

    return (blog as VelitePost[])
      .filter((post) => post && !post.draft && typeof post.slug === "string" && post.slug.length > 0)
      .map((post) => ({
        url: `${BASE}/blog/${post.slug}`,
        lastModified: safeDate(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
  } catch {
    // Velite output can be missing or throw; still emit money/legal pages.
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/fractional-caio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/agent-teams`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/book-a-call`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/affiliate-disclosure`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogEntries = await getBlogEntries();
  return [...staticPages, ...blogEntries];
}

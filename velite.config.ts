import { defineConfig, defineCollection, s } from "velite";

const blog = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s.object({
    title: s.string(),
    description: s.string(),
    date: s.isodate(),
    slug: s.slug("blog"),
    tags: s.array(s.string()).optional().default([]),
    author: s.string().optional().default("Automation Warrior"),
    image: s.string().optional(),
    draft: s.boolean().optional().default(false),
    // Auto-generated
    content: s.mdx(),
    excerpt: s.excerpt(),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { blog },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});

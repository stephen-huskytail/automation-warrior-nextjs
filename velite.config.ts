import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";

const blog = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s.object({
    title: s.string(),
    description: s.string(),
    date: s.isodate(),
    slug: s.slug("blog"),
    tags: s.array(s.string()).optional().default([]),
    author: s.string().optional().default("Stephen Gardner"),
    image: s.string().optional(),
    draft: s.boolean().optional().default(false),
    // Extended frontmatter
    updatedDate: s.isodate().optional(),
    schema_type: s.enum(["Article", "Review", "HowTo"]).optional().default("Article"),
    tool_name: s.string().optional(),
    rating: s.number().optional(),
    featured_image: s.string().optional(),
    image_alt: s.string().optional(),
    // Auto-generated
    content: s.mdx(),
    excerpt: s.excerpt(),
    toc: s.toc(),
    readingTime: s.raw().transform((raw) => {
      const stripped = raw.replace(/^---[\s\S]*?---/, "").trim();
      const words = stripped.split(/\s+/).filter(Boolean).length;
      return Math.ceil(words / 200);
    }),
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
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [],
  },
});

// Type declarations for Velite-generated output at @/.velite
// These are hand-maintained to match velite.config.ts schema.
// The actual data is generated at build time by `velite build` (prebuild script).
declare module "@/.velite" {
  export interface TocEntry {
    title: string;
    url: string;
    items: TocEntry[];
  }

  export interface Post {
    title: string;
    description: string;
    date: string;
    slug: string;
    tags: string[];
    author: string;
    image?: string;
    draft: boolean;
    // Extended frontmatter
    updatedDate?: string;
    schema_type: "Article" | "Review" | "HowTo";
    tool_name?: string;
    rating?: number;
    featured_image?: string;
    image_alt?: string;
    /** Compiled MDX function body string — pass to MDXContent component */
    content: string;
    excerpt: string;
    toc: TocEntry[];
    readingTime: number;
  }

  export const blog: Post[];
}

// Type declarations for Velite-generated output at @/.velite
// These are hand-maintained to match velite.config.ts schema.
// The actual data is generated at build time by `velite build` (prebuild script).
declare module "@/.velite" {
  export interface Post {
    title: string;
    description: string;
    date: string;
    slug: string;
    tags: string[];
    author: string;
    image?: string;
    draft: boolean;
    /** Compiled MDX function body string — pass to MDXContent component */
    content: string;
    excerpt: string;
  }

  export const blog: Post[];
}

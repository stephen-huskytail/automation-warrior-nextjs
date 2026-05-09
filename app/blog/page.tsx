import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { blog as posts } from "@/.velite";

export const metadata: Metadata = {
  title: "Blog | Automation Warrior",
  description:
    "Insights on AI automation workflows, AI agents, and how to accelerate your business with generative AI.",
  alternates: {
    canonical: "https://www.automationwarrior.ai/blog",
  },
  openGraph: {
    title: "Blog | Automation Warrior",
    description:
      "Insights on AI automation workflows, AI agents, and how to accelerate your business with generative AI.",
    url: "https://www.automationwarrior.ai/blog",
    siteName: "Automation Warrior",
    type: "website",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const published = posts
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          {/* Hero */}
          <section className="blog-hero-section">
            <div className="padding-global">
              <div className="container">
                <div className="blog-hero-inner">
                  <span className="blog-label">Automation Warrior Blog</span>
                  <h1 className="blog-hero-heading">
                    AI Insights &amp; Automation Strategies
                  </h1>
                  <p className="blog-hero-sub">
                    Practical guides, case studies, and deep-dives on building AI
                    automation workflows that actually move the needle.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Post Grid */}
          <section className="blog-posts-section">
            <div className="padding-global">
              <div className="container">
                {published.length === 0 ? (
                  <p className="blog-empty">No posts yet — check back soon.</p>
                ) : (
                  <div className="blog-grid">
                    {published.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="blog-card"
                      >
                        <div className="blog-card-inner">
                          <div className="blog-card-meta">
                            <span className="blog-card-date">
                              {formatDate(post.date)}
                            </span>
                            {post.tags.length > 0 && (
                              <span className="blog-card-tag">
                                {post.tags[0]}
                              </span>
                            )}
                          </div>
                          <h2 className="blog-card-title">{post.title}</h2>
                          <p className="blog-card-excerpt">{post.description}</p>
                          <span className="blog-card-cta">
                            Read article →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}

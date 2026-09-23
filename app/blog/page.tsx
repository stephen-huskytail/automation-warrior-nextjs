import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { blog as posts } from "@/.velite";

export const metadata: Metadata = {
  title: "AI Leadership & Business Insights | Automation Warrior",
  description:
    "AI leadership, team capability, and measurable business results for leaders of 7–9 figure businesses. Practical perspectives from Stephen Gardner, fractional CAIO.",
  alternates: { canonical: "https://www.automationwarrior.ai/blog" },
  openGraph: {
    title: "AI Leadership & Business Insights | Automation Warrior",
    description:
      "Make better AI decisions, build team capability, and measure the business impact. Practical insights for leaders of 7–9 figure businesses.",
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
    timeZone: "UTC",
  });
}

function PostCard({ post, featured = false }: { post: (typeof posts)[number]; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className={`blog-card${featured ? " blog-card-featured" : ""}`}>
      {post.featured_image && (
        <div className="blog-card-thumb">
          <Image
            src={post.featured_image}
            alt={post.image_alt || post.title}
            width={600}
            height={340}
            sizes="(max-width: 767px) 90vw, 600px"
            className="blog-card-thumb-img"
          />
        </div>
      )}
      <div className="blog-card-inner">
        {featured && <span className="blog-featured-label">Start here</span>}
        <div className="blog-card-meta">
          <span className="blog-card-date">{formatDate(post.date)}</span>
          {post.tags[0] && <span className="blog-card-tag">{post.tags[0]}</span>}
          <span className="blog-card-date">{post.readingTime} min read</span>
        </div>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.description}</p>
        <span className="blog-card-cta">Read article →</span>
      </div>
    </Link>
  );
}

export default function BlogIndex() {
  const published = posts
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const businessPosts = published.filter((p) => p.contentType === "Business Insight");
  const technicalPosts = published.filter((p) => p.contentType === "Technical Guide");
  const featured = businessPosts.find((p) => p.featured);

  return (
    <>
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          <section className="blog-hero-section">
            <div className="padding-global">
              <div className="container">
                <div className="blog-hero-inner">
                  <span className="blog-label">For leaders of 7–9 figure businesses</span>
                  <h1 className="blog-hero-heading">AI leadership. Stronger teams. Measurable results.</h1>
                  <p className="blog-hero-sub">
                    Perspectives from Stephen Gardner on choosing where AI belongs,
                    helping your people use it, and measuring whether it improves the business.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="blog-posts-section" aria-labelledby="business-insights-heading">
            <div className="padding-global">
              <div className="container">
                <div className="blog-section-intro">
                  <h2 id="business-insights-heading">Business insights</h2>
                  <p>Practical frameworks for priorities, team capability, and accountable implementation.</p>
                </div>
                {featured && <PostCard post={featured} featured />}
                <div className="blog-grid">
                  {businessPosts.filter((p) => p.slug !== featured?.slug).map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {technicalPosts.length > 0 && (
            <section className="blog-posts-section blog-technical-section" aria-labelledby="technical-guides-heading">
              <div className="padding-global">
                <div className="container">
                  <div className="blog-section-intro">
                    <h2 id="technical-guides-heading">Implementation guides</h2>
                    <p>Detailed resources for the people building and maintaining AI workflows.</p>
                  </div>
                  <div className="blog-grid">
                    {technicalPosts.map((post) => <PostCard key={post.slug} post={post} />)}
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="blog-consulting-section">
            <div className="padding-global">
              <div className="container blog-consulting-inner">
                <div>
                  <h2>Put these ideas to work in your business.</h2>
                  <p>Discuss your priorities, your team, and the right starting point for AI.</p>
                </div>
                <Link href="/book-a-call" className="primary-button">Book an AI Strategy Call</Link>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}

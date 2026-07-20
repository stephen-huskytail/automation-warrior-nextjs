import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { MDXContent } from "@/components/MDXContent";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import StarRating from "@/components/StarRating";
import BlogSidebar from "@/components/BlogSidebar";
import { blog as posts } from "@/.velite";

interface Props {
  params: Promise<{ slug: string }>;
}

function getPost(slug: string) {
  return posts.find((p) => p.slug === slug && !p.draft);
}

export async function generateStaticParams() {
  return posts
    .filter((p) => !p.draft)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const canonical = `https://www.automationwarrior.ai/blog/${post.slug}`;
  const ogImage = post.featured_image || post.image;

  return {
    title: `${post.title} | Automation Warrior`,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      siteName: "Automation Warrior",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
      authors: [post.author],
      ...(ogImage ? { images: [{ url: `https://www.automationwarrior.ai${ogImage}`, width: 1200, height: 630, alt: post.image_alt || post.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(ogImage ? { images: [`https://www.automationwarrior.ai${ogImage}`] } : {}),
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function buildSchemas(post: ReturnType<typeof getPost>) {
  if (!post) return [];
  const base = `https://www.automationwarrior.ai`;
  const url = `${base}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      "@type": "Person",
      name: "Stephen Gardner",
      url: `${base}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Automation Warrior",
      url: base,
      logo: { "@type": "ImageObject", url: `${base}/images/bgBlack_1-removebg-preview-1.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(post.featured_image ? { image: `${base}${post.featured_image}` } : {}),
  };

  const schemas: object[] = [articleSchema];

  if (post.schema_type === "Review" && post.tool_name) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: { "@type": "SoftwareApplication", name: post.tool_name },
      ...(post.rating
        ? {
            reviewRating: {
              "@type": "Rating",
              ratingValue: post.rating.toString(),
              bestRating: "5",
            },
          }
        : {}),
      author: { "@type": "Person", name: "Stephen Gardner" },
    });
  }

  if (post.schema_type === "HowTo") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: post.title,
      description: post.description,
    });
  }

  return schemas;
}

function buildBreadcrumbSchema(post: ReturnType<typeof getPost>) {
  if (!post) return null;
  const base = `https://www.automationwarrior.ai`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${base}/blog/${post.slug}` },
    ],
  };
}

function getRelatedPosts(currentPost: ReturnType<typeof getPost>, limit = 4) {
  if (!currentPost) return [];
  const currentTags = new Set(currentPost.tags);
  return posts
    .filter((p) => !p.draft && p.slug !== currentPost.slug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => currentTags.has(t)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);
  const schemas = buildSchemas(post);
  const breadcrumbSchema = buildBreadcrumbSchema(post);

  const sidebarRelated = relatedPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    tags: p.tags,
  }));

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          <div className="blog-post-page">
            <div className="padding-global">

              {/* Breadcrumb — full width above columns */}
              <nav className="blog-breadcrumb" aria-label="Breadcrumb">
                <Link href="/" className="blog-breadcrumb-link">Home</Link>
                <span className="blog-breadcrumb-sep">›</span>
                <Link href="/blog" className="blog-breadcrumb-link">Blog</Link>
                <span className="blog-breadcrumb-sep">›</span>
                <span className="blog-breadcrumb-current">{post.title}</span>
              </nav>

              {/* Two-column layout */}
              <div className="blog-two-col">

                {/* ── LEFT: Main Content ── */}
                <article className="blog-main-col">

                  {/* Hero Image */}
                  {post.featured_image && (
                    <div className="blog-post-hero">
                      <Image
                        src={post.featured_image}
                        alt={post.image_alt || post.title}
                        width={1200}
                        height={630}
                        className="blog-post-hero-img"
                        priority
                      />
                    </div>
                  )}

                  {/* Post Header */}
                  <header className="blog-post-header">
                    <div className="blog-post-meta">
                      <span className="blog-card-date">{formatDate(post.date)}</span>
                      {post.updatedDate && post.updatedDate !== post.date && (
                        <span className="blog-post-updated">
                          Updated {formatDate(post.updatedDate)}
                        </span>
                      )}
                      <span className="blog-post-reading-time">{post.readingTime} min read</span>
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="blog-card-tag">{tag}</span>
                      ))}
                    </div>
                    <h1 className="blog-post-title">{post.title}</h1>
                    <p className="blog-post-description">{post.description}</p>

                    {post.schema_type === "Review" && post.rating && (
                      <StarRating rating={post.rating} />
                    )}

                    <div className="blog-post-author-line">
                      <span>By {post.author}</span>
                    </div>
                  </header>

                  {/* Affiliate Disclosure — only on posts that contain affiliate links */}
                  {post.hasAffiliateLinks && <AffiliateDisclosure />}

                  {/* Body */}
                  <div className="blog-post-body">
                    <MDXContent code={post.content} />
                  </div>

                  {/* Mobile-only CTA (shown below content on small screens) */}
                  <div className="blog-mobile-cta">
                    <p className="blog-post-cta-text">Ready to automate your business?</p>
                    <Link href="/strategy" className="primary-button">Book a free call →</Link>
                  </div>

                </article>

                {/* ── RIGHT: Sidebar ── */}
                <BlogSidebar
                  toc={post.toc}
                  relatedPosts={sidebarRelated}
                  authorName={post.author}
                />

              </div>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
}

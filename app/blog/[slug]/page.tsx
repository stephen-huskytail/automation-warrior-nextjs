import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { MDXContent } from "@/components/MDXContent";
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
      authors: [post.author],
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          <article className="blog-post-section">
            <div className="padding-global">
              <div className="blog-post-container">
                {/* Breadcrumb */}
                <nav className="blog-breadcrumb">
                  <Link href="/blog" className="blog-breadcrumb-link">
                    ← Blog
                  </Link>
                </nav>

                {/* Header */}
                <header className="blog-post-header">
                  <div className="blog-post-meta">
                    <span className="blog-card-date">{formatDate(post.date)}</span>
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="blog-post-title">{post.title}</h1>
                  <p className="blog-post-description">{post.description}</p>
                  <div className="blog-post-author">By {post.author}</div>
                </header>

                {/* Content */}
                <div className="blog-post-body">
                  <MDXContent code={post.content} />
                </div>

                {/* CTA */}
                <div className="blog-post-cta">
                  <p className="blog-post-cta-text">
                    Ready to automate your business workflows?
                  </p>
                  <Link href="/book-a-call" className="primary-button">
                    Book a free call →
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <Footer />
        </div>
      </main>
    </>
  );
}

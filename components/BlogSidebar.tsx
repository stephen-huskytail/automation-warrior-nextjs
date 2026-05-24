"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface TocEntry {
  title: string;
  url: string;
  items: TocEntry[];
}

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

interface BlogSidebarProps {
  toc: TocEntry[];
  relatedPosts: RelatedPost[];
  authorName: string;
}

function TocItem({ entry, activeId }: { entry: TocEntry; activeId: string }) {
  const id = entry.url.replace("#", "");
  const isActive = activeId === id;
  return (
    <li>
      <a
        className={`sidebar-toc-link${isActive ? " sidebar-toc-link--active" : ""}`}
        href={entry.url}
      >
        {entry.title}
      </a>
      {entry.items.length > 0 && (
        <ul className="sidebar-toc-sub">
          {entry.items.map((child) => (
            <TocItem key={child.url} entry={child} activeId={activeId} />
          ))}
        </ul>
      )}
    </li>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogSidebar({ toc, relatedPosts, authorName }: BlogSidebarProps) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headings = document.querySelectorAll("h2[id], h3[id]");
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="blog-sidebar">

      {/* Table of Contents */}
      {toc.length > 0 && (
        <div className="sidebar-widget sidebar-toc-widget">
          <p className="sidebar-widget-heading">In this article</p>
          <nav aria-label="Table of contents">
            <ul className="sidebar-toc-list">
              {toc.map((entry) => (
                <TocItem key={entry.url} entry={entry} activeId={activeId} />
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* CTA Widget */}
      <div className="sidebar-widget sidebar-cta-widget">
        <div className="sidebar-cta-badge">Free Strategy Call</div>
        <h3 className="sidebar-cta-heading">Want this built for you?</h3>
        <p className="sidebar-cta-body">
          We build AI-powered automation systems that run your follow-up, booking, and outreach — 24/7.
        </p>
        <Link href="/strategy" className="sidebar-cta-btn">
          Book a free call →
        </Link>
      </div>

      {/* Author Widget */}
      <div className="sidebar-widget sidebar-author-widget">
        <div className="sidebar-author-inner">
          <Image
            src="/images/SG-1.jpg"
            alt={authorName}
            width={52}
            height={52}
            className="sidebar-author-photo"
          />
          <div>
            <p className="sidebar-author-name">{authorName}</p>
            <p className="sidebar-author-title">Founder, Automation Warrior</p>
          </div>
        </div>
        <p className="sidebar-author-bio">
          Former Google. AI automation builder. 10+ years turning complex workflows into systems that run themselves.
        </p>
        <Link href="/about" className="sidebar-author-link">
          Full bio →
        </Link>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="sidebar-widget sidebar-related-widget">
          <p className="sidebar-widget-heading">Related Articles</p>
          <ul className="sidebar-related-list">
            {relatedPosts.map((post) => (
              <li key={post.slug} className="sidebar-related-item">
                <Link href={`/blog/${post.slug}`} className="sidebar-related-link">
                  <span className="sidebar-related-tag">{post.tags[0]}</span>
                  <span className="sidebar-related-title">{post.title}</span>
                  <span className="sidebar-related-date">{formatDate(post.date)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </aside>
  );
}

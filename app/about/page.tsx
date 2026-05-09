import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { blog as posts } from "@/.velite";

export const metadata: Metadata = {
  title: "About Stephen Gardner | Automation Warrior",
  description:
    "Former Google. AI automation practitioner. 10+ years in digital marketing and workflow automation. Based in Las Vegas. The practitioner behind Automation Warrior.",
  alternates: { canonical: "https://www.automationwarrior.ai/about" },
  openGraph: {
    title: "About Stephen Gardner | Automation Warrior",
    description:
      "Former Google. AI automation practitioner based in Las Vegas. Reviews and guides on AI tools, CRM, and automation workflows.",
    url: "https://www.automationwarrior.ai/about",
    siteName: "Automation Warrior",
    type: "profile",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stephen Gardner",
  url: "https://www.automationwarrior.ai/about",
  image: "https://www.automationwarrior.ai/images/SG-1.jpg",
  jobTitle: "AI Automation Practitioner",
  description:
    "Former Google. 10+ years in digital marketing and workflow automation. Founder of Automation Warrior and HuskyTail Digital.",
  knowsAbout: [
    "AI automation",
    "workflow automation",
    "CRM",
    "digital marketing",
    "n8n",
    "Make.com",
    "Go High Level",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Automation Warrior",
    url: "https://www.automationwarrior.ai",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function AboutPage() {
  const recentPosts = posts
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          <section className="about-page-section">
            <div className="padding-global">
              <div className="about-page-container">

                <div className="about-page-hero">
                  <div className="about-page-photo-wrap">
                    <Image
                      src="/images/SG-1.jpg"
                      alt="Stephen Gardner — Automation Warrior"
                      width={160}
                      height={160}
                      className="about-page-photo"
                      priority
                    />
                  </div>
                  <div className="about-page-intro">
                    <h1 className="about-page-name">Stephen Gardner</h1>
                    <p className="about-page-title">AI Automation Practitioner · Former Google · Las Vegas</p>
                    <div className="about-page-social">
                      <a
                        href="https://linkedin.com/in/stephen-gardner"
                        className="about-page-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://huskytaildigital.com"
                        className="about-page-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        HuskyTail Digital
                      </a>
                    </div>
                  </div>
                </div>

                <div className="about-page-body">
                  <h2 className="about-page-section-heading">Who I Am</h2>
                  <p className="about-page-text">
                    I&apos;m Stephen Gardner — a digital marketer and AI automation practitioner
                    based in Las Vegas. I spent years inside Google and have since built and scaled
                    automation workflows for agencies, service businesses, and my own projects.
                  </p>
                  <p className="about-page-text">
                    Automation Warrior is where I document what actually works — the tools, the
                    workflows, the integrations. Everything here is from firsthand use. I don&apos;t
                    write surface-level overviews; I write from inside the platform.
                  </p>

                  <h2 className="about-page-section-heading">What I Cover</h2>
                  <ul className="about-page-list">
                    <li>AI tools and automation platforms (n8n, Make.com, Zapier)</li>
                    <li>CRM and sales automation (Go High Level, HubSpot, ActiveCampaign)</li>
                    <li>AI agents and workflow orchestration</li>
                    <li>Business productivity and operational leverage</li>
                    <li>Affiliate marketing and passive income systems</li>
                  </ul>

                  <h2 className="about-page-section-heading">Credentials &amp; Experience</h2>
                  <ul className="about-page-list">
                    <li>Former Google — digital marketing and ad operations</li>
                    <li>10+ years building marketing automation systems</li>
                    <li>Founder of HuskyTail Digital, an AI-powered marketing agency</li>
                    <li>Hands-on practitioner with n8n, Make, GHL, Claude API, and more</li>
                    <li>Husky rescue advocate — Las Vegas, NV</li>
                  </ul>

                  <h2 className="about-page-section-heading">Affiliate Disclosure</h2>
                  <p className="about-page-text">
                    Some posts on Automation Warrior contain affiliate links. If you purchase
                    through those links, I may earn a commission at no extra cost to you. I only
                    recommend tools I&apos;ve personally used and can vouch for.{" "}
                    <Link href="/affiliate-disclosure" className="about-page-link">
                      Full affiliate disclosure →
                    </Link>
                  </p>

                  {recentPosts.length > 0 && (
                    <>
                      <h2 className="about-page-section-heading">Recent Posts</h2>
                      <ul className="about-page-posts-list">
                        {recentPosts.map((post) => (
                          <li key={post.slug}>
                            <Link href={`/blog/${post.slug}`} className="about-page-post-link">
                              {post.title}
                            </Link>
                            <span className="about-page-post-date"> — {formatDate(post.date)}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

              </div>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}

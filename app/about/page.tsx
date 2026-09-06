import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { blog as posts } from "@/.velite";

const LINKEDIN_URL = "https://www.linkedin.com/in/stephengardner76";
const BOOK_URL = "/book-a-call";

export const metadata: Metadata = {
  title: "Stephen Gardner — AI Consultant, Former Google Search Team | Automation Warrior",
  description:
    "Twenty years building businesses online, five inside Google, CMO through a $1M-to-$50M run. Now the AI consultant service businesses call when they want AI doing the work.",
  alternates: { canonical: "https://www.automationwarrior.ai/about" },
  openGraph: {
    title: "Stephen Gardner — AI Consultant | Automation Warrior",
    description:
      "Former Google Search team. CMO through a $1M-to-$50M run. Builds AI agent teams and serves as fractional CAIO for service businesses.",
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
  jobTitle: "AI Consultant & Fractional Chief AI Officer",
  description:
    "AI consultant and fractional CAIO. Former Google Search team. CMO at The Life Coach School during its growth from $1M to a $50M run rate. Builds AI agent teams for service businesses, including HIPAA- and legal-compliant private deployments.",
  alumniOf: { "@type": "CollegeOrUniversity", name: "Rochester Institute of Technology" },
  knowsAbout: [
    "AI agents",
    "AI agent teams",
    "fractional Chief AI Officer",
    "AI strategy",
    "business automation",
    "private AI deployment",
    "HIPAA-compliant AI",
    "search engines",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Automation Warrior",
    url: "https://www.automationwarrior.ai",
  },
  sameAs: [LINKEDIN_URL],
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
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
                    <p className="about-page-title">
                      Founder &amp; AI Consultant · Fractional CAIO · Former Google Search Team · Las Vegas
                    </p>
                    <div className="about-page-social">
                      <a
                        href={LINKEDIN_URL}
                        className="about-page-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                      <Link href={BOOK_URL} className="about-page-social-link">
                        Book a Strategy Call
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="about-page-body">
                  <h2 className="about-page-section-heading">The operator behind the agents</h2>
                  <p className="about-page-text">
                    I&apos;ve spent twenty years building businesses online, five of them inside Google.
                    I&apos;m the AI consultant service businesses call when they want AI doing the work —
                    not answering questions about it.
                  </p>

                  <h2 className="about-page-section-heading">Where it started</h2>
                  <p className="about-page-text">
                    Computer science at RIT, then five-plus years on Google&apos;s Search team — the years
                    that taught me how information systems actually decide what matters. Then two decades
                    of building, ranking, and scaling businesses online, most of them for founders who&apos;d
                    rather run their company than learn the plumbing.
                  </p>

                  <h2 className="about-page-section-heading">The $50M problem</h2>
                  <p className="about-page-text">
                    In 2020 I joined The Life Coach School as CMO when it was just past $1M in revenue.
                    Three years later it was at a $50M run rate. The hard part was never the marketing. It
                    was doing it without turning the company into a fifty-person org chart. Systems,
                    automation, and ruthless clarity about what a human should be spending time on — that
                    was the job.
                  </p>
                  <p className="about-page-text">
                    That&apos;s the problem every growing service business eventually hits. AI made it
                    solvable.
                  </p>

                  <h2 className="about-page-section-heading">What I do now</h2>
                  <p className="about-page-text">
                    I build AI agent teams — coordinated agents with roles, approval gates, and proof of
                    work — for law firms, medical practices, coaching and consulting companies, and other
                    service businesses that want to scale without scaling headcount. For businesses that
                    want me in the room, I serve as fractional Chief AI Officer: the executive who owns the
                    AI roadmap, part-time.
                  </p>
                  <p className="about-page-text">
                    I&apos;ve built AI paralegals. I&apos;ve deployed local models on in-house servers for
                    HIPAA and legal work where cloud AI was never an option. And I still do most of the
                    technical work myself, which is why the answer to &ldquo;can it do that?&rdquo; comes
                    fast.
                  </p>

                  <h2 className="about-page-section-heading">How I think</h2>
                  <ul className="about-page-list">
                    <li><strong>Strategy first. Execution follows.</strong> Nobody gets an agent before they get a plan.</li>
                    <li><strong>If it isn&apos;t doing work, it&apos;s a demo.</strong> Every deployment has a number attached.</li>
                    <li><strong>Humans approve what matters.</strong> Speed is nothing without a stop line.</li>
                    <li><strong>Earn it monthly.</strong> Engagements run month to month. I&apos;d rather be re-hired every month than locked in.</li>
                  </ul>

                  <h2 className="about-page-section-heading">Off the clock</h2>
                  <p className="about-page-text">
                    Las Vegas, by way of western New York. Pepsi over coffee. Outdoors whenever the
                    temperature allows. And a rescued husky named Everest, who supervises every build and
                    approves none of them.
                  </p>

                  <p className="about-page-text">
                    <Link href={BOOK_URL} className="about-page-link">
                      Bring the workflow that eats your team&apos;s week. Book a strategy call →
                    </Link>
                  </p>

                  {recentPosts.length > 0 && (
                    <>
                      <h2 className="about-page-section-heading">Recent writing</h2>
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

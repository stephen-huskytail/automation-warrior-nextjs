import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import TeamSection from "@/components/TeamSection";
import { blog as posts } from "@/.velite";

const LINKEDIN_URL = "https://www.linkedin.com/in/stephengardner76";
const BOOK_URL = "/book-a-call";

export const metadata: Metadata = {
  title:
    "Stephen Gardner — Fractional CAIO & AI Consultant | Automation Warrior",
  description:
    "Meet Stephen Gardner: fractional Chief AI Officer and AI consultant for 7–9 figure businesses. Former Google Search team and experienced business operator.",
  alternates: { canonical: "https://www.automationwarrior.ai/about" },
  openGraph: {
    title: "Stephen Gardner — AI Consultant | Automation Warrior",
    description:
      "Former Google Search team. CMO during growth from $1M to a $50M run rate. AI leadership, implementation, and team development for 7–9 figure businesses.",
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
    "Fractional Chief AI Officer and AI consultant for 7–9 figure businesses. Former Google Search team. CMO at The Life Coach School during its growth from $1M to a $50M run rate.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Rochester Institute of Technology",
  },
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
                      Founder &amp; Fractional Chief AI Officer · AI Consultant
                      · Las Vegas
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
                        Book an AI Strategy Call
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="about-page-body">
                  <h2 className="about-page-section-heading">
                    Business experience. Practical AI leadership.
                  </h2>
                  <p className="about-page-text">
                    I&apos;ve spent twenty years building businesses online,
                    five of them inside Google. Today I help leaders of 7–9
                    figure businesses make AI work across their operations,
                    develop their teams, and build the capacity for their next
                    stage of growth.
                  </p>

                  <h2 className="about-page-section-heading">
                    Where it started
                  </h2>
                  <p className="about-page-text">
                    Computer science at RIT, then five-plus years on
                    Google&apos;s Search team — the years that taught me how
                    information systems actually decide what matters. Then two
                    decades of building, ranking, and scaling businesses online,
                    most of them for founders who&apos;d rather run their
                    company than learn the plumbing.
                  </p>

                  <h2 className="about-page-section-heading">
                    The $50M problem
                  </h2>
                  <p className="about-page-text">
                    In 2020 I joined The Life Coach School as CMO when it was
                    just past $1M in revenue. Three years later it was at a $50M
                    run rate. The hard part was never the marketing. It was
                    doing it without turning the company into a fifty-person org
                    chart. Systems, automation, and ruthless clarity about what
                    a human should be spending time on — that was the job.
                  </p>
                  <p className="about-page-text">
                    That experience shapes how I approach AI: start with the
                    business problem, understand the people doing the work, and
                    measure whether the change helps.
                  </p>

                  <h2 className="about-page-section-heading">What I do now</h2>
                  <p className="about-page-text">
                    I serve as a fractional Chief AI Officer and AI consultant
                    for 7–9 figure businesses. I work with leadership teams to
                    decide where AI can create value, guide investment
                    decisions, put solutions into practice, and help their
                    people use them effectively.
                  </p>
                  <p className="about-page-text">
                    The work can include improving existing tools, connecting
                    workflows, building custom AI agents, or training a team on
                    a better way to work. I stay close to implementation so the
                    strategy connects to what happens inside your business every
                    day.
                  </p>

                  <h2 className="about-page-section-heading">How I think</h2>
                  <ul className="about-page-list">
                    <li>
                      <strong>Start with the business.</strong> Tie each
                      initiative to a priority worth solving.
                    </li>
                    <li>
                      <strong>Develop the team.</strong> Give people practical
                      skills and support to work more effectively.
                    </li>
                    <li>
                      <strong>Measure the difference.</strong> Track adoption,
                      quality, capacity, and business impact.
                    </li>
                    <li>
                      <strong>Earn it monthly.</strong> Engagements run month to
                      month. I&apos;d rather be re-hired every month than locked
                      in.
                    </li>
                  </ul>

                  <h2 className="about-page-section-heading">Off the clock</h2>
                  <p className="about-page-text">
                    Las Vegas, by way of western New York. Pepsi over coffee.
                    Outdoors whenever the temperature allows. And a rescued
                    husky named Everest, who supervises every build and approves
                    none of them.
                  </p>

                  <p className="about-page-text">
                    <Link href={BOOK_URL} className="about-page-link">
                      Make AI work for your business. Book an AI strategy call →
                    </Link>
                  </p>

                  {recentPosts.length > 0 && (
                    <>
                      <h2 className="about-page-section-heading">
                        Recent writing
                      </h2>
                      <ul className="about-page-posts-list">
                        {recentPosts.map((post) => (
                          <li key={post.slug}>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="about-page-post-link"
                            >
                              {post.title}
                            </Link>
                            <span className="about-page-post-date">
                              {" "}
                              — {formatDate(post.date)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
          <TeamSection />
          <Footer />
        </div>
      </main>
    </>
  );
}

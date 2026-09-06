import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FitSection from "@/components/FitSection";
import HomeFaqSection, { faqSchema } from "@/components/HomeFaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const BOOK_URL = "/book-a-call";

export const metadata: Metadata = {
  title: "Fractional CAIO (Chief AI Officer) for Service Businesses | Automation Warrior",
  description:
    "A part-time Chief AI Officer who owns your AI roadmap, builds the agent teams, and reports monthly. For 8- and 9-figure law, medical, coaching, and professional-services firms.",
  alternates: { canonical: "https://www.automationwarrior.ai/fractional-caio" },
  openGraph: {
    title: "Fractional CAIO for Service Businesses | Automation Warrior",
    description:
      "Your AI executive. Part-time. Accountable. Stephen Gardner owns the AI roadmap, builds the agent teams, and stays until it works.",
    url: "https://www.automationwarrior.ai/fractional-caio",
    siteName: "Automation Warrior",
    type: "website",
  },
};

const job = [
  {
    number: "1",
    title: "Decide where AI belongs — and where it doesn't.",
    text: "A workflow-by-workflow map of your operation, ranked by payoff and risk.",
  },
  {
    number: "2",
    title: "Build the agent teams.",
    text: "Design, deploy, and tune coordinated agents for the work that eats your team's week.",
  },
  {
    number: "3",
    title: "Own security and compliance.",
    text: "Data boundaries, local deployment where required, approval gates everywhere.",
  },
  {
    number: "4",
    title: "Train the humans.",
    text: "Your team learns to direct agents, review their work, and know when to step in.",
  },
  {
    number: "5",
    title: "Report to you.",
    text: "Monthly: what's running, what it's producing, what's next.",
  },
  {
    number: "6",
    title: "Earn it monthly.",
    text: "Month to month. Stephen would rather be re-hired every month than locked in.",
  },
];

const ninety = [
  {
    number: "30",
    title: "Days 1–30 · Assess",
    text: "Workflow mapping, data and security review, first-pilot selection. Deliverable: the roadmap, with the first pilot scoped and a target number attached.",
  },
  {
    number: "60",
    title: "Days 31–60 · Pilot",
    text: "First agent team live on one workflow. Measured weekly. Approval gates in place from day one.",
  },
  {
    number: "90",
    title: "Days 61–90 · Scale",
    text: "Second and third workflows. Team training. Governance set so the business can run the agents without Stephen in every meeting.",
  },
  {
    number: "90+",
    title: "After 90 · Cadence",
    text: "Monthly executive report, weekly working session. New workflows added when the last one has proven out — not before.",
  },
];

const fitItems = [
  "Founders and CEOs of service businesses at $10M and up",
  "Processes in place and a team that's stretched",
  "Law, medical and health, coaching and consulting, professional services",
  "Regulated industries are welcome — that's the specialty",
];

const notFitItems = [
  "Businesses still building their first process",
  "Anyone who wants a chatbot and a press release",
  "E-commerce and D2C brands",
  "Teams looking for a vendor instead of an executive",
];

const faqItems = [
  {
    q: "What's the difference between this and Managed Agent Teams?",
    a: "A seat versus an outcome. Fractional CAIO puts Stephen in your business owning the whole AI roadmap. Managed Agent Teams builds and runs one team for one function. Plenty of clients start with the second and grow into the first.",
  },
  {
    q: "Do you replace our IT or operations lead?",
    a: "No. Stephen works alongside them. They own the systems; he owns what AI does inside them.",
  },
  {
    q: "Can we start with just the Assessment?",
    a: "Yes. That's how most engagements start, and you keep the roadmap either way.",
  },
  {
    q: "What does it cost?",
    a: "Engagements are scoped after the strategy call, based on the number of workflows and the deployment model — cloud or private. Assessments are a fixed fee.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fractional CAIO (Chief AI Officer)",
  serviceType: "Fractional Chief AI Officer",
  url: "https://www.automationwarrior.ai/fractional-caio",
  provider: {
    "@type": "Person",
    name: "Stephen Gardner",
    url: "https://www.automationwarrior.ai/about",
  },
  areaServed: "US",
  description:
    "A part-time Chief AI Officer who decides where AI belongs in a service business, builds and runs AI agent teams, owns security and compliance, and reports monthly.",
};

export default function FractionalCaioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          <Hero
            eyebrow="Fractional CAIO"
            title="Your AI executive. Part‑time. Accountable."
            paragraph="A fractional Chief AI Officer owns the question every founder is stuck on: where does AI belong in this business, and who's going to make it actually work? Stephen Gardner answers it, builds it, and stays until it does."
            trustItems={[
              "Former Google Search Team",
              "Scaled $1M → $50M as CMO",
              "HIPAA & legal-compliant deployments",
            ]}
            secondaryHref="#the-job"
            secondaryLabel="What the job covers"
          />

          {/* The job */}
          <section id="the-job" className="approach-section" data-scroll-target="">
            <div className="padding-global">
              <div className="inner-container">
                <div className="approach-inner">
                  <div className="content-box">
                    <div className="sub-heading">The job</div>
                    <h2 className="heading-h2">What a fractional CAIO actually does.</h2>
                  </div>
                  <ol className="approach-steps-grid" aria-label="What a fractional CAIO does">
                    {job.map((item) => (
                      <li className="approach-slider-box approach-step-card" key={item.number}>
                        <div className="approach-step-number" aria-hidden="true">{item.number}</div>
                        <h3 className="heading-h3 approach-heading">{item.title}</h3>
                        <p className="approach-slider-text">{item.text}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <FitSection
            title="Founders with a team that's stretched."
            fitItems={fitItems}
            notFitItems={notFitItems}
          />

          {/* First 90 days */}
          <section id="first-90-days" className="approach-section" data-scroll-target="">
            <div className="padding-global">
              <div className="inner-container">
                <div className="approach-inner">
                  <div className="content-box">
                    <div className="sub-heading">The first 90 days</div>
                    <h2 className="heading-h2">Assess. Pilot. Scale.</h2>
                    <p className="text-paragraph width-640">
                      One workflow at a time, with a number attached. Nothing scales until the last thing
                      proved out.
                    </p>
                  </div>
                  <ol className="approach-steps-grid grid-two-col" aria-label="The first 90 days">
                    {ninety.map((item) => (
                      <li className="approach-slider-box approach-step-card" key={item.number}>
                        <div className="approach-step-number" aria-hidden="true">{item.number}</div>
                        <h3 className="heading-h3 approach-heading">{item.title}</h3>
                        <p className="approach-slider-text">{item.text}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* How the engagement runs */}
          <section className="approach-section" data-scroll-target="">
            <div className="padding-global">
              <div className="inner-container">
                <div className="approach-inner">
                  <div className="content-box">
                    <div className="sub-heading">How the engagement runs</div>
                    <h2 className="heading-h2">Part-time. Defined cadence. No junior handoff.</h2>
                    <p className="text-paragraph width-640">
                      A weekly working session and a monthly executive report. Month to month. Stephen does the
                      technical work with support from the Automation Warrior team — you don&apos;t get handed
                      to a junior.
                    </p>
                    <p className="text-paragraph width-640">
                      Pricing is scoped after the strategy call, based on the number of workflows and the
                      deployment model — cloud or private.
                    </p>
                    <div className="button-group">
                      <a href={BOOK_URL} className="primary-button">Book a Strategy Call</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <HomeFaqSection items={faqItems} />
          <CtaSection title="Bring the workflow. Leave with a plan." />
        </div>
        <Footer />
      </main>
    </>
  );
}

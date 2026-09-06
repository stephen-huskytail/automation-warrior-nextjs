import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AgentTeamSection from "@/components/AgentTeamSection";
import WeekOneSection from "@/components/WeekOneSection";
import ResultsSection from "@/components/ResultsSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import ComparisonSection from "@/components/ComparisonSection";
import HomeFaqSection, { faqSchema } from "@/components/HomeFaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const BOOK_URL = "/book-a-call";

export const metadata: Metadata = {
  title: "AI Agent Teams: Done-for-You AI Operations | Automation Warrior",
  description:
    "Coordinated AI agents with roles, approval gates, and proof of work — built and operated for your business. Plans for smaller teams start at $497/month.",
  alternates: { canonical: "https://www.automationwarrior.ai/agent-teams" },
  openGraph: {
    title: "AI Agent Teams | Automation Warrior",
    description:
      "A small operating unit, not a noisy swarm. Managed agent teams for service businesses, plus AI Operator plans for smaller teams.",
    url: "https://www.automationwarrior.ai/agent-teams",
    siteName: "Automation Warrior",
    type: "website",
  },
};

const functions = [
  {
    number: "1",
    title: "Intake & scheduling",
    text: "Answers new inquiries in minutes, qualifies them against your criteria, and books the consult — nights and weekends included.",
  },
  {
    number: "2",
    title: "Research & drafting",
    text: "Case files, briefs, proposals, reports. The reading and the first draft are done before you sit down. AI paralegals live here.",
  },
  {
    number: "3",
    title: "Client communication",
    text: "Follow-ups, status updates, and reminders in your voice, sent on schedule, with a human approval gate on anything that matters.",
  },
  {
    number: "4",
    title: "Operations & records",
    text: "CRM hygiene, project tracking, meeting minutes, invoice follow-up. The admin work is done — and nobody opened the CRM.",
  },
  {
    number: "5",
    title: "Reporting",
    text: "A morning brief and a weekly summary: what ran, what it produced, what needs a decision. One message, not forty.",
  },
  {
    number: "6",
    title: "Private deployment",
    text: "For HIPAA, legal, and other regulated work: local models on servers you control. Nothing leaves your walls that you didn't approve.",
  },
];

const faqItems = [
  {
    q: "What's the difference between a managed agent team and the AI Operator plans?",
    a: "Scope and who owns it. The Operator plans are productized: a fixed set of agents, tools, and support hours at a public price, built for solo operators and small teams. A managed agent team is scoped to one function in a larger business — intake, research, client communication, operations — and we run it with you.",
  },
  {
    q: "Is this a chatbot?",
    a: "No. A chatbot answers questions. An agent team does work — research, drafting, intake, scheduling, record-keeping — with roles, approval gates, and proof before anything is marked done.",
  },
  {
    q: "What happens if an agent makes a mistake?",
    a: "Anything outward-facing starts in approval mode — the agent drafts, you approve. QA checks work before it's marked complete, every action is logged, and you decide how much autonomy to extend as trust builds.",
  },
  {
    q: "What tools does it work with?",
    a: "The ones you already run: GoHighLevel, HubSpot, Google Workspace, Microsoft 365, Slack, Teams, Telegram, most CRMs, calendars, and case-management systems. Operator plans include 2 integrations; the Operations Team includes 5; managed teams are scoped to the function.",
  },
  {
    q: "What if I cancel?",
    a: "No contracts on the Operator plans — cancel anytime and keep the workflows, templates, and automations we built for you. Managed teams and fractional CAIO engagements run month to month.",
  },
];

export default function AgentTeamsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          <Hero
            eyebrow="AI Agent Teams"
            title="AI agent teams, built and run for you."
            paragraph="Coordinated agents with defined roles, approval gates, and proof of work — deployed inside the tools your business already runs on. For one function or the whole operation."
            trustItems={[
              "Orchestrator + specialists + QA",
              "Human approval on anything that matters",
              "Private deployment for regulated work",
            ]}
            secondaryHref="#plans"
            secondaryLabel="See plans for smaller teams"
          />

          <AgentTeamSection id="how-it-works" />

          {/* Functions we build teams for */}
          <section id="functions" className="approach-section" data-scroll-target="">
            <div className="padding-global">
              <div className="inner-container">
                <div className="approach-inner">
                  <div className="content-box">
                    <div className="sub-heading">Managed agent teams</div>
                    <h2 className="heading-h2">One team. One function. One number to track.</h2>
                    <p className="text-paragraph width-640">
                      We build and operate an agent team for a specific function in your business. Scoped
                      after a strategy call. Grows into a fractional CAIO seat when you&apos;re ready.
                    </p>
                  </div>
                  <ol className="approach-steps-grid" aria-label="Functions we build agent teams for">
                    {functions.map((item) => (
                      <li className="approach-slider-box approach-step-card" key={item.number}>
                        <div className="approach-step-number" aria-hidden="true">{item.number}</div>
                        <h3 className="heading-h3 approach-heading">{item.title}</h3>
                        <p className="approach-slider-text">{item.text}</p>
                      </li>
                    ))}
                  </ol>
                  <div className="button-group">
                    <a href={BOOK_URL} className="primary-button">Book a Strategy Call</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <WeekOneSection />
          <ResultsSection />
          <ServicesSection />
          <ApproachSection />
          <ComparisonSection />
          <HomeFaqSection items={faqItems} />
          <CtaSection
            title="Ready to put an agent team to work?"
            text="Book a call. We'll tell you whether a managed team, a plan, or a fractional CAIO seat is the right first step."
          />
        </div>
        <Footer />
      </main>
    </>
  );
}

import Link from "next/link";
import ServicePage from "@/components/ServicePage";
import AgentTeamSection from "@/components/AgentTeamSection";
import WeekOneSection from "@/components/WeekOneSection";
import { serviceMetadata } from "@/lib/serviceMetadata";
export const metadata = serviceMetadata(
  "Custom AI Agent Teams | Automation Warrior",
  "Custom AI agents for defined business workflows, with human review, clear ownership, and measurable results. Part of our AI implementation services.",
  "/agent-teams",
);
const sections = [
  {
    id: "functions",
    eyebrow: "Practical applications",
    title: "Give repeatable work a reliable process.",
    text: "Agent teams are one part of our AI implementation capability. Each engagement is scoped around a business workflow, its owner, and the result you need.",
    items: [
      {
        title: "Intake & scheduling",
        text: "Respond to inquiries, organize qualification information, and prepare or book appointments within agreed rules.",
      },
      {
        title: "Research & drafting",
        text: "Organize source material and prepare first drafts of briefs, proposals, and reports for your team to review.",
      },
      {
        title: "Customer communication",
        text: "Prepare follow-ups, updates, and reminders with review steps and clear escalation to your people.",
      },
      {
        title: "Operations & reporting",
        text: "Keep records current, prepare meeting summaries, and bring important information into the tools your team uses.",
      },
    ],
  },
];
const faqs = [
  {
    q: "How does this fit with fractional CAIO services?",
    a: "Fractional CAIO provides ongoing leadership of your AI strategy. Agent teams are one implementation option within that strategy and can also be delivered as a scoped project.",
  },
  {
    q: "What happens if an agent makes a mistake?",
    a: "We define review steps, test outputs, log actions, and agree when work needs human approval. Your team retains ownership of the workflow, with an escalation path for exceptions.",
  },
  {
    q: "What tools can you connect?",
    a: "We assess the systems your business uses, including CRM, email, calendars, communication tools, and document platforms. Integrations are confirmed during scoping.",
  },
  {
    q: "Are there plans for smaller teams?",
    a: "Yes. Our separate AI Operator Plans page covers fixed-scope subscriptions for solo operators and smaller teams. Consulting and managed implementations for larger businesses are scoped individually.",
  },
];
export default function Page() {
  return (
    <ServicePage
      name="Custom AI Agent Teams"
      path="/agent-teams"
      hero={{
        eyebrow: "AI Implementation / Custom Agents",
        title: "AI agents built around the work.",
        paragraph:
          "Support your people with agents that handle defined tasks inside your business workflows. Clear ownership, human review, and useful results guide every implementation.",
        secondaryHref: "#functions",
        secondaryLabel: "Explore the applications",
        trustItems: ["Defined workflows", "Human review", "Measured results"],
      }}
      sections={sections}
      faqs={faqs}
    >
      <AgentTeamSection id="how-it-works" />
      <WeekOneSection />
      <section id="plans" className="approach-section">
        <div className="padding-global">
          <div className="inner-container">
            <div className="content-box">
              <div className="sub-heading">
                Looking for a smaller starting point?
              </div>
              <h2 className="heading-h2">Explore AI Operator plans.</h2>
              <p className="text-paragraph width-640">
                Fixed-scope plans for solo operators and smaller teams have
                their own dedicated page.
              </p>
              <Link className="secondary-button" href="/ai-operator-plans">
                See AI Operator Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ServicePage>
  );
}

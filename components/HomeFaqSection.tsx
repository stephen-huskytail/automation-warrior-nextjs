import { FAQ } from "@/components/FAQ";

export const homeFaqItems = [
  {
    q: "Is this a chatbot?",
    a: "No. A chatbot answers questions. An agent team does work — research, drafting, intake, scheduling, record-keeping — with roles, approval gates, and proof before anything is marked done.",
  },
  {
    q: "Will AI touch our client data? We're regulated.",
    a: "Only the way you decide it should. For HIPAA, legal, and other regulated work, we deploy local models on servers you control. Nothing leaves your walls that you didn't approve.",
  },
  {
    q: "What does a fractional CAIO actually do?",
    a: "The job a full-time Chief AI Officer would do, part-time: decide where AI belongs, build the agent teams, set the security posture, and report on results. You get the executive without the executive payroll.",
  },
  {
    q: "How long before something is working?",
    a: "The first pilot is typically live inside 30 to 60 days, on one workflow, with a number attached. We scale from there — not before.",
  },
  {
    q: "Do we have to replace our tools?",
    a: "No. Agent teams connect to what you already run — CRM, email, Slack or Teams, calendars, case management — and do the work inside them.",
  },
  {
    q: "How is this different from an agency?",
    a: "An agency sells you deliverables. Stephen sits in your business as the AI expert, builds a team that keeps working after the project ends, and stays accountable for whether it does.",
  },
  {
    q: "What does it cost?",
    a: "Every engagement starts with a fixed-fee AI Operations Assessment. From there, fractional CAIO and managed agent teams are monthly retainers scoped from what the assessment found. Smaller businesses can start with an AI Operator plan at $497/month.",
  },
];

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export default function HomeFaqSection({ items = homeFaqItems }: { items?: { q: string; a: string }[] }) {
  return (
    <section id="faq" className="approach-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <FAQ items={items} />
        </div>
      </div>
    </section>
  );
}

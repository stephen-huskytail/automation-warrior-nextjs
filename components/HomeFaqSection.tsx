import { FAQ } from "@/components/FAQ";

export const homeFaqItems = [
  {
    q: "Who do you work with?",
    a: "We focus on 7–9 figure businesses with established operations and a team to develop. We work with founders, CEOs, and leadership teams that want AI contributing to business performance.",
  },
  {
    q: "What does a fractional Chief AI Officer do?",
    a: "A fractional CAIO provides ongoing AI leadership on a part-time basis: setting priorities, guiding tool and investment decisions, overseeing implementation, supporting team adoption, and reporting on results.",
  },
  {
    q: "Is this more than a chatbot?",
    a: "Yes. The work starts with your business priorities and extends into operations, workflows, decisions, and team capabilities. Solutions can include existing AI tools, automation, custom agents, and practical training.",
  },
  {
    q: "How will this help our existing team?",
    a: "We reduce repetitive work, improve access to information, and train people to use AI in their roles. The aim is to give your team more capacity and better support for the work that needs their judgment.",
  },
  {
    q: "Do we have to replace our tools?",
    a: "We start by reviewing the systems you already use. Where practical, we improve or connect those tools. Any proposed replacement is evaluated against the business need, cost, and effort involved.",
  },
  {
    q: "How do you measure success?",
    a: "We agree a baseline and measures for each initiative. These can include time recovered, turnaround, capacity, quality, team adoption, and financial impact. Results guide the decision to improve or expand.",
  },
  {
    q: "How do you handle our data?",
    a: "We work with your IT and relevant business leads to define appropriate access, review steps, and deployment choices. The approach reflects the workflow and your requirements, including private deployment where appropriate.",
  },
  {
    q: "How do we start, and what does it cost?",
    a: "Begin with a free, 30-minute strategy call. A fixed-fee assessment provides a roadmap you keep. From there, choose a scoped implementation project or ongoing fractional CAIO leadership on a monthly retainer.",
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

export default function HomeFaqSection({
  items = homeFaqItems,
}: {
  items?: { q: string; a: string }[];
}) {
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

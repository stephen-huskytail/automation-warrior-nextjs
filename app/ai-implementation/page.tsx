import ServicePage from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/serviceMetadata";
import LogoMarquee from "@/components/LogoMarquee";

export const metadata = serviceMetadata(
  "AI Implementation & Team Training | Automation Warrior",
  "Put AI into everyday operations with workflow improvements, automation, custom agents, and practical team training for 7\u20139 figure businesses.",
  "/ai-implementation",
);
const hero = {
  eyebrow: "AI Implementation & Team Training",
  title: "Put your AI strategy into everyday work.",
  paragraph:
    "Build the workflows, tools, and team capabilities that make AI useful. We help 7–9 figure businesses turn a roadmap into practical improvements across sales, service, operations, and delivery.",
  secondaryHref: "#capabilities",
  secondaryLabel: "Explore the capabilities",
};
const sections = [
  {
    id: "capabilities",
    eyebrow: "What we implement",
    title: "Built around your business and your people.",
    items: [
      {
        title: "Existing AI tools",
        text: "Configure useful AI capabilities in the systems your team already uses. Choose additions based on the work and the people responsible for it.",
      },
      {
        title: "Connected workflows",
        text: "Reduce repetitive data entry and handoffs across your CRM, communication tools, documents, and reporting systems.",
      },
      {
        title: "Custom AI agents",
        text: "Build agents for defined tasks such as intake, research, drafting, or reporting, with clear boundaries and review steps.",
      },
      {
        title: "Practical team training",
        text: "Train each role using real tasks, create shared guidance, and support managers as new ways of working take hold.",
      },
    ],
    link: {
      href: "/agent-teams",
      label: "Explore Custom AI Agent Teams",
    },
  },
  {
    eyebrow: "From pilot to everyday use",
    title: "Deliver the improvement. Help it stick.",
    items: [
      {
        label: "01 / Scope",
        title: "Define success",
        text: "Agree the workflow, its owner, the current baseline, and acceptance criteria. Review the required systems and data access.",
      },
      {
        label: "02 / Implement",
        title: "Build and train",
        text: "Configure the solution, test it with the people doing the work, and document how it runs and when human review is required.",
      },
      {
        label: "03 / Improve",
        title: "Measure and support",
        text: "Review quality, time recovered, and actual use. Fix friction, support the team, and expand only when the results justify it.",
      },
    ],
  },
];
const faqs = [
  {
    q: "Do we need custom agents?",
    a: "Not every workflow needs an agent. We assess whether an existing tool, a process change, an automation, or a custom agent is the best fit.",
  },
  {
    q: "Can you implement an existing roadmap?",
    a: "Yes. We review the roadmap, confirm the business priorities and technical requirements, and agree the delivery scope before work starts.",
  },
  {
    q: "How do you handle sensitive business data?",
    a: "We review the data involved with your IT and relevant business leads. Access, deployment choices, retention, and human review are agreed for the workflow. Private deployment is an option when appropriate.",
  },
  {
    q: "What does team training include?",
    a: "Training focuses on each role and the work people actually do: using the tools, reviewing outputs, handling exceptions, and following shared processes. Adoption and quality are part of the success measures.",
  },
];
export default function Page() {
  return (
    <ServicePage
      name="AI Implementation & Team Training"
      path="/ai-implementation"
      hero={hero}
      sections={sections}
      faqs={faqs}
    >
      <LogoMarquee />
    </ServicePage>
  );
}

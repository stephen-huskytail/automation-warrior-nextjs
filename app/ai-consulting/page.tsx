import ServicePage from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/serviceMetadata";

export const metadata = serviceMetadata(
  "AI Consulting for 7\u20139 Figure Businesses | Automation Warrior",
  "Practical AI consulting for 7\u20139 figure businesses. Assess opportunities, evaluate tools, and build an actionable roadmap for your operations and team.",
  "/ai-consulting",
);
const hero = {
  eyebrow: "AI Consulting · 7–9 figure businesses",
  title: "Know where AI will make a difference.",
  paragraph:
    "Turn business priorities into a clear AI plan. We assess your operations, tools, and team readiness, then identify the improvements worth making and the steps to put them into practice.",
  secondaryHref: "#deliverables",
  secondaryLabel: "See what you receive",
};
const sections = [
  {
    id: "deliverables",
    eyebrow: "The assessment",
    title: "A roadmap your business can act on.",
    items: [
      {
        title: "An opportunity assessment",
        text: "Map high-value workflows, bottlenecks, and readiness. Understand where AI could improve capacity, service, quality, or decision making.",
      },
      {
        title: "Tool and investment guidance",
        text: "Review your existing systems and evaluate options against business fit, implementation effort, ongoing costs, and data requirements.",
      },
      {
        title: "A prioritized roadmap",
        text: "Receive recommended initiatives with scope, sequencing, owners, dependencies, and a defined first pilot.",
      },
      {
        title: "A measurement and adoption plan",
        text: "Set baselines and success measures. Identify training needs, review responsibilities, and the support required for lasting adoption.",
      },
    ],
  },
  {
    eyebrow: "Business questions we help answer",
    title: "Make the next decision with clarity.",
    items: [
      {
        title: "Where should we start?",
        text: "Choose the first opportunity based on business value and readiness, with a clear reason for what comes next.",
      },
      {
        title: "What should we invest in?",
        text: "Determine whether to use existing capabilities, introduce a new tool, connect systems, or build a custom solution.",
      },
      {
        title: "How do we get the team using it?",
        text: "Plan practical training around each role and redesign workflows so the improvement becomes part of daily work.",
      },
    ],
  },
  {
    id: "how-it-starts",
    eyebrow: "How it works",
    title: "A defined engagement. A usable next step.",
    items: [
      {
        label: "01",
        title: "Discuss the business",
        text: "Start with a free, 30-minute strategy call to discuss priorities and agree whether an assessment is the right next step.",
      },
      {
        label: "02",
        title: "Assess and recommend",
        text: "Agree a fixed scope and fee. Work through the relevant processes, systems, and team needs to produce your roadmap.",
      },
      {
        label: "03",
        title: "Choose your next step",
        text: "Use the roadmap with your own team, bring us in for implementation and training, or continue with ongoing fractional CAIO leadership.",
      },
    ],
    link: {
      href: "/fractional-caio",
      label: "Explore Ongoing AI Leadership",
    },
  },
];
const faqs = [
  {
    q: "Who is this designed for?",
    a: "Founders and leadership teams of 7–9 figure businesses that want a practical plan for AI across established operations. We scope the engagement to the business problem and the team involved.",
  },
  {
    q: "Can you help if we already use AI tools?",
    a: "Yes. We review what you already have, how it is used, and where the gaps are. Recommendations can include better use of current tools, changes to workflows, or targeted additions.",
  },
  {
    q: "Do we have to buy implementation afterward?",
    a: "No. The assessment is a standalone engagement. You keep the roadmap and decide how to move forward.",
  },
  {
    q: "What does the consulting engagement cost?",
    a: "We agree a fixed fee and scope before the assessment begins. The scope depends on the processes, systems, and teams being reviewed.",
  },
];
export default function Page() {
  return (
    <ServicePage
      name="AI Consulting & Roadmaps"
      path="/ai-consulting"
      hero={hero}
      sections={sections}
      faqs={faqs}
    ></ServicePage>
  );
}

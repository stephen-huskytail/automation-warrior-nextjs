import ServicePage from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/serviceMetadata";

export const metadata = serviceMetadata(
  "Fractional CAIO for 7\u20139 Figure Businesses | Automation Warrior",
  "Fractional Chief AI Officer services for 7\u20139 figure businesses. AI strategy, implementation oversight, team development, and measurable business results.",
  "/fractional-caio",
);
const hero = {
  eyebrow: "Fractional Chief AI Officer · 7–9 figure businesses",
  title: "AI leadership that moves your business forward.",
  paragraph:
    "Stephen Gardner works alongside your leadership team to make AI useful across the business. Get an accountable owner for strategy, investment priorities, implementation, and team adoption—on a part-time basis.",
  secondaryHref: "#the-job",
  secondaryLabel: "Explore the engagement",
};
const sections = [
  {
    id: "the-job",
    eyebrow: "The role",
    title: "One owner for the AI agenda.",
    text: "A fractional CAIO connects company priorities to the practical work of changing how the business operates.",
    items: [
      {
        title: "Set the direction",
        text: "Map opportunities across sales, service, operations, and delivery. Prioritize by business value, readiness, cost, and risk.",
      },
      {
        title: "Guide investment decisions",
        text: "Evaluate tools and vendors, assess the systems you already have, and decide where to buy, connect, or build.",
      },
      {
        title: "Oversee implementation",
        text: "Turn priorities into scoped work with owners, milestones, and acceptance criteria. Stay involved as improvements go live.",
      },
      {
        title: "Develop your team",
        text: "Build practical skills, document working processes, and support adoption with your managers and the people doing the work.",
      },
      {
        title: "Establish responsible use",
        text: "Work with your IT, operations, and compliance leads on data access, review responsibilities, and appropriate controls.",
      },
      {
        title: "Measure and improve",
        text: "Report on adoption, quality, capacity, and business impact. Use the evidence to decide what to improve or expand.",
      },
    ],
  },
  {
    id: "first-90-days",
    eyebrow: "The first 90 days",
    title: "A practical starting plan.",
    text: "The pace depends on your systems, data, and scope. We agree milestones and measures before implementation.",
    items: [
      {
        label: "Days 1–30",
        title: "Assess and prioritize",
        text: "Map workflows, review tools and data, assess team readiness, and establish a baseline. Deliver a prioritized roadmap and scope the first pilot.",
      },
      {
        label: "Days 31–60",
        title: "Implement and equip",
        text: "Put the first improvement into use. Train the people involved, test review steps, and measure performance against the baseline.",
      },
      {
        label: "Days 61–90",
        title: "Improve and expand",
        text: "Review quality, adoption, and business impact. Resolve friction and expand successful approaches into the next priority workflows.",
      },
    ],
  },
  {
    eyebrow: "Ongoing accountability",
    title: "Know what is working and what comes next.",
    items: [
      {
        title: "A weekly working session",
        text: "Work directly with Stephen on priorities, decisions, implementation progress, and barriers your team needs help removing.",
      },
      {
        title: "A monthly executive report",
        text: "See progress against agreed measures, team adoption, investment decisions, and the next priorities in one useful report.",
      },
      {
        title: "A defined engagement",
        text: "Begin with a fixed-fee assessment. Agree a monthly retainer based on scope and support needs. Engagements run month to month.",
      },
    ],
  },
  {
    eyebrow: "Who this is for",
    title: "Established businesses ready to put AI to work.",
    text: "Built for founders, CEOs, and leadership teams of 7–9 figure businesses with real operations, a team to develop, and a commitment to measurable improvement.",
    items: [
      {
        title: "Growth is stretching capacity",
        text: "Your business needs to handle more work without adding headcount at every step.",
      },
      {
        title: "AI needs a clear owner",
        text: "Tools and experiments exist, but priorities, coordination, and accountability need leadership.",
      },
      {
        title: "Your people need support",
        text: "You want adoption across the company, with practical training and improvements that fit how your team works.",
      },
    ],
  },
];
const faqs = [
  {
    q: "How is a fractional CAIO different from a consulting project?",
    a: "A fractional CAIO provides ongoing leadership and ownership of the AI roadmap. AI consulting is a defined assessment or advisory engagement with agreed deliverables. Either can include implementation support, scoped to your needs.",
  },
  {
    q: "Do you replace our IT or operations lead?",
    a: "Stephen works alongside your existing leaders. Together you agree ownership for systems, AI priorities, implementation, and day-to-day operations.",
  },
  {
    q: "Can we start with just an assessment?",
    a: "Yes. Start with a fixed-fee assessment through our AI consulting service. You keep the roadmap and can decide whether to implement it internally, engage us for a project, or continue with a fractional CAIO.",
  },
  {
    q: "Will you build agents as part of the engagement?",
    a: "When agents are appropriate, we can build and deploy them. The solution may also involve existing AI tools, workflow automation, process changes, or training. The business need determines the approach.",
  },
  {
    q: "How much does it cost?",
    a: "The assessment is a fixed fee. Ongoing leadership is a monthly retainer agreed after scoping the business priorities, implementation work, and level of support.",
  },
];
export default function Page() {
  return (
    <ServicePage
      name="Fractional Chief AI Officer"
      path="/fractional-caio"
      hero={hero}
      sections={sections}
      faqs={faqs}
    ></ServicePage>
  );
}

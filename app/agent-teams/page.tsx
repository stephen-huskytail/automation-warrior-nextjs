import ServicePage from "@/components/ServicePage";
import AgentTeamsContent from "@/components/AgentTeamsContent";
import CtaSection from "@/components/CtaSection";
import { serviceMetadata } from "@/lib/serviceMetadata";
export const metadata = serviceMetadata(
  "AI Agent Teams: Starter and Scale | Automation Warrior",
  "Five or twenty AI agents, each with one job, set up for you and supported by our team. Starter Team $497/mo, Scale Team $1,997/mo.",
  "/agent-teams",
);
const faqs = [
  {
    q: "Which AI models do you use?",
    a: "We work with different model providers and agree the model selection with you based on the workflow, cost and data-handling needs. Free and open models are available. Local models may suit compatible workflows; hosting, hardware, integrations and provider terms still matter.",
  },
  {
    q: "Is my data used to train AI models?",
    a: "We do not use your business data to train our own AI models. That statement does not guarantee how every third-party provider handles data. Your chosen providers’ terms and account settings govern their processing, including training and retention. We agree the data flows and settings with you before setup.",
  },
  {
    q: "How long does setup take?",
    a: "It depends on the roles, tools and access involved. We discuss the scope and expected timeline on your strategy call, then confirm the setup plan before work begins.",
  },
  {
    q: "What is the minimum term, and how do I cancel?",
    a: "Both teams have a 3-month minimum, then continue month-to-month. The one-time setup fee is additional to the recurring service fee and equals one month of your tier: $497 for Starter Team or $1,997 for Scale Team. Your agreement will state how to give notice and when cancellation takes effect.",
  },
  {
    q: "Who pays for the AI models?",
    a: "You pay your own model providers directly through your own accounts, separately from our service and setup fees. Usage may be priced in tokens or under the provider’s other billing terms. Free and open models are available, but hosting, hardware or other operating costs may still apply.",
  },
  {
    q: "What is the difference between the two teams?",
    a: "Starter Team has 5 agents. Scale Team has 20 agents and adds priority support, a monthly strategy session, and an included private/local-model deployment option. Both can run compatible local models. We confirm the deployment scope and responsibilities before setup.",
  },
];
export default function Page() {
  return (
    <ServicePage
      name="AI Agent Teams"
      path="/agent-teams"
      hero={{
        eyebrow: "AI Agent Teams",
        title: "AI Agent Teams for Your Business",
        paragraph:
          "A team of AI agents, each with one job, working inside your tools and supported by our team. Choose a Starter Team of 5 agents at $497/mo or a Scale Team of 20 agents at $1,997/mo. We set up the agreed workflows, train your people, and provide ongoing support.",
        trustItems: [],
        secondaryHref: "",
      }}
      sections={[]}
      faqs={faqs}
      faqHeading="Common questions"
      cta={
        <CtaSection
          title="Ready to build your team?"
          text="Start with a free conversation about the work you want off your plate, and we will help you choose the right team."
        />
      }
    >
      <AgentTeamsContent />
    </ServicePage>
  );
}

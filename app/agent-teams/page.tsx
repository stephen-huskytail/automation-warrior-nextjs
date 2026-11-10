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
    a: "We work with different model providers and agree the model selection with you based on the workflow, cost and data-handling needs. Free and open models are available. Starter Team uses cloud/free models only. Scale Team includes private/local-model setup for compatible workflows; you pay for hardware and hosting. Integrations and provider terms still matter.",
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
    a: "Both teams have a 3-month minimum, then continue month-to-month. After the minimum term, you may cancel with 30 days’ written notice by email. Cancellation takes effect at the end of the billing month in which the 30-day notice period ends. There are no refunds for partial months or for the setup fee. The one-time setup fee is additional to the recurring service fee and equals one month of your tier: $497 for Starter Team or $1,997 for Scale Team. It is due at signing; your first monthly service charge is due 30 days after setup starts, then on the same date each month. Applicable taxes are extra.",
  },
  {
    q: "Who pays for the AI models?",
    a: "You pay your own model providers directly through your own accounts, separately from our service and setup fees. Usage may be priced in tokens or under the provider’s other billing terms. Free and open models are available, but hosting, hardware or other operating costs may still apply.",
  },
  {
    q: "What is the difference between the two teams?",
    a: "Starter Team has 5 agents and uses cloud/free models only. Scale Team has 20 agents and adds a monthly strategy session and private/local-model deployment: AI running on hardware we set up for you, with local-model setup included. You pay for hardware and hosting. We confirm the deployment scope and responsibilities before setup.",
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

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import ComparisonSection from "@/components/ComparisonSection";
import HomeFaqSection, { faqSchema } from "@/components/HomeFaqSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { serviceMetadata } from "@/lib/serviceMetadata";
export const metadata = serviceMetadata(
  "AI Operator Plans for Smaller Teams | Automation Warrior",
  "Fixed-scope AI support for solo operators and smaller teams. Compare AI Operator and AI Operations Team plans, setup fees, and included support.",
  "/ai-operator-plans",
);
const faqs = [
  {
    q: "Who are these plans for?",
    a: "Solo operators and smaller teams with a defined set of recurring tasks. Our fractional CAIO and consulting services provide a separate path for 7–9 figure businesses seeking broader AI leadership.",
  },
  {
    q: "What tools can be connected?",
    a: "We confirm integrations during scoping. The AI Operator plan includes two tool connections; the AI Operations Team includes five.",
  },
  {
    q: "What happens if an agent makes a mistake?",
    a: "We agree review steps and escalation rules. Your team reviews important outputs and decisions, and support is included within each plan's stated allowance.",
  },
  {
    q: "What happens if I cancel?",
    a: "Plans are cancel-anytime. You keep the workflows, templates, and automations we built for you.",
  },
  {
    q: "Can I move to a broader engagement?",
    a: "Yes. Book a strategy call to discuss implementation support, consulting, or fractional CAIO leadership as your needs grow.",
  },
];
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          <Hero
            eyebrow="AI Operator Plans / Smaller Teams"
            title="Practical AI support for everyday tasks."
            paragraph="A focused starting point for solo operators and smaller teams. Choose a defined set of tasks, connect your tools, and give your people more time for customers and delivery."
            secondaryHref="#plans"
            secondaryLabel="Compare the plans"
            trustItems={[
              "Defined scope",
              "Included human support",
              "Cancel anytime",
            ]}
          />
          <ServicesSection />
          <ApproachSection />
          <ComparisonSection />
          <HomeFaqSection items={faqs} />
        </div>
        <Footer />
      </main>
    </>
  );
}

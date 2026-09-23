import BusinessSection from "@/components/BusinessSection";
export default function PillarsSection() {
  return (
    <BusinessSection
      id="approach"
      eyebrow="Practical implementation"
      title="The right solution for the work."
      text="Build an AI-first business: routinely consider how AI can improve a process, decision, or customer experience, with people accountable for the results."
      items={[
        {
          title: "Make better use of your tools",
          text: "Evaluate the AI capabilities in the systems you already use, choose tools around the business need, and connect them to real workflows.",
        },
        {
          title: "Automate repeatable work",
          text: "Improve the flow of information across sales, service, and operations. Build custom AI agents when the work calls for them.",
        },
        {
          title: "Make it part of daily work",
          text: "Set clear ownership, review steps, and data boundaries. Document the process, train the team, and measure quality as well as time saved.",
        },
      ]}
      link={{
        href: "/ai-implementation",
        label: "Explore AI Implementation & Training",
      }}
    />
  );
}

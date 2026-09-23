import BusinessSection from "@/components/BusinessSection";
export default function TeamEnablementSection() {
  return (
    <BusinessSection
      id="your-team"
      eyebrow="A more capable team"
      title="Give your people more time for the work that matters."
      text="Build capacity across the business with practical AI tools, better workflows, and training for the people who use them."
      items={[
        {
          label: "Sales & customer service",
          title: "More time with customers",
          text: "Reduce the preparation, follow-up, and record keeping around each conversation so your people can focus on relationships and service.",
        },
        {
          label: "Operations & delivery",
          title: "More capacity in the day",
          text: "Improve handoffs, organize information, and reduce repetitive admin so your team can handle more work with greater consistency.",
        },
        {
          label: "Specialists & managers",
          title: "Better information, sooner",
          text: "Start with organized research, useful drafts, and clearer reporting. Keep judgment and responsibility with the people who know your business.",
        },
        {
          label: "Training & adoption",
          title: "Skills your team actually uses",
          text: "Train each role on real work, document shared processes, and provide support. Track whether AI is being used and whether it is helping.",
        },
      ]}
    />
  );
}

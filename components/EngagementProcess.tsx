import BusinessSection from "@/components/BusinessSection";
export default function EngagementProcess() {
  return (
    <BusinessSection
      id="how-it-starts"
      eyebrow="How we work"
      title="Start with the business. Build from there."
      text="A clear path from your growth priorities to AI that contributes to daily operations."
      items={[
        {
          label: "01 / Understand",
          title: "Discuss your priorities",
          text: "A free, 30-minute conversation with Stephen about your goals, operating challenges, and current use of AI. Establish the right next step.",
        },
        {
          label: "02 / Prioritize",
          title: "Assess the opportunity",
          text: "A fixed-fee assessment of your workflows, tools, data, and team readiness. You receive a prioritized roadmap with scope, owners, and success measures.",
        },
        {
          label: "03 / Put it to work",
          title: "Implement, measure, improve",
          text: "Start with a focused pilot, train the people involved, and compare results with the baseline. Expand through an agreed project or ongoing fractional CAIO engagement.",
        },
      ]}
      link={{ href: "/book-a-call", label: "Book an AI Strategy Call" }}
    />
  );
}

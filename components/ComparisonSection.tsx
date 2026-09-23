import BusinessSection from "@/components/BusinessSection";
export default function ComparisonSection() {
  return (
    <BusinessSection
      eyebrow="Support for your people"
      title="Make more room for valuable work."
      items={[
        {
          title: "Less repetitive admin",
          text: "Use agreed workflows to organize records, prepare updates, and reduce the manual steps around everyday work.",
        },
        {
          title: "Better preparation",
          text: "Give your team useful first drafts, organized information, and clear summaries before they begin.",
        },
        {
          title: "Clear review responsibilities",
          text: "Keep important decisions with your people. Define what AI can handle and when a person needs to step in.",
        },
        {
          title: "Processes your business keeps",
          text: "Build documented workflows and shared ways of working that make your team more consistent.",
        },
      ]}
    />
  );
}

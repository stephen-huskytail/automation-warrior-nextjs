import styles from "./ArticleFramework.module.css";

const frameworks = {
  assessment: {
    label: "The first 30 days",
    title: "From business priority to a pilot decision",
    description: "An example assessment sequence, adapted to your scope and access.",
    steps: [
      { label: "Days 1–7", title: "Understand the business", detail: "Agree the priority. Observe the work and identify the constraint." },
      { label: "Days 8–14", title: "Assess readiness", detail: "Review information, systems, team capacity, ownership, and controls." },
      { label: "Days 15–21", title: "Rank the opportunities", detail: "Compare value, effort, cost, and risk. Make assumptions visible." },
      { label: "Days 22–30", title: "Define the pilot", detail: "Set the baseline, scope, owner, budget, training, and decision date." },
    ],
    outcome: "Leadership leaves with a ranked opportunity list and an accountable pilot brief.",
    note: "Illustrative timing; this is an assessment plan, not a promise of deployment within 30 days.",
  },
  workflow: {
    label: "Build team capability",
    title: "Turn individual know-how into a shared workflow",
    description: "Capture the judgment behind the work, then give the process an owner.",
    steps: [
      { label: "Capture", title: "Make the knowledge visible", detail: "Document approved sources, good examples, decision rules, and exceptions." },
      { label: "Build", title: "Create the assisted workflow", detail: "Use software rules and AI for the appropriate steps, with clear handoffs." },
      { label: "Review", title: "Keep people accountable", detail: "A named reviewer checks quality and sources; an owner resolves exceptions." },
      { label: "Improve", title: "Learn from completed work", detail: "Measure total effort and rework. Update the instructions and train the team." },
    ],
    outcome: "Feed what the team learns back into the documented method.",
    note: "Keep a workable fallback and an owner for maintaining the workflow.",
  },
  measurement: {
    label: "Evaluate the whole process",
    title: "An AI pilot decision scorecard",
    description: "Establish a baseline, run a focused pilot, and compare equivalent work.",
    steps: [
      { label: "Quality", title: "Is the work good enough?", detail: "Accepted results, errors, corrections, and exceptions." },
      { label: "Adoption", title: "Does the team use it?", detail: "Eligible cases using the workflow, plus reasons for non-use." },
      { label: "Capacity", title: "What effort changed?", detail: "Preparation, review, correction, and ongoing maintenance." },
      { label: "Business outcome", title: "What improved for the business?", detail: "Service, turnaround, accepted delivery, or an agreed commercial measure." },
    ],
    outcome: "Decide: continue, revise, stop, or expand.",
    note: "Include the full cost and limits of the comparison. Recovered hours are not automatically cash savings.",
  },
};

export function ArticleFramework({ variant }: { variant: keyof typeof frameworks }) {
  const framework = frameworks[variant];
  const titleId = `framework-${variant}-title`;
  const isScorecard = variant === "measurement";

  return (
    <figure className={styles.figure} aria-labelledby={titleId}>
      <figcaption className={styles.header}>
        <span className={styles.eyebrow}>{framework.label}</span>
        <strong id={titleId} className={styles.title}>{framework.title}</strong>
        <span className={styles.description}>{framework.description}</span>
      </figcaption>

      {isScorecard && (
        <div className={styles.phases} aria-label="Evaluation sequence">
          <span>Baseline</span><span aria-hidden="true">→</span>
          <span>Pilot</span><span aria-hidden="true">→</span><span>Decision</span>
        </div>
      )}

      <ol className={isScorecard ? styles.scorecard : styles.timeline}>
        {framework.steps.map((step, index) => (
          <li key={step.label} className={styles.step}>
            {!isScorecard && <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
            <div className={styles.stepContent}>
              <span className={styles.stepLabel}>{step.label}</span>
              <strong className={styles.stepTitle}>{step.title}</strong>
              <span className={styles.detail}>{step.detail}</span>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.outcome}>
        <span className={styles.outcomeIcon} aria-hidden="true">{variant === "workflow" ? "↺" : "→"}</span>
        <strong>{framework.outcome}</strong>
      </div>
      <p className={styles.note}>{framework.note}</p>
    </figure>
  );
}

const results = [
  {
    label: "Intake & booking",
    title: "4× booking volume",
    problem:
      "A therapy practice needed to remove bottlenecks in intake and booking.",
    change:
      "Connected CRM, intake, and booking workflows, including after-hours inquiries.",
    result: "Booking volume increased fourfold.",
  },
  {
    label: "Sales operations",
    title: "3× qualified leads",
    problem: "Sales reps needed more qualified opportunities on the calendar.",
    change:
      "Introduced an AI agent to respond to inquiries, qualify leads, and book meetings.",
    result: "Three times more qualified opportunities reached the calendar.",
  },
  {
    label: "Project delivery",
    title: "Clearer scope. Better profitability.",
    problem: "Meeting documentation and project scope needed closer attention.",
    change:
      "Integrated an agent with Microsoft Teams to prepare industry-specific minutes and track scope.",
    result: "Reduced admin work and helped the team catch overruns earlier.",
  },
];
export default function ResultsSection() {
  return (
    <section id="results" className="approach-section business-results">
      <div className="padding-global">
        <div className="inner-container">
          <div className="approach-inner">
            <div className="content-box">
              <div className="sub-heading">Business results</div>
              <h2 className="heading-h2">
                AI should earn its place in the business.
              </h2>
              <p className="text-paragraph width-640">
                Examples from our work across customer acquisition and
                operations. Each engagement starts with its own baseline and
                measures of success.
              </p>
            </div>
            <div className="approach-steps-grid">
              {results.map((item) => (
                <article className="case-card" key={item.title}>
                  <span className="business-card-label">{item.label}</span>
                  <h3 className="heading-h3">{item.title}</h3>
                  <dl>
                    <dt>The challenge</dt>
                    <dd>{item.problem}</dd>
                    <dt>What changed</dt>
                    <dd>{item.change}</dd>
                    <dt>The result</dt>
                    <dd>{item.result}</dd>
                  </dl>
                </article>
              ))}
            </div>
            <p className="section-footnote">
              We agree what to measure: time recovered, turnaround, capacity,
              quality, adoption, or financial impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

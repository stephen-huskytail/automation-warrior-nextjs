const tasks = [
  {
    number: "9PM",
    title: "A lead comes in after hours",
    text: "The intake agent answers, qualifies, and books the consult. The CRM is already updated.",
  },
  {
    number: "7AM",
    title: "Your morning brief is waiting",
    text: "Overnight leads, open items, and the two things that need your call — in Slack or Teams before your coffee.",
  },
  {
    number: "12PM",
    title: "The file is summarized, the draft is ready",
    text: "The research agent has done the reading and the first draft. You edit; you don't start from blank.",
  },
  {
    number: "5PM",
    title: "Follow-ups sent, records updated",
    text: "Approved follow-ups and record updates are handled within the workflow. Your team has a clear view of what needs attention tomorrow.",
  },
];

export default function WeekOneSection() {
  return (
    <section className="approach-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <div className="approach-inner">
            <div className="content-box">
              <h2 className="heading-h2">
                What a supported workday can look like
              </h2>
              <p className="text-paragraph width-640">
                Illustrative workflows we can scope around your business.
                Capabilities and timing depend on your systems, data, and review
                requirements.
              </p>
            </div>

            <ol
              className="approach-steps-grid grid-two-col"
              aria-label="What a supported workday can look like"
            >
              {tasks.map((task) => (
                <li
                  className="approach-slider-box approach-step-card"
                  key={task.number}
                >
                  <div className="approach-step-number" aria-hidden="true">
                    {task.number}
                  </div>
                  <h3 className="heading-h3 approach-heading">{task.title}</h3>
                  <p className="approach-slider-text">{task.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

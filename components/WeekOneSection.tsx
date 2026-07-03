const tasks = [
  {
    number: "9PM",
    title: "A lead comes in after hours",
    text: "Your agent replies in under a minute, answers their questions, and books them on your calendar while your competitors sleep.",
  },
  {
    number: "7AM",
    title: "Your morning brief is waiting",
    text: "Today's appointments, yesterday's numbers, and the three things that need your attention — in Slack before your coffee.",
  },
  {
    number: "12PM",
    title: "Quotes and follow-ups, drafted",
    text: "Every inquiry gets a follow-up in your voice, ready for a one-tap approve. Nothing slips through the cracks again.",
  },
  {
    number: "5PM",
    title: "Your CRM is already updated",
    text: "Calls logged, pipeline moved, unpaid invoices chased. The admin work is done — and you never opened the CRM.",
  },
];

export default function WeekOneSection() {
  return (
    <section className="approach-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <div className="approach-inner">
            <div className="content-box">
              <h2 className="heading-h2">A day with your AI Operator</h2>
              <p className="text-paragraph width-640">
                Not a demo, not a someday roadmap — this is what your agent handles from week one.
              </p>
            </div>

            <ol className="approach-steps-grid grid-two-col" aria-label="A day with your AI Operator">
              {tasks.map((task) => (
                <li className="approach-slider-box approach-step-card" key={task.number}>
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

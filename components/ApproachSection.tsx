const steps = [
  {
    number: "1",
    title: "Pick your plan",
    text: "Choose the AI Operator or the AI Operations Team. Clear scope, clear price — no custom-quote runaround.",
  },
  {
    number: "2",
    title: "We set it up for you",
    text: "We scope your needs, connect your tools, and train your agent on your business. Done-for-you, not do-it-yourself.",
  },
  {
    number: "3",
    title: "Your AI goes to work",
    text: "Your agent runs in Slack or Telegram and handles the work. You get a weekly summary of what it did.",
  },
];

export default function ApproachSection() {
  return (
    <section id="clients" className="approach-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <div className="approach-inner">
            <div className="content-box">
              <h2 className="heading-h2">How it works</h2>
              <p className="text-paragraph width-640">
                Pick a plan, we set it up, your AI gets to work. No long build cycles, no big consulting retainer.
              </p>
            </div>

            <ol className="approach-steps-grid" aria-label="How it works steps">
              {steps.map((step) => (
                <li className="approach-slider-box approach-step-card" key={step.number}>
                  <div className="approach-step-number" aria-hidden="true">
                    {step.number}
                  </div>
                  <h3 className="heading-h3 approach-heading">{step.title}</h3>
                  <p className="approach-slider-text">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

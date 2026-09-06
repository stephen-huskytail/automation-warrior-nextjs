const pillars = [
  {
    number: "1",
    title: "AI Strategy & Roadmap",
    text: "Where AI belongs in your operation, where it doesn't, and in what order. One workflow at a time, measured, then scaled. This is the consulting.",
  },
  {
    number: "2",
    title: "AI Agent Teams",
    text: "Coordinated agents with defined roles: an orchestrator that routes, specialists that execute, QA that proves it, and a human approval gate before anything touches a client. Not a chatbot. An operating unit.",
  },
  {
    number: "3",
    title: "Private, Compliant Deployment",
    text: "Local models. In-house servers. Built for HIPAA, legal, and any firm that's been told \"you can't use AI.\" You can. It has to be done right.",
  },
];

export default function PillarsSection() {
  return (
    <section id="approach" className="approach-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <div className="approach-inner">
            <div className="content-box">
              <div className="sub-heading">What Stephen does</div>
              <h2 className="heading-h2">The expert in the room, and the team that does the work.</h2>
            </div>

            <ol className="approach-steps-grid" aria-label="What Stephen does">
              {pillars.map((p) => (
                <li className="approach-slider-box approach-step-card" key={p.number}>
                  <div className="approach-step-number" aria-hidden="true">
                    {p.number}
                  </div>
                  <h3 className="heading-h3 approach-heading">{p.title}</h3>
                  <p className="approach-slider-text">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

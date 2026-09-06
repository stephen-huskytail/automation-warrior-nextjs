const rules = [
  {
    number: "1",
    title: "One orchestrator routes the work.",
    text: "It decides what's fast, what's standard, and what needs a human — and hands off to one owner at a time.",
  },
  {
    number: "2",
    title: "Specialists do one job well.",
    text: "Research, drafting, client communication, data entry, scheduling. Each agent has a role, a scope, and a stop line.",
  },
  {
    number: "3",
    title: "QA proves it before it's \"done.\"",
    text: "Nothing is marked complete without evidence: the file, the record, the screenshot, the test.",
  },
  {
    number: "4",
    title: "Humans approve what matters.",
    text: "Anything client-facing, public, financial, or security-related waits for a person. Every time.",
  },
  {
    number: "5",
    title: "The record stays clean.",
    text: "An ops agent keeps status, blockers, and handoffs current, so you see one summary instead of forty messages.",
  },
  {
    number: "6",
    title: "It runs inside your tools.",
    text: "CRM, email, Slack or Teams, calendars, case management. The agents work where your team already works.",
  },
];

export default function AgentTeamSection({ id = "agent-teams" }: { id?: string }) {
  return (
    <section id={id} className="approach-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <div className="approach-inner">
            <div className="content-box">
              <div className="sub-heading">How an agent team works</div>
              <h2 className="heading-h2">A small operating unit. Not a noisy swarm.</h2>
              <p className="text-paragraph width-640">
                The difference between an agent team and a pile of automations is discipline. Every team
                Stephen builds runs on the same rules:
              </p>
            </div>

            <ol className="approach-steps-grid" aria-label="How an agent team works">
              {rules.map((r) => (
                <li className="approach-slider-box approach-step-card" key={r.number}>
                  <div className="approach-step-number" aria-hidden="true">
                    {r.number}
                  </div>
                  <h3 className="heading-h3 approach-heading">{r.title}</h3>
                  <p className="approach-slider-text">{r.text}</p>
                </li>
              ))}
            </ol>

            <p className="text-paragraph width-640">
              You get a team that works nights and weekends, never forgets the process, and asks you exactly
              one question when it needs a decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

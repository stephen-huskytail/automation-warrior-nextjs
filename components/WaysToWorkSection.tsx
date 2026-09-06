import Link from "next/link";

const BOOK_URL = "/book-a-call";

const steps = [
  {
    number: "1",
    title: "Strategy call",
    text: "Thirty minutes, free. Bring the workflow that eats your team's week. Stephen tells you whether AI belongs there, what it would take, and what it would be worth.",
  },
  {
    number: "2",
    title: "AI Operations Assessment",
    text: "Fixed fee. We map your workflows, pick the first pilot worth running, and score your security and compliance posture. You keep the roadmap either way.",
  },
  {
    number: "3",
    title: "Pilot, then scale",
    text: "One workflow live inside 30 to 60 days, with a number attached. From there, the engagement becomes a fractional CAIO seat or a managed agent team.",
  },
];

const offers = [
  {
    name: "Fractional CAIO",
    badge: "The core offer",
    model: "Monthly retainer · part-time",
    description:
      "Stephen owns your AI roadmap, builds and runs the agent teams, and reports to you monthly. The expert in the room without the executive salary.",
    bullets: [
      "Decides where AI belongs — and where it doesn't",
      "Builds, deploys, and tunes the agent teams",
      "Owns security, compliance, and approval gates",
      "Trains your team and reports monthly",
    ],
    link: { href: "/fractional-caio", label: "How the engagement works →" },
    blobPosition: "right" as const,
  },
  {
    name: "Managed Agent Teams",
    badge: "Done for you",
    model: "Monthly retainer · per function",
    description:
      "We build and operate an agent team for a specific function — intake, research, client communication, operations — and you get the outcome.",
    bullets: [
      "One team, one function, one number to track",
      "Orchestrator, specialists, QA, and human approval built in",
      "Runs inside the tools you already use",
      "Grows into a fractional CAIO seat when you're ready",
    ],
    link: { href: "/agent-teams", label: "See agent teams →" },
    blobPosition: "right-blue" as const,
  },
];

function GradientBlob({ position }: { position: "left" | "right" | "right-blue" | "bottom" }) {
  const cls =
    position === "right"
      ? "service-background-box right-background"
      : position === "right-blue"
      ? "service-background-box right-background-blue"
      : position === "bottom"
      ? "service-background-box bottom-background"
      : "service-background-box";

  return (
    <div className={cls}>
      <div className="service-bg-blob1" />
      <div className="service-bg-blob2" />
      <div className="service-bg-blob3" />
    </div>
  );
}

export default function WaysToWorkSection() {
  return (
    <>
      {/* How it starts — the assessment is step one of every engagement, not a separate service */}
      <section id="how-it-starts" className="approach-section" data-scroll-target="">
        <div className="padding-global">
          <div className="inner-container">
            <div className="approach-inner">
              <div className="content-box">
                <div className="sub-heading">How it starts</div>
                <h2 className="heading-h2">Every engagement starts the same way.</h2>
                <p className="text-paragraph width-640">
                  No proposals, no discovery decks. A conversation, then an assessment with a number attached.
                </p>
              </div>

              <ol className="approach-steps-grid" aria-label="How an engagement starts">
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

              <div className="button-group">
                <a href={BOOK_URL} className="primary-button">Book a Strategy Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The two ways to keep going */}
      <section id="services" className="services-section" data-scroll-target="">
        <div className="padding-global">
          <div className="inner-container">
            <div className="services-inner">
              <div className="content-box-680">
                <div className="sub-heading">Ways to work with Stephen</div>
                <h2 className="heading-h2">Then, two ways to keep going.</h2>
                <p className="text-paragraph">
                  Both are monthly retainers, scoped from the assessment. One puts Stephen in your business as
                  the AI executive. The other hands a function to an agent team and gives you the outcome.
                </p>
              </div>

              <div className="service-column product-card-column">
                {offers.map((offer) => (
                  <article className="service-item-box product-card" key={offer.name}>
                    <GradientBlob position={offer.blobPosition} />
                    <div className="product-card-header">
                      <span className="product-card-badge">{offer.badge}</span>
                      <h3 className="heading-h3-large product-card-title">{offer.name}</h3>
                      <p className="product-card-description">{offer.description}</p>
                    </div>
                    <p className="product-card-setup">{offer.model}</p>
                    <ul className="product-card-list">
                      {offer.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="product-card-buttons">
                      <a href={BOOK_URL} className="primary-button">Book a Strategy Call</a>
                      <Link href={offer.link.href} className="product-card-link">{offer.link.label}</Link>
                    </div>
                  </article>
                ))}
              </div>

              <p className="section-footnote">
                Smaller business? AI Operator plans start at $497/month.{" "}
                <Link href="/agent-teams#plans">See the plans</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

const BOOK_URL = "/book-a-call";

const offers = [
  {
    name: "AI Operations Assessment",
    badge: "Start here",
    model: "One-time engagement",
    description:
      "We map your workflows, find the first pilot worth running, and score your security and compliance posture.",
    bullets: [
      "Workflow-by-workflow map, ranked by payoff and risk",
      "First pilot scoped with a target number attached",
      "Data, security, and compliance review",
      "A roadmap you keep whether or not you hire us for the build",
    ],
    link: null,
    blobPosition: "left" as const,
  },
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
    <section id="services" className="services-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <div className="services-inner">
            <div className="content-box-680">
              <div className="sub-heading">Ways to work with Stephen</div>
              <h2 className="heading-h2">Three ways in. All of them start with a conversation.</h2>
              <p className="text-paragraph">
                Assessments are a fixed fee. Fractional CAIO and managed agent teams are scoped after a
                strategy call, based on the workflows and the deployment model.
              </p>
            </div>

            <div className="service-column product-card-column three-col">
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
                    {offer.link ? (
                      <Link href={offer.link.href} className="product-card-link">{offer.link.label}</Link>
                    ) : null}
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
  );
}

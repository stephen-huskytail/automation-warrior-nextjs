const BOOK_URL = "/book-a-call";
const FAQ_HASH = "#faq";

const products = [
  {
    name: "AI Operator",
    description: "One AI agent that learns your business and works where you already do — Slack or Telegram.",
    price: "$497/mo",
    setup: "+ $997 one-time setup",
    mathLine: "An ops hire runs $4,000+/mo before taxes. Your AI Operator is $497 — and it never sleeps.",
    bullets: [
      "Answers new-lead inquiries in minutes — nights and weekends included",
      "Drafts follow-ups, quotes, and emails in your voice for you to approve",
      "Keeps your CRM updated and preps your morning brief before your coffee",
      "Connected to 2 of your tools — GoHighLevel, Google Calendar, Gmail, Slack, and more",
      "30 minutes of human support each month, plus a weekly report of everything it did",
    ],
    bestFor: "solo operators and small teams who want their busywork handled this month, not this quarter.",
    finePrint: "Includes 3M AI tokens/mo — thousands of tasks for a typical business.",
    blobPosition: "left" as const,
    badge: "Start here",
  },
  {
    name: "AI Operations Team",
    description: "Five coordinated AI agents with defined roles — an operations department, not five chatbots.",
    price: "$1,997/mo",
    setup: "+ $4,500 one-time setup",
    mathLine: "Five roles covered for less than half the cost of one salary.",
    bullets: [
      "A coordinated team: intake, builder, specialist, quality review, and reporting",
      "One specialist configured to your business — social media, content, sales, or support",
      "Agents check each other's work before it reaches you",
      "Connected to 5 of your tools across sales, marketing, and operations",
      "2 hours of human support each month, plus weekly performance reports",
    ],
    bestFor: "businesses ready to hand a whole function — not just tasks — to AI.",
    finePrint: "Includes 15M AI tokens/mo. Operator customers can upgrade anytime — setup fee credited.",
    blobPosition: "right" as const,
    badge: "When one agent isn't enough",
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

export default function ServicesSection() {
  return (
    <section id="services" className="services-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <div className="services-inner">
            <div className="content-box-680">
              <div className="sub-heading">Pricing</div>
              <h2 className="heading-h2">Hire your first AI employee.</h2>
              <p className="text-paragraph">
                Two plans, public pricing, no custom-quote runaround. No contracts — cancel anytime
                and keep the workflows we built for you.
              </p>
            </div>

            <div className="service-column product-card-column">
              {products.map((product) => (
                <article className="service-item-box product-card" key={product.name}>
                  <GradientBlob position={product.blobPosition} />
                  <div className="product-card-header">
                    {product.badge ? <span className="product-card-badge">{product.badge}</span> : null}
                    <h3 className="heading-h3-large product-card-title">{product.name}</h3>
                    <p className="product-card-description">{product.description}</p>
                  </div>
                  <div className="product-card-price-row">
                    <span className="product-card-price">{product.price}</span>
                    <span className="product-card-setup">{product.setup}</span>
                  </div>
                  <p className="product-card-best-for">{product.mathLine}</p>
                  <ul className="product-card-list">
                    {product.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="product-card-best-for">
                    <strong>Best for:</strong> {product.bestFor}
                  </p>
                  <p className="product-card-setup">{product.finePrint}</p>
                  <div className="product-card-buttons">
                    <a href={FAQ_HASH} className="secondary-button">Common questions</a>
                    <a href={BOOK_URL} className="primary-button">Book a Strategy Call</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

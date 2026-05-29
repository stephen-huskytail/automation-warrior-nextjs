import Image from "next/image";

const BOOK_URL = "/book-a-call";
const PLANS_HASH = "#services";

const products = [
  {
    name: "AI Operator",
    description: "One AI agent that learns your business and works where you do.",
    price: "$497/mo",
    setup: "+ $997 one-time setup",
    bullets: [
      "A single agent that lives in Slack or Telegram",
      "Learns your business, handles tasks, makes connections",
      "3 million tokens/mo included",
      "Up to 2 tool integrations",
      "30 minutes of human support each month",
    ],
    bestFor: "solo operators and small teams who want one capable agent handling the busywork.",
    blobPosition: "left" as const,
  },
  {
    name: "AI Operations Team",
    description: "Five coordinated AI agents working as a team — not five chatbots.",
    price: "$1,997/mo",
    setup: "+ $4,500 one-time setup",
    bullets: [
      "A coordinated team with defined roles: intake, builder, specialist, quality review, and reporting",
      "One specialist agent configured to your business: social media, content, sales, support, and more",
      "15 million tokens/mo included",
      "Up to 5 tool integrations",
      "2 hours of human support each month",
    ],
    bestFor: "businesses that want a full AI team handling operations across multiple functions.",
    blobPosition: "right" as const,
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
              <div className="sub-heading">Services</div>
              <h2 className="heading-h2">Address your biggest business needs.</h2>
            </div>

            <div className="service-column product-card-column">
              {products.map((product) => (
                <article className="service-item-box product-card" key={product.name}>
                  <GradientBlob position={product.blobPosition} />
                  <div className="product-card-header">
                    <h3 className="heading-h3-large product-card-title">{product.name}</h3>
                    <p className="product-card-description">{product.description}</p>
                  </div>
                  <div className="product-card-price-row">
                    <span className="product-card-price">{product.price}</span>
                    <span className="product-card-setup">{product.setup}</span>
                  </div>
                  <ul className="product-card-list">
                    {product.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="product-card-best-for">
                    <strong>Best for:</strong> {product.bestFor}
                  </p>
                  <div className="product-card-buttons">
                    <a href={PLANS_HASH} className="secondary-button">See plans</a>
                    <a href={BOOK_URL} className="primary-button">Book a Strategy Call</a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="services-button-box">
            <a href={BOOK_URL} className="primary-button">
              <span>Book a Strategy Call</span>
              <Image src="/images/svgviewer-output-1.svg" alt="" width={18} height={18} className="button-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

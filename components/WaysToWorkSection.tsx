import Link from "next/link";
const offers = [
  {
    name: "Fractional Chief AI Officer",
    badge: "Our flagship engagement",
    model: "Ongoing leadership · monthly retainer",
    description:
      "An experienced AI leader working alongside your leadership team. Stephen owns the roadmap, guides investment decisions, and stays involved through implementation and adoption.",
    bullets: [
      "Business priorities translated into a practical AI roadmap",
      "Tool selection, implementation oversight, and clear ownership",
      "Team development and responsible use of company data",
      "Weekly working sessions and monthly performance reporting",
    ],
    href: "/fractional-caio",
    label: "Explore Fractional CAIO Services",
  },
  {
    name: "AI Consulting & Roadmaps",
    badge: "A defined starting point",
    model: "Fixed scope · assessment and advisory",
    description:
      "Get clarity on where AI can create value, what to prioritize, and how to move forward. Leave with a plan your business can act on.",
    bullets: [
      "Workflow and opportunity assessment",
      "Tool evaluation and investment priorities",
      "An actionable roadmap with success measures",
    ],
    href: "/ai-consulting",
    label: "Explore AI Consulting",
  },
  {
    name: "AI Implementation & Training",
    badge: "Put the plan into practice",
    model: "Scoped delivery · tools, workflows, and people",
    description:
      "Turn the roadmap into working improvements. Connect tools, automate workflows, build agents where useful, and equip your team to use them.",
    bullets: [
      "Solutions built around your existing operations",
      "Role-specific training and documented processes",
      "Quality checks, adoption support, and measurement",
    ],
    href: "/ai-implementation",
    label: "Explore Implementation & Training",
  },
];
export default function WaysToWorkSection() {
  return (
    <section id="services" className="services-section leadership-services">
      <div className="padding-global">
        <div className="inner-container">
          <div className="services-inner">
            <div className="content-box-680">
              <div className="sub-heading">
                AI leadership for 7–9 figure businesses
              </div>
              <h2 className="heading-h2">
                A clear strategy. Someone to make it happen.
              </h2>
              <p className="text-paragraph">
                Get the level of leadership and hands-on support your business
                needs, from a focused assessment to ongoing ownership of your AI
                strategy.
              </p>
            </div>
            <div className="service-column leadership-offers">
              {offers.map((offer, index) => (
                <article
                  className={
                    "service-item-box product-card leadership-offer" +
                    (index === 0 ? " flagship-offer" : "")
                  }
                  key={offer.name}
                >
                  <div className="product-card-header">
                    <span className="product-card-badge">{offer.badge}</span>
                    <h3 className="heading-h3-large product-card-title">
                      {offer.name}
                    </h3>
                    <p className="product-card-description">
                      {offer.description}
                    </p>
                  </div>
                  <p className="product-card-setup">{offer.model}</p>
                  <ul className="product-card-list">
                    {offer.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="product-card-buttons">
                    <Link
                      href={offer.href}
                      className={
                        index === 0 ? "primary-button" : "secondary-button"
                      }
                    >
                      {offer.label}
                    </Link>
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

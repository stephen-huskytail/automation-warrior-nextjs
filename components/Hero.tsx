const BOOK_URL = "/book-a-call";

export interface HeroProps {
  eyebrow?: string;
  title: string;
  paragraph: string;
  /** Short credential line rendered under the paragraph (trust bar). */
  trustItems?: string[];
  /** Secondary button linking to the flagship service. */
  secondaryHref?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  primaryLabel?: string;
  /** Small line under the buttons. */
  footnote?: string;
  /** Keep the headline on one line on desktop (homepage). */
  oneLineTitle?: boolean;
}

const HOME_TRUST = [
  "Former Google Search Team",
  "CMO during growth from $1M to a $50M run rate",
  "Strategy · Implementation · Team Development",
];

export default function Hero({
  eyebrow = "Fractional Chief AI Officer & AI Consulting",
  title = "Make AI work for your business.",
  paragraph = "We help 7–9 figure businesses put AI to work across operations, teams, and growth. Get the strategy, hands-on implementation, and team development to grow your capacity without adding headcount at every step.",
  trustItems = HOME_TRUST,
  secondaryHref = "/fractional-caio",
  secondaryLabel = "Explore Fractional CAIO Services",
  primaryHref = BOOK_URL,
  primaryLabel = "Book an AI Strategy Call",
  footnote,
  oneLineTitle = false,
}: Partial<HeroProps>) {
  return (
    <section className="banner-section">
      <div
        className="padding-global"
        style={{ width: "100%", zIndex: 2, position: "relative" }}
      >
        <div className="container">
          <div className="banner-inner">
            <div className="banner-content-box">
              {eyebrow ? <span className="sub-heading">{eyebrow}</span> : null}
              <h1
                className={`heading-h1${oneLineTitle ? " hero-one-line" : ""}`}
              >
                {title}
              </h1>
              <p className="text-paragraph">{paragraph}</p>
            </div>
            <div className="button-group">
              <a href={primaryHref} className="primary-button">
                {primaryLabel}
              </a>
              {secondaryHref ? (
                <a href={secondaryHref} className="secondary-button">
                  {secondaryLabel}
                </a>
              ) : null}
            </div>
            {trustItems && trustItems.length > 0 ? (
              <ul className="hero-trust-bar" aria-label="Credentials">
                {trustItems.map((item) => (
                  <li key={item} className="hero-trust-item">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            {footnote ? (
              <p className="hero-buyer-statement">{footnote}</p>
            ) : null}
          </div>
        </div>
      </div>

      {/* Conic gradient glow blob */}
      <div className="banner-background-box">
        <div className="banner-bg-blob1" />
        <div className="banner-bg-blob2" />
        <div className="banner-bg-blob3" />
      </div>
    </section>
  );
}

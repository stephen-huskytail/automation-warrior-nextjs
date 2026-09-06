const BOOK_URL = "/book-a-call";
const PHONE = "702-276-6921";
const PHONE_TEL = "tel:7022766921";

export interface HeroProps {
  eyebrow?: string;
  title: string;
  paragraph: string;
  /** Short credential line rendered under the paragraph (trust bar). */
  trustItems?: string[];
  /** Secondary button — defaults to the "how agent teams work" anchor on the homepage. */
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
  "Scaled $1M → $50M as CMO",
  "HIPAA & legal-compliant deployments",
];

export default function Hero({
  eyebrow = "AI Consulting · Agent Teams · Fractional CAIO",
  title = "Scale the business. Not the payroll.",
  paragraph = "Stephen Gardner builds AI agent teams for 7-, 8-, and 9-figure service businesses — the ones with their processes in place that want to grow without hiring fifty more people. Former Google Search team. CMO through a $1M-to-$50M run. Now the AI expert in the room.",
  trustItems = HOME_TRUST,
  secondaryHref = "#agent-teams",
  secondaryLabel = "See how agent teams work",
  primaryHref = BOOK_URL,
  primaryLabel = "Book a Strategy Call",
  footnote,
  oneLineTitle = false,
}: Partial<HeroProps>) {
  return (
    <section className="banner-section">
      <div className="padding-global" style={{ width: "100%", zIndex: 2, position: "relative" }}>
        <div className="container">
          <div className="banner-inner">
            <div className="banner-content-box">
              {eyebrow ? <span className="sub-heading">{eyebrow}</span> : null}
              <h1 className={`heading-h1${oneLineTitle ? " hero-one-line" : ""}`}>{title}</h1>
              <p className="text-paragraph">{paragraph}</p>
            </div>
            <div className="button-group">
              <a href={PHONE_TEL} className="secondary-button">📞 {PHONE}</a>
              {secondaryHref ? (
                <a href={secondaryHref} className="secondary-button">{secondaryLabel}</a>
              ) : null}
              <a href={primaryHref} className="primary-button">{primaryLabel}</a>
            </div>
            {trustItems && trustItems.length > 0 ? (
              <ul className="hero-trust-bar" aria-label="Credentials">
                {trustItems.map((item) => (
                  <li key={item} className="hero-trust-item">{item}</li>
                ))}
              </ul>
            ) : null}
            {footnote ? <p className="hero-buyer-statement">{footnote}</p> : null}
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

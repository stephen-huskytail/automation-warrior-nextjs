const BOOK_URL = "/book-a-call";
const PLANS_HASH = "#services";
const PHONE = "702-276-6921";
const PHONE_TEL = "tel:7022766921";

export default function Hero() {
  return (
    <section className="banner-section">
      <div className="padding-global" style={{ width: "100%", zIndex: 2, position: "relative" }}>
        <div className="container">
          <div className="banner-inner">
            <div className="banner-content-box">
              <h1 className="heading-h1">Grow your business without growing headcount.</h1>
              <p className="text-paragraph">
                We build Generative AI Automation Workflows &amp; AI Agents that accelerate your business.
              </p>
              <div className="hero-offer-lines">
                <p className="hero-price-anchor">Done-for-you AI agents for your business. Plans start at $497/mo.</p>
                <p className="hero-buyer-statement">
                  Built for service businesses and busy owners who need to get more done without hiring more people.
                </p>
              </div>
            </div>
            <div className="button-group">
              <a href={PHONE_TEL} className="secondary-button">📞 {PHONE}</a>
              <a href={PLANS_HASH} className="secondary-button">See plans</a>
              <a href={BOOK_URL} className="primary-button">Book a Strategy Call</a>
            </div>
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

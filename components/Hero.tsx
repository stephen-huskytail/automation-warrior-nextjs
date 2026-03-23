import Image from "next/image";

const BOOK_URL = "/book-a-call";

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
            </div>
            <div className="button-group">
              <a href={BOOK_URL} className="primary-button">Book a Strategy Call</a>
              <a href="#clients" className="secondary-button mobile-hide">Learn More</a>
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

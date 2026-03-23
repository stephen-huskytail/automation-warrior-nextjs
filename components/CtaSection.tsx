const BOOK_URL = "https://automation-warrior.moxieapp.com/public/ai-intro";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="padding-global" style={{ width: "100%", zIndex: 2, position: "relative" }}>
        <div className="container">
          <div className="cta-block">
            <div className="content-box-650">
              <h2 className="heading-h2">What do you want to build with AI?</h2>
              <p className="text-paragraph">Let&apos;s see how much capacity we can unlock in your business.</p>
              <a href={BOOK_URL} className="primary-button">Book a Strategy Call</a>
            </div>
          </div>
        </div>
      </div>

      {/* Conic glow blob */}
      <div className="cta-background-box">
        <div className="cta-bg-blob1" />
        <div className="cta-bg-blob2" />
        <div className="cta-bg-blob3" />
      </div>
    </section>
  );
}

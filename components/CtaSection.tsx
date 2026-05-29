const BOOK_URL = "/book-a-call";
const PHONE = "702-276-6921";
const PHONE_TEL = "tel:7022766921";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="padding-global" style={{ width: "100%", zIndex: 2, position: "relative" }}>
        <div className="container">
          <div className="cta-block">
            <div className="content-box-650">
              <h2 className="heading-h2">Ready to put an AI agent to work?</h2>
              <p className="text-paragraph">Book a call and we&apos;ll help you pick the right plan for your business.</p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <a href={BOOK_URL} className="primary-button">Book a Strategy Call</a>
                <a href={PHONE_TEL} className="secondary-button">📞 {PHONE}</a>
              </div>
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

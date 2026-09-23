const BOOK_URL = "/book-a-call";
const PHONE = "702-276-6921";
const PHONE_TEL = "tel:7022766921";

export default function CtaSection({
  title = "Make AI work for your business.",
  text = "Start with a free, 30-minute conversation about your priorities, your team, and where AI could make a practical difference. We will help you identify the right next step.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-section">
      <div
        className="padding-global"
        style={{ width: "100%", zIndex: 2, position: "relative" }}
      >
        <div className="container">
          <div className="cta-block">
            <div className="content-box-650">
              <h2 className="heading-h2">{title}</h2>
              <p className="text-paragraph">{text}</p>
              <div className="button-group">
                <a href={BOOK_URL} className="primary-button">
                  Book an AI Strategy Call
                </a>
                <a href={PHONE_TEL} className="secondary-button">
                  📞 {PHONE}
                </a>
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

import Image from "next/image";

function GradientBlob() {
  return (
    <div className="service-background-box right-background">
      <div className="service-bg-blob1" />
      <div className="service-bg-blob2" />
      <div className="service-bg-blob3" />
    </div>
  );
}

export default function ComparisonSection() {
  return (
    <section className="comparison-section">
      <div className="padding-global">
        <div className="inner-container">
          <div className="comparison-inner">
            <div className="content-box-680">
              <div className="sub-heading">Comparison</div>
              <h2 className="heading-h2">Your next hire doesn&apos;t need a desk.</h2>
            </div>

            <div className="comparison-column">
              {/* Hiring another employee */}
              <div className="comparison-item-box">
                <h3 className="comparison-heading">Hiring another employee</h3>
                <div className="comparison-content-box">
                  <ul className="comparison-list">
                    {[
                      "$4,000+/month before taxes, benefits, and overhead",
                      "Weeks of interviews, months of ramp-up",
                      "Works 40 hours, takes vacations and sick days",
                      "One person, one set of skills",
                      "Walks out the door with everything they learned",
                    ].map((text, i) => (
                      <li key={i} className="comparison-list-item">
                        <Image src="/images/ej3g3mms4emam353ft.svg" alt="X" width={20} height={20} className="comparison-icon" />
                        <p className="comparison-text">{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Automation Warrior */}
              <div className="comparison-item-box">
                <Image
                  src="/images/bgBlack_1-removebg-preview-1.png"
                  alt="Automation Warrior"
                  width={200}
                  height={50}
                  className="comparison-image"
                  style={{ objectFit: "contain" }}
                />
                <div className="comparison-content-box">
                  <ul className="comparison-list">
                    {[
                      "From $497/month, flat — no benefits, no overhead",
                      "Trained on your business and working within days",
                      "On duty 24/7 — nights, weekends, holidays",
                      "Learns your whole playbook and keeps getting better",
                      "Documented workflows your business keeps forever",
                    ].map((text, i) => (
                      <li key={i} className="comparison-list-item">
                        <Image src="/images/752zw0so6jymam35h6a.svg" alt="✓" width={20} height={20} className="comparison-icon" />
                        <p className="comparison-text text-color-white">{text}</p>
                      </li>
                    ))}
                  </ul>
                  <GradientBlob />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

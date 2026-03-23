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
              <h2 className="heading-h2">We&apos;re builders, not just consultants.</h2>
            </div>

            <div className="comparison-column">
              {/* Traditional consulting */}
              <div className="comparison-item-box">
                <h3 className="comparison-heading">Traditional consulting</h3>
                <div className="comparison-content-box">
                  <ul className="comparison-list">
                    {[
                      "Experienced with advice, not action",
                      "Slow waterfall-style project management",
                      "High fees due to large overhead",
                      "Lack understanding of cutting-edge techniques",
                      "Senior partners pitch, junior staff deliver",
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
                      "Experienced delivering solutions for businesses",
                      "Build, test and iterate rapidly",
                      "Competitive pricing",
                      "Deep understanding of AI capabilities",
                      "Our team scopes and delivers projects directly",
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

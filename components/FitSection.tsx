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

export interface FitSectionProps {
  eyebrow?: string;
  title: string;
  fitHeading?: string;
  fitItems: string[];
  notFitHeading?: string;
  notFitItems: string[];
}

/**
 * Two-box "best fit / not a fit" section. Same layout and styling as the
 * employee-vs-agent comparison, so it reads as part of the existing design.
 */
export default function FitSection({
  eyebrow = "Who this is for",
  title,
  fitHeading = "Best fit",
  fitItems,
  notFitHeading = "Not a fit",
  notFitItems,
}: FitSectionProps) {
  return (
    <section className="comparison-section">
      <div className="padding-global">
        <div className="inner-container">
          <div className="comparison-inner">
            <div className="content-box-680">
              <div className="sub-heading">{eyebrow}</div>
              <h2 className="heading-h2">{title}</h2>
            </div>

            <div className="comparison-column">
              {/* Not a fit */}
              <div className="comparison-item-box">
                <h3 className="comparison-heading">{notFitHeading}</h3>
                <div className="comparison-content-box">
                  <ul className="comparison-list">
                    {notFitItems.map((text, i) => (
                      <li key={i} className="comparison-list-item">
                        <Image src="/images/ej3g3mms4emam353ft.svg" alt="X" width={20} height={20} className="comparison-icon" />
                        <p className="comparison-text">{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Best fit */}
              <div className="comparison-item-box">
                <h3 className="comparison-heading" style={{ color: "#fff" }}>{fitHeading}</h3>
                <div className="comparison-content-box">
                  <ul className="comparison-list">
                    {fitItems.map((text, i) => (
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

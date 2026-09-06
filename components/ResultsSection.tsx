import Image from "next/image";

const results = [
  {
    image: "/images/EBYRh95NL0xzpSGXa9h5MnpUAk.webp",
    title: "4x Booking Volume",
    text: "Therapy practice. A fully automated CRM, intake, and booking system — after-hours included — took the front desk out of the bottleneck and 4x'd booked volume.",
  },
  {
    image: "/images/h59BDDSstZQhXCz3eSB9OmcA.webp",
    title: "3x Qualified Leads",
    text: "An AI agent that answers, qualifies, and books meetings for sales reps before a human touches the lead — 3x more real opportunities on the calendar.",
  },
  {
    image: "/images/2wmOPW2m5F8nj7mI2a0fQmngb8.webp",
    title: "Increased Project Profitability",
    text: "A Microsoft Teams–integrated agent that writes industry-specific meeting minutes and tracks scope, saving hundreds of hours a week and catching overruns early.",
  },
];

export default function ResultsSection() {
  // Duplicate for seamless loop
  const allResults = [...results, ...results];

  return (
    <section id="results" className="results-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <div className="results-inner">
            <div className="content-box-680">
              <div className="sub-heading">Results</div>
              <h2 className="heading-h2">Built for businesses that measure.</h2>
              <p className="text-paragraph width-640">
                Every deployment ships with a number attached. Here is what a few of them looked like.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width slider — outside inner-container to avoid clipping */}
      <div className="results-slider-column">
        <div className="results-slider-slide">
          {allResults.map((item, i) => (
            <div
              key={i}
              className={`results-slider-item${i >= results.length ? " mobile-hide" : ""}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="results-image"
                style={{ objectFit: "cover" }}
              />
              <div className="results-slider-content-box">
                <h4 className="heading-h3" style={{ textAlign: "left" }}>{item.title}</h4>
                <p className="results-slider-text" style={{ textAlign: "left" }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

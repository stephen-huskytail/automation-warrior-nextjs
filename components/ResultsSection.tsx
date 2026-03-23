import Image from "next/image";

const results = [
  {
    image: "/images/EBYRh95NL0xzpSGXa9h5MnpUAk.webp",
    title: "4x Booking Volume",
    text: "We built a fully automated CRM and booking system for a therapy company that allowed them to 4x volume.",
  },
  {
    image: "/images/h59BDDSstZQhXCz3eSB9OmcA.webp",
    title: "3x Qualified Leads",
    text: "We built an AI agent that autonomously qualified leads and booked in meetings for sales reps, leading to 3x more opportunities.",
  },
  {
    image: "/images/2wmOPW2m5F8nj7mI2a0fQmngb8.webp",
    title: "Increased Project Profitability",
    text: "We developed a Microsoft Teams integrated tool that wrote industry-specific meeting minutes, saving hundreds of hours per week.",
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
              <h2 className="heading-h2">Real business impact, real fast.</h2>
              <p className="text-paragraph width-640">
                <a
                  href="https://www.mckinsey.com/industries/public-sector/our-insights/generative-ai-and-the-future-of-work-in-australia"
                  className="text-paragraph-link"
                  style={{ color: "#999" }}
                >
                  62% of existing tasks
                </a>{" "}
                can be automated using current technology. See how our team has helped dozens of
                businesses like yours.
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

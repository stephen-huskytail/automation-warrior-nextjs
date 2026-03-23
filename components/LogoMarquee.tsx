import Image from "next/image";

const logos = [
  { src: "/images/logo-1.png", alt: "Logo 1" },
  { src: "/images/logo-2.png", alt: "Logo 2" },
  { src: "/images/logo-3.png", alt: "Logo 3" },
  { src: "/images/logo-4.png", alt: "Logo 4" },
  { src: "/images/logo-5.png", alt: "Logo 5" },
  { src: "/images/logo-6.png", alt: "Logo 6" },
  { src: "/images/logo-7.png", alt: "Logo 7" },
  { src: "/images/logo-8.png", alt: "Logo 8" },
];

export default function LogoMarquee() {
  // Duplicate for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <section className="work-section">
      <div className="padding-global">
        <div className="container">
          <div className="work-section-inner">
            <p className="small-heading">Tech we work with:</p>
            <div className="logo-slider-div">
              <div className="logo-slider-overlay" />
              <div className="logo-slider-overlay right-overlay" />
              <div className="logo-slider-slide">
                {allLogos.map((logo, i) => (
                  <div key={i} className="slider-logo-item">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={180}
                      height={52}
                      className="slider-logo-img"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

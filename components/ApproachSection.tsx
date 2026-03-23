"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Autonomous agents.",
    text: "Build custom AI agents to generate leads, qualify opportunities and conduct deep research.",
  },
  {
    title: "AI chatbots.",
    text: "Make your team more effective and support your customers through AI chatbots trained on your data.",
  },
  {
    title: "Generate reports.",
    text: "Leverage your data for actionable insights through Retrieval-Augmented Generation (RAG).",
  },
  {
    title: "Process automation.",
    text: "Scale your capabilities and remove admin through AI-driven process automation.",
  },
  {
    title: "Custom built apps.",
    text: "Integrate cutting-edge AI capabilities into your products or internal systems.",
  },
];

export default function ApproachSection() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import Swiper
    const init = async () => {
      const { Swiper } = await import("swiper");
      const { Navigation } = await import("swiper/modules");

      if (swiperRef.current) {
        new Swiper(swiperRef.current as unknown as HTMLElement, {
          modules: [Navigation],
          slidesPerView: 3,
          spaceBetween: 24,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          loop: false,
        });
      }
    };
    init();
  }, []);

  return (
    <section id="clients" className="approach-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <div className="approach-inner">
            <div className="content-box">
              <div className="sub-heading">Our Approach</div>
              <h2 className="heading-h2">
                We&apos;ve built hundreds of AI Automation Workflows &amp; Agents.
              </h2>
              <p className="text-paragraph width-640">
                Unlock capacity and growth in your business through strategic AI automation.
              </p>
            </div>

            <div className="approach-column">
              {/* Desktop Swiper */}
              <div className="approach-slider-custom our-approach-slider">
                <div className="swiper-container" ref={swiperRef}>
                  <div className="swiper-wrapper">
                    {slides.map((slide, i) => (
                      <div className="swiper-slide" key={i}>
                        <div className="swiper-card">
                          <h3>{slide.title}</h3>
                          <p>{slide.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="swiper-button-next">
                    <Image src="/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg" alt="Next" width={20} height={20} />
                  </div>
                  <div className="swiper-button-prev">
                    <Image src="/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg" alt="Prev" width={20} height={20} />
                  </div>
                </div>
              </div>

              {/* Mobile fallback */}
              <div className="approach-mobile-column">
                {slides.map((slide, i) => (
                  <div className="approach-slider-box" key={i}>
                    <h3 className="heading-h3 approach-heading">{slide.title}</h3>
                    <p className="approach-slider-text">{slide.text}</p>
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

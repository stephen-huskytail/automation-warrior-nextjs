"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 767) return;

    const init = () => {
      const MF = (window as any).MouseFollower;
      if (!MF) return;

      const cursor = new MF({
        speed: 0.8,
        skewing: 1,
        skewingText: 3,
      });

      // Fade in on first mousemove — prevents ghost dot at (0,0) on load
      document.addEventListener(
        "mousemove",
        () => {
          const el = document.querySelector(".mf-cursor") as HTMLElement | null;
          if (el) el.style.opacity = "1";
        },
        { once: true }
      );

      // Text cursor on team card hover
      const els = document.querySelectorAll(".team-slider-item");
      els.forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.setText(""));
        el.addEventListener("mouseleave", () => cursor.removeText());
      });
    };

    // CDN script may load before or after this component mounts
    if ((window as any).MouseFollower) {
      init();
    } else {
      // Poll until CDN script is ready (loads via next/script afterInteractive)
      let attempts = 0;
      const interval = setInterval(() => {
        if ((window as any).MouseFollower) {
          clearInterval(interval);
          init();
        } else if (++attempts > 50) {
          clearInterval(interval); // give up after ~5s
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  return null;
}

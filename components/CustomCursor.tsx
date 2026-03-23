"use client";
import { useEffect } from "react";

const MF_CDN = "https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js";

export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 767) return;

    const init = () => {
      const MF = (window as any).MouseFollower;
      if (!MF) return;

      // CDN bundle has GSAP built-in — no registerGSAP needed
      const cursor = new MF({ speed: 0.8, skewing: 1, skewingText: 3 });

      // Hide at (0,0) until user moves mouse, then show
      cursor.hide();
      document.addEventListener("mousemove", () => cursor.show(), { once: true });

      // Team card hover state
      document.querySelectorAll(".team-slider-item").forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.setText(""));
        el.addEventListener("mouseleave", () => cursor.removeText());
      });
    };

    if ((window as any).MouseFollower) {
      // Already loaded (e.g. hot reload)
      init();
      return;
    }

    // Inject script dynamically — async, non-blocking, but runs init() as soon as loaded
    const script = document.createElement("script");
    script.src = MF_CDN;
    script.onload = init;
    document.head.appendChild(script);
  }, []);

  return null;
}

"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 767) return;

    const MF = (window as any).MouseFollower;
    if (!MF) return;

    // CDN bundle has GSAP built-in — no registerGSAP needed (matches live Webflow behavior)
    const cursor = new MF({
      speed: 0.8,
      skewing: 1,
      skewingText: 3,
    });

    // Start hidden to prevent ghost dot at (0,0) before first mouse movement
    cursor.hide();
    document.addEventListener("mousemove", () => cursor.show(), { once: true });

    // Team card hover state
    const els = document.querySelectorAll(".team-slider-item");
    els.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.setText(""));
      el.addEventListener("mouseleave", () => cursor.removeText());
    });
  }, []);

  return null;
}

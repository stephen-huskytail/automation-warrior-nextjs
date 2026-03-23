"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 767) return;

    const init = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const MouseFollower = (await import("mouse-follower")).default;

        // mouse-follower requires GSAP to be registered before instantiation
        MouseFollower.registerGSAP(gsap);

        const cursor = new MouseFollower({
          speed: 0.8,
          skewing: 1,
          skewingText: 3,
        });

        // Show cursor on first mouse movement — prevents ghost dot at (0,0) on load
        document.addEventListener(
          "mousemove",
          () => {
            const el = document.querySelector(".mf-cursor") as HTMLElement | null;
            if (el) el.style.opacity = "1";
          },
          { once: true }
        );

        // Change cursor on team card hover
        const els = document.querySelectorAll(".team-slider-item");
        els.forEach((el) => {
          el.addEventListener("mouseenter", () => cursor.setText(""));
          el.addEventListener("mouseleave", () => cursor.removeText());
        });
      } catch (e) {
        // Silently ignore cursor errors — native cursor still works
      }
    };

    init();
  }, []);

  return null;
}

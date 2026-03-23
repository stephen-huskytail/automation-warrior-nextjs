"use client";
import { useEffect } from "react";
import "mouse-follower/dist/mouse-follower.min.css";

export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 767) return;

    let cursor: any;

    (async () => {
      try {
        const gsap = (await import("gsap")).default;
        const MouseFollower = (await import("mouse-follower")).default;

        // Must register GSAP before instantiating
        MouseFollower.registerGSAP(gsap);

        cursor = new MouseFollower({
          speed: 0.55,
          ease: "expo.out",
          skewing: 1,
          skewingText: 3,
        });

        // Team card hover state
        document.querySelectorAll(".team-slider-item").forEach((el) => {
          el.addEventListener("mouseenter", () => cursor.setText(""));
          el.addEventListener("mouseleave", () => cursor.removeText());
        });
      } catch (e) {
        console.error("CustomCursor init failed:", e);
      }
    })();

    return () => {
      try { cursor?.destroy(); } catch (_) {}
    };
  }, []);

  return null;
}

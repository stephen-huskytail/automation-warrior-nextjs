"use client";
import { useEffect } from "react";
import type MouseFollowerType from "mouse-follower";
import "mouse-follower/dist/mouse-follower.min.css";

export default function CustomCursor() {
  useEffect(() => {
    const enabled = window.matchMedia("(min-width: 992px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!enabled.matches) return;

    let cursor: MouseFollowerType | undefined;
    let disposed = false;
    const stop = () => { cursor?.destroy(); cursor = undefined; };
    const onPreferenceChange = () => { if (!enabled.matches) stop(); };
    enabled.addEventListener("change", onPreferenceChange);

    (async () => {
      try {
        const gsap = (await import("gsap")).default;
        const MouseFollower = (await import("mouse-follower")).default;
        if (disposed || !enabled.matches) return;

        // Must register GSAP before instantiating
        MouseFollower.registerGSAP(gsap);

        const mouseFollower = new MouseFollower({
          speed: 0.55,
          ease: "expo.out",
          skewing: 1,
          skewingText: 3,
        });
        cursor = mouseFollower;

      } catch (e) {
        console.error("CustomCursor init failed:", e);
      }
    })();

    return () => {
      disposed = true;
      enabled.removeEventListener("change", onPreferenceChange);
      stop();
    };
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

export function AmbientEffects() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const updateHero = () => {
      const distance = Math.min(window.scrollY, 560);
      root.style.setProperty("--hero-translate", distance * 0.12 + "px");
      root.style.setProperty("--hero-opacity", String(Math.max(0.46, 1 - distance / 900)));
      root.style.setProperty("--hero-scale", String(1 - distance / 12000));
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateHero();
        frame = 0;
      });
    };

    updateHero();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

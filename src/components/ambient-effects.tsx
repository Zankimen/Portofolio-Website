"use client";

import { useEffect } from "react";

export function AmbientEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const shouldReduceEffects = window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches;
    let frame = 0;

    if (shouldReduceEffects) {
      root.style.setProperty("--hero-translate", "0px");
      root.style.setProperty("--hero-opacity", "1");
      root.style.setProperty("--hero-scale", "1");
      return;
    }

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

"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ExperienceAnimationPlayer = dynamic(
  () => import("@/components/experience-animation-player").then((module) => module.ExperienceAnimationPlayer),
  { ssr: false },
);

export function ExperienceAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="experience-lottie-shell" aria-label="Programming and website animation" role="img">
      {shouldLoad ? <ExperienceAnimationPlayer /> : null}
    </div>
  );
}

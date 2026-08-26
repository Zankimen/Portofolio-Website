"use client";

import { Lottie } from "lottie-react";
import animationData from "@/content/programming-and-website.json";

export function ExperienceAnimation() {
  return (
    <div className="experience-lottie" aria-label="Programming and website animation" role="img">
      <Lottie src={animationData} loop autoplay />
    </div>
  );
}

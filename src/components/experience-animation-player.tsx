"use client";

import { Lottie, LottieInteractions, lottieInView } from "lottie-react";
import animationData from "@/content/programming-and-website.json";

const interactions = [lottieInView({ amount: 0.2 })];

export function ExperienceAnimationPlayer() {
  return (
    <div className="experience-lottie">
      <LottieInteractions interactions={interactions}>
        <Lottie src={animationData} loop autoplay={false} />
      </LottieInteractions>
    </div>
  );
}

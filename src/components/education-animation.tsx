"use client";

import { Lottie } from "lottie-react";
import animationData from "@/content/education-edit.json";

export function EducationAnimation() {
  return (
    <div className="education-lottie" aria-label="Education animation" role="img">
      <Lottie src={animationData} loop autoplay />
    </div>
  );
}

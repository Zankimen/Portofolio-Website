import { EducationAnimation } from "@/components/education-animation";
import { ResumeCard } from "@/components/resume-card";
import { education } from "@/content/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="portfolio-section education-section" aria-labelledby="education-heading">
      <h2 id="education-heading" className="sr-only">Education</h2>
      <div className="section-illustration education-art" aria-hidden="true">
        <EducationAnimation />
        <div className="education-star star-one">✦</div>
        <div className="education-star star-two">✦</div>
      </div>
      <div className="education-cards">
        {education.map((item) => (
          <ResumeCard
            key={item.title}
            period={item.period}
            title={item.title}
            subtitle={item.place}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proses belajar yang terus berjalan melalui proyek dan eksplorasi."
            details={item.details}
            icon="graduation"
          />
        ))}
      </div>
    </section>
  );
}

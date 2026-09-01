import { ExperienceAnimation } from "@/components/experience-animation";
import { ResumeCard } from "@/components/resume-card";
import { experience } from "@/content/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section experience-section" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="sr-only">Experience</h2>
      <div className="section-illustration experience-art" aria-hidden="true">
        <ExperienceAnimation />
      </div>
      <div className="experience-cards">
        {experience.map((item, index) => (
          <ResumeCard
            key={item.period}
            period={item.period}
            title={item.role}
            subtitle={item.location ? `${item.company} · ${item.location}` : item.company}
            description={item.description}
            details={item.details}
            icon={index === 0 ? "briefcase" : index === 1 ? "code" : "layers"}
          />
        ))}
      </div>
    </section>
  );
}

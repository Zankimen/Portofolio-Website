import { ResumeCard } from "@/components/resume-card";
import { certifications, education, training } from "@/content/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="portfolio-section education-section" aria-labelledby="education-heading">
      <h2 id="education-heading" className="sr-only">Education</h2>
      <div className="education-cards">
        {education.map((item) => (
          <ResumeCard
            key={item.title}
            period={item.period}
            title={item.title}
            subtitle={item.location ? `${item.place} · ${item.location}` : item.place}
            description={item.description}
            details={item.details}
            icon="graduation"
          />
        ))}
      </div>
      <div className="education-support">
        <div className="education-training">
          <p className="section-accent-label">Professional training</p>
          {training.map((item) => (
            <ResumeCard
              key={item.title}
              period={item.period}
              title={item.title}
              subtitle={item.location ? `${item.place} · ${item.location}` : item.place}
              description={item.description}
              details={item.details}
              icon="code"
            />
          ))}
        </div>
        <div className="certification-list">
          <p className="section-accent-label">Certifications</p>
          <ul>
            {certifications.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Icon } from "@/components/icons";
import { skillGroups } from "@/content/portfolio";

const skillIcons = ["monitor", "server", "database", "code"] as const;

const brandLogoBySkill: Record<string, string> = {
  PHP: "php",
  Laravel: "laravel",
  JavaScript: "javascript",
  "Node.js": "node-js",
  React: "react",
  "Inertia.js": "inertia",
  "Hapi.js": "hapi",
  "Google Cloud Platform": "google-cloud",
  "Cloud Run": "google-cloud",
  "Google Cloud Firestore": "google-cloud",
  MySQL: "mysql",
  Docker: "docker",
  TensorFlow: "tensorflow",
  "TensorFlow.js": "tensorflow",
  Optuna: "optuna",
  Git: "git",
};

const fallbackIconBySkill: Record<string, "code" | "layers" | "server"> = {
  T5: "layers",
  BART: "layers",
  "RESTful API Design": "server",
  "Repository Pattern": "layers",
  "Service Layer": "layers",
  "Form Request": "code",
};

function SkillLogo({ name }: { name: string }) {
  const logo = brandLogoBySkill[name];

  if (logo) {
    return <Image src={`/skills/${logo}.svg`} alt="" width={34} height={34} className="skill-logo" />;
  }

  return <Icon name={fallbackIconBySkill[name] ?? "code"} size={30} />;
}


export function SkillsSection() {
  return (
    <section id="skills" className="portfolio-section skills-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="sr-only">Skills</h2>
      <div className="skills-groups">
        {skillGroups.map((group, groupIndex) => (
          <article className={`skills-group skills-group-tone-${groupIndex}`} key={group.title}>
            <div className="skills-group-ambient" aria-hidden="true" />
            <div className={"skills-group-info skills-tone-" + groupIndex}>
              <div className="skills-group-icon"><Icon name={skillIcons[groupIndex % skillIcons.length]} size={28} /></div>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </div>
            <div className="skills-group-items">
              {group.items.map((item, itemIndex) => (
                <div className="skill-chip" key={item}>
                  <span className={"skill-chip-icon skill-tone-" + ((groupIndex + itemIndex) % skillIcons.length)}>
                    <SkillLogo name={item} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

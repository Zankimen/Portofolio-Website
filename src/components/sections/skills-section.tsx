import { Icon } from "@/components/icons";
import { skillGroups } from "@/content/portfolio";

const skillIcons = ["monitor", "server", "database", "code"] as const;
const skillTraits = [
  { title: "Always Learning", description: "Exploring new technologies", icon: "layers" as const },
  { title: "Problem Solver", description: "Building efficient solutions", icon: "server" as const },
  { title: "Clean Code", description: "Writing maintainable code", icon: "code" as const },
  { title: "Performance First", description: "Optimizing for scalability", icon: "arrow" as const },
];

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
                    <Icon name={skillIcons[(groupIndex + itemIndex) % skillIcons.length]} size={30} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="skill-traits">
        {skillTraits.map((trait) => (
          <div className="skill-trait" key={trait.title}>
            <span className="skill-trait-icon"><Icon name={trait.icon} size={18} /></span>
            <span><strong>{trait.title}</strong><small>{trait.description}</small></span>
          </div>
        ))}
      </div>
    </section>
  );
}

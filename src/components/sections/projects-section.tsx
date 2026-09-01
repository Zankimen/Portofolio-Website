import { Icon } from "@/components/icons";
import { projects } from "@/content/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="portfolio-section projects-section" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="sr-only">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.number}>
            <div className={"project-preview preview-" + (index + 1)}>
              <div className="project-preview-dots"><i /><i /><i /></div>
              <div className="preview-content"><span>{project.number}</span><strong>{project.title.split(" ").slice(0, 2).join(" ")}</strong></div>
              <div className="project-overlay"><a href="#contact">Discuss this project <Icon name="arrow" size={15} /></a></div>
            </div>
            <div className="project-card-body">
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tools">{project.stack.map((tool) => <span key={tool}>{tool}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import { AmbientEffects } from "@/components/ambient-effects";
import { EducationAnimation } from "@/components/education-animation";
import { ExperienceAnimation } from "@/components/experience-animation";
import { Icon } from "@/components/icons";
import { ProfileImage } from "@/components/profile-image";
import { ResumeCard } from "@/components/resume-card";
import { SectionNavigation } from "@/components/section-navigation";
import {
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/content/portfolio";

const socialLinks = [
  { label: "GitHub", icon: "github" as const, href: "https://github.com/Zankimen" },
  { label: "LinkedIn", icon: "linkedin" as const, href: "https://www.linkedin.com/in/muhammad-daffa-ayyasy-a72b86329" },
  { label: "Instagram", icon: "instagram" as const, href: "https://www.instagram.com/zankimen/" },
];

const skillIcons = ["monitor", "server", "database", "code"] as const;
const skillTraits = [
  { title: "Always Learning", description: "Exploring new technologies", icon: "layers" as const },
  { title: "Problem Solver", description: "Building efficient solutions", icon: "server" as const },
  { title: "Clean Code", description: "Writing maintainable code", icon: "code" as const },
  { title: "Performance First", description: "Optimizing for scalability", icon: "arrow" as const },
];

export function Portfolio() {
  return (
    <>
      <AmbientEffects />
      <div className="ambient-scene" aria-hidden="true">
        <div className="ambient-blob ambient-blob-primary" />
        <div className="ambient-blob ambient-blob-secondary" />
        <div className="ambient-blob ambient-blob-tertiary" />
        <div className="ambient-blob ambient-blob-bottom" />
      </div>

      <a className="skip-link" href="#main-content">Skip to content</a>

      <SectionNavigation />

      <main id="main-content" className="main-content">
        <section id="home" className="hero-portfolio">
          <div className="hero-portfolio-copy">
            <p className="hero-kicker"><span className="status-dot" /> {profile.availability}</p>
            <h1>
              Hello,
              <br />
              My name is <span className="gradient-text">Muhammad Daffa&apos; Ayyasy</span>.
              <br />
              I am a <span className="hero-role">Digital Builder.</span>
            </h1>
            <div className="social-row hero-socials">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  <Icon name={social.icon} size={27} />
                </a>
              ))}
            </div>
            <div className="hero-actions">
              <a className="download-button" href="#about">
                Explore my profile <Icon name="arrow" size={17} />
              </a>
              <a className="download-button resume-button" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                Get CV <Icon name="download" size={17} />
              </a>
            </div>
          </div>
          <div className="hero-portfolio-art" aria-label="Decorative placeholder illustration">
            <div className="hero-glow-ring hero-glow-ring-one" />
            <div className="hero-glow-ring hero-glow-ring-two" />
            <div className="hero-terminal">
              <div className="terminal-dots"><i /><i /><i /></div>
              <div className="terminal-lines">
                <span><b>const</b> daffa = {"{"}</span>
                <span className="indent">focus: <em>&quot;useful work&quot;</em>,</span>
                <span className="indent">stack: <em>&quot;modern web&quot;</em>,</span>
                <span>{"}"}</span>
              </div>
              <div className="terminal-cursor" />
            </div>
            <p className="art-caption"></p>
          </div>
        </section>

        <PortfolioSectionTitle number="01" title="About Me" />
        <section id="about" className="portfolio-section about-section" aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">About</h2>
          <div className="about-copy">
            <p className="section-accent-label">Who I am?</p>
            <p className="about-lead">{profile.about}</p>
            <p className="about-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lectus sed lorem posuere tincidunt. Saya tertarik pada produk digital yang memiliki tujuan jelas, detail yang dipikirkan, dan pengalaman yang terasa ringan digunakan.</p>
            <div className="stats-row">
              <Stat value="2+" label="Years of learning" />
              <Stat value="06" label="Selected projects" />
              <Stat value="∞" label="Curiosity to build" />
            </div>
          </div>
          <ProfileImage />
        </section>

        <PortfolioSectionTitle number="02" title="Experiences" />
        <section id="experience" className="portfolio-section experience-section" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="sr-only">Experience</h2>
          <div className="section-illustration experience-art" aria-hidden="true">
            <ExperienceAnimation />
            <div className="illustration-orbit" />
          </div>
          <div className="experience-cards">
            {experience.map((item, index) => (
              <ResumeCard
                key={item.period}
                period={item.period}
                title={item.role + " (Placeholder)"}
                subtitle={item.company}
                description={item.description}
                details={item.details}
                icon={index === 0 ? "briefcase" : index === 1 ? "code" : "layers"}
              />
            ))}
          </div>
        </section>

        <PortfolioSectionTitle number="03" title="Skills" />
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

        <PortfolioSectionTitle number="04" title="Projects" />
        <section id="projects" className="portfolio-section projects-section" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="sr-only">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.number}>
                <div className={"project-preview preview-" + (index + 1)}>
                  <div className="project-preview-dots"><i /><i /><i /></div>
                  <div className="preview-content"><span>{project.number}</span><strong>{project.title.split(" ").slice(0, 2).join(" ")}</strong></div>
                  <div className="project-overlay"><a href="#contact">View Project <Icon name="arrow" size={15} /></a></div>
                </div>
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tools">{project.stack.map((tool) => <span key={tool}>{tool}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="pagination"><button type="button" disabled>Previous</button><span>Page 1 of 1</span><button type="button" disabled>Next</button></div>
        </section>

        <PortfolioSectionTitle number="05" title="Education" />
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

        <PortfolioSectionTitle number="06" title="Contact" />
        <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="sr-only">Contact</h2>
          <div className="contact-copy">
            <p className="section-accent-label">Contact with me</p>
            <p className="contact-intro">If you have any questions or concerns, please don&apos;t hesitate to contact me. I am open to work opportunities that align with my skills and interests.</p>
            <div className="contact-detail"><Icon name="map" size={20} /><span>{profile.location}</span></div>
            <div className="contact-detail"><Icon name="mail" size={20} /><a href={"mailto:" + profile.email}>{profile.email}</a></div>
            <div className="social-row contact-socials">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}><Icon name={social.icon} size={20} /></a>)}</div>
          </div>
          <form className="contact-form" action={"mailto:" + profile.email} method="post" encType="text/plain">
            <p className="form-note">Placeholder form — replace with a real endpoint later.</p>
            <label htmlFor="contact-name">Your Name</label>
            <input id="contact-name" name="name" maxLength={100} required type="text" />
            <label htmlFor="contact-email">Your Email</label>
            <input id="contact-email" name="email" maxLength={100} required type="email" />
            <label htmlFor="contact-message">Your Message</label>
            <textarea id="contact-message" name="message" maxLength={500} required rows={4} />
            <button type="submit">Send Message <Icon name="send" size={16} /></button>
          </form>
        </section>
      </main>

      <footer className="portfolio-footer">
        <div className="footer-inner">
          <p>© 2026 <strong>{profile.name}</strong></p>
          <div><a href="#home">Back to top</a><span>|</span><a href={"mailto:" + profile.email}>Email</a></div>
        </div>
      </footer>
    </>
  );
}

function PortfolioSectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="section-title-wrap" aria-hidden="true">
      <span className="section-title-line" />
      <span className="section-title-number">{number}</span>
      <span className="section-title-bar">{title}</span>
      <span className="section-title-line" />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="stat-item"><strong>{value}</strong><span>{label}</span></div>;
}

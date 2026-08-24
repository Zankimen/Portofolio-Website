import { Icon } from "@/components/icons";
import {
  education,
  experience,
  navigation,
  profile,
  projects,
  skillGroups,
} from "@/content/portfolio";

export function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Daffa Ayyasy home">
          <span className="wordmark-mark">{profile.shortName}</span>
          <span className="wordmark-name">Daffa Ayyasy</span>
        </a>
        <span className="header-note">Portfolio / 2026</span>
      </header>

      <nav className="floating-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} className="nav-item" href={item.href}>
            <Icon name={item.icon} size={17} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <main id="main-content">
        <section id="home" className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {profile.availability}</p>
            <h1>Building digital work with <em>clarity</em> and care.</h1>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                See selected work <Icon name="arrow" size={17} />
              </a>
              <a className="text-link" href="#contact">Let&apos;s talk <Icon name="arrow" size={15} /></a>
            </div>
          </div>
          <div className="hero-aside" aria-label="Profile placeholder visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="portrait-placeholder"><span>DA</span></div>
            <p className="aside-caption">{profile.location}<br />Open to meaningful work</p>
          </div>
        </section>

        <section id="about" className="section shell section-split">
          <SectionLabel number="01" label="A little about" />
          <div className="section-content about-content">
            <h2>Good work starts with a better question.</h2>
            <p>{profile.about}</p>
            <p className="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Saya percaya bahwa detail, ritme kerja, dan komunikasi yang jujur sama pentingnya dengan hasil akhir.</p>
          </div>
        </section>

        <section id="experience" className="section shell section-split">
          <SectionLabel number="02" label="Experience" />
          <div className="section-content timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.period}>
                <p className="meta">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="accent-text">{item.company}</p>
                  <p className="muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section shell section-split">
          <SectionLabel number="03" label="Skills & tools" />
          <div className="section-content skills-layout">
            <p className="lead">A flexible toolkit for shaping ideas into useful, considered experiences.</p>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section shell section-split">
          <SectionLabel number="04" label="Selected work" />
          <div className="section-content projects-list">
            <div className="projects-intro">
              <h2>Some things I&apos;ve made, explored, and learned from.</h2>
              <p className="muted">Placeholder projects untuk sementara. Nanti setiap item akan diganti dengan studi kasus dan bukti yang benar-benar milik Daffa.</p>
            </div>
            {projects.map((project, index) => (
              <article className={"project-row " + (index === 0 ? "project-featured" : "")} key={project.number}>
                <p className="project-number">{project.number}</p>
                <div className="project-body">
                  <p className="meta">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="muted">{project.description}</p>
                  <ul className="tag-list" aria-label={"Technologies used in " + project.title}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <a className="project-arrow" href="#contact" aria-label={"Discuss " + project.title}><Icon name="arrow" size={19} /></a>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section shell section-split">
          <SectionLabel number="05" label="Learning" />
          <div className="section-content education-list">
            {education.map((item) => (
              <article className="education-item" key={item.title}>
                <p className="meta">{item.period}</p>
                <div><h3>{item.title}</h3><p className="muted">{item.place}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section shell">
          <p className="eyebrow">06 / Start a conversation</p>
          <h2>Have a thoughtful project in mind?</h2>
          <p className="contact-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Untuk sekarang, email adalah cara terbaik untuk menghubungi saya.</p>
          <a className="contact-email" href={"mailto:" + profile.email}>{profile.email} <Icon name="arrow" size={22} /></a>
        </section>
      </main>

      <footer className="site-footer shell">
        <p>© 2026 {profile.name}. Placeholder content, for now.</p>
        <div className="footer-links">
          <a href={"mailto:" + profile.email}>Email</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <Icon name="external" size={14} /></a>
          <a href="#home">Back to top <Icon name="arrow" size={14} /></a>
        </div>
      </footer>
    </>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return <div className="section-label"><span>{number}</span><span>{label}</span></div>;
}

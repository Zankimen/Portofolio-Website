import { Icon } from "@/components/icons";
import { profile, socialLinks } from "@/content/portfolio";

export function HeroSection() {
  return (
    <section id="home" className="hero-portfolio">
      <div className="hero-portfolio-copy">
        <p className="hero-kicker"><span className="status-dot" /> {profile.availability}</p>
        <h1>
          Hello,
          <br />
          My name is <span className="hero-name">{profile.name}.</span>
          <br />
          I am a <span className="hero-role">{profile.role}.</span>
        </h1>
        <div className="social-row hero-socials">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
              <Icon name={social.icon} size={27} />
            </a>
          ))}
        </div>
        <div className="hero-actions">
          <a className="download-button resume-button" href={profile.resumeIdUrl} target="_blank" rel="noreferrer">
            CV Indonesia <Icon name="download" size={17} />
          </a>
        </div>
      </div>
      <div className="hero-portfolio-art">
        <div className="hero-terminal" role="img" aria-label="Animated software engineer profile">
          <div className="terminal-header">
            <div className="terminal-dots"><i /><i /><i /></div>
            <span className="terminal-file">daffa.ts</span>
          </div>
          <div className="terminal-lines" aria-hidden="true">
            <span className="code-line code-line-1"><b>const</b> daffa = {"{"}</span>
            <span className="code-line code-line-2 indent">role: <em>&quot;Software Engineer&quot;</em>,</span>
            <span className="code-line code-line-3 indent">focus: <em>&quot;backend, cloud, AI/ML&quot;</em>,</span>
            <span className="code-line code-line-4 indent">stack: <em>[&quot;Laravel&quot;, &quot;Node.js&quot;]</em>,</span>
            <span className="code-line code-line-5 indent">freshGraduate: <em>true</em>,</span>
            <span className="code-line code-line-6">{"}"}</span>
          </div>
          <div className="terminal-cursor" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

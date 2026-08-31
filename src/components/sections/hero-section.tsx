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
          My name is <span className="hero-name">Muhammad Daffa&apos; Ayyasy</span>.
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
      <div className="hero-portfolio-art" aria-label="Decorative code illustration">
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
      </div>
    </section>
  );
}

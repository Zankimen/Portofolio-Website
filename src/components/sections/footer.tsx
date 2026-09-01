import { profile, socialLinks } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-inner">
        <p>© 2026 <strong>{profile.name}</strong></p>
        <div>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer">English CV</a>
          <span>|</span>
          <a href={profile.resumeIdUrl} target="_blank" rel="noreferrer">CV Indonesia</a>
          <span>|</span>
          {socialLinks.map((social, index) => (
            <span key={social.label}>
              {index > 0 && <span> · </span>}
              <a href={social.href} target="_blank" rel="noreferrer">{social.label}</a>
            </span>
          ))}
          <span>|</span>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

import { Icon } from "@/components/icons";
import { profile, socialLinks } from "@/content/portfolio";

export function ContactSection() {
  return (
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
        <p className="form-note">Direct email form — replace with a form endpoint when needed.</p>
        <label htmlFor="contact-name">Your Name</label>
        <input id="contact-name" name="name" maxLength={100} required type="text" />
        <label htmlFor="contact-email">Your Email</label>
        <input id="contact-email" name="email" maxLength={100} required type="email" />
        <label htmlFor="contact-message">Your Message</label>
        <textarea id="contact-message" name="message" maxLength={500} required rows={4} />
        <button type="submit">Send Message <Icon name="send" size={16} /></button>
      </form>
    </section>
  );
}

import { Icon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
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
      <ContactForm email={profile.email} />
    </section>
  );
}

import { Icon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { profile, socialLinks } from "@/content/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="sr-only">Contact</h2>
      <div className="contact-copy">
        <p className="section-accent-label">Contact with me</p>
        <p className="contact-intro">Saya terbuka untuk peluang Software Engineer, terutama pada pengembangan back-end, cloud, dan integrasi AI/ML. Silakan hubungi saya untuk berdiskusi mengenai pekerjaan atau kolaborasi.</p>
        <div className="contact-detail"><Icon name="map" size={20} /><span>{profile.location}</span></div>
        <div className="contact-detail"><Icon name="mail" size={20} /><a href={"mailto:" + profile.email}>{profile.email}</a></div>
        <div className="contact-detail"><Icon name="phone" size={20} /><a href={profile.phoneHref}>{profile.phone}</a></div>
        <div className="social-row contact-socials">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}><Icon name={social.icon} size={20} /></a>)}</div>
      </div>
      <ContactForm email={profile.email} />
    </section>
  );
}

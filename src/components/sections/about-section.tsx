import { ProfileImage } from "@/components/profile-image";
import { profile } from "@/content/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="portfolio-section about-section" aria-labelledby="about-heading">
      <h2 id="about-heading" className="sr-only">About</h2>
      <div className="about-copy">
        <p className="section-accent-label">Summary</p>
        <p className="about-lead">{profile.summary}</p>
        <p className="about-body">{profile.aboutDetail}</p>
      </div>
      <aside className="about-facts" aria-label="Profile facts">
        <p className="section-accent-label">At a glance</p>
        <dl>
          <div><dt>Location</dt><dd>{profile.location}</dd></div>
          <div><dt>Focus</dt><dd>{profile.focus}</dd></div>
          <div><dt>Status</dt><dd>{profile.availability}</dd></div>
        </dl>
      </aside>
      <ProfileImage />
    </section>
  );
}

import { AmbientEffects } from "@/components/ambient-effects";
import { SectionNavigation } from "@/components/section-navigation";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SectionTitle } from "@/components/sections/section-title";
import { SkillsSection } from "@/components/sections/skills-section";

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
        <HeroSection />
        <SectionTitle number="01" title="About Me" />
        <AboutSection />
        <SectionTitle number="02" title="Experiences" />
        <ExperienceSection />
        <SectionTitle number="03" title="Skills" />
        <SkillsSection />
        <SectionTitle number="04" title="Projects" />
        <ProjectsSection />
        <SectionTitle number="05" title="Education" />
        <EducationSection />
        <SectionTitle number="06" title="Contact" />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

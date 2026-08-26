"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { navigation } from "@/content/portfolio";

const sectionIds = navigation.map((item) => item.href.slice(1));

export function SectionNavigation() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    href: string,
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const sectionTitle = section?.previousElementSibling;
    const target = sectionTitle?.classList.contains("section-title-wrap")
      ? sectionTitle
      : section;

    setActiveSection(sectionId);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-24% 0px -58% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="floating-nav" aria-label="Main navigation">
      {navigation.map((item) => {
        const sectionId = item.href.slice(1);
        const isActive = activeSection === sectionId;

        return (
          <div className="nav-group" key={item.href}>
            <a
              className={"nav-item " + (isActive ? "active" : "")}
              href={item.href}
              aria-label={item.label}
              aria-current={isActive ? "location" : undefined}
              onClick={(event) => scrollToSection(event, sectionId, item.href)}
            >
              <Icon name={item.icon} size={19} />
            </a>
            <span className="nav-tooltip">{item.label}</span>
          </div>
        );
      })}
    </nav>
  );
}

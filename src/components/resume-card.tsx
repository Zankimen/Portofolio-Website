"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/icons";

type ResumeCardProps = {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: "briefcase" | "code" | "layers" | "graduation";
  initialOpen?: boolean;
};

export function ResumeCard({
  period,
  title,
  subtitle,
  description,
  details,
  icon,
  initialOpen = false,
}: ResumeCardProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const detailsId = useId();

  return (
    <article className={"portfolio-card resume-card glow-card " + (isOpen ? "is-open" : "")}>
      <div className="resume-card-header">
        <div className="card-icon"><Icon name={icon} size={26} /></div>
        <div className="card-main">
          <span className="date-pill">{period}</span>
          <h3>{title}</h3>
          <p className="company-link">{subtitle}</p>
          <p className="card-description">{description}</p>
        </div>
      </div>
      <button
        className="details-toggle"
        type="button"
        aria-controls={detailsId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <Icon name="arrow" size={16} />
        <span>{isOpen ? "Hide details" : "Show " + details.length + " key highlights"}</span>
      </button>
      <div className="resume-card-details" id={detailsId} hidden={!isOpen}>
        <ul>
          {details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      </div>
    </article>
  );
}

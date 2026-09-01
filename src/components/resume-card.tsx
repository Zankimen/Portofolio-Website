"use client";

import { useEffect, useId, useRef, useState, type PointerEvent } from "react";
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
  const frameRef = useRef(0);
  const boundsRef = useRef<DOMRect | null>(null);

  useEffect(() => () => {
    if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
  }, []);

  function updateGlow(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;

    const card = event.currentTarget;
    const clientX = event.clientX;
    const clientY = event.clientY;
    boundsRef.current ??= card.getBoundingClientRect();
    card.style.setProperty("--active", "1");

    if (frameRef.current) return;

    frameRef.current = window.requestAnimationFrame(() => {
      const bounds = boundsRef.current;
      if (!bounds) {
        frameRef.current = 0;
        return;
      }

      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      let angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);

      if (angle < 0) angle += 360;
      card.style.setProperty("--start", `${angle + 90}`);
      frameRef.current = 0;
    });
  }

  function resetGlow(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    frameRef.current = 0;
    boundsRef.current = null;
    event.currentTarget.style.setProperty("--active", "0");
  }

  return (
    <div className="glow-container">
      <article
        className={"portfolio-card resume-card glow-card " + (isOpen ? "is-open" : "")}
        onPointerEnter={updateGlow}
        onPointerMove={updateGlow}
        onPointerLeave={resetGlow}
      >
        <div className="glows" aria-hidden="true" />
        <div className="resume-card-header">
          <div className="card-icon"><Icon name={icon} size={26} /></div>
          <div className="card-main">
            <span className="date-pill">{period}</span>
            <h3>{title}</h3>
            <p className="company-link">{subtitle}</p>
            {description && <p className="card-description">{description}</p>}
          </div>
        </div>
        {details.length > 0 && (
          <>
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
          </>
        )}
      </article>
    </div>
  );
}

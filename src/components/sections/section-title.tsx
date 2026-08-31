export function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="section-title-wrap" aria-hidden="true">
      <span className="section-title-line" />
      <span className="section-title-number">{number}</span>
      <span className="section-title-bar">{title}</span>
      <span className="section-title-line" />
    </div>
  );
}

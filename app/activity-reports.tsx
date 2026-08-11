"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { activityCompanies, reportLabels } from "./activity-report-data";

type ActivityReportsProps = {
  locale: "ja" | "ko";
};

export function ActivityReports({ locale }: ActivityReportsProps) {
  const companies = activityCompanies[locale];
  const copy = reportLabels[locale];
  // One flat list, so the arrows run across every company rather than stopping
  // at the end of the one that was clicked.
  const entries = companies.flatMap((company) =>
    company.students.map((student) => ({ company: company.name, student })),
  );
  const total = entries.length;

  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const step = useCallback(
    (delta: number) => setIndex((current) => (current === null ? current : (current + delta + total) % total)),
    [total],
  );

  // showModal() brings Esc handling, focus trapping and an inert background.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index === null) {
      if (dialog.open) dialog.close();
    } else if (!dialog.open) {
      dialog.showModal();
    }
  }, [index]);

  // Esc closes the dialog natively, which never runs our handler. Mirror the
  // dialog's own close event back into state so the two cannot drift apart.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const syncClosed = () => setIndex(null);
    dialog.addEventListener("close", syncClosed);
    return () => dialog.removeEventListener("close", syncClosed);
  }, []);

  useEffect(() => {
    if (index === null) return;
    // Each report opens at its own beginning rather than the previous scroll depth.
    bodyRef.current?.scrollTo({ top: 0 });

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, step]);

  const active = index === null ? null : entries[index];

  return <>
    <div className="companyGrid">
      {companies.map((company) => {
        const firstReport = entries.findIndex((entry) => entry.student.id === company.students[0].id);

        return <article className="companyCard" key={company.id}>
          <strong>{company.name}</strong>
          <div className="companyCardActions">
            <button className="companyReportButton" type="button" onClick={() => setIndex(firstReport)}>
              <span>{copy.open}</span><b aria-hidden="true">→</b>
            </button>
          </div>
        </article>;
      })}
    </div>
    <dialog
      className="reportDialog"
      ref={dialogRef}
      aria-label={active ? `${active.company} ${active.student.name}` : undefined}
      // Clicks land on the dialog itself only when they miss the panel inside it.
      onClick={(event) => { if (event.target === dialogRef.current) setIndex(null); }}
    >
      {active && index !== null && <div className="reportShell">
        <header className="reportHead">
          <p className="eyebrow">{copy.counter(index + 1, total)}</p>
          <h3>{active.company}<i aria-hidden="true">—</i>{active.student.name}</h3>
          <span>{active.student.meta}</span>
          <button className="reportClose" type="button" onClick={() => setIndex(null)} aria-label={copy.close}>×</button>
        </header>
        <button className="reportArrow reportPrev" type="button" onClick={() => step(-1)} aria-label={copy.previous}>‹</button>
        <button className="reportArrow reportNext" type="button" onClick={() => step(1)} aria-label={copy.next}>›</button>
        <div className="reportBody" ref={bodyRef} tabIndex={0}>
          {active.student.sections.map((section) => (
            <section key={section.heading}>
              <h4>{section.heading}</h4>
              {section.paragraphs.map((paragraph, order) => <p key={order}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </div>}
    </dialog>
  </>;
}

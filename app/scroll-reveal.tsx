"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Elements that fade up as they scroll into view. Collected by selector so the
// pages stay server components and none of the 22 page files need touching.
const REVEAL_SELECTOR = [
  ".sectionHeading",
  ".prose",
  ".audienceCard",
  ".programMini",
  ".featureCard",
  ".videoCard",
  ".videoPlay",
  ".resourceCard",
  ".flowStep",
  ".timelineRow",
  ".courseBlock",
  ".quietPanel",
  ".goalPanel",
  ".roadmapItem",
  ".benefitItem",
  ".universityGroup",
  ".operationPanel",
  ".activityViewer",
  ".contactCard",
  ".contactDetail",
  ".stat",
  ".legalNote",
  ".sectionAction",
].join(",");

const COUNTER_SELECTOR = ".stat strong";
const COUNT_MS = 1100;

/** Splits "1,100名+" into its leading number and the trailing suffix. */
function splitCount(text: string): { value: number; suffix: string; grouped: boolean } | null {
  const match = /^([\d,]+)(.*)$/.exec(text.trim());
  if (!match) return null;

  const value = Number(match[1].replace(/,/g, ""));
  if (!Number.isFinite(value)) return null;

  // Only group while counting if the source did. Otherwise the year 2013
  // would tick up as "2,013".
  return { value, suffix: match[2], grouped: match[1].includes(",") };
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const reveal = (element: Element) => element.classList.add("is-revealed");

    // Only hide the initial state once this component is running. Without the
    // flag a JS failure would leave every section stuck at opacity 0.
    if (!reduced) document.documentElement.setAttribute("data-reveal-ready", "");

    const targets = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
    const indexByParent = new Map<Element, number>();

    for (const target of targets) {
      if (target.classList.contains("is-revealed")) continue;
      const parent = target.parentElement;
      if (parent) {
        // Stagger siblings within their own group, so a three-card grid runs
        // 0/1/2 regardless of how many groups precede it on the page.
        const index = indexByParent.get(parent) ?? 0;
        indexByParent.set(parent, index + 1);
        (target as HTMLElement).style.setProperty("--reveal-i", String(index));
      }
    }

    let observer: IntersectionObserver | undefined;

    if (reduced || typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
    } else {
      observer = new IntersectionObserver(
        (entries, self) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            reveal(entry.target);
            self.unobserve(entry.target);
          }
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
      );
      for (const target of targets) observer.observe(target);
    }

    // Counters animate from zero, but the server already rendered the final
    // value, so no-JS and crawlers keep the real numbers.
    const counters = Array.from(document.querySelectorAll<HTMLElement>(COUNTER_SELECTOR));
    // Keep the server-rendered text so an unmount mid-count can restore it —
    // by then textContent holds a partial value, not the target.
    const finalText = new Map<HTMLElement, string>();
    const frames: number[] = [];

    if (!reduced) {
      for (const counter of counters) {
        const original = counter.textContent ?? "";
        const parsed = splitCount(original);
        if (!parsed) continue;

        finalText.set(counter, original);
        const { value, suffix, grouped } = parsed;
        const format = (n: number) => (grouped ? n.toLocaleString("en-US") : String(n));
        const start = performance.now();
        const render = (now: number) => {
          const progress = Math.min((now - start) / COUNT_MS, 1);
          // easeOutCubic, so it decelerates into the final value.
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = `${format(Math.round(value * eased))}${suffix}`;
          if (progress < 1) frames.push(requestAnimationFrame(render));
        };
        counter.textContent = `0${suffix}`;
        frames.push(requestAnimationFrame(render));
      }
    }

    return () => {
      observer?.disconnect();
      for (const frame of frames) cancelAnimationFrame(frame);
      for (const [counter, text] of finalText) counter.textContent = text;
    };
  }, [pathname]);

  return null;
}

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
  ".activityPanel",
  ".companyCard",
  ".usmHeroCopy",
  ".usmSectionLabel",
  ".usmProfilePhoto",
  ".usmProfileInfo > *",
  ".usmOverview > *",
  ".usmRoleGrid article",
  ".usmSectionDark > h2",
  ".usmTimeline article",
  ".usmCharacterHeading > *",
  ".usmCharacterGrid figure",
  ".usmVideoHeading > *",
  ".usmVideoGrid article",
  ".usmLearning .usmSplit > *",
  ".usmLearning blockquote",
  ".usmStudentNote",
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
    const targets = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
    const indexByParent = new Map<Element, number>();

    const reveal = (element: Element) => {
      element.classList.add("is-revealed");
      element.classList.remove("revealPending");
    };

    for (const target of targets) {
      target.classList.add("revealTarget");

      if (!reduced && !target.classList.contains("is-revealed")) {
        target.classList.add("revealPending");
      }

      const parent = target.parentElement;
      if (parent) {
        // Stagger siblings within their own group, so a three-card grid runs
        // 0/1/2 regardless of how many groups precede it on the page.
        const index = indexByParent.get(parent) ?? 0;
        indexByParent.set(parent, index + 1);
        (target as HTMLElement).style.setProperty("--reveal-i", String(index));
      }
    }

    // Turn on the hidden state only after every target has been registered.
    // This prevents a route change or Fast Refresh from hiding content that
    // the observer never received.
    if (!reduced) document.documentElement.setAttribute("data-reveal-ready", "");

    let observer: IntersectionObserver | undefined;
    let revealFallback: number | undefined;
    let fallbackFrame: number | undefined;
    const revealVisibleTargets = () => {
      const revealLine = window.innerHeight * 0.94;
      for (const target of targets) {
        if (target.classList.contains("is-revealed")) continue;
        const rect = target.getBoundingClientRect();
        if (rect.top <= revealLine && rect.bottom >= 0) reveal(target);
      }
    };
    const scheduleRevealFallback = () => {
      if (fallbackFrame !== undefined) return;
      fallbackFrame = window.requestAnimationFrame(() => {
        fallbackFrame = undefined;
        revealVisibleTargets();
      });
    };

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

      // IntersectionObserver can occasionally miss entries during Fast
      // Refresh or route transitions. A lightweight viewport check backs it up
      // while preserving the reveal animation for sections farther down.
      window.addEventListener("scroll", scheduleRevealFallback, { passive: true });
      window.addEventListener("resize", scheduleRevealFallback);
      revealFallback = window.setTimeout(scheduleRevealFallback, 300);
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
      if (revealFallback !== undefined) window.clearTimeout(revealFallback);
      if (fallbackFrame !== undefined) window.cancelAnimationFrame(fallbackFrame);
      window.removeEventListener("scroll", scheduleRevealFallback);
      window.removeEventListener("resize", scheduleRevealFallback);
      document.documentElement.removeAttribute("data-reveal-ready");
      for (const target of targets) {
        target.classList.remove("is-revealed", "revealPending", "revealTarget");
      }
      for (const frame of frames) cancelAnimationFrame(frame);
      for (const [counter, text] of finalText) counter.textContent = text;
    };
  }, [pathname]);

  return null;
}

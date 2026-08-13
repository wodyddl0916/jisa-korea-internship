"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const REVEAL_SELECTOR = [
  ".usmHeroCopy",
  ".usmSectionLabel",
  ".usmProfilePhoto",
  ".usmProfileInfo > *",
  ".usmOverview > *",
  ".usmPromoImpact",
  ".usmRoleGrid article",
  ".usmSectionDark > h2",
  ".usmTimeline article",
  ".usmCharacterHeading > *",
  ".usmCharacterGrid figure",
  ".usmVideoHeading > *",
  ".usmVideoGrid article",
  ".usmCalendarHeading > *",
  ".usmCalendarGrid article",
  ".usmLearning .usmSplit > *",
  ".usmLearning blockquote",
  ".usmStudentNote",
].join(",");

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
    const indexByParent = new Map<Element, number>();

    const reveal = (element: Element) => {
      element.classList.add("is-revealed");
      element.classList.remove("revealPending");
    };

    for (const target of targets) {
      target.classList.add("revealTarget");
      if (!reduced) target.classList.add("revealPending");

      const parent = target.parentElement;
      if (parent) {
        const index = indexByParent.get(parent) ?? 0;
        indexByParent.set(parent, index + 1);
        (target as HTMLElement).style.setProperty("--reveal-i", String(index));
      }
    }

    if (reduced || typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
      return;
    }

    document.documentElement.setAttribute("data-reveal-ready", "");
    const observer = new IntersectionObserver(
      (entries, self) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target);
          self.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.removeAttribute("data-reveal-ready");
      targets.forEach((target) => target.classList.remove("is-revealed", "revealPending", "revealTarget"));
    };
  }, [pathname]);

  return null;
}

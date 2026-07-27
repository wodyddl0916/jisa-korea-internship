// Slot images for the home carousel and the per-page heroes.
//
// Both are CSS background layers cropped with `cover`, and the source photos are
// far wider than their slots (up to 5.6:1 into a 1.41:1 box), so each entry
// carries the `background-position` that keeps its subject in frame.
//
// Placement rule: the carousel paints our own <h1> on top of the image, so it
// takes the photos with no burnt-in lettering. Images that already carry text
// go to the page hero boxes, which have no headline over them.
//
// Keyed by the `label` each slot already renders, so the Japanese and Korean
// trees resolve the same image without duplicating paths across 22 call sites.

export type SiteImage = {
  src: string;
  focus?: string;
  /** Set when the art is bright enough that white overlay text stops reading. */
  tone?: "light";
};

/** Home carousel — keys match `label` in both `slides` and `slidesKo`. */
export const slideImages: Record<string, SiteImage> = {
  "ABOUT JISA": { src: "/assets/workplace-mentoring.jpg", focus: "center 44%" },
  "THREE PROGRAMS": { src: "/assets/software-internship.jpg", focus: "center 48%" },
  "PUBLIC PARTNERSHIP": { src: "/assets/team-meeting.jpg", focus: "center 46%" },
  "RESULTS & RESOURCES": { src: "/assets/global-network.jpg" },
  "VISION 2026–2027": { src: "/assets/tokyo-tower.jpg", focus: "center" },
};

/**
 * Photos that fill the empty half of the text-only home sections. Keys match
 * the `name` passed to `SectionMedia`.
 */
export const sectionImages: Record<string, SiteImage> = {
  "our-role": { src: "/assets/workplace-mentoring.jpg", focus: "center 44%" },
  partnership: { src: "/assets/team-meeting.jpg", focus: "center 45%" },
};

/** Page heroes — keys match the `label` passed to `PageHero`. */
export const pageImages: Record<string, SiteImage> = {
  "ABOUT JISA": { src: "/assets/workplace-mentoring.jpg", focus: "center 44%" },
  "PROGRAMS": { src: "/assets/software-internship.jpg", focus: "center 48%" },
  "PUBLIC PARTNERSHIP": { src: "/assets/team-meeting.jpg", focus: "center 46%" },
  "RESULTS & RESOURCES": { src: "/assets/global-network.jpg" },
  "VISION 2026–2027": { src: "/assets/tokyo-tower.jpg", focus: "center" },
  "CONTACT": { src: "/assets/workplace-mentoring.jpg", focus: "center 42%" },
};

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
  // Anchored to the top so the collage's white gutter falls behind the button
  // rather than across the lead paragraph.
  "ABOUT JISA": { src: "/assets/worksite-collage.jpg", focus: "center top" },
  "THREE PROGRAMS": { src: "/assets/japanese-training.jpg", focus: "right center" },
  "PUBLIC PARTNERSHIP": { src: "/assets/university-briefing.jpg", focus: "center 40%" },
  "RESULTS & RESOURCES": { src: "/assets/global-network.jpg" },
  "VISION 2026–2027": { src: "/assets/network-collage.jpg", focus: "right center" },
};

/**
 * Photos that fill the empty half of the text-only home sections. Keys match
 * the `name` passed to `SectionMedia`.
 */
export const sectionImages: Record<string, SiteImage> = {
  "our-role": { src: "/assets/meeting-design.jpg", focus: "center" },
  // Pale desk flatlay — reinforces the white ground rather than punching a
  // dark rectangle into it.
  partnership: { src: "/assets/planning-desk.jpg", focus: "center" },
};

/** Page heroes — keys match the `label` passed to `PageHero`. */
export const pageImages: Record<string, SiteImage> = {
  "ABOUT JISA": { src: "/assets/jisa-brand.jpg", focus: "left center" },
  // Held left so the burnt-in 審査 lettering stays out of the wider mobile crop,
  // where it would otherwise sit directly under the index numeral.
  "PROGRAMS": { src: "/assets/visa-screening.jpg", focus: "24% center" },
  "PUBLIC PARTNERSHIP": { src: "/assets/university-briefing.jpg" },
  "RESULTS & RESOURCES": { src: "/assets/global-network.jpg" },
  // Replaces a watermarked Adobe Stock comp with a licensed photograph.
  "VISION 2026–2027": { src: "/assets/tokyo-tower.jpg", focus: "center" },
  "CONTACT": { src: "/assets/engineering-work.jpg", focus: "left center" },
};

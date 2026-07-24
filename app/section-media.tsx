import type { CSSProperties } from "react";
import { sectionImages } from "./site-images";

/**
 * Fills the empty half of a text-only section with photography. Follows the
 * same background approach as `.pageHeroVisual`, but with no dark overlay —
 * nothing is printed on top, and the page stays on its white ground.
 */
export function SectionMedia({ name, alt }: { name: string; alt: string }) {
  const image = sectionImages[name];
  if (!image) return null;

  const style = {
    "--media-image": `url(${image.src})`,
    "--media-focus": image.focus ?? "center",
  } as CSSProperties;

  return <figure className="sectionMedia" style={style} role="img" aria-label={alt} />;
}

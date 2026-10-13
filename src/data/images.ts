import type { ImageMetadata } from "astro";
import hero from "../assets/photos/hero.jpg";
import junk from "../assets/photos/junk.jpg";
import yard from "../assets/photos/yard.jpg";
import paint from "../assets/photos/paint.jpg";

/**
 * Every photo on the site. These are AI-generated scene images (Higgsfield,
 * 2026-10-13) used as stand-ins: no people's faces, no trucks or logos, so
 * none of them claims to show ClearPath's crew or a real job.
 * TODO: replace each with a real ClearPath job photo (strip EXIF first).
 */
export type Photo = { src?: ImageMetadata; alt: string; todo: string };

export const images: Record<"hero" | "junk" | "yard" | "paint", Photo> = {
  hero: { src: hero, alt: "Boxes and a wrapped armchair on a hand truck at a front porch, autumn maples and mountains behind", todo: "Real moving-day photo, ideally the ClearPath truck on a Fraser Valley street" },
  junk: { src: junk, alt: "A garage being cleared, old furniture and a mattress stacked at the driveway for haul-away", todo: "Real junk-removal before/after" },
  yard: { src: yard, alt: "A backyard mid-cleanup with raked maple leaves and filled yard-waste bags", todo: "Real yard-cleanup job" },
  paint: { src: paint, alt: "A freshly painted empty living room with a drop cloth and roller tray", todo: "Real painting job" },
};

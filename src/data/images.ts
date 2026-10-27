import type { ImageMetadata } from "astro";
import crewRamp from "../assets/photos/real-crew-ramp.jpg";
import liftgate from "../assets/photos/real-liftgate.jpg";
import rampTruck from "../assets/photos/real-ramp-truck.jpg";
import loadedTruck from "../assets/photos/real-loaded-truck.jpg";
import junk from "../assets/photos/junk.jpg";
import yard from "../assets/photos/yard.jpg";
import paint from "../assets/photos/paint.jpg";

/**
 * Every photo on the site.
 * real: true  -> ClearPath's own job photos (client-supplied 2026-10-27, cropped
 *                from screenshots, EXIF stripped, licence plates pixelated).
 * real: false -> AI-generated stand-ins (Higgsfield). The page labels these
 *                "Representative photo". TODO: replace with real job photos.
 */
export type Photo = { src: ImageMetadata; alt: string; real: boolean; todo?: string };

export const images = {
  hero: { src: crewRamp, real: true, alt: "A ClearPath mover carrying a box down a truck ramp, mountains behind" },
  moving: { src: liftgate, real: true, alt: "A ClearPath mover giving a thumbs-up beside an open box truck with its liftgate down" },
  rampTruck: { src: rampTruck, real: true, alt: "An empty moving truck with its loading ramp down on a wet morning" },
  loadedTruck: { src: loadedTruck, real: true, alt: "A crew member giving two thumbs-up inside a truck loaded with a bed frame, mattresses and a sofa" },
  junk: { src: junk, real: false, alt: "A garage being cleared, old furniture and a mattress stacked at the driveway for haul-away", todo: "Real junk-removal before/after" },
  yard: { src: yard, real: false, alt: "A backyard mid-cleanup with raked maple leaves and filled yard-waste bags", todo: "Real yard-cleanup job" },
  paint: { src: paint, real: false, alt: "A freshly painted empty living room with a drop cloth and roller tray", todo: "Real painting job" },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof images;

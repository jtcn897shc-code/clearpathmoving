/**
 * Single source of truth for every word and number on the site.
 * Components read from here; nothing is hardcoded in a .astro file.
 *
 * Source: client onboarding export (submission 11b931af, submitted 2026-10-10)
 * and the client's Facebook banner. Anything marked TODO is NOT confirmed
 * by the client and must not ship as a factual claim.
 */

export const business = {
  name: "ClearPath Moving & Junk Solutions", // (confirmed: logo lockup)
  shortName: "ClearPath",
  owner: "Muhammed Ali", // (confirmed: onboarding "Primary Contact Name")
  ownerRole: "Owner", // (confirmed)
  base: "Abbotsford, BC", // (confirmed: business address is in Abbotsford; street range not published, TODO confirm public address)
  phoneDisplay: "236-887-9193", // (confirmed: onboarding + business description "Call or text 236-887-9193")
  phoneE164: "+12368879193",
  email: "mohammed.alii2001@gmail.com", // (confirmed: onboarding) TODO: ask whether a business inbox should replace this
  hours: {
    // (confirmed: every day opens 06:00; Mon/Wed/Thu/Sat close 22:00, Fri/Sun 22:10)
    // TODO: onboarding lists Tuesday as "06:00–06:00" — likely a typo. Confirm before launch.
    short: "6 am – 10 pm, 7 days",
    opens: "06:00",
    closes: "22:00",
  },
  // (confirmed: onboarding description, owner's own words)
  ownerQuote: "We always go the extra mile for our senior customers.",
};

export const tel = `tel:${business.phoneE164}`;
export const sms = (body = "") =>
  `sms:${business.phoneE164}${body ? `?&body=${encodeURIComponent(body)}` : ""}`;
export const mailto = (subject = "", body = "") =>
  `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const hero = {
  eyebrow: "Abbotsford · Fraser Valley · Lower Mainland",
  // Core argument: one crew handles the move AND the clear-out AND the home jobs
  // around it. Derived from the confirmed service list + description.
  headline: ["Moved.", "Cleared.", "Done."],
  sub: "One crew for the whole job: we load and move your things, haul away what you're not keeping, and handle the painting and yard work so the old place is ready to hand back.",
  primaryCta: "Build a quote in 60 seconds",
  secondaryCta: "Call or text",
};

/**
 * Only confirmed, checkable facts, in plain words. No invented years, job
 * counts, ratings or "stats" padded out to fill a grid.
 */
export const facts = [
  { strong: "Hope to West Van", rest: "19 cities on the Highway 1 corridor" }, // (confirmed: service-area list)
  { strong: "6 am – 10 pm", rest: "seven days a week" }, // (confirmed: hours, see TODO above)
  { strong: "Call or text", rest: "for a fast quote" }, // (confirmed: owner's description)
];

export type Service = {
  id: string;
  name: string;
  kicker: string;
  body: string;
  includes: string[];
  cta?: string;
  image?: "moving" | "junk" | "yard" | "paint";
  weight: "primary" | "secondary" | "tertiary";
};

/** Ordered by customer intent; "top three" per onboarding get the weight. */
export const services: Service[] = [
  {
    id: "moving",
    name: "Full-service moving", // (confirmed: "Full moving service (top three)")
    kicker: "Loading, transport, reassembly",
    body: "Truck, crew and the heavy lifting. We load, move and unload, take apart what won't fit through a door and put it back together on the other side.",
    includes: ["Loading & unloading", "Furniture disassembly & reassembly", "Local and Lower Mainland moves"],
    cta: "Quote a move",
    image: "moving",
    weight: "primary",
  },
  {
    id: "junk",
    name: "Junk removal", // (confirmed: "Junk removal (top three)")
    kicker: "Garages, basements, estates",
    body: "Garages, basements, estates and the things that didn't make the cut on moving day. Point at it; we carry it out and haul it away.",
    includes: ["Furniture & mattresses", "Garage and basement clear-outs", "Move-out leftovers"],
    cta: "Quote a haul-away",
    image: "junk",
    weight: "primary",
  },
  {
    id: "labour",
    name: "Labour-only moving help", // (confirmed: "Labour only moving help (top three)")
    kicker: "You've got the truck",
    body: "Rented a truck or a container? Book the muscle by itself. We load it, or unload it, properly.",
    includes: ["Rental trucks & containers", "Loading or unloading only"],
    cta: "Book the crew",
    weight: "secondary",
  },
  {
    id: "assembly",
    name: "Furniture disassembly & reassembly", // (confirmed)
    kicker: "Beds, desks, wardrobes",
    body: "The pieces that need an Allen key and patience, taken apart and rebuilt correctly.",
    includes: [],
    weight: "tertiary",
  },
  {
    id: "painting",
    name: "Painting", // (confirmed)
    kicker: "Before you list or move in",
    body: "Patch-and-paint rooms so a place is ready to sell, rent or live in.",
    includes: [],
    image: "paint",
    weight: "tertiary",
  },
  {
    id: "yard",
    name: "Yard cleanup", // (confirmed)
    kicker: "Leaves, brush, green waste",
    body: "Rake-ups, overgrowth and yard waste hauled off, so the outside looks as finished as the inside.",
    includes: [],
    image: "yard",
    weight: "tertiary",
  },
];

/** The funnel, in the customer's words. */
export const steps = [
  { n: "01", title: "Tell us what's moving", body: "Use the quote builder below, or just text a few photos of the job to 236-887-9193." },
  { n: "02", title: "Get a quote back, fast", body: "Muhammed replies with a price and a time that works. Early mornings and evenings included." },
  { n: "03", title: "We show up and clear the path", body: "Move, haul-away and the extra jobs, done by one crew in one visit where we can." },
];

export const seniors = {
  eyebrow: "Downsizing & moving a parent",
  headline: "A move and a clear-out, in one booking.",
  body: [
    "Leaving the family home is rarely just a move. Some of it goes to the new place, some goes to family, and a lot of it has to go.",
    "We handle all three in one visit: carry and move what's going, take apart and rebuild the furniture, and haul away what isn't. Family can text the plan and photos from anywhere.",
  ],
};

/** (confirmed: onboarding service-area list, west to east along Highway 1 roughly) */
export const serviceArea = {
  west: ["West Vancouver", "North Vancouver", "Vancouver", "Burnaby", "Richmond", "New Westminster", "Delta", "Coquitlam", "Port Moody", "Port Coquitlam"],
  central: ["Surrey", "White Rock", "Langley", "Pitt Meadows", "Maple Ridge"],
  east: ["Abbotsford", "Mission", "Chilliwack", "Hope"],
};
export const allCities = [...serviceArea.west, ...serviceArea.central, ...serviceArea.east];

/** Same 19 cities, drawn as one route from Hope west to the North Shore. */
export const route = [
  { zone: "Fraser Valley", stops: ["Hope", "Chilliwack", "Abbotsford", "Mission"] },
  { zone: "Ridge, Langley & South of the Fraser", stops: ["Maple Ridge", "Pitt Meadows", "Langley", "Surrey", "White Rock", "Delta"] },
  { zone: "Tri-Cities & Vancouver", stops: ["Richmond", "Coquitlam", "Port Coquitlam", "Port Moody", "New Westminster", "Burnaby", "Vancouver", "North Vancouver", "West Vancouver"] },
];
export const homeBase = "Abbotsford";

export const quote = {
  services: [
    { id: "moving", label: "Full move" },
    { id: "labour", label: "Labour only" },
    { id: "junk", label: "Junk removal" },
    { id: "assembly", label: "Furniture assembly" },
    { id: "painting", label: "Painting" },
    { id: "yard", label: "Yard cleanup" },
  ],
  sizes: ["Studio / 1 bed", "2 bedroom", "3 bedroom", "4+ bedroom", "A few items", "Not sure"],
  when: ["This week", "Next 2 weeks", "This month", "Just pricing it out"],
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#area", label: "Service area" },
  { href: "#quote", label: "Quote" },
];

/**
 * Real Google reviews (client screenshot of the ClearPath Google Business
 * Profile, 2026-10-27; posted 8–9 months earlier). Text is VERBATIM up to
 * where Google truncated it with "more"; nothing is completed or paraphrased.
 * Reviewer surnames shortened to an initial.
 * TODO: get the full review text (or the GBP review links) from the client.
 */
export const reviews = {
  googleUrl: "https://www.google.com/maps/search/?api=1&query=ClearPath+Moving+%26+Junk+Solutions+Abbotsford+BC",
  items: [
    {
      name: "Shabana M.",
      meta: "Local Guide · Google review",
      stars: 5,
      text: "Thank you so much for an excellent moving service you guys provided for us today. We really appreciate your fast and efficient service. Excellent rate and exemplary",
      truncated: true,
    },
    {
      name: "Imad",
      meta: "Google review",
      stars: 5,
      text: "Clear Path Moving & Junk Solutions did an amazing job. Moe was very professional, punctual, and careful with all items. Everything was handled smoothly from start",
      truncated: true,
    },
    {
      name: "Kabul S.",
      meta: "Google review",
      stars: 5,
      text: "Highly recommended. I am a student and I needed a moving company. Moe showed up with his crew Got the job done professionally and the prices were",
      truncated: true,
    },
  ],
};

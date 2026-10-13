# Generic-AI design audit: first draft (commit 56a8bee)

Audited against the checklist in the brief, the UI/UX Pro Max rules
(`effects-match-style`, `icon-style-consistent`, hover feedback on
*interactive* elements only, contrast), and the system in `DESIGN.md`.

Note: UI/UX Pro Max's `--design-system` output suggested **Inter** and an
**emerald/green palette** for this category. Both were rejected. Inter is
the default-font pattern this audit is looking for, and green has no basis
in the client's logo. Its funnel pattern, contrast rules and "don't hide
reviews / show a map" anti-patterns were kept.

## Findings

| Pattern | Found in draft | Severity |
|---|---|---|
| Purple gradients | None. But two **brand-less glows**: a radial orange haze behind "How it works" and an orange drop-glow under the quote panel | Medium |
| Default font | Archivo was a deliberate choice (width axis echoes the logo's wide letters). But every heading used the same 900/wdth-112 caps, so the font choice did no hierarchy work | Low |
| Repetitive equal cards | **Three grids of identical boxes**: 4 stat boxes, 6 service cards (data had `weight: primary/secondary/tertiary` and the layout ignored it), 3 step cards | **High** |
| Excessive rounding | Radii of 4, 10, 20, 24 and pill all on one page; the logo is hard-edged italic | Medium |
| Random glass | `backdrop-filter` on step cards sitting on a flat background (blurs nothing) plus a blur + saturate nav | Medium |
| Centered copy | Hero, every section head, every stat, every step: centered | **High** |
| Weak hierarchy | Hero H1 and all H2s shout at the same register; "Full-service moving" (top earner) weighs the same as "Yard cleanup" | **High** |
| Purposeless motion | `translateY(-4px)` hover lift on service cards that **aren't links** (false affordance); every block fades up identically | Medium |
| Placeholder / invented proof | Stat band padded with non-stats ("1", "Text", "6–10"). Kickers **"Most booked"** and **"Same crew, same day"** are unconfirmed claims. "Wrap and carry" implies a packing service the client never listed. AI scene photos displayed as if they were ClearPath jobs | **High** |
| Inconsistency | Five radii, two unrelated shadows, icons rendering at container width (bug: scoped `.icon` sizing missed child component), `[hidden]` overridden by `display:grid` (bug: quote builder showed all 4 steps at once) | **High** (bugs) |

## The five highest-impact changes

1. **Replace the three equal-card grids with layouts that carry meaning.**
   Services become weighted: two photo-led primary services at 7/5,
   labour-only as a full-width band, the three add-ons as a ruled index list.
   "How it works" becomes a single orange route line with three stops that
   draws as you scroll. The stat boxes are deleted (see 2).
2. **Strip invented proof.** Remove the fake stat band, "Most booked",
   "Same crew, same day" and "wrap". Confirmed facts move into a ruled
   strip at the foot of the hero, in plain words. Every AI image gets a
   visible "Representative photo" label until real job photos arrive.
3. **Left-align and rebuild hierarchy.** An asymmetric hero (headline
   left, offer and CTAs bottom-right) set in Archivo **italic, wdth 125**
   to echo the slanted logo. A smaller, distinct H2 tier with numbered
   section labels. Centered text survives only where it's a single word.
4. **One shape language, no decoration effects.** A single 2px radius
   (circles only where the shape means something: route stops, the text
   bubble). No drop-shadows, no glows, no glass; the nav goes solid on
   scroll. The logo's orange speed-lines become the one decorative motif.
5. **Motion that explains or confirms, nothing else.** Remove the hover
   lift from non-interactive cards. Swap "fade-up everything" for:
   a once-only hero headline and speed-line entrance (delight, first-view
   tier), photos revealed by a clip-path wipe on a wrapper (spatial),
   route lines drawn by scroll (explanation), quote-step slides (state
   change). Service CTAs preselect their service in the quote builder.
   Everything keeps reduced-motion and no-JS fallbacks.

Bug fixes shipped alongside: global `[hidden]` and `.icon` rules.

## Verification (after changes)
- `astro build` clean. Headless Chromium at 1440px and 360px: no console
  errors, no failed requests, 0px horizontal overflow.
- JS disabled: all content visible; quote section falls back to a checklist
  plus a working `sms:` link.
- Quote builder clicked through in the browser: a service CTA preselects its
  chip, the empty step shows an inline error, the move route toggles the
  "To" field, step 4 composes the message, and the `sms:` href carries it.
- Mobile Call / Text / Quote bar appears after the hero.

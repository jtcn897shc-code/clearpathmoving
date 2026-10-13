# ClearPath design system

## Palette (sampled from the logo, contrast measured)

| Token | Hex | Use | Contrast |
|---|---|---|---|
| `--ink` | #0E0D0C | Page ground (logo backdrop black) | — |
| `--ink-2` | #171513 | Raised surface (quote panel) | — |
| `--paper` | #F4EFE8 | Text on ink; the one light section | 17.0:1 on ink |
| `--muted` | #A39A8E | Secondary text on ink | 7.0:1 |
| `--orange` | #F87C1A | Brand ("PATH"). Text + fill on ink | 7.3:1 on ink, **2.3:1 on paper** |
| `--yellow` | #F3BC1F | Logo rule/dots. Focus ring, gradient end | 11.1:1 on ink |
| `--ember` | #A84A07 | Orange-as-text on paper | 5.0:1 |

**Rules:** the page is dark-first because orange only passes on dark. Orange is
fill-only on paper. Use ink text on orange, never white (2.7:1). The red
maple leaf stays in the logo and appears nowhere else.

## Type
Archivo variable, one family:
- Hero: 900, **italic**, `wdth 125`. Echoes the slanted, wide logo lockup.
- H2 / display: 900, `wdth 112`, uppercase, `--t-2xl` (one tier below hero).
- H3: 800, `wdth 112`, sentence or upper case.
- Body: 400–600, `wdth 100`, 17px, line-height 1.55.
- Labels: 700, `wdth 112`, 13px, +0.14em tracking, numbered `01–05`.

## Shape and depth
- One radius: `--r: 2px`. Circles only where the shape means something (route
  stops, the text-message bubble).
- No drop-shadows, glows, glass or decorative gradients. Depth comes from
  ground colour and 1px `--line` rules.
- One decorative motif: the logo's two speed-lines (`.speed`, skewed -12°).

## Layout
- Left-aligned everywhere. Asymmetric splits (7/5) over equal grids.
- Visual weight follows business weight: primary services get photos,
  secondary services get a band, add-ons go in a ruled index list.

## Motion (from the `animate` skill tables)
| Where | Purpose | Tool | Timing |
|---|---|---|---|
| Hero lines + speed-lines | Delight (first view only) | CSS animation | 900ms `--ease-out`, 110ms stagger |
| Photo wipe | Spatial | CSS transition (clip-path on inner img) | 1000ms `--ease-in-out` |
| Route / steps line | Explanation | Scroll-driven animation | Scroll-linked, linear |
| Quote steps | State change | CSS animation (class re-add) | 260ms `--ease-out` |
| Buttons | Feedback | CSS transition | 140ms scale .97 |

Every animation has a reduced-motion variant (fade only) and a no-JS state
(fully visible). Hover effects are gated behind `(hover: hover) and (pointer: fine)`.

## Category clichés we avoid
Navy-and-orange "truck clip-art" palettes, stock smiling movers in matching
shirts, cartoon box icons, "Stress-free move!!" taglines, unsourced 5-star
badges, "Get a FREE quote TODAY" urgency banners, cardboard-brown everything.

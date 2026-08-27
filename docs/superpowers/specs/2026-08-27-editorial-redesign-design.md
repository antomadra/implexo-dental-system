# Implexo Dental System — Editorial Redesign

## Objective

Rebuild the existing single-page marketing site so it feels like a credible, established B2B healthcare growth partner while preserving the current Italian marketing copy and form destination. Remove every public route or navigation element related to “Il mio studio”.

## Direction

Use a clinical-documentary editorial aesthetic: restrained ivory surfaces, deep navy typography, mineral green highlights, asymmetric image crops, sharp rules, and deliberate whitespace. The site should feel commissioned and art-directed, not assembled from generic SaaS cards.

The visual identity uses a deterministic SVG monogram built from an abstract dental arch and a forward axis. Raster imagery is generated with ImageGen and used as atmospheric, generic editorial imagery. It must not be presented as evidence of a named client, a testimonial portrait, or a real customer logo.

## Information Architecture

Keep the current one-page order and copy:

1. Navigation and conversion CTA
2. Hero
3. Existing metrics
4. Problem and solution
5. Two service paths
6. Four-step operating system
7. Existing results and case-study copy
8. Final CTA and existing contact form
9. Footer

Remove `studio.html`, the desktop navigation link, the mobile navigation link, and all CSS used exclusively by the removed private-area page.

## Components

- **Brand rail:** custom SVG mark plus wordmark, compact desktop navigation, accessible mobile menu.
- **Hero:** editorial split composition with preserved headline/copy/CTA, generated documentary clinic image, and small operational proof annotations.
- **Metrics:** narrow ledger-like strip, not three generic SaaS counters.
- **Problem/solution:** asymmetric editorial columns with numbered diagnostic list and a high-contrast response panel.
- **Paths:** two intentionally different editorial offers sharing consistent typography and behavior.
- **System:** vertical operating sequence paired with a generated abstract clinical/data image.
- **Proof:** preserve all existing testimonial and case-study wording; do not add fabricated headshots or client logos. Present proof through type, figures, and anonymized visual treatment.
- **Form:** preserve action URL, field names, required state, and path-selection behavior.

## Interaction and Accessibility

Use lightweight CSS transitions, `prefers-reduced-motion`, visible focus states, semantic headings, descriptive image alt text, an `aria-expanded` mobile menu button, and progressive enhancement. Content remains visible without JavaScript; reveal animations may enhance but never hide core content indefinitely.

## Responsive Behavior

Desktop uses a 12-column editorial grid. Tablet compresses to two columns. Mobile becomes a single-column reading flow with full-width calls to action, horizontally safe metrics, and no overflow at 390 px.

## Verification

- Automated Node tests prove there is no `studio.html` route or `Il mio studio` link, required copy remains present, generated assets are referenced, form action is unchanged, and accessibility hooks exist.
- HTML/CSS/JS are checked for syntax and browser console errors.
- Browser QA covers desktop and mobile screenshots, navigation, CTA anchors, mobile menu, and form path selection.
- The untouched backup remains at commit `b6ee6aad7d5d7f9ecb06734fdb6187bc8596437b` with a clean working tree.

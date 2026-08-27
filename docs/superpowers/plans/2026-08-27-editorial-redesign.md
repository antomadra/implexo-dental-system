# Implexo Editorial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic static landing-page presentation with a credible editorial healthcare design while preserving copy and form behavior and removing “Il mio studio” completely.

**Architecture:** Keep the zero-build static architecture. Consolidate the public experience into `index.html`, replace the oversized mixed-purpose stylesheet with a focused design system, add generated raster assets under `assets/`, and verify contract requirements with Node’s built-in test runner plus browser QA.

**Tech Stack:** Semantic HTML5, modern CSS, vanilla JavaScript, Node.js built-in tests, ImageGen raster assets.

---

### Task 1: Add the public-site contract tests

**Files:**
- Create: `tests/site.test.mjs`

- [ ] **Step 1: Write tests for the required end state**

Create Node tests that read `index.html`, `style.css`, and the repository tree. Assert that `studio.html` is absent; “Il mio studio” and `href="studio.html"` are absent; the existing hero, results, paths, and form copy remain; the form action stays `https://formslist.com/f/KGJrMdvT8ZfQ`; generated image paths are referenced; the mobile trigger exposes `aria-expanded`; reduced motion is supported; and core reveal content is visible by default.

- [ ] **Step 2: Run the tests and confirm RED**

Run: `node --test tests/site.test.mjs`

Expected: failures for the existing studio route/link, missing new assets, and missing accessibility requirements.

- [ ] **Step 3: Commit the failing contract**

Run:

```bash
git add tests/site.test.mjs
git commit -m "test: define redesign contract"
```

### Task 2: Generate and install editorial visual assets

**Files:**
- Create: `assets/implexo-clinic-editorial.png`
- Create: `assets/implexo-system-abstract.png`

- [ ] **Step 1: Generate the clinic hero image with built-in ImageGen**

Prompt a wide, photorealistic documentary photograph of an anonymous Italian dental team reviewing a treatment plan in a refined contemporary clinic. Use natural window light, candid posture, real skin and fabric texture, editorial grain, negative space for the page composition, and prohibit text, logos, watermarks, recognizable brands, staged stock-photo smiles, and patient-identifying material.

- [ ] **Step 2: Generate the system image with built-in ImageGen**

Prompt an abstract macro photograph blending translucent dental ceramic, stainless steel, glass, and fine data-like light paths. Use an ivory, graphite, cobalt, and mineral-green palette. Prohibit teeth illustrations, text, logos, watermarks, gradients typical of SaaS art, and floating 3D UI cards.

- [ ] **Step 3: Move both selected outputs into `assets/` and inspect them**

Use the generated-image output paths, copy the selected files to the exact project paths, then inspect both with `view_image`.

- [ ] **Step 4: Commit assets**

Run:

```bash
git add assets/implexo-clinic-editorial.png assets/implexo-system-abstract.png
git commit -m "feat: add editorial visual assets"
```

### Task 3: Rebuild semantic markup and remove the studio area

**Files:**
- Modify: `index.html`
- Delete: `studio.html`

- [ ] **Step 1: Remove the private-area route and every public link to it**

Delete `studio.html`; remove the desktop and mobile “Il mio studio” links from `index.html`.

- [ ] **Step 2: Replace presentational markup with editorial components**

Keep all existing marketing sentences and the form contract. Add the SVG Implexo mark, hero media figure, visual system section, semantic result figures, accessible navigation attributes, and image references.

- [ ] **Step 3: Improve progressive enhancement**

Update the menu code to synchronize `aria-expanded`, close on Escape, and keep content visible before JavaScript. Preserve `selectPath`, form submission behavior, and anchor destinations.

- [ ] **Step 4: Run tests**

Run: `node --test tests/site.test.mjs`

Expected: studio-removal and markup assertions pass; CSS-related assertions may remain red until Task 4.

### Task 4: Replace the generic CSS with the editorial design system

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Define the visual system**

Create variables for ivory, paper, deep navy, cobalt, mineral green, rules, shadow, and fluid spacing. Use `Newsreader` for editorial display and `Instrument Sans` for body/interface copy.

- [ ] **Step 2: Implement layout and components**

Build a 12-column desktop grid, split hero, ledger metrics, asymmetric diagnostic/solution layout, differentiated path panels, numbered operating sequence, proof ledger, conversion block, and compact footer. Remove all CSS exclusive to `studio.html`.

- [ ] **Step 3: Implement responsive and accessible states**

Add 900 px and 640 px breakpoints, visible keyboard focus, safe mobile navigation, image sizing, 390 px overflow protection, and `prefers-reduced-motion` behavior.

- [ ] **Step 4: Run automated checks**

Run:

```bash
node --test tests/site.test.mjs
git diff --check
```

Expected: all tests pass and `git diff --check` exits 0.

- [ ] **Step 5: Commit implementation**

Run:

```bash
git add index.html style.css studio.html
git commit -m "feat: redesign public Implexo site"
```

### Task 5: Browser verification and completion audit

**Files:**
- Modify only if QA finds a defect: `index.html`, `style.css`, `tests/site.test.mjs`

- [ ] **Step 1: Reload and inspect desktop**

Serve the repository locally, reload `http://localhost:4173/`, take a full-page screenshot, inspect console errors, verify generated images load, click every nav anchor, and verify path selection updates the form.

- [ ] **Step 2: Inspect mobile at 390 × 844**

Apply a mobile viewport, reload, take a screenshot, open/close the menu, verify no horizontal overflow, and ensure CTA/form controls remain usable.

- [ ] **Step 3: Verify the immutable backup**

Run:

```bash
git -C ../../backups/implexo-dental-system-original status --short
git -C ../../backups/implexo-dental-system-original rev-parse HEAD
```

Expected: no status output and commit `b6ee6aad7d5d7f9ecb06734fdb6187bc8596437b`.

- [ ] **Step 4: Run the final proof commands**

Run:

```bash
node --test tests/site.test.mjs
git diff --check
git status --short
rg -n -i "Il mio studio|href=[\"']studio\.html" index.html style.css
```

Expected: tests pass, no whitespace errors, only intended repository changes remain, and the final search returns no matches.

- [ ] **Step 5: Commit any QA corrections**

Run:

```bash
git add index.html style.css tests/site.test.mjs
git commit -m "fix: refine responsive editorial layout"
```

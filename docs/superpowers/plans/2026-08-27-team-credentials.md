# Team Credentials Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a visible, responsive team-credentials section with factual UniMi and Polimi study paths, without unauthorized university logos or implied endorsement.

**Architecture:** Extend the existing static `index.html` with one semantic section between the system manifesto and proof. Add isolated `team-*` rules to `style.css`; reuse the current reveal system and CSS variables. Extend the Node contract tests before production markup.

**Tech Stack:** Static HTML5, CSS, Node `node:test`, in-app browser QA.

---

### Task 1: Define the content contract

**Files:**
- Modify: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing test**

```js
test('team credentials present academic mix without implying endorsement', () => {
  assert.match(html, /class=["'][^"']*team-section/);
  assert.match(html, /03 studenti/);
  assert.match(html, /Odontoiatria e Protesi Dentaria/);
  assert.match(html, /01 studente[\s\S]*Ingegneria Informatica/);
  assert.match(html, /01 studente[\s\S]*>Design</);
  assert.match(html, /Università degli Studi di Milano/);
  assert.match(html, /Politecnico di Milano/);
  assert.match(html, /non è affiliata, patrocinata o approvata/);
  assert.doesNotMatch(html, /assets\/(?:unimi|polimi).*\.(?:svg|png|webp)/i);
});
```

- [ ] **Step 2: Run RED**

Run: `node --test tests/site.test.mjs`

Expected: one failure because `team-section` is absent.

- [ ] **Step 3: Commit the failing contract**

```bash
git add tests/site.test.mjs
git commit -m "test: define team credentials contract"
```

### Task 2: Build the editorial credentials band

**Files:**
- Modify: `index.html` after `.system-manifesto`
- Modify: `style.css` before `.proof-header` and inside existing responsive queries

- [ ] **Step 1: Add semantic HTML**

Add `<section class="team-section section-shell" aria-labelledby="team-title">` containing the approved heading, intro, three `team-entry` articles with counts `03/01/01`, disciplines and institutions, custom text marks `UNIMI/POLIMI`, and the approved non-affiliation disclaimer.

- [ ] **Step 2: Add desktop styles**

Use the existing 12-column grid. Place `.team-intro` in columns 1–5 and `.team-ledger` in columns 7–12. Style each entry as a ruled grid with large Newsreader count, discipline, institution, and outlined custom identifier.

- [ ] **Step 3: Add responsive styles**

At `max-width: 900px`, stack intro and ledger. At `max-width: 640px`, collapse each entry to two columns and place the institution below the discipline. Preserve `overflow-x: clip` and accessible type sizes.

- [ ] **Step 4: Run GREEN**

Run: `node --test tests/site.test.mjs && git diff --check`

Expected: all tests pass; no whitespace errors.

- [ ] **Step 5: Commit implementation**

```bash
git add index.html style.css
git commit -m "feat: add team credentials section"
```

### Task 3: Verify and publish

**Files:**
- No new production files

- [ ] **Step 1: Browser QA**

Serve locally, inspect desktop and 390 px. Verify section content, `scrollWidth === innerWidth`, visible marks, readable disclaimer, and empty console logs.

- [ ] **Step 2: Run final audit**

Run: `node --test tests/site.test.mjs && git diff --check && test -z "$(git status --porcelain)"`

Expected: all tests pass and tree clean.

- [ ] **Step 3: Integrate and publish**

Fast-forward `main`, rerun tests, push without force, wait for Netlify, and verify the new copy on `https://implexodental.com`.

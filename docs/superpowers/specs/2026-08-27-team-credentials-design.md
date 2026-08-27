# Implexo Team Credentials — Design Specification

## Objective

Add a prominent, credible section explaining the academic mix inside Implexo: three students of Odontoiatria e Protesi Dentaria at Università degli Studi di Milano, one student of Ingegneria Informatica at Politecnico di Milano, and one student from the Politecnico di Milano design area.

## Selected Direction

Place an editorial credentials band between the operating-system manifesto and the results section. The band uses a large statement — “Clinica, tecnologia e design. Nello stesso team.” — followed by three numbered discipline entries: `03`, `01`, `01`. This preserves the site's ledger-like visual language and makes the team composition visible without adding generic profile cards.

## Institutional References

Use custom text identifiers `UNIMI` and `POLIMI`, built with the site's own typography and explicitly labelled as academic paths. Do not install, redraw, trace, or imitate either university's official logo: both institutions reserve commercial use of their marks to authorized contexts. Add a concise disclaimer stating that the references describe members' study paths and do not imply affiliation, sponsorship, or endorsement.

## Copy

- Eyebrow: `Dentro Implexo`
- Heading: `Clinica, tecnologia e design. Nello stesso team.`
- Intro: `Un sistema per studi odontoiatrici costruito unendo competenza clinica, ingegneria e cultura del progetto.`
- Entry 1: `03 studenti` / `Odontoiatria e Protesi Dentaria` / `Università degli Studi di Milano` / `UNIMI`
- Entry 2: `01 studente` / `Ingegneria Informatica` / `Politecnico di Milano` / `POLIMI`
- Entry 3: `01 studente` / `Design` / `Politecnico di Milano` / `POLIMI`
- Disclaimer: `I riferimenti indicano esclusivamente i percorsi di studio dei membri del team. Implexo non è affiliata, patrocinata o approvata dagli atenei citati.`

## Layout and Behavior

Desktop uses the existing 12-column grid: statement on the left, a ruled credentials ledger on the right. Each entry has a large count, discipline, institution, and restrained typographic identifier. Mobile stacks the statement and entries; counts remain dominant and no horizontal scrolling is allowed. Entries are static, semantic content with no new JavaScript.

## Accessibility and Verification

Use a labelled section, semantic heading, readable contrast, and text rather than image-only marks. Automated tests require the three counts/disciplines, both institution names, disclaimer, a `team-section` hook, and absence of official-logo image assets or implied partnership language. Browser QA checks desktop and 390 px layout, zero overflow, and no console errors.

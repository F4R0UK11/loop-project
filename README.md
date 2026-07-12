# Loop — The AUI Verified Knowledge Network

An AUI-specific knowledge network where AI drafts an answer from the university's own sources, shows
its confidence and where each part came from, and a verified senior confirms it — so campus knowledge
stops disappearing at graduation.

**Prototype v0.1 — a UI/UX bootcamp project ("Institutional Knowledge Doesn't Scale").**

## The storyboard

Open `prototype/index.html` in any browser — it links all seven screens. Everything is static HTML +
Tailwind (CDN) + Google Fonts + Material Symbols. No build step.

| # | Screen | File |
|---|--------|------|
| 01 | Home / Ask | `prototype/home.html` |
| 02 | The Verified Answer (hero) | `prototype/verified.html` |
| 03 | Ask AI (grounded chat) | `prototype/askai.html` |
| 04 | Spaces directory | `prototype/spaces.html` |
| 05 | A Space thread | `prototype/space_thread.html` |
| 06 | Explore (by situation) | `prototype/explore.html` |
| 07 | Profile / contribution | `prototype/profile.html` |
| — | Shared design tokens | `prototype/_config.html` |

One clean final version per screen. Design rationale for the assigned readings (Amershi,
Shneiderman, PAIR, Nielsen, Direct Manipulation) is left as comments inside each screen's HTML so the
choices are defensible in Q&A.

## Design system

- Forest green `#1D2B22` primary (authority + human verification), warm sand `#FFF8EF` background,
  soft cream cards, terracotta `#B5651D` the AI accent, blue `#2C5F8A` = official policy, amber
  `#B5651D` = lived experience.
- Source Serif 4 headings, Work Sans body.
- Rule: terracotta owns every AI moment; blue always means policy, amber always means lived
  experience.

## Docs

- `slide7_hcai_principle.md` — the required Human-Centered AI slide (Shneiderman HCAI).
- `qa_prep.md` — defensible answers for the jury Q&A.
- `GENERATION_PROMPT.md` — the master prompt to regenerate the whole storyboard in one pass.
- `Loop_Product_Reference_v0.1.docx` — full product spec.
- `CLAUDE.md` — project context and team preferences.
- `deliverables/` — interviews, personas, journey map, affinity board, Crazy 8s, competitor
  analysis, pitch kit.

## Team

Farouk, Manal, Haytam, Anass — AUI.

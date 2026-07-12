# Loop — Project Context (for Claude Code)

> This file seeds context for Claude Code. It is read automatically at the start of each session.
> **Status: prototype v0.1 — everything here is expected to change.** Scope, naming, copy, and the
> visual system are all placeholders the team will revise.

## What this project is

**Loop** — an AUI-specific knowledge network where AI drafts an answer from the university's own
sources, shows its confidence and where each part came from, and a verified senior confirms it — so
campus knowledge stops disappearing at graduation.

**Built for AUI first, applicable anywhere.** AUI is the concrete starting case, but the same model
fits any community or organization where hard-won knowledge lives in people and leaves when they go:
another university, a company or office, a club, or a professional community.

Course context: it's a UI/UX bootcamp project ("Institutional Knowledge Doesn't Scale"), pitched to a
BCG-X / IDEO-style jury. Team of four: Farouk, Manal, Haytam, Anass.

## The problem

At AUI the answers that matter live in people's heads and leave when they graduate. Official channels
hold policy; peers hold practice; neither is durable, searchable, and trustworthy at once. Loop closes
that gap. It's for anyone hitting an unfamiliar process for the first time — not just freshmen (a
transfer student, a third-year facing Add/Drop, a visiting professor relocating to Ifrane).

## The hero interaction (the thing we pitch)

**The Verified Answer loop.** Ask in plain language → AI answers instantly from AUI's own knowledge
(handbook + real student history) → the answer shows a visible confidence score and color-codes each
source (blue = official policy, amber = lived experience) → a verified senior confirms or corrects it
in one tap → that confirmation retrains the model so the next person gets it instantly.

## Design system (placeholder but intentional)

- **Palette:** forest green `#1D2B22` (primary), warm sand `#FFF8EF` / `#EFE7D6` (background),
  terracotta `#B5651D` (the AI accent). Blue `#2C5F8A` = official policy; amber `#B5651D` = lived experience.
- **Type:** Source Serif 4 for headings, Work Sans for body.
- **Rule we follow:** terracotta owns every AI moment; blue always means policy, amber always means
  lived experience. Consistency is the point.

## The six screens (vision, not a committed build list)

1. **Home / Ask** — thesis line, ask field, topic chips, "Answered for you" list.
2. **The Verified Answer** — the hero/demo screen. AI card with visible confidence bar, blue/amber
   source chips + legend, disclaimer, feedback, human verification strip, learning-loop line.
3. **Ask AI** — conversational but grounded; AI states its own scope; inline sources + confidence.
4. **Spaces** — directory of topic communities.
5. **A Space / discussion thread** — AI draft answer + human replies, verified badge, rewards.
6. **Profile / contribution** — helper level, verified-answerer toggle, verified answers list.

## Where the code lives

- `prototype/home.html` — Screen 1 (built, improved version)
- `prototype/verified.html` — Screen 2, the hero (built, improved version)
- `prototype/_config.html` — shared Tailwind config + design tokens used across screens
- Screens 3–6 exist as design specs (see the reference doc) but are **not yet built as clean files** —
  building them to match `verified.html` is the obvious next task.

Stack: static HTML + Tailwind (via CDN) + Google Fonts + Material Symbols. No build step; open the
HTML files directly in a browser.

## How Loop stays distinct (competitor guardrail)

The differentiator is **not** the social feed. It's: (1) an AI-drafted, human-verified, self-retraining
loop fused into one artifact; (2) visible confidence + provenance on every answer; (3) policy vs.
lived-experience as a first-class distinction; (4) grounded to the org's own corpus; (5) durability
across cohorts is the goal; (6) human stays in control (AI drafts, verified person confirms, community
corrects). Ideas/categories are fair game; never copy another app's exact layouts, copy, visual
identity, proprietary names, or code.

## Known open questions (will change)

- Feature scope may shrink for a real MVP; six screens show the vision, not a commitment.
- Naming ("Loop", "Spaces", labels) is provisional.
- Rewards/verification need real rules (who becomes verified, how confirmations are weighted).
- The "retraining" story is a direction; the data/feedback pipeline isn't designed yet.
- Copy and sample questions are placeholders; rewrite with real AUI cases.

## Full spec

See `Loop_Product_Reference_v0.1.docx` in the project root — it's the complete reference this summary
is drawn from. `deliverables/` holds the graded bootcamp artifacts (interviews, personas, journey map,
affinity board, Crazy 8s, competitor analysis, pitch kit).

## Team preferences (important)

- Do not rewrite content wholesale or use "AI-sounding" language (em-dashes as connectors, over-structured prose). Light-touch edits, preserve original wording.
- Deliverables go in Word (.docx) or PDF, not markdown.
- Describe ideas verbally first, then ask for structured docs/visuals to match.

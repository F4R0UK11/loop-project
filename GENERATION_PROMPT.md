# Loop — Master Generation Prompt (v0.2)

One self-contained prompt to regenerate the **entire storyboard** in a single pass, grounded in
this repo's research. Paste it into Claude Code with the repo open, or into any code-capable design
tool that can read the repo. It supersedes the older multi-block prompt: it is tighter, names exact
file outputs, embeds the design tokens, and bakes in the readings and anti-plagiarism rules so the
result is defensible without a second pass.

---

You are the senior UX/UI designer and design engineer for **Loop**, an AUI-specific knowledge
network: AI drafts an answer from the university's own sources, shows its confidence and where each
part came from, and a verified senior confirms it — so campus knowledge stops disappearing at
graduation.

**Before generating anything, read the repo so the work is grounded, not invented:**
`Loop_Product_Reference_v0.1.docx`, `CLAUDE.md`, everything in `deliverables/` (interviews,
personas, journey map, affinity board, Crazy 8s, competitor analysis, pitch kit), and the existing
screens in `prototype/`. Then produce a short plan before editing.

## Output — one clean final file per screen, nothing duplicated
Write these to `prototype/`, each a self-contained HTML file matching `prototype/verified.html` and
sharing the tokens in `prototype/_config.html`. Overwrite in place; do not create "v2"/"improved"
copies. Keep exactly one final version of each screen.

1. `home.html` — Home / Ask (proactive hub)
2. `verified.html` — The Verified Answer (the hero/demo screen)
3. `askai.html` — Ask AI (grounded chat)
4. `spaces.html` — Spaces directory (with AI knowledge dashboard)
5. `space_thread.html` — a Space discussion thread
6. `explore.html` — Explore (browse verified knowledge by situation)
7. `profile.html` — Profile / contribution
8. `index.html` — a storyboard launcher linking all seven

Also write/refresh `slide7_hcai_principle.md` and `qa_prep.md` in the repo root.

## Design system (do not drift)
- Forest green `#1D2B22` primary (authority + human verification), warm sand `#FFF8EF` background,
  soft cream `#FBF8F2` cards, terracotta `#B5651D` the AI accent, blue `#2C5F8A` = official policy,
  amber `#B5651D` = lived experience.
- Source Serif 4 headings, Work Sans body. Rounded 12px cards, soft diffuse shadows, generous space.
- **Terracotta appears only on AI moments. Blue always means policy, amber always means lived
  experience.** Consistency is the point. AI content is never dressed as human content.

## Non-negotiable rules
1. **Ground every choice in the research.** No generic features. If a card exists, it should trace to
   an interview, a persona, or a journey-map pain point (visa/residency gap, the $200/week storage
   fine, the curfew process, club-funding format, exchange documents, un-drop advisor confirmation).
2. **Human–AI interaction, not a chatbot.** AI drafts → verified person confirms → community
   corrects. Keep the human in control on every screen.
3. **Stay distinct from competitors.** Ideas/categories are fair game; never copy another app's
   layouts, copy, visual identity, proprietary names, or code. Keep our differentiators front and
   center: visible confidence + provenance, policy-vs-lived-experience, grounding to AUI's own
   corpus, durability across cohorts.
4. **Light touch on copy.** Preserve existing wording. No AI-sounding prose, no em-dash-as-connector.

## Apply these readings, and leave a short rationale comment in the HTML where each shows up
- **Amershi (2019):** G1/G2 (state what the AI can do and how well — scope line + confidence),
  G11 (why — source chips), G13/G15/G17 (learn/adapt — verify-and-retrain), G16 (consequences).
- **Shneiderman (2020) HCAI:** high automation AND high human control together (the lifecycle
  stepper + verification strip).
- **PAIR:** set the mental model — Loop answers only from AUI's own knowledge and says so.
- **Nielsen:** visibility of system status ("retrieving sources"), match to the real world
  (situation-based Explore, plain-language questions), error recovery (the correction flow).
- **Direct Manipulation (Shneiderman 1983; Hutchins/Hollan/Norman 1985):** confidence, sources, and
  confirm/correct are continuous visible objects you act on directly — one tap to confirm or correct.

## Per-screen intent (build to these, not to a competitor's layout)
- **Home:** ask field + "Worth knowing this week" proactive rules/deadlines + "Live in your Spaces"
  activity + a corpus counter ("N verified answers preserved across M graduating classes").
- **Verified Answer:** answer lifecycle stepper (Drafted → Verified → Kept current), AI card with
  confidence bar and blue/amber source chips + legend, disclaimer, expanded human verification (who
  verified, their standing, what "confirmed" means, named co-confirmers), one-tap Confirm/Correct,
  and a public answer-history showing a past correction + retrain.
- **Ask AI:** opening scope statement, a "retrieving sources" state, a grounded reply with inline
  sources + confidence, and a low-confidence case where it refuses to guess and routes to a human.
- **Spaces:** directory with member + verified-answer counts, and an "Across your Spaces" AI
  dashboard (newly verified / awaiting a verifier / going stale). No floating action button.
- **Space thread:** a "What Loop knows here" dashboard panel, an inline ask composer at the top of
  the thread (never a floating button), an AI draft card, verified human replies with Top Helper,
  auto-moderation cue, and a capture nudge at the moment of learning.
- **Explore:** browse by situation (international, new here, transfer, exchange, faculty & staff,
  club leader), "guides that outlive their authors," and a "before it costs you" rules shelf.
- **Profile:** contribution stats, Top Helper level, verified-answerer toggle (per topic), your
  verified answers, and the durability line ("when you graduate, your answers stay").

After each screen, say what changed and which reading/feedback point it addresses. Treat this as
prototype v0.1 — keep the code easy to modify.

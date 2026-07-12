Loop — Product Reference (Prototype v0.1)
Institutional Knowledge Doesn't Scale — AUI UI/UX Bootcamp
Draft — expected to change. This document describes a first-pass prototype, not a finished product. Screen details, feature scope, naming, copy, and the visual system are all placeholders the team will revise as the concept develops. Nothing here is locked. It exists to (a) capture the current direction in one place and (b) give us a clear, honest basis for comparing against similar apps.
1. What Loop is, in one line
An AUI-specific knowledge network where AI drafts an answer from the university's own sources, shows its confidence and where each part came from, and a verified senior confirms it — so campus knowledge stops disappearing at graduation.
Built for AUI first, applicable anywhere. We use AUI as our concrete starting case, but the same model fits any community or organization where hard-won knowledge lives in people and leaves when they go — another university, a company or office, a club, or a professional community. The product is designed around AUI's real sources now, and the approach generalizes to any group's own handbook, history, and verified members.
2. The problem it exists for
At AUI, the answers that actually matter live in people's heads and leave when they graduate. Official channels hold policy; peer channels hold practice; neither is durable, searchable, and trustworthy at the same time. This is the gap our interviews and affinity board established, and it is the thing Loop is built to close.
Who it's for: not just freshmen. Any AUI community member hitting an unfamiliar process for the first time — a transfer student, a third-year facing Add/Drop, a visiting professor relocating to Ifrane. This breadth is deliberate and is our edge over a freshmen-only approach.
3. The hero interaction (what makes Loop, Loop)
The Verified Answer loop. A user asks in plain language. The AI answers instantly from AUI's own knowledge (handbook plus real student history). The answer visibly shows how confident it is and color-codes each source — blue for official policy, amber for lived experience. A verified senior or staff member confirms or corrects it in one tap, and that confirmation retrains the model so the next person gets a better answer instantly.
Why this is the one thing we pitch: it shows the AI, the social layer, the trust system, and continuous learning in a single screen — and it is the one thing neither the official portal nor a generic chatbot can do.
4. What's in the prototype (six screens)
These are the current screens. Treat all specifics — layout, labels, sample questions — as placeholders.
Screen 1 — Home / Ask
Opens with a short thesis line ("Ask AUI anything. Get a verified answer."), a large ask field, quick topic chips (Registration, Housing, Exchange, Campus), and an "Answered for you" list showing recent questions tagged Verified, with policy/experience markers.
Screen 2 — The Verified Answer (the demo screen)
The hero. AI answer card with a visible confidence score, a labelled confidence bar, and blue/amber source chips with a legend; a disclaimer that AI can be wrong; thumbs and "Suggest a correction"; then a human verification strip ("Confirmed by Sidra M., Senior") and a line making the learning loop concrete.
Screen 3 — Ask AI (conversational, grounded)
A chat view where the AI first states its own scope ("I answer using AUI's handbook and real student history. I don't guess about things I haven't seen."), shows inline sources and confidence on replies, and offers suggested prompts.
Screen 4 — Spaces (the community layer)
A directory of topic communities (Housing, Software Systems Eng., Business, Exchange & Study Abroad, International Students, Faculty & Staff) with member counts and last-active labels, plus search and create.
Screen 5 — A Space / discussion thread
A question thread showing an AI draft answer (with confidence + sources) alongside human replies — one carrying a verified badge and a rewards marker (Top Helper) — with an auto-moderation cue in the header and an "Ask in this Space" action.
Screen 6 — Profile / contribution
The user's role, contribution stats, a helper-level progress bar (rewards), a "verified answerer for" toggle, and a list of their verified answers.
5. The design system (placeholder, but intentional)
	•	Palette: forest green (primary), warm sand (background), terracotta (the AI accent), with blue and amber reserved for policy vs. experience.
	•	Type: Source Serif 4 for headings, Work Sans for body.
	•	Rule we follow: terracotta owns every AI moment; blue always means official policy, amber always means lived experience. This consistency is the point, not decoration.
6. How Loop stays its own thing
These are the mechanics to point to if anyone asks how Loop differs from a similar community or Q&A app. None of them is "a group chat with anonymity."
	•	AI-drafted, human-verified, self-retraining loop. An AI answer and a human confirmation are fused into one artifact, and the confirmation feeds learning. Most social Q&A apps have people answer people; Loop has the model draft and a verified person ratify.
	•	Confidence + provenance on every answer. A visible confidence bar and source chips — a transparency stance, not a feature most community apps have.
	•	Policy vs. lived experience as a first-class distinction. Separating what the handbook says from what actually happens at the office is our own research insight encoded into the UI.
	•	Grounded to AUI's own corpus. Loop answers only from the handbook and real AUI history, and says so; it explicitly does not behave like a general chatbot.
	•	Durability is the goal. The product exists to survive graduating cohorts — capture at the moment of learning — the opposite of a feed that scrolls away.
	•	Human stays in control. AI drafts, a verified person confirms, the community corrects.
7. Staying clear of plagiarism (practical guardrails)
Ideas and categories can't be plagiarized. Anonymous campus Q&A, topic communities, reward systems — these are common patterns; we don't need to avoid a feature just because another app has it.
What we must not copy is specific expression: another app's exact screen layouts, its wording/copy, its visual identity, its proprietary naming, or any of its code or assets. We keep our own research, our own screens, our own design system, and our own naming (our "Spaces" is fine — we won't rename features to match anyone else's).
8. Known open questions (things we'll likely change)
Listing these now so the draft status is explicit:
	•	Feature scope may shrink for a real MVP — the six screens show the vision, not a committed build list.
	•	Naming ("Loop," "Spaces," section labels) is provisional.
	•	The rewards/verification mechanics need real rules (who becomes a verified answerer, how confirmations are weighted).
	•	The "retraining" story is a concept direction; the actual data/feedback pipeline is not designed yet.
	•	Copy and sample questions are placeholders and will be rewritten with real AUI cases.

Status: prototype v0.1 — for internal alignment and competitor comparison. Everything here is open to change.

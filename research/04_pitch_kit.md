Assignment 4 — Prototype Pitch Kit
Institutional Knowledge Doesn't Scale — AUI UI/UX Bootcamp
This kit contains three things: (1) the one-line strategy and hero interaction, (2) a complete copy-paste Google Stitch prompt engineered to produce the full prototype in a single generation, and (3) a 2-minute pitch script mapped to the assigned readings.

1. The Strategy in One Breath
Product name (working): Loop — the AUI knowledge network that never forgets.
The problem: At AUI, the answers that actually matter live in people's heads and leave when they graduate. Official channels hold policy; peers hold practice; neither is durable, searchable, or trustworthy at the same time.
Who it's for: Not just freshmen. Any AUI community member hitting an unfamiliar process for the first time — a transfer student, a third-year facing Add/Drop, a visiting professor relocating to Ifrane. (This is our edge over the other team, who scope only to freshmen.)
The one hero interaction (this is what we pitch)
The Verified Answer loop. A user asks a question in plain language. The AI answers instantly — but not like ChatGPT. It answers from AUI's own knowledge (the handbook plus real history from Facebook groups, WhatsApp, and Reddit), and every answer visibly shows three things: how confident it is, where each piece came from, and whether it's official policy or lived student experience. A verified senior or staff member can then confirm or correct it in one tap — and that confirmation trains the model, so the same question is answered better forever.
Why this one interaction wins the pitch: it demonstrates the AI, the social layer, the trust system, and continuous learning in a single screen — and it is the one thing neither the official portal nor a generic chatbot can do.

2. The Google Stitch Prompt (copy-paste, one shot)
Paste everything in the shaded block below into Google Stitch as a single prompt. It is written to Stitch's strengths: named screens, component-level detail, explicit visual system, and defined states. When Stitch asks to confirm the multi-screen flow, say yes.

  Design a mobile app called "Loop" — an AUI-specific knowledge
  network where students, faculty, and staff get trustworthy,
  verified answers to real campus questions. iOS mobile, 390px width.

  === VISUAL SYSTEM (apply to every screen) ===
  - Palette: deep forest green #1D2B22 (primary), warm sand #EFE7D6
    (background), terracotta #B5651D (accent/CTA), soft cream #FBF8F2
    (cards), muted olive #2F4538 (secondary).
  - Typography: serif for headings (Georgia-like), clean sans-serif
    for body. Generous white space, calm and academic, not techy.
  - Style: friendly, trustworthy, rounded cards with subtle shadows,
    12px radius. Feels like a well-designed university product, not a
    social media clone.
  - Every AI element must look distinct from human content: AI
    responses sit in a bordered card with a small spark/star icon and
    a confidence bar; human posts are plain cards with avatars.

  === SCREEN 1: HOME / ASK (the hero screen) ===
  - Top bar: "Loop" wordmark left, profile avatar right.
  - A large, inviting search/ask field as the centerpiece:
    placeholder "Ask anything about AUI — a rule, a deadline, a place…"
    with a terracotta "Ask" button.
  - Below it, four quick-tag chips: "Registration", "Housing",
    "Exchange", "Campus".
  - Section "Answered for you" showing 2 recent community questions
    as cards, each with question text, a green "Verified" badge, and
    answerer count.
  - Bottom navigation (5 items): Ask (home), Explore, Ask AI, Spaces,
    Profile.

  === SCREEN 2: THE VERIFIED ANSWER (most important screen) ===
  This is the key interaction — make it the most polished screen.
  - Header shows the user's question: "Do I need advisor confirmation
    to un-drop a course?"
  - An AI ANSWER CARD (bordered, cream, with a small spark icon and
    label "AUI AI"):
     * The answer text, concise.
     * A CONFIDENCE BAR labeled "Confidence: High (92%)".
     * SOURCE CHIPS under the answer: "Student Handbook p.14"
       (blue = official policy) and "Facebook: Add/Drop group"
       (amber = lived experience). Policy and experience are visibly
       color-coded and separated.
     * A one-line disclaimer: "AI can be wrong — a verified member
       confirms answers below."
  - A VERIFICATION STRIP directly beneath: green checkmark avatar
    "Confirmed by Sidra M., Senior · did this exact process" plus a
    timestamp "verified 2 days ago". Show 1 confirmer and a
    "+3 confirmed" pill.
  - Two feedback affordances on the AI card: thumbs up / thumbs down
    and a small "Suggest a correction" text link.
  - A subtle footer line: "Your feedback trains Loop for the next
    person."

  === SCREEN 3: ASK AI (conversational, but grounded) ===
  - A chat interface. First AI message states its scope explicitly:
    "I answer using AUI's handbook and real student history. I don't
    guess about things I haven't seen." (sets expectations)
  - One user bubble and one AI reply that again shows inline source
    chips and a confidence tag.
  - Above the input: three suggested prompt chips ("What's the
    attendance policy?", "How does exchange work?", "Where is my
    class?").
  - Input field with a mic icon and send button.

  === SCREEN 4: SPACES (the social layer) ===
  - A directory of topic communities ("Spaces") as cards: Housing,
    Software Systems Eng., Business, Exchange & Study Abroad,
    International Students, Faculty & Staff.
  - Each card: icon, name, member count, and last-active label.
  - A search bar at top and a "Create a Space" button.

  === SCREEN 5: A SPACE / DISCUSSION THREAD ===
  - Header: "Exchange & Study Abroad" with member count and a join
    button.
  - A list of question threads. The top thread expanded to show:
    the question, an AI draft answer card (with confidence + sources),
    and two human replies with avatars, one carrying a green Verified
    badge and an upvote count.
  - A reward hint on the verified answerer: a small "Top Helper"
    badge and points count (e.g. "+15").
  - Floating "Ask in this Space" button.

  === SCREEN 6: PROFILE / CONTRIBUTION ===
  - User avatar, name, role ("3rd year · Software Systems Eng.").
  - Stats row: Questions asked, Answers given, People helped.
  - A "Helper level" progress bar with a badge (rewards system).
  - A toggle "Verified answerer for: Exchange, Registration" showing
    the user can be a trusted source.
  - A list "Your verified answers" with 2 entries.

  === FUNCTIONAL STATES to include where natural ===
  - Show the AI answer card in a brief "thinking / retrieving
    sources…" loading state as a small variant.
  - Show one empty state (a Space with no questions yet) with a
    friendly prompt to ask the first question.
  - Moderation cue: a small shield icon note "Auto-moderated for
    safety" in the Space header.

  Generate all six screens as one coherent flow with the shared
  visual system. Prioritize polish on Screen 2 (The Verified Answer).

Tip: if Stitch outputs only some screens, generate Screen 2 first on its own (paste just that block), get it perfect, then generate the rest. Screen 2 is the one you actually demo.

3. Why This Lands With a BCG / IDEO Panel (the readings)
Every design choice above traces to an assigned reading. If a judge asks "why did you design it that way?", here is your answer — say these out loud in the Q&A.
Amershi et al. (2019) — Guidelines for Human-AI Interaction
	•	G1 & G2 (make clear what the system can do / how well): the Ask AI intro line states its scope, and every answer shows a confidence score. We tell users up front where the AI is strong and that it can be wrong.
	•	G11 (make clear why the system did what it did): source chips show exactly where each answer came from — handbook vs. Facebook — so the AI is explainable, not a black box.
	•	G15 (encourage granular feedback) & G13/G17 (learn from behavior, update and adapt): thumbs and "suggest a correction" feed the model; verified confirmations retrain it. This is the continuous-learning loop, made visible.
	•	G16 (convey consequences of user actions): "Your feedback trains Loop for the next person" tells users their action matters.
Shneiderman (2020) — who is in control?
Our answer is explicit: the human stays in control. The AI drafts, but a verified person confirms, and the community can always correct. High automation and high human oversight at once — the top-right quadrant Shneiderman argues for. Say this sentence in the pitch; it's the framing the discussion is anchored on.
Nielsen — 10 Usability Heuristics
	•	Visibility of system status: the "retrieving sources…" state and the confidence bar.
	•	Match between system and real world: questions are asked in plain language, organized by real student situations, not database categories.
	•	Help users recognize, diagnose, recover: the correction flow and human verification catch AI errors gracefully.
Shneiderman (1983) & Hutchins/Hollan/Norman (1985) — Direct Manipulation
The source chips, confidence bar, and one-tap verify are continuous, visible objects you act on directly — not hidden commands. This narrows the Gulf of Evaluation (you can see at a glance how trustworthy an answer is) and the Gulf of Execution (confirming or correcting is a single physical tap). That's the theory behind why the interaction feels effortless.

4. Your 2-Minute Pitch Script (practice once out loud)
Strict two minutes. Have Screen 2 open before class starts. Roughly 320 words — read at a calm pace, it lands just under 2:00.
0:00 — Hook (the problem)
"At AUI, the answer you actually need is almost never on the portal. It's in someone's head — a senior who's done exchange, a professor who knows the real Add/Drop trick. And when they graduate, it's gone. Every year, the whole campus relearns the same things from zero."
0:25 — The idea
"We built Loop: an AUI knowledge network that never forgets. And it's not just for freshmen — a transfer student, a third-year, even a visiting professor relocating to Ifrane all hit the same wall. Loop is for anyone facing something for the first time."
0:45 — The hero interaction (show Screen 2)
"Here's the one thing that makes it worth building. I ask a real question — 'Do I need advisor confirmation to un-drop a course?' Loop answers instantly. But look closely: it's not guessing like a generic chatbot. It answers from AUI's own knowledge — our handbook, and years of real Facebook and WhatsApp history. And it shows its work: how confident it is, and exactly where each part came from — blue for official policy, amber for lived student experience."
1:20 — Trust + learning
"Then a verified senior who actually did this confirms it in one tap. That confirmation does two things: you now trust the answer, and it trains the AI so the next person gets an even better answer. The human stays in control; the AI just makes them scale."
1:45 — Close (the readings, said plainly)
"That's the whole thesis. Amershi says: show what the AI can do, make it explainable, learn from feedback — that's the confidence bar and the sources. Shneiderman asks who's in control — for us, always the human. That's Loop."

Final checklist before you walk in
	•	Laptop charged, Stitch prototype open to Screen 2.
	•	Practiced out loud at least once, timed under 2:00.
	•	One sentence ready for each reading in case of Q&A (Section 3).
	•	Know your one line: "An AUI knowledge network that never forgets — where AI drafts and a verified human confirms."

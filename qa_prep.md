# Q&A Prep — Loop

Tight, defensible answers. Say them plainly.

## 1. Why this HMW statement over others?
**"How might we preserve and surface the institutional knowledge that leaves AUI when people graduate?"**

We tested narrower framings and dropped them:
- *"HMW help freshmen find answers"* — too small. Our interviews showed the wall gets hit at every stage: a third-year at Add/Drop, an international student at residency renewal, a visiting professor relocating to Ifrane. Scoping to freshmen throws away most of the problem and our edge over the other team.
- *"HMW make a better campus chatbot"* — wrong problem. The gap isn't a lack of answers, it's that the true answers live in people and aren't trustworthy, searchable, and durable at once.

Our HMW names the actual leverage point the journey map found: knowledge decays at graduation, and the fix is to capture it at the moment of learning. Every screen traces back to that sentence.

## 2. What did user testing actually change?
Concrete changes, not cosmetic:
- **Killed the floating "Ask in this Space" button.** A tester said floating action buttons read as dated. We moved asking to an inline composer pinned at the top of each thread, where the question actually belongs.
- **Home was an empty search box.** Testers didn't know what Loop *had*. We added "Worth knowing this week" (proactive rules like the dorm-storage fine) and "Live in your Spaces," so the value is visible before you type.
- **Verification looked like a single checkmark.** We rebuilt it into a credible authenticator: who verified, their standing, what "confirmed" actually means, named co-confirmers, and a visible correction history.
- **Explore was a generic feed.** We reorganized it by situation (international, transfer, exchange, faculty) because people arrive as "I'm new here," not as database categories.

## 3. The AI dimension — what happens when the model returns a wrong answer? Walk through the UI.
Two paths, both keep the human in control:

**Path A — it's a draft that's wrong.** On any answer, the AI output is marked as a draft with a visible confidence bar and source chips (Ask AI, and the AI draft card inside a Space thread). A verified answerer taps **Correct it** instead of Confirm, edits the answer, and it re-publishes as verified. The **answer history** on `verified.html` shows exactly this: the first AI draft said email approval was enough; a Registrar-office member corrected it to the in-person signed slip; Loop retrained, and every answer since shows the correct step. The error is public and recoverable, not hidden.

**Path B — it would be guessing.** On `askai.html`, when the model has no verified basis, it does **not** answer. It says "I haven't seen a verified answer for this yet, so I won't guess," and routes the user to a verified member in the relevant Space. Refusing to guess is a designed state, not a failure.

## 4. Which Amershi guideline did we deliberately not fully follow, and why?
**G15 — "Encourage granular feedback."** Amershi says let users give rich, detailed feedback on the AI. We deliberately kept feedback minimal: thumbs up/down and one "Suggest a correction" link, nothing more granular for the average user.

Why: our research found the core barrier is the **social cost of asking and contributing** (the "second-impression problem," the status pressure of asking again). A heavy feedback UI would tax exactly the people we need to keep contributing. So we concentrated real granular feedback where it's earned and credible — the verified answerer's Confirm/Correct — and kept it light for everyone else. We traded some of G15 to protect low-friction participation, which our interviews said matters more.

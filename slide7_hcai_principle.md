# Slide 7 — Human-Centered AI Principle

**Our pick: Shneiderman (2020), HCAI — high automation *and* high human control at the same time.**

## 1. What the principle says (plain language)
Good AI does not force a choice between a capable machine and a person in charge. The best systems sit in the top-right corner: the AI does a lot of work, and the human keeps a lot of control. Automation and oversight go up together, not one instead of the other.

## 2. Where it shows up in our design
The Verified Answer screen (`prototype/verified.html`) — the answer lifecycle stepper and the human verification strip, side by side with the AI answer card.

## 3. How we implemented it
- We gave the AI answer and the human confirmation **equal visual weight**. The AI drafts instantly (high automation); a named verified senior confirms or corrects it in one tap (high control). Neither is a footnote to the other.
- We added an **answer lifecycle stepper**: Drafted by AI → Human verified → Kept current. It makes the "who is in control" question answerable at a glance — the human ratifies every answer, and the record stays watched.
- We made control **concrete and one-tap**: Confirm / Correct buttons act directly on the answer object, and a public **answer history** shows a real case where the AI was wrong and a human corrected it. The machine proposes; the human disposes; the correction retrains the model.
- We deliberately **did not** let the AI auto-publish an answer as final. It stays a draft, clearly marked, until a person stands behind it. That restraint is the principle in action.

## Why this is the strongest choice for Loop
Our entire thesis *is* the two-axis argument. A generic chatbot is high-automation, low-control. The old mentor network is high-control, low-automation. Loop is the top-right quadrant made into a product: the AI scales the senior, the senior keeps the AI honest. Amershi and PAIR describe good tactics we also use, but Shneiderman names the single idea the whole pitch turns on — so it is the one principle to defend on stage.

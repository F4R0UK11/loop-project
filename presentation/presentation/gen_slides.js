// Generates the 12 HTML slides for the Loop final presentation.
const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, 'slides');
fs.mkdirSync(out, {recursive: true});

const C = {
  sand: '#FFF8EF', cream: '#FBF8F2', cream2: '#F5EEE1',
  forest: '#1D2B22', deep: '#12211A', ink2: '#586359', ink3: '#8b948a',
  ai: '#B5651D', aiTint: '#F7ECDF',
  policy: '#2C5F8A', policyTint: '#E8EFF5',
  lived: '#B8862A', livedTint: '#F5EDDA',
  ver: '#2F6D4A', verTint: '#E6F0E7',
  onDark: '#EDE7DA', onDark2: '#a9b3a6',
};

const base = `
html { background: #ffffff; }
body { width: 720pt; height: 405pt; margin: 0; padding: 0; display: flex; font-family: Arial, Helvetica, sans-serif; background: ${C.sand}; }
h1,h2,h3,p,ul,ol { margin: 0; }
.eyebrow { font-size: 10pt; font-weight: bold; letter-spacing: 3px; color: ${C.ai}; }
.eyebrow-dark { font-size: 10pt; font-weight: bold; letter-spacing: 3px; color: ${C.onDark2}; }
.serif { font-family: Georgia, 'Times New Roman', serif; }
`;

const w = (name, body, extra = '') =>
  fs.writeFileSync(path.join(out, name), `<!DOCTYPE html><html><head><style>${base}${extra}</style></head><body>${body}</body></html>`);

// ---------- 01 · TITLE ----------
w('s01.html', `
<img src="/tmp/loop-pres-assets/title_bg.png" style="position:absolute; left:0; top:0; width:720pt; height:405pt;">
<div style="position:absolute; left:44pt; top:52pt; width:360pt;">
  <p class="eyebrow-dark">INSTITUTIONAL KNOWLEDGE DOESN'T SCALE · AUI UI/UX BOOTCAMP</p>
  <h1 class="serif" style="font-size:88pt; color:${C.onDark}; margin-top:14pt;">Loop</h1>
  <p class="serif" style="font-size:17pt; line-height:1.45; color:${C.onDark}; margin-top:10pt;">The AUI knowledge network<br>that never forgets.</p>
  <p style="font-size:10pt; color:${C.onDark2}; margin-top:26pt; letter-spacing:1px;">FAROUK &nbsp;·&nbsp; MANAL &nbsp;·&nbsp; HAYTAM &nbsp;·&nbsp; ANASS</p>
  <p style="font-size:9pt; color:${C.onDark2}; margin-top:6pt;">Final presentation · July 2026</p>
</div>
`);

// ---------- 02 · PROBLEM ----------
w('s02.html', `
<div style="margin:40pt 44pt; width:632pt;">
  <p class="eyebrow">01 — THE PROBLEM</p>
  <div style="width:340pt; margin-top:14pt;">
    <h1 class="serif" style="font-size:27pt; line-height:1.28; color:${C.forest};">The answers that matter at AUI live in people's heads — and leave when they graduate.</h1>
    <p style="font-size:11.5pt; line-height:1.55; color:${C.ink2}; margin-top:14pt;">Official channels hold policy. Peers hold practice. Neither is durable, searchable, and trustworthy at the same time. So every year, the whole campus relearns the same things from zero.</p>
    <p style="font-size:11pt; line-height:1.5; color:${C.forest}; margin-top:16pt;"><b>It's not just freshmen:</b> a transfer at Add/Drop, an international student at residency renewal, a visiting professor relocating to Ifrane — anyone facing a process for the first time.</p>
  </div>
</div>
<div style="position:absolute; left:412pt; top:74pt; width:264pt;">
  <div style="background:${C.cream}; border-left:4pt solid ${C.policy}; border-radius:6pt; padding:12pt 14pt; box-shadow:1px 2px 6px rgba(29,43,34,0.08);">
    <p style="font-size:10.5pt; line-height:1.45; color:${C.forest};"><b>A wasted visa trip.</b> The website listed the documents. The office wanted something different in person.</p>
  </div>
  <div style="background:${C.cream}; border-left:4pt solid ${C.ai}; border-radius:6pt; padding:12pt 14pt; margin-top:12pt; box-shadow:1px 2px 6px rgba(29,43,34,0.08);">
    <p style="font-size:10.5pt; line-height:1.45; color:${C.forest};"><b>A 200 MAD/week fine.</b> A storage rule nobody explained — discovered only after it was broken.</p>
  </div>
  <div style="background:${C.cream}; border-left:4pt solid ${C.ver}; border-radius:6pt; padding:12pt 14pt; margin-top:12pt; box-shadow:1px 2px 6px rgba(29,43,34,0.08);">
    <p style="font-size:10.5pt; line-height:1.45; color:${C.forest};"><b>Questioned at the gate.</b> Leaving campus late needs a signed process. New students learn it the hard way, every semester.</p>
  </div>
  <p style="font-size:8.5pt; color:${C.ink3}; margin-top:10pt;">Three real costs, from our interviews — not hypotheticals.</p>
</div>
`);

// ---------- 03 · RESEARCH ----------
w('s03.html', `
<div style="margin:40pt 44pt; width:632pt;">
  <p class="eyebrow">02 — RESEARCH</p>
  <div style="width:250pt; margin-top:14pt;">
    <h1 class="serif" style="font-size:22pt; line-height:1.3; color:${C.forest};">Six interviews.<br>One repeating loop.</h1>
    <p style="font-size:10.5pt; line-height:1.5; color:${C.ink2}; margin-top:12pt;">Students from 2nd to 4th year: a club president, a student mentor, an international student, an exchange veteran. Plus an affinity board and a six-stage journey map built from their stories.</p>
    <p style="font-size:10.5pt; line-height:1.6; color:${C.forest}; margin-top:12pt;"><b>What we learned:</b></p>
    <ul style="font-size:10pt; line-height:1.55; color:${C.ink2}; margin-top:4pt; padding-left:12pt;">
      <li>Official channels fall short even when you go there first</li>
      <li>The real answer lives in one specific person who did it</li>
      <li>Writing it down isn't enough — nobody finds the doc</li>
    </ul>
  </div>
</div>
<div style="position:absolute; left:322pt; top:66pt; width:354pt;">
  <div style="background:${C.forest}; border-radius:8pt; padding:14pt 16pt;">
    <p class="serif" style="font-size:12pt; line-height:1.5; color:${C.onDark}; font-style:italic;">"There's a gap between the policy and the practice, and nobody owns fixing that gap."</p>
    <p style="font-size:8.5pt; color:${C.onDark2}; margin-top:7pt; letter-spacing:1px;">MEHDI — 3RD YEAR, INTERNATIONAL · AFTER A WASTED VISA TRIP</p>
  </div>
  <div style="background:${C.cream}; border:1px solid rgba(29,43,34,0.14); border-radius:8pt; padding:14pt 16pt; margin-top:11pt;">
    <p class="serif" style="font-size:12pt; line-height:1.5; color:${C.forest}; font-style:italic;">"It is a little strange that I'm doing the university's job for them — informally, for free."</p>
    <p style="font-size:8.5pt; color:${C.ink3}; margin-top:7pt; letter-spacing:1px;">HAMZA — SENIOR, CLUB PRESIDENT · ANSWERS THE SAME QUESTION EVERY YEAR</p>
  </div>
  <div style="background:${C.cream}; border:1px solid rgba(29,43,34,0.14); border-radius:8pt; padding:14pt 16pt; margin-top:11pt;">
    <p class="serif" style="font-size:12pt; line-height:1.5; color:${C.forest}; font-style:italic;">"You can't really trust people. I go to AI first."</p>
    <p style="font-size:8.5pt; color:${C.ink3}; margin-top:7pt; letter-spacing:1px;">HAMZA — JUNIOR, STUDENT MENTOR · BURNED BY A FALSE SCHOLARSHIP RUMOR</p>
  </div>
</div>
`);

// ---------- 04 · INSIGHT ----------
w('s04.html', `
<div style="position:absolute; left:0; top:0; width:720pt; height:405pt; background:${C.deep};"></div>
<div style="position:absolute; left:60pt; top:52pt; width:600pt;">
  <p class="eyebrow">03 — THE INSIGHT</p>
  <p class="serif" style="font-size:21pt; line-height:1.4; color:${C.onDark2}; margin-top:16pt;">The instant someone learns the real answer is exactly when it should be captured for the next person —</p>
  <p class="serif" style="font-size:21pt; line-height:1.4; color:${C.onDark}; margin-top:4pt;">instead of relying on them to informally become "the source."</p>
  <div style="width:600pt; border-top:1px solid rgba(237,231,218,0.25); margin-top:24pt; padding-top:22pt;">
    <p style="font-size:9.5pt; font-weight:bold; letter-spacing:3px; color:${C.ai};">HOW MIGHT WE</p>
    <p class="serif" style="font-size:24pt; line-height:1.35; color:#FFFFFF; margin-top:10pt;">…preserve and surface the institutional knowledge that leaves AUI when people graduate?</p>
    <p style="font-size:10pt; color:${C.onDark2}; margin-top:14pt;">The reframing that unlocked everything: not "help freshmen find answers" — help <span style="color:${C.onDark}; font-weight:bold;">anyone facing something for the first time</span>, and make the answer outlive its author.</p>
  </div>
</div>
`);

// ---------- 05 · DESIGN DIRECTION ----------
w('s05.html', `
<div style="margin:40pt 44pt; width:632pt;">
  <p class="eyebrow">04 — DESIGN DIRECTION</p>
  <div style="width:300pt; margin-top:14pt;">
    <h1 class="serif" style="font-size:22pt; line-height:1.3; color:${C.forest};">Design for the confused community member — not just the freshman.</h1>
    <p style="font-size:10.5pt; line-height:1.55; color:${C.ink2}; margin-top:12pt;">The core need: <b style="color:${C.forest}">a fast, accurate answer to a timely question — without needing to know the right person.</b></p>
    <p style="font-size:10.5pt; line-height:1.6; color:${C.forest}; margin-top:14pt;"><b>Why this direction over the alternatives:</b></p>
    <ul style="font-size:10pt; line-height:1.6; color:${C.ink2}; margin-top:4pt; padding-left:12pt;">
      <li><b>Not a WhatsApp group or feed</b> — history gets buried, membership resets yearly</li>
      <li><b>Not a generic chatbot</b> — confident answers, wrong about local practice</li>
      <li><b>Not freshmen-only</b> — the wall gets hit at every stage of an AUI career</li>
    </ul>
  </div>
</div>
<div style="position:absolute; left:372pt; top:66pt; width:304pt;">
  <div style="background:${C.cream}; border:1px solid rgba(29,43,34,0.14); border-radius:8pt; padding:16pt 18pt; box-shadow:1px 3px 10px rgba(29,43,34,0.08);">
    <p style="font-size:8.5pt; font-weight:bold; letter-spacing:2px; color:${C.ver};">PRIMARY PERSONA</p>
    <p class="serif" style="font-size:17pt; color:${C.forest}; margin-top:6pt;">Yassine — "the confused / lost community member"</p>
    <p class="serif" style="font-size:10.5pt; font-style:italic; color:${C.ink2}; margin-top:8pt; line-height:1.5;">"I just didn't know I needed to register my car with campus security."</p>
    <p style="font-size:9.5pt; line-height:1.55; color:${C.ink2}; margin-top:10pt;">Student or faculty. Needs one low-friction place to ask, and a current answer <b>without an existing network</b>. Frustration: info exists somewhere — scattered across portal, offices, and people's heads.</p>
  </div>
  <p style="font-size:9pt; color:${C.ink3}; margin-top:9pt; line-height:1.5;">Pressure-tested with Salma (the mentor who answers the same 3 questions) and Karim (visiting professor — no student network at all).</p>
</div>
`);

// ---------- 06 · PROTOTYPE HERO ----------
w('s06.html', `
<div style="margin:36pt 0 0 44pt; width:250pt;">
  <p class="eyebrow">05 — THE PROTOTYPE</p>
  <h1 class="serif" style="font-size:21pt; line-height:1.3; color:${C.forest}; margin-top:12pt;">The Verified Answer — the one interaction worth building.</h1>
  <div style="margin-top:12pt; background:${C.aiTint}; border-radius:6pt; padding:9pt 11pt;">
    <p style="font-size:9.5pt; line-height:1.45; color:${C.forest};"><b style="color:${C.ai}">1 · AI drafts</b> from AUI's own corpus — handbook + verified community answers</p>
  </div>
  <div style="margin-top:7pt; background:${C.cream2}; border-radius:6pt; padding:9pt 11pt;">
    <p style="font-size:9.5pt; line-height:1.45; color:${C.forest};"><b>2 · Shows its work</b> — confidence score, blue = policy, amber = lived experience</p>
  </div>
  <div style="margin-top:7pt; background:${C.verTint}; border-radius:6pt; padding:9pt 11pt;">
    <p style="font-size:9.5pt; line-height:1.45; color:${C.forest};"><b style="color:${C.ver}">3 · A verified human confirms</b> — one tap, with their name and standing</p>
  </div>
  <div style="margin-top:7pt; background:${C.cream2}; border-radius:6pt; padding:9pt 11pt;">
    <p style="font-size:9.5pt; line-height:1.45; color:${C.forest};"><b>4 · The confirmation retrains Loop</b> — the next person gets it instantly</p>
  </div>
  <p style="font-size:9pt; color:${C.ink3}; margin-top:10pt; line-height:1.45;">One artifact fuses the AI, the trust system, and the learning loop.</p>
</div>
<div style="position:absolute; left:318pt; top:36pt; width:366pt; height:254pt; border-radius:8pt; box-shadow:2px 6px 18px rgba(29,43,34,0.22);">
  <img src="/tmp/loop-pres-assets/verified_top.png" style="width:366pt; height:254pt; border-radius:8pt;">
</div>
<div style="position:absolute; left:318pt; top:300pt; width:366pt;">
  <p style="font-size:8.5pt; color:${C.ink3}; line-height:1.4;">The demo screen: question → lifecycle stepper (drafted → verified → kept current) → AI draft with confidence and color-coded sources.</p>
</div>
`);

// ---------- 07 · PROTOTYPE JOURNEY ----------
w('s07.html', `
<div style="margin:36pt 44pt 0 44pt; width:632pt;">
  <p class="eyebrow">05 — THE USER JOURNEY</p>
  <h1 class="serif" style="font-size:18pt; line-height:1.3; color:${C.forest}; margin-top:10pt; width:632pt;">Yassine's journey — warned early, answered fast, never stranded.</h1>
</div>
<div style="position:absolute; left:44pt; top:118pt;">
  <img src="/tmp/loop-pres-assets/m_01_home.png" style="width:130pt; height:250pt; border-radius:8pt; box-shadow:2px 5px 14px rgba(29,43,34,0.2);">
  <p style="font-size:9pt; color:${C.forest}; margin-top:8pt; width:130pt; line-height:1.4;"><b>Home.</b> Rules surface before they cost.</p>
</div>
<div style="position:absolute; left:206pt; top:118pt;">
  <img src="/tmp/loop-pres-assets/m_02_verified.png" style="width:130pt; height:250pt; border-radius:8pt; box-shadow:2px 5px 14px rgba(29,43,34,0.2);">
  <p style="font-size:9pt; color:${C.forest}; margin-top:8pt; width:130pt; line-height:1.4;"><b>Ask.</b> AI drafts, a human confirms.</p>
</div>
<div style="position:absolute; left:368pt; top:118pt;">
  <img src="/tmp/loop-pres-assets/m_05_thread.png" style="width:130pt; height:250pt; border-radius:8pt; box-shadow:2px 5px 14px rgba(29,43,34,0.2);">
  <p style="font-size:9pt; color:${C.forest}; margin-top:8pt; width:130pt; line-height:1.4;"><b>Spaces.</b> Drafts wait for a verifier.</p>
</div>
<div style="position:absolute; left:530pt; top:118pt;">
  <img src="/tmp/loop-pres-assets/m_06_explore.png" style="width:130pt; height:250pt; border-radius:8pt; box-shadow:2px 5px 14px rgba(29,43,34,0.2);">
  <p style="font-size:9pt; color:${C.forest}; margin-top:8pt; width:130pt; line-height:1.4;"><b>Explore.</b> Knowledge by situation.</p>
</div>
`);

// ---------- 08 · AI DIMENSION ----------
w('s08.html', `
<div style="margin:36pt 44pt 0 44pt; width:632pt;">
  <p class="eyebrow">06 — THE AI DIMENSION</p>
  <h1 class="serif" style="font-size:19pt; line-height:1.3; color:${C.forest}; margin-top:10pt;">High automation, high human control — at the same time.</h1>
</div>
<div style="position:absolute; left:44pt; top:104pt; width:306pt;">
  <div style="background:${C.cream}; border:1px solid rgba(29,43,34,0.14); border-radius:7pt; padding:10pt 12pt;">
    <p style="font-size:9.5pt; line-height:1.5; color:${C.forest};"><b style="color:${C.ai}">What the AI does.</b> Drafts answers only from AUI's corpus. States its scope. Never searches the public web.</p>
  </div>
  <div style="background:${C.cream}; border:1px solid rgba(29,43,34,0.14); border-radius:7pt; padding:10pt 12pt; margin-top:9pt;">
    <p style="font-size:9.5pt; line-height:1.5; color:${C.forest};"><b style="color:${C.ai}">How you know it's AI.</b> Terracotta + spark icon own every AI moment. AI content is never dressed as human.</p>
  </div>
  <div style="background:${C.cream}; border:1px solid rgba(29,43,34,0.14); border-radius:7pt; padding:10pt 12pt; margin-top:9pt;">
    <p style="font-size:9.5pt; line-height:1.5; color:${C.forest};"><b style="color:${C.ver}">When it's wrong.</b> Anyone suggests a correction → a verifier reviews → the answer is rewritten and retrained — publicly, in the answer history.</p>
  </div>
  <div style="background:${C.cream}; border:1px solid rgba(29,43,34,0.14); border-radius:7pt; padding:10pt 12pt; margin-top:9pt;">
    <p style="font-size:9.5pt; line-height:1.5; color:${C.forest};"><b style="color:${C.ver}">Who's in control.</b> Below 60% confidence it refuses to guess and routes you to a verified person — by design.</p>
  </div>
</div>
<div style="position:absolute; left:372pt; top:104pt; width:304pt;">
  <div style="border-radius:8pt; box-shadow:2px 5px 16px rgba(29,43,34,0.2); width:304pt; height:153pt;">
    <img src="/tmp/loop-pres-assets/askai_low.png" style="width:304pt; height:153pt; border-radius:8pt;">
  </div>
  <p style="font-size:9pt; color:${C.ink3}; margin-top:9pt; line-height:1.45;">The honest case, in the UI: 29% confidence on a legal-stakes question → "I'm not going to guess" → hand-off to Nadia at the International Programs office.</p>
  <div style="background:${C.aiTint}; border-radius:7pt; padding:9pt 11pt; margin-top:10pt;">
    <p style="font-size:9pt; line-height:1.45; color:#7a4a1a;"><b>Disclaimer on every answer:</b> "AI can be wrong. This draft was reviewed by a verified member before it appeared here."</p>
  </div>
</div>
`);

// ---------- 09 · HCAI PRINCIPLE ----------
w('s09.html', `
<div style="position:absolute; left:0; top:0; width:720pt; height:405pt; background:${C.deep};"></div>
<div style="position:absolute; left:60pt; top:44pt; width:600pt;">
  <p class="eyebrow">07 — HUMAN-CENTERED AI PRINCIPLE</p>
  <p class="serif" style="font-size:22pt; line-height:1.35; color:#FFFFFF; margin-top:12pt;">Shneiderman (2020): the best systems combine high automation with high human control.</p>
</div>
<div style="position:absolute; left:60pt; top:150pt; width:600pt;">
  <div style="background:rgba(255,255,255,0.06); border-radius:8pt; padding:13pt 16pt;">
    <p style="font-size:9pt; font-weight:bold; letter-spacing:2px; color:${C.ai};">WHAT IT SAYS</p>
    <p style="font-size:11pt; line-height:1.5; color:${C.onDark}; margin-top:5pt;">Don't choose between a capable machine and a person in charge — automation and oversight should go up together.</p>
  </div>
  <div style="background:rgba(255,255,255,0.06); border-radius:8pt; padding:13pt 16pt; margin-top:10pt;">
    <p style="font-size:9pt; font-weight:bold; letter-spacing:2px; color:${C.ai};">WHERE IT SHOWS UP</p>
    <p style="font-size:11pt; line-height:1.5; color:${C.onDark}; margin-top:5pt;">The Verified Answer screen: the answer lifecycle stepper (drafted → verified → kept current) and the human verification card, given equal weight to the AI card.</p>
  </div>
  <div style="background:rgba(255,255,255,0.06); border-radius:8pt; padding:13pt 16pt; margin-top:10pt;">
    <p style="font-size:9pt; font-weight:bold; letter-spacing:2px; color:${C.ai};">HOW WE IMPLEMENTED IT</p>
    <p style="font-size:11pt; line-height:1.5; color:${C.onDark}; margin-top:5pt;">One-tap Confirm / Correct as direct-manipulation objects; a public answer history where a student's correction retrained the model; and a deliberate omission — <b style="color:#FFFFFF">the AI can never auto-publish.</b> Every answer stays a draft until a person stands behind it.</p>
  </div>
</div>
`);

// ---------- 10 · WHAT WE TESTED ----------
w('s10.html', `
<div style="margin:36pt 44pt 0 44pt; width:632pt;">
  <p class="eyebrow">08 — WHAT WE TESTED</p>
  <h1 class="serif" style="font-size:19pt; line-height:1.3; color:${C.forest}; margin-top:10pt;">Concept feedback changed the design — four times.</h1>
</div>
<div style="position:absolute; left:44pt; top:106pt; width:306pt;">
  <div style="background:${C.cream}; border-left:4pt solid ${C.ai}; border-radius:6pt; padding:11pt 13pt;">
    <p style="font-size:9.5pt; line-height:1.5; color:${C.forest};"><b>"Floating buttons are dated."</b><br>Killed the floating Ask button → an inline composer at the top of each thread, where the question belongs.</p>
  </div>
  <div style="background:${C.cream}; border-left:4pt solid ${C.ai}; border-radius:6pt; padding:11pt 13pt; margin-top:11pt;">
    <p style="font-size:9.5pt; line-height:1.5; color:${C.forest};"><b>"Home feels empty."</b><br>An empty search box became a proactive hub: deadlines surfaced before they cost, live Space activity, the growing corpus.</p>
  </div>
</div>
<div style="position:absolute; left:372pt; top:106pt; width:306pt;">
  <div style="background:${C.cream}; border-left:4pt solid ${C.ver}; border-radius:6pt; padding:11pt 13pt;">
    <p style="font-size:9.5pt; line-height:1.5; color:${C.forest};"><b>"Verification looks like a checkmark."</b><br>Rebuilt as a credible authenticator: who verified, their standing, what "confirmed" means, named co-confirmers, public history.</p>
  </div>
  <div style="background:${C.cream}; border-left:4pt solid ${C.ver}; border-radius:6pt; padding:11pt 13pt; margin-top:11pt;">
    <p style="font-size:9.5pt; line-height:1.5; color:${C.forest};"><b>"Explore is a generic feed."</b><br>Reorganized by situation — international, transfer, exchange, faculty — because people arrive as "I'm new here," not as categories.</p>
  </div>
</div>
<div style="position:absolute; left:44pt; top:322pt; width:632pt; border-top:1px solid rgba(29,43,34,0.14); padding-top:12pt;">
  <p style="font-size:10pt; color:${C.ink2}; line-height:1.5;">The pattern: every change moved trust from <i>implied</i> to <i>visible</i> — and asking from <i>a widget</i> to <i>where the conversation already is</i>.</p>
</div>
`);

// ---------- 11 · NEXT ----------
w('s11.html', `
<div style="margin:36pt 44pt 0 44pt; width:632pt;">
  <p class="eyebrow">09 — WHAT WE'D DO NEXT</p>
  <h1 class="serif" style="font-size:19pt; line-height:1.3; color:${C.forest}; margin-top:10pt;">One more week: pressure-test the trust mechanics.</h1>
</div>
<div style="position:absolute; left:44pt; top:104pt; width:632pt;">
  <div style="background:${C.cream}; border:1px solid rgba(29,43,34,0.14); border-radius:7pt; padding:12pt 14pt;">
    <p style="font-size:10.5pt; line-height:1.5; color:${C.forest};"><b>Test</b> — the verification flow with real verified answerers: who qualifies, how confirmations are weighted, what makes someone willing to put their name on an answer. Concept-test with faculty (our extreme persona) — the least-served group.</p>
  </div>
  <div style="background:${C.cream}; border:1px solid rgba(29,43,34,0.14); border-radius:7pt; padding:12pt 14pt; margin-top:10pt;">
    <p style="font-size:10.5pt; line-height:1.5; color:${C.forest};"><b>Build</b> — the correction pipeline end-to-end: correction → verifier review → answer rewrite → retrain, with the answer history as the audit trail. Today it's a designed story; next week it should be a working loop.</p>
  </div>
  <div style="background:${C.cream}; border:1px solid rgba(29,43,34,0.14); border-radius:7pt; padding:12pt 14pt; margin-top:10pt;">
    <p style="font-size:10.5pt; line-height:1.5; color:${C.forest};"><b>Rethink</b> — the rewards system. Salma wants recognition without being treated as infallible; points-per-post is the wrong currency. We'd prototype "Keeper of Record": credit for answers still trusted after you graduate.</p>
  </div>
  <div style="margin-top:14pt; border-top:1px solid rgba(29,43,34,0.14); padding-top:11pt;">
    <p style="font-size:10pt; color:${C.ink2};">Success metric, from day one: <b style="color:${C.forest}">time-to-trustworthy-answer</b>, and the share of answers still accurate one year later.</p>
  </div>
</div>
`);

// ---------- 12 · CLOSE ----------
w('s12.html', `
<div style="position:absolute; left:0; top:0; width:720pt; height:405pt; background:${C.deep};"></div>
<div style="position:absolute; left:60pt; top:118pt; width:600pt;">
  <p class="serif" style="font-size:30pt; line-height:1.35; color:#FFFFFF;">What seniors know shouldn't graduate with them.</p>
  <p class="serif" style="font-size:15pt; color:${C.onDark2}; margin-top:18pt;">Loop — AI drafts. A verified human confirms. The campus never forgets.</p>
</div>
<div style="position:absolute; left:60pt; top:305pt; width:600pt; border-top:1px solid rgba(237,231,218,0.25); padding-top:14pt;">
  <p style="font-size:10pt; color:${C.onDark2}; letter-spacing:1px;">FAROUK · MANAL · HAYTAM · ANASS &nbsp;&nbsp;—&nbsp;&nbsp; github.com/F4R0UK11/loop-project &nbsp;&nbsp;·&nbsp;&nbsp; Thank you. Questions welcome.</p>
</div>
`);

console.log('12 slides generated');

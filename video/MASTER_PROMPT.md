# Loop — Pitch Video Master Prompt (v1)

The single brief this video is built from. Change this file, regenerate the code to match.

## Goal
A 40-second YC-style product video for **Loop — the AUI knowledge network that never forgets**.
Made for the bootcamp pitch (BCG-X / IDEO-style jury) and social. Silent-watchable: every beat
lands through on-screen type, no voiceover required. Music optional (drop `music.mp3` in
`public/`, uncomment the Audio tag in `Root.tsx`).

## Source of truth
- Screens: `public/screens/01–07` — the 7 final Stitch screens, full resolution (780px wide).
- Copy: `research/04_pitch_kit.md` (the 2-minute pitch script) — video captions are condensed
  from it, wording preserved where possible.
- Design system: `research/README.md` — forest green `#1D2B22`, warm sand `#FFF8EF`, soft cream
  `#FBF8F2`, terracotta `#B5651D` (AI accent only), policy blue `#2C5F8A`, amber = lived
  experience. Source Serif 4 for statements, Work Sans for labels.

## Format
1920×1080 · 30fps · 1200 frames (40s) · H.264 MP4.

## Motion rules (the YC look)
- One idea per scene. Serif statement enters with a soft rise + fade (spring, no bounce).
- The phone is the protagonist: slides in once, then the *content* moves (slow scroll inside the
  frame), camera stays still. Scroll speed ≤ 260px/s of source image.
- Cuts on the beat every 5–8s. No wipes, no spins, no drop shadows harder than the design
  system's diffuse shadow. Terracotta appears only when the caption is about the AI.
- Hook and close on forest green; product scenes on warm sand.

## Timeline
| # | Frames | Scene | Screen | Caption (serif statement / sans label) |
|---|--------|-------|--------|----------------------------------------|
| 1 | 0–150 | Hook | — | "At AUI, the answer you need is almost never on the portal." → "It's in someone's head. And when they graduate, it's gone." |
| 2 | 150–330 | Meet Loop | 01_home | "Meet Loop." / ASK AUI ANYTHING. GET A VERIFIED ANSWER. |
| 3 | 330–570 | The hero | 02_verified | "AI answers instantly — from AUI's own knowledge." → "It shows its confidence, and where every part came from." → "Then a verified senior confirms it. One tap." |
| 4 | 570–720 | Honest AI | 03_askai | "And when it hasn't seen the answer? It won't guess. It hands you to a human." |
| 5 | 720–900 | Community | 05_thread | "Communities that keep what they learn." |
| 6 | 900–1050 | Durability | 06_explore | "Knowledge that outlives its authors." |
| 7 | 1050–1200 | Close | — | "1,240 verified answers. 4 graduating classes. Nothing lost." → wordmark "Loop" / THE AUI KNOWLEDGE NETWORK THAT NEVER FORGETS |

(Screens 04_spaces and 07_profile are loaded as assets for alternate cuts.)

## Render
```
cd video
npm install        # once
npm run render     # → out/loop-pitch.mp4
npm start          # live preview studio
```

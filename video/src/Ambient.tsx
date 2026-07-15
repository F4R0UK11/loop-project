import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, fonts} from './theme';

// ————————————————————————————————————————————————————————————————
// LoopAmbient — a seamless 40s background loop.
// One floating titanium phone in a warm studio atmosphere, cycling
// through the best Loop screens with soft transitions and a glass
// glare. Every motion is a whole number of sine cycles over the
// loop, so frame 1199 flows into frame 0 without a cut.
// ————————————————————————————————————————————————————————————————

export const LOOP_FRAMES = 1200; // 40s @ 30fps

const TAU = Math.PI * 2;

// The rotation: 4 screens, 300 frames each, 44-frame crossfade into the next.
const SCREENS: {src: string; imgH: number; startY: number; drift: number}[] = [
  {src: 'screens/02_verified.png', imgH: 3626, startY: 0, drift: 520},
  {src: 'screens/01_home.png', imgH: 4242, startY: 240, drift: 560},
  {src: 'screens/05_thread.png', imgH: 3686, startY: 120, drift: 540},
  {src: 'screens/06_explore.png', imgH: 4044, startY: 200, drift: 560},
];
const PER = LOOP_FRAMES / SCREENS.length; // 300
const XFADE = 44;

const ScreenStack: React.FC<{screenW: number; screenH: number}> = ({screenW, screenH}) => {
  const frame = useCurrentFrame();
  const scale = screenW / 780;

  return (
    <>
      {SCREENS.map((s, i) => {
        // local timeline of this screen, handling the wrap at the loop edge
        const start = i * PER;
        let local = (frame - start + LOOP_FRAMES) % LOOP_FRAMES; // 0..1199 since this screen's slot began
        const visible = local < PER + XFADE || local > LOOP_FRAMES - 2;
        if (!visible && local > PER + XFADE) return null;

        // fade in during first XFADE frames of the slot, fade handled by the incoming screen only
        const fadeIn = interpolate(local, [0, XFADE], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        // inner content drift: starts after the fade settles, eases across the slot
        const drift = interpolate(local, [XFADE, PER + XFADE], [0, s.drift], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: (t) => t * t * (3 - 2 * t),
        });
        const y = (s.startY + drift) * scale;
        const maxY = Math.max(0, s.imgH * scale - screenH);

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: fadeIn,
              zIndex: i === 0 && frame > LOOP_FRAMES - PER ? 10 : i + 1,
            }}
          >
            <Img
              src={staticFile(s.src)}
              style={{
                width: screenW,
                position: 'absolute',
                top: 0,
                left: 0,
                transform: `translateY(${-Math.min(y, maxY)}px)`,
              }}
            />
          </div>
        );
      })}
    </>
  );
};

const Phone: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / LOOP_FRAMES;

  // whole-cycle motions → seamless loop
  const rotY = -16 + 7 * Math.sin(TAU * t);
  const rotX = 7 + 3.2 * Math.sin(TAU * 2 * t + 1.1);
  const rotZ = -5 + 1.6 * Math.sin(TAU * t + 2.4);
  const bobY = 16 * Math.sin(TAU * 2 * t + 0.6);
  const bobX = 9 * Math.sin(TAU * t + 3.1);

  // glare band sweeps the glass 3 times per loop
  const sweep = ((t * 3) % 1);
  const glareX = interpolate(sweep, [0, 1], [-130, 230]);

  const screenW = 430;
  const screenH = 932;
  const bezel = 17;

  return (
    <div
      style={{
        position: 'absolute',
        left: '61%',
        top: '50%',
        transform: `translate(-50%, -50%) translate(${bobX}px, ${bobY}px)`,
      }}
    >
      <div style={{perspective: 1500}}>
        <div
          style={{
            transform: `rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* soft contact shadow, painted behind the body */}
          <div
            style={{
              position: 'absolute',
              inset: -30,
              borderRadius: 110,
              boxShadow: '60px 90px 120px rgba(8,12,9,0.55)',
              transform: 'translateZ(-60px)',
            }}
          />
          {/* titanium body */}
          <div
            style={{
              width: screenW + bezel * 2,
              height: screenH + bezel * 2,
              borderRadius: 74,
              padding: bezel,
              background: 'linear-gradient(145deg, #5e5c57 0%, #2c2b27 16%, #16150f 50%, #33322c 86%, #6a6862 100%)',
              boxShadow: 'inset 0 0 2.5px rgba(255,255,255,0.55), inset 0 0 16px rgba(0,0,0,0.7), 40px 70px 110px rgba(6,9,6,0.6)',
              position: 'relative',
            }}
          >
            {/* side buttons */}
            <div style={{position: 'absolute', left: -3.5, top: 210, width: 4, height: 62, borderRadius: 3, background: 'linear-gradient(90deg,#77756f,#33322d)'}} />
            <div style={{position: 'absolute', left: -3.5, top: 296, width: 4, height: 106, borderRadius: 3, background: 'linear-gradient(90deg,#77756f,#33322d)'}} />
            <div style={{position: 'absolute', right: -3.5, top: 262, width: 4, height: 150, borderRadius: 3, background: 'linear-gradient(270deg,#77756f,#33322d)'}} />
            {/* screen */}
            <div
              style={{
                width: screenW,
                height: screenH,
                borderRadius: 58,
                overflow: 'hidden',
                position: 'relative',
                background: colors.sand,
              }}
            >
              <ScreenStack screenW={screenW} screenH={screenH} />
              {/* dynamic island */}
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 128,
                  height: 34,
                  borderRadius: 22,
                  background: '#0c0f0c',
                  zIndex: 40,
                }}
              />
              {/* static glass reflection */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 41,
                  background:
                    'linear-gradient(112deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%)',
                }}
              />
              {/* sweeping glare band */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 42,
                  transform: `translateX(${glareX}%) rotate(14deg) scaleY(1.6)`,
                  background:
                    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,252,244,0.14) 42%, rgba(255,252,244,0.22) 50%, rgba(255,252,244,0.14) 58%, rgba(255,255,255,0) 100%)',
                  width: '80%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Bokeh: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / LOOP_FRAMES;
  const dots = [
    {x: 14, y: 22, r: 90, dx: 40, dy: 26, ph: 0.3, o: 0.10, c: '255,236,205'},
    {x: 80, y: 16, r: 60, dx: 30, dy: 40, ph: 1.7, o: 0.08, c: '234,255,238'},
    {x: 22, y: 74, r: 120, dx: 48, dy: 30, ph: 3.2, o: 0.07, c: '255,244,224'},
    {x: 87, y: 66, r: 75, dx: 36, dy: 44, ph: 4.4, o: 0.09, c: '255,240,214'},
    {x: 55, y: 88, r: 55, dx: 26, dy: 22, ph: 5.3, o: 0.06, c: '236,248,238'},
  ];
  return (
    <>
      {dots.map((d, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.r,
            height: d.r,
            borderRadius: '50%',
            background: `rgba(${d.c},${d.o})`,
            filter: 'blur(26px)',
            transform: `translate(${d.dx * Math.sin(TAU * t + d.ph)}px, ${d.dy * Math.cos(TAU * 2 * t + d.ph)}px)`,
          }}
        />
      ))}
    </>
  );
};

export const LoopAmbient: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const t = frame / LOOP_FRAMES;
  // studio key light drifts gently — one full cycle
  const lightX = 32 + 10 * Math.sin(TAU * t);
  const lightY = 24 + 7 * Math.cos(TAU * t);

  return (
    <AbsoluteFill style={{background: '#171d17'}}>
      {/* warm studio backdrop */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(120% 95% at ${lightX}% ${lightY}%, #4a4438 0%, #2e3027 34%, #1c221c 66%, #12160f 100%)`,
        }}
      />
      <Bokeh />
      <Phone />
      {/* vignette */}
      <AbsoluteFill
        style={{
          background: 'radial-gradient(115% 115% at 50% 46%, rgba(0,0,0,0) 58%, rgba(6,8,5,0.55) 100%)',
        }}
      />
      {/* quiet wordmark — low contrast so the video sits behind a speaker */}
      <div style={{position: 'absolute', left: 72, bottom: 58, display: 'flex', alignItems: 'baseline', gap: 18, opacity: 0.6}}>
        <span style={{fontFamily: fonts.serif, fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em', color: '#EDE7DA'}}>Loop</span>
        <span style={{width: 1, height: 26, background: 'rgba(237,231,218,0.35)', alignSelf: 'center'}} />
        <span style={{fontFamily: fonts.sans, fontSize: 16, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,231,218,0.55)'}}>
          The AUI knowledge network that never forgets
        </span>
      </div>
      {/* music: Kevin MacLeod — Meditation Impromptu 01 (CC-BY), gentle fades at the loop edge */}
      <Audio
        src={staticFile('music.mp3')}
        volume={(f) =>
          interpolate(f, [0, 45, durationInFrames - 45, durationInFrames], [0, 0.55, 0.55, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          })
        }
      />
    </AbsoluteFill>
  );
};

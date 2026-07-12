import React from 'react';
import {
  AbsoluteFill,
  Composition,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {colors, fonts} from './theme';
import {BrowserFrame} from './components/BrowserFrame';

// ————————————————————————————————————————————————————————————————
// Loop pitch video v2 — calm cut.
// Rule: words and UI never share the screen. A statement card gets the
// screen to itself, then the product gets the screen to itself.
// ————————————————————————————————————————————————————————————————

const Line: React.FC<{at: number; children: React.ReactNode; size?: number; dim?: boolean}> = ({
  at,
  children,
  size = 64,
  dim,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame: frame - at, fps, config: {damping: 200, stiffness: 45}});
  const rise = interpolate(enter, [0, 1], [30, 0]);
  if (frame < at - 4) return null;
  return (
    <div
      style={{
        fontFamily: fonts.serif,
        fontSize: size,
        fontWeight: 600,
        lineHeight: 1.28,
        letterSpacing: '-0.015em',
        color: dim ? 'rgba(237,231,218,0.62)' : colors.sand,
        opacity: enter,
        transform: `translateY(${rise}px)`,
        maxWidth: 1180,
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
};

// Full-screen statement card on forest green — gets the screen to itself.
const Card: React.FC<{lines: {text: string; at: number; dim?: boolean; size?: number}[]}> = ({lines}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const fadeOut = interpolate(frame, [durationInFrames - 14, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(90% 120% at 50% 10%, #24382c 0%, ${colors.forest} 55%, ${colors.forestDeep} 100%)`,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 34,
        opacity: fadeOut,
      }}
    >
      {lines.map((l, i) => (
        <Line key={i} at={l.at} dim={l.dim} size={l.size}>
          {l.text}
        </Line>
      ))}
    </AbsoluteFill>
  );
};

// Product shot: the browser window alone on warm sand. No caption competes.
const Shot: React.FC<{
  src: string;
  cssHeight: number;
  scrollFrom?: number;
  scrollTo?: number;
  label: string;
}> = ({src, cssHeight, scrollFrom, scrollTo, label}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const fadeOut = interpolate(frame, [durationInFrames - 12, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: colors.sand, opacity: fadeOut}}>
      <BrowserFrame src={src} cssHeight={cssHeight} scrollFrom={scrollFrom} scrollTo={scrollTo} />
      {/* quiet label so the viewer always knows what they're looking at */}
      <div
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: fonts.sans,
          fontSize: 19,
          fontWeight: 600,
          letterSpacing: '0.13em',
          textTransform: 'uppercase',
          color: colors.inkSoft,
          opacity: 0.75,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </div>
    </AbsoluteFill>
  );
};

const Wordmark: React.FC<{at: number}> = ({at}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame: frame - at, fps, config: {damping: 200, stiffness: 40}});
  if (frame < at - 4) return null;
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26, opacity: enter}}>
      <div
        style={{
          fontFamily: fonts.serif,
          fontSize: 150,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: colors.sand,
          lineHeight: 1,
        }}
      >
        Loop
      </div>
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(237,231,218,0.6)',
        }}
      >
        The AUI knowledge network that never forgets
      </div>
    </div>
  );
};

const CloseCard: React.FC = () => {
  const frame = useCurrentFrame();
  const swap = interpolate(frame, [150, 170], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(90% 120% at 50% 10%, #24382c 0%, ${colors.forest} 55%, ${colors.forestDeep} 100%)`,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{opacity: swap, position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Line at={10} size={62}>
          What seniors know shouldn't graduate with them.
        </Line>
      </div>
      {frame >= 165 ? <Wordmark at={172} /> : null}
    </AbsoluteFill>
  );
};

export const LoopPitch: React.FC = () => {
  // Pacing: statement cards get ~4s alone; product shots get ~9s alone and
  // hold still for 1.5s before any scroll begins. Nothing competes.
  const beats: {dur: number; el: React.ReactNode}[] = [
    {
      dur: 240,
      el: (
        <Card
          lines={[
            {text: 'At AUI, the answer you need is almost never on the portal.', at: 15, size: 58},
            {text: "It's in someone's head. And when they graduate, it's gone.", at: 105, dim: true, size: 58},
          ]}
        />
      ),
    },
    {dur: 110, el: <Card lines={[{text: 'Meet Loop.', at: 10, size: 96}]} />},
    {
      dur: 260,
      el: <Shot src="web/home.png" cssHeight={1183} scrollFrom={0} scrollTo={430} label="Ask AUI anything" />,
    },
    {dur: 120, el: <Card lines={[{text: 'The AI drafts an answer from AUI’s own sources.', at: 10, size: 56}]} />},
    {
      dur: 270,
      el: (
        <Shot
          src="web/verified.png"
          cssHeight={2169}
          scrollFrom={0}
          scrollTo={620}
          label="Confidence and sources, on every answer"
        />
      ),
    },
    {dur: 120, el: <Card lines={[{text: 'Then a real person confirms it. That’s the loop.', at: 10, size: 56}]} />},
    {
      dur: 270,
      el: (
        <Shot
          src="web/verified.png"
          cssHeight={2169}
          scrollFrom={640}
          scrollTo={1330}
          label="Verified by a human — publicly, with a history"
        />
      ),
    },
    {dur: 120, el: <Card lines={[{text: 'And when it isn’t sure? It won’t guess.', at: 10, size: 56}]} />},
    {
      dur: 260,
      el: (
        <Shot
          src="web/askai.png"
          cssHeight={1445}
          scrollFrom={90}
          scrollTo={620}
          label="Low confidence goes to a verified person"
        />
      ),
    },
    {dur: 300, el: <CloseCard />},
  ];

  let from = 0;
  return (
    <AbsoluteFill style={{background: colors.forest}}>
      {beats.map((b, i) => {
        const seq = (
          <Sequence key={i} from={from} durationInFrames={b.dur}>
            {b.el}
          </Sequence>
        );
        from += b.dur;
        return seq;
      })}
    </AbsoluteFill>
  );
};

const TOTAL = 240 + 110 + 260 + 120 + 270 + 120 + 270 + 120 + 260 + 300; // 2070 frames = 69s

export const RemotionRoot: React.FC = () => (
  <Composition id="LoopPitch" component={LoopPitch} durationInFrames={TOTAL} fps={30} width={1920} height={1080} />
);

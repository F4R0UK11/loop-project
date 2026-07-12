import React from 'react';
import {AbsoluteFill, Composition, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {colors, fonts} from './theme';
import {PhoneFrame} from './components/PhoneFrame';
import {Caption} from './components/Caption';

// ---------- Scene shells ----------

const Sand: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill style={{background: `linear-gradient(180deg, ${colors.sand} 0%, ${colors.sandDim} 130%)`}}>
    {children}
  </AbsoluteFill>
);

const Forest: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill style={{background: `radial-gradient(120% 120% at 50% 20%, ${colors.forest} 0%, ${colors.forestDeep} 100%)`}}>
    {children}
  </AbsoluteFill>
);

// A product scene: phone on the right scrolling, statements on the left.
const ScreenScene: React.FC<{
  src: string;
  imgHeight: number;
  scrollFrom?: number;
  scrollTo: number;
  children: React.ReactNode;
}> = ({src, imgHeight, scrollFrom = 0, scrollTo, children}) => (
  <Sand>
    <PhoneFrame src={src} imgHeight={imgHeight} scrollFrom={scrollFrom} scrollTo={scrollTo} x={430} />
    {children}
  </Sand>
);

// ---------- Scene 1: Hook ----------

const Hook: React.FC = () => (
  <Forest>
    <Caption at={8} until={72} align="center" x={undefined} y={420} width={1240} size={62} dark>
      At AUI, the answer you need is almost never on the portal.
    </Caption>
    <Caption at={76} align="center" y={400} width={1240} size={62} dark>
      It&rsquo;s in someone&rsquo;s head.{' '}
      <span style={{color: colors.terracottaSoft}}>And when they graduate, it&rsquo;s gone.</span>
    </Caption>
  </Forest>
);

// ---------- Scene 7: Close ----------

const Close: React.FC = () => {
  const frame = useCurrentFrame();
  const markOpacity = interpolate(frame, [62, 84], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <Forest>
      <Caption at={6} until={64} align="center" y={430} width={1300} size={58} dark>
        1,240 verified answers. 4 graduating classes.{' '}
        <span style={{color: colors.secondaryContainer}}>Nothing lost.</span>
      </Caption>
      <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: markOpacity}}>
        <div style={{fontFamily: fonts.serif, fontSize: 130, fontWeight: 700, color: colors.sand, letterSpacing: '-0.02em'}}>Loop</div>
        <div style={{fontFamily: fonts.sans, fontSize: 21, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: colors.secondaryContainer, marginTop: 14}}>
          The AUI knowledge network that never forgets
        </div>
      </div>
    </Forest>
  );
};

// ---------- The film ----------

const LoopPitch: React.FC = () => (
  <AbsoluteFill style={{background: colors.forestDeep}}>
    <Sequence from={0} durationInFrames={150}>
      <Hook />
    </Sequence>

    <Sequence from={150} durationInFrames={180}>
      <ScreenScene src="screens/01_home.png" imgHeight={4242} scrollTo={1750}>
        <Caption at={10} label="Meet Loop" y={330} size={58}>
          Ask AUI anything. Get a verified answer.
        </Caption>
        <Caption at={16} y={560} size={0} width={620}>
          <span style={{fontFamily: fonts.sans, fontSize: 25, fontWeight: 400, color: colors.inkSoft, lineHeight: 1.5}}>
            Deadlines, unwritten rules, and real answers — surfaced before they cost you.
          </span>
        </Caption>
      </ScreenScene>
    </Sequence>

    <Sequence from={330} durationInFrames={240}>
      <ScreenScene src="screens/02_verified.png" imgHeight={3626} scrollTo={2350}>
        <Caption at={8} until={86} label="Not a chatbot" accent y={330} size={52}>
          AI answers instantly — from AUI&rsquo;s own knowledge.
        </Caption>
        <Caption at={90} until={166} label="Confidence + provenance" accent y={330} size={52}>
          It shows how sure it is, and where every part came from.
        </Caption>
        <Caption at={170} label="The human stays in control" y={330} size={52}>
          Then a verified senior confirms it. One tap.
        </Caption>
      </ScreenScene>
    </Sequence>

    <Sequence from={570} durationInFrames={150}>
      <ScreenScene src="screens/03_askai.png" imgHeight={3106} scrollFrom={300} scrollTo={1900}>
        <Caption at={10} label="Grounded, honestly" accent y={360} size={52}>
          When it hasn&rsquo;t seen the answer, it won&rsquo;t guess. It hands you to a human.
        </Caption>
      </ScreenScene>
    </Sequence>

    <Sequence from={720} durationInFrames={180}>
      <ScreenScene src="screens/05_thread.png" imgHeight={3686} scrollFrom={200} scrollTo={2100}>
        <Caption at={10} label="Spaces" y={360} size={54}>
          Communities that keep what they learn.
        </Caption>
        <Caption at={16} y={580} size={0} width={620}>
          <span style={{fontFamily: fonts.sans, fontSize: 25, fontWeight: 400, color: colors.inkSoft, lineHeight: 1.5}}>
            Every confirmation trains Loop — the next student gets it instantly.
          </span>
        </Caption>
      </ScreenScene>
    </Sequence>

    <Sequence from={900} durationInFrames={150}>
      <ScreenScene src="screens/06_explore.png" imgHeight={4044} scrollTo={1800}>
        <Caption at={10} label="Built to outlast cohorts" y={360} size={54}>
          Knowledge that outlives its authors.
        </Caption>
      </ScreenScene>
    </Sequence>

    <Sequence from={1050} durationInFrames={150}>
      <Close />
    </Sequence>
  </AbsoluteFill>
);

export const RemotionRoot: React.FC = () => (
  <Composition
    id="LoopPitch"
    component={LoopPitch}
    durationInFrames={1200}
    fps={30}
    width={1920}
    height={1080}
  />
);

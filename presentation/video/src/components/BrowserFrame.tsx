import React from 'react';
import {Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, fonts} from '../theme';

// A calm macOS-style browser window showing the real Loop prototype.
// The window appears once and holds still; only the page content scrolls,
// and only after a reading beat — nothing competes for attention.
export const BrowserFrame: React.FC<{
  src: string;
  cssHeight: number; // page height in CSS px at 1440 wide
  scrollFrom?: number; // CSS px
  scrollTo?: number; // CSS px
  holdFrames?: number; // frames to hold still before scrolling starts
}> = ({src, cssHeight, scrollFrom = 0, scrollTo = 0, holdFrames = 45}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  const winW = 1560;
  const barH = 52;
  const viewH = 830;
  const scale = winW / 1440; // captured at 1440 CSS px wide

  const enter = spring({frame, fps, config: {damping: 200, stiffness: 55}});
  const rise = interpolate(enter, [0, 1], [40, 0]);
  const grow = interpolate(enter, [0, 1], [0.965, 1]);

  const maxScroll = Math.max(0, cssHeight * scale - viewH);
  const from = Math.min(scrollFrom * scale, maxScroll);
  const to = Math.min(scrollTo * scale, maxScroll);
  const scrollY = interpolate(
    frame,
    [holdFrames, durationInFrames - 20],
    [from, to],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: (t) => t * t * (3 - 2 * t), // smoothstep: gentle in AND out
    }
  );

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(-50%, calc(-50% + ${rise}px)) scale(${grow})`,
        opacity: enter,
      }}
    >
      <div
        style={{
          width: winW,
          borderRadius: 14,
          overflow: 'hidden',
          boxShadow: '0 50px 110px -30px rgba(29,43,34,0.4)',
          border: '1px solid rgba(29,43,34,0.12)',
        }}
      >
        {/* window bar */}
        <div
          style={{
            height: barH,
            background: '#EFE7D6',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            gap: 8,
            borderBottom: '1px solid rgba(29,43,34,0.08)',
          }}
        >
          <span style={{width: 13, height: 13, borderRadius: 7, background: '#E8695A'}} />
          <span style={{width: 13, height: 13, borderRadius: 7, background: '#E5B550'}} />
          <span style={{width: 13, height: 13, borderRadius: 7, background: '#68A56B'}} />
          <div
            style={{
              margin: '0 auto',
              background: '#FFF8EF',
              borderRadius: 8,
              padding: '7px 88px',
              fontFamily: fonts.sans,
              fontSize: 15,
              color: colors.inkSoft,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{width: 10, height: 10, borderRadius: 5, border: `2px solid ${colors.secondary}`}} />
            loop.aui.ma
          </div>
          <span style={{width: 55}} />
        </div>
        {/* viewport */}
        <div style={{width: winW, height: viewH, overflow: 'hidden', position: 'relative', background: colors.sand}}>
          <Img
            src={staticFile(src)}
            style={{
              width: winW,
              position: 'absolute',
              top: 0,
              left: 0,
              transform: `translateY(${-scrollY}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

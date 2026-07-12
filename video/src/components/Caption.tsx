import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, fonts} from '../theme';

// One idea per scene: a serif statement (optionally a sans overline label above it).
// Enters with a soft rise + fade; exits with a fade if `until` is set.
export const Caption: React.FC<{
  at: number;
  until?: number;
  label?: string;
  children: React.ReactNode;
  dark?: boolean; // true on forest backgrounds
  accent?: boolean; // terracotta label — only when the statement is about the AI
  y?: number; // vertical position (px from top)
  width?: number;
  align?: 'left' | 'center';
  size?: number;
  x?: number;
}> = ({at, until, label, children, dark, accent, y = 120, width = 680, align = 'left', size = 54, x}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame: frame - at, fps, config: {damping: 200, stiffness: 80}});
  const exit = until ? interpolate(frame, [until - 12, until], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : 1;
  const rise = interpolate(enter, [0, 1], [26, 0]);
  if (frame < at - 5) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: y,
        left: x ?? (align === 'center' ? '50%' : 140),
        transform: `${align === 'center' && x == null ? 'translateX(-50%) ' : ''}translateY(${rise}px)`,
        width,
        opacity: enter * exit,
        textAlign: align,
      }}
    >
      {label ? (
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 19,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: accent ? colors.terracotta : dark ? colors.secondaryContainer : colors.secondary,
            marginBottom: 18,
          }}
        >
          {label}
        </div>
      ) : null}
      <div
        style={{
          fontFamily: fonts.serif,
          fontSize: size,
          fontWeight: 600,
          lineHeight: 1.22,
          letterSpacing: '-0.01em',
          color: dark ? colors.sand : colors.forest,
        }}
      >
        {children}
      </div>
    </div>
  );
};

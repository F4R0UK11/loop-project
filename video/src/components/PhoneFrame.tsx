import React from 'react';
import {Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../theme';

// The phone is the protagonist: it slides in once, then only its CONTENT moves.
// Scroll is a slow pan of the full-length screenshot inside the mask.
export const PhoneFrame: React.FC<{
  src: string;
  imgHeight: number; // source screenshot height at 780px width
  scrollFrom?: number; // px of source image to start at
  scrollTo?: number; // px of source image to end at
  enterAt?: number; // frame at which the phone slides in
  x?: number; // horizontal offset of the phone center from screen center
}> = ({src, imgHeight, scrollFrom = 0, scrollTo = 0, enterAt = 0, x = 0}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames, height} = useVideoConfig();

  const screenW = 352;
  const screenH = 764;
  const bezel = 14;

  const enter = spring({frame: frame - enterAt, fps, config: {damping: 200, stiffness: 60}});
  const slideY = interpolate(enter, [0, 1], [height * 0.55, 0]);

  // content scroll across the scene, eased at both ends
  const scale = screenW / 780; // screenshot rendered at screen width
  const maxScroll = Math.max(0, imgHeight * scale - screenH);
  const from = Math.min(scrollFrom * scale, maxScroll);
  const to = Math.min(scrollTo * scale, maxScroll);
  const scrollY = interpolate(frame, [enterAt + 18, durationInFrames - 8], [from, to], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${slideY}px))`,
      }}
    >
      <div
        style={{
          width: screenW + bezel * 2,
          height: screenH + bezel * 2,
          borderRadius: 58,
          background: colors.forestDeep,
          boxShadow: '0 40px 90px rgba(29,43,34,0.35)',
          padding: bezel,
        }}
      >
        <div
          style={{
            width: screenW,
            height: screenH,
            borderRadius: 44,
            overflow: 'hidden',
            background: colors.sand,
            position: 'relative',
          }}
        >
          <Img
            src={staticFile(src)}
            style={{
              width: screenW,
              position: 'absolute',
              top: 0,
              left: 0,
              transform: `translateY(${-scrollY}px)`,
            }}
          />
          {/* notch pill */}
          <div
            style={{
              position: 'absolute',
              top: 12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 110,
              height: 28,
              borderRadius: 20,
              background: colors.forestDeep,
            }}
          />
        </div>
      </div>
    </div>
  );
};

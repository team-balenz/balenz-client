import { style } from '@vanilla-extract/css';
import { color, media, typography } from '@/shared/styles';

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  height: '21.375rem',
  width: '100%',
  boxShadow: '0 0 2px 0 rgba(17, 17, 17, 0.20)',

  '@media': {
    [media.tablet]: {},
    [media.mobile]: {
      height: '15.375rem',
    },
  },
});

export const content = style({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  ...typography.desktop.h1,
  color: color.text.main,

  '@media': {
    [media.tablet]: typography.tablet.h1,
    [media.mobile]: typography.phone.h1,
  },
});

export const description = style({
  ...typography.desktop.body2,
  color: color.text.main,
  marginTop: '0.9375rem',

  '@media': {
    [media.tablet]: typography.tablet.body2,
    [media.mobile]: { ...typography.phone.body3, marginTop: '0.4769rem' },
  },
});

export const button = style({
  marginTop: '2.5rem',
});

// 배경 장식 아이콘
export const decorativeIcons = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  pointerEvents: 'none',
  overflow: 'hidden',
});

export const icon = style({
  position: 'absolute',
});

export const iconTopLeft = style([
  icon,
  {
    top: '2.125rem',
    left: '8.4375rem',
    width: '5.1563rem',
    aspectRatio: '1/1',
    transform: 'rotate(-14deg)',

    '@media': {
      [media.tablet]: {
        top: '3.5625rem',
        left: '5.0869rem',
        width: '4.4837rem',
      },
      [media.mobile]: {
        top: '1.4956rem',
        left: '1.3369rem',
        width: '3.3506rem',
      },
    },
  },
]);

export const iconTopRight = style([
  icon,
  {
    top: '3.6875rem',
    right: '5.375rem',
    width: '4.5625rem',
    aspectRatio: '1/1',
    transform: 'rotate(8deg)',

    '@media': {
      [media.tablet]: {
        top: '4.9212rem',
        right: '4rem',
        width: '3.9674rem',
      },
      [media.mobile]: {
        top: '1.7681rem',
        right: '1.4375rem',
        width: '2.8839rem',
      },
    },
  },
]);

export const iconBottomLeft = style([
  icon,
  {
    bottom: '4.3125rem',
    left: '7.1875rem',
    width: '4.75rem',
    aspectRatio: '1/1',
    transform: 'rotate(-20deg)',

    '@media': {
      [media.tablet]: {
        bottom: '4.8231rem',
        left: '4rem',
        width: '4.1304rem',
      },
      [media.mobile]: {
        bottom: '4.5625rem',
        left: '1.8756rem',
        width: '2.7436rem',
      },
    },
  },
]);

export const iconBottomRight = style([
  icon,
  {
    bottom: '2.8438rem',
    right: '9.2188rem',
    width: '5.4688rem',
    aspectRatio: '1/1',
    transform: 'rotate(12deg)',

    '@media': {
      [media.tablet]: {
        bottom: '3.5463rem',
        right: '7.3425rem',
        width: '4.7554rem',
      },
      [media.mobile]: {
        bottom: '4.1619rem',
        right: '1.3044rem',
        width: '3.4567rem',
      },
    },
  },
]);

export const background = style({
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 0,
  width: '60%',
  objectFit: 'cover',

  '@media': {
    [media.mobile]: {
      width: '100%',
    },
  },
});

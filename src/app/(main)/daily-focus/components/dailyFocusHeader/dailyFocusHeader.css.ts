import { style } from '@vanilla-extract/css';

import { color, typography, media } from '@/shared/styles';

export const container = style({
  position: 'relative',
  width: '100%',
  height: '6rem',
  overflow: 'hidden',
  borderRadius: '0.3125rem',
});

export const image = style({
  objectFit: 'cover',
  objectPosition: 'center',
});

export const overlay = style({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  height: '100%',
  padding: '0.62rem 0.63rem 0.67rem 1.25rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@media': {
    [media.tablet]: {
      padding: '0.75rem 0.75rem 0.62rem 1.25rem',
    },
    [media.mobile]: {
      padding: '0.62rem 0.72rem 0.58rem 0.72rem',
    },
  },
});

export const keyword = style({
  ...typography.correction,
  ...typography.desktop.h3,
  color: color.text.main,

  '@media': {
    [media.tablet]: {
      ...typography.tablet.h3,
    },
    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

export const barWrapper = style({
  width: '100%',
  maxWidth: '23.375rem',
  display: 'flex',
  alignSelf: 'flex-end',

  '@media': {
    [media.mobile]: {
      width: '100%',
      alignSelf: 'stretch',
    },
  },
});

import { style } from '@vanilla-extract/css';
import { color, typography, media } from '@/shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.88rem',
  '@media': {
    [media.belowDesktop]: {
      gap: '1.25rem',
    },
  },
});

export const title = style({
  ...typography.correction,
  ...typography.desktop.h1,
  color: color.text.main,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.h1,
    },
    [media.mobile]: {
      ...typography.phone.h1,
    },
  },
});

export const articleCount = style({
  display: 'none',
  '@media': {
    [media.tablet]: {
      display: 'block',
    },
    [media.mobile]: {
      display: 'block',
    },
  },
});

export const content = style({
  ...typography.correction,
  ...typography.desktop.body1,
  color: color.text.main,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.body1,
    },
    [media.mobile]: {
      ...typography.phone.body1,
    },
  },
});

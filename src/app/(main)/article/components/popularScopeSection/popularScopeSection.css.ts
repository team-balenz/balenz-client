import { style } from '@vanilla-extract/css';
import { boxStyle, color, media, typography } from '@/shared/styles';

export const container = style({
  ...boxStyle,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.625rem',
  padding: '1.25rem 0.9375rem 0.625rem 0.9375rem',

  '@media': {
    [media.belowDesktop]: {
      boxShadow: 'none',
      padding: '0',
    },
  },
});

export const title = style({
  ...typography.desktop.h2,
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

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.625rem',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  '@media': {
    [media.belowDesktop]: {
      gap: '0',
    },
  },
});

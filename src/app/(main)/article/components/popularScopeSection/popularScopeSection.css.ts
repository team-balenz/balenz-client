import { style } from '@vanilla-extract/css';
import { color, media, typography } from '@/shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.625rem',
  borderRadius: '5px',
  boxShadow: '0 0 2px 0 rgba(17, 17, 17, 0.20)',
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

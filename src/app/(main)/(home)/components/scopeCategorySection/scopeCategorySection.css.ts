import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const itemSection = style({
  padding: '0.625rem 1.25rem 0.625rem 0',
  '@media': {
    [media.belowDesktop]: {
      padding: '0',
    },
  },
});

export const grid = style({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '0.625rem 3.125rem',

  '@media': {
    [media.tablet]: {
      gap: '0',
    },
    [media.mobile]: {
      gap: '0',
      gridTemplateColumns: '1fr',
    },
  },
});

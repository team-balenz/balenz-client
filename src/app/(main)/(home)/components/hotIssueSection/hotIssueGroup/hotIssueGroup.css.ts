import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const group = style({
  width: '100%',
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.69rem',
  '@media': {
    [media.belowDesktop]: {
      minWidth: 0,
    },
  },
});

export const container = style({
  width: '100%',
  minWidth: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '0.69rem',
  '@media': {
    [media.tablet]: {
      gap: '1.12rem',
    },
    [media.mobile]: {
      gap: '0.75rem',
    },
  },
});

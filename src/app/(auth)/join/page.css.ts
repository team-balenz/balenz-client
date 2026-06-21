import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const container = style({
  width: '100%',
  maxWidth: '31.4375rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.875rem',
  boxSizing: 'border-box',

  '@media': {
    [media.belowDesktop]: {
      maxWidth: '31.9375rem',
    },
    [media.mobile]: {
      maxWidth: '100%',
      gap: '2.62rem',
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.44rem',
  '@media': {
    [media.belowDesktop]: {
      gap: '1.5rem',
    },
  },
});

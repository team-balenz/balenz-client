import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const group = style({
  width: '25.6875rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.69rem',
  '@media': {
    [media.tablet]: {
      width: '20.75rem',
    },
    [media.mobile]: {
      width: '21.875rem',
    },
  },
});

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
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

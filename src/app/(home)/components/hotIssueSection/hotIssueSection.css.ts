import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const section = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '1.88rem',
  '@media': {
    [media.tablet]: {
      gap: '2.25rem',
    },
    [media.mobile]: {
      gap: '0.94rem',
    },
  },
});

export const container = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '3.12rem 1.44rem',
  '@media': {
    [media.mobile]: {
      gridTemplateColumns: '1fr',
      gap: '3.125rem 1.5rem',
    },
  },
});

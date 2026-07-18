import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.88rem',
});

export const filterTabsWrapper = style({
  display: 'none',
  '@media': {
    [media.tablet]: {
      display: 'none',
    },
    [media.mobile]: {
      display: 'block',
    },
  },
});

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.44rem',
  '@media': {
    [media.tablet]: {
      gap: '0.88rem',
    },
    [media.mobile]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
});

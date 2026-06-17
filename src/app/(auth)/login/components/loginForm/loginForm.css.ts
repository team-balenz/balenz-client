import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
});

export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.13rem',
  '@media': {
    [media.tablet]: {
      gap: '0.44rem',
    },
    [media.mobile]: {
      gap: '0.38rem',
    },
  },
});

export const buttonWrapper = style({
  marginTop: '1.81rem',
  '@media': {
    [media.tablet]: {
      marginTop: '2.37rem',
    },
    [media.mobile]: {
      marginTop: '2.31rem',
    },
  },
});

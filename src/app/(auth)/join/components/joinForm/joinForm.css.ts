import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
});

export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.19rem',
  '@media': {
    [media.belowDesktop]: {
      gap: '0.37rem',
    },
  },
});

export const buttonWrapper = style({
  marginTop: '0.62rem',
  '@media': {
    [media.tablet]: {
      marginTop: '0.94rem',
    },
    [media.mobile]: {
      marginTop: '0.31rem',
    },
  },
});

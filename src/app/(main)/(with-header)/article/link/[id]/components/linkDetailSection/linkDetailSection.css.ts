import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const bodyContainer = style({
  marginTop: '3.12rem',
  '@media': {
    [media.mobile]: {
      marginTop: '1.88rem',
    },
  },
});

export const footerContainer = style({
  marginTop: '3.12rem',
});

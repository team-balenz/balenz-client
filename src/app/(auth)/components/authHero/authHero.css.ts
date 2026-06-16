import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const container = style({
  position: 'relative',
  width: '100%',
  minHeight: '100dvh',
  padding: '3rem 2.5rem',
  '@media': {
    [media.belowDesktop]: {
      display: 'none',
    },
  },
});

export const imageWrapper = style({
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const image = style({
  objectFit: 'cover',
  borderRadius: '0.3125rem',
});

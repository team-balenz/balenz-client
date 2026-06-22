import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const container = style({
  position: 'relative',
  width: '100%',
  maxWidth: '40.0625rem',
  height: 'calc(100dvh - 3.75rem)',
  minHeight: '38rem',
  maxHeight: '45.9375rem',

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

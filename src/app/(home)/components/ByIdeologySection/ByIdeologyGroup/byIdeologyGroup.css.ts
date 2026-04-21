import { style } from '@vanilla-extract/css';
import { color, media } from '@/shared/styles';

export const list = style({
  padding: '0 0.9375rem',
  '@media': {
    [media.belowDesktop]: {
      padding: '0 0.3125rem',
    },
  },
});

export const articleItem = style({
  borderBottom: `1px solid ${color.brand.gray2}`,
  '@media': {
    [media.belowDesktop]: {
      marginBottom: '1.25rem',
    },
  },
  selectors: {
    '&:last-child': {
      '@media': {
        [media.belowDesktop]: {
          marginBottom: '0',
        },
      },
    },
  },
});

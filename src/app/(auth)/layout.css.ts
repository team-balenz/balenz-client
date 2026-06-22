import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const layout = style({
  width: '100%',
  minHeight: '100dvh',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 40.0625rem) minmax(0, 31.4375rem)',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: 'clamp(3rem, 8vw, 7.5rem)',
  padding: '1.875rem 6.8rem 1.875rem 2.4rem',
  boxSizing: 'border-box',

  '@media': {
    [media.belowDesktop]: {
      gridTemplateColumns: '1fr',
      padding: '0',
      columnGap: '0',
    },
  },
});

export const contentSection = style({
  width: '100%',
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    [media.belowDesktop]: {
      minHeight: '100dvh',
      paddingInline: '1.25rem',
      boxSizing: 'border-box',
    },
  },
});

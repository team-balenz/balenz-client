import { style } from '@vanilla-extract/css';

import { boxStyle, media } from '@/shared/styles';

export const linkDetailLayout = style({
  width: '100%',
  padding: '5rem 5rem 5.81rem 5rem',
  '@media': {
    [media.tablet]: {
      padding: '2.5rem 2.5rem 8.75rem 2.5rem',
    },

    [media.mobile]: {
      padding: '1.25rem 1.25rem 5.62rem 1.25rem',
    },
  },
});

export const container = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '66.666% 33.333%',
  columnGap: '1.5rem',
  '@media': {
    [media.belowDesktop]: {
      gridTemplateColumns: '1fr',
      rowGap: '6.25rem',
    },
  },
});

export const leftSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6.25rem',
  minWidth: 0,
});

export const rightSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.31rem',
});

export const adSection = style({
  ...boxStyle,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '33.875rem',
  '@media': {
    [media.belowDesktop]: {
      display: 'none',
    },
  },
});

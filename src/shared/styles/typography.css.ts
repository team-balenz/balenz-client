/* typography.css.ts */

import { createGlobalTheme } from '@vanilla-extract/css';

export const typography = createGlobalTheme(':root', {
  desktop: {
    display: {
      fontSize: '32px',
      lineHeight: '140%',
      fontWeight: '700',
    },
    h1: {
      fontSize: '28px',
      lineHeight: '140%',
      fontWeight: '700',
    },
    h2: {
      fontSize: '24px',
      lineHeight: '140%',
      fontWeight: '600',
    },
    h3: {
      fontSize: '20px',
      lineHeight: '150%',
      fontWeight: '600',
    },
    body1: {
      fontSize: '18px',
      lineHeight: '150%',
      fontWeight: '400',
    },
    body2: {
      fontSize: '16px',
      lineHeight: '150%',
      fontWeight: '400',
    },
    body3: {
      fontSize: '14px',
      lineHeight: '140%',
      fontWeight: '400',
    },
    caption: {
      fontSize: '12px',
      lineHeight: '140%',
      fontWeight: '400',
    },
  },
});

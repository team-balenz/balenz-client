import { style } from '@vanilla-extract/css';

import { color, media, typography } from '@/shared/styles';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',

  '@media': {
    [media.mobile]: {
      justifyContent: 'space-between',
    },
  },
});

export const previousArea = style({
  display: 'flex',
  alignItems: 'center',

  '@media': {
    [media.mobile]: {
      display: 'contents',
    },
  },
});

export const rightArea = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.625rem',

  '@media': {
    [media.mobile]: {
      display: 'contents',
    },
  },
});

export const previousBtn = style({
  ...typography.desktop.h4,

  display: 'flex',
  alignItems: 'center',
  gap: '1.88rem',

  padding: '0.625rem 0',

  color: color.text.secondary,
  backgroundColor: 'transparent',
  border: 0,

  cursor: 'pointer',

  '@media': {
    [media.tablet]: {
      ...typography.tablet.h4,
    },

    [media.mobile]: {
      ...typography.phone.h3,

      padding: '0.625rem 1.25rem',
    },
  },
});

export const skipBtn = style({
  ...typography.desktop.h4,

  padding: '0.625rem 1.25rem',

  color: color.text.tertiary,
  backgroundColor: 'transparent',
  border: 0,

  cursor: 'pointer',

  '@media': {
    [media.tablet]: {
      ...typography.tablet.h4,
    },

    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

export const nextBtn = style({
  ...typography.desktop.h4,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.88rem',

  padding: '0.625rem 1.25rem',

  color: color.text.inverse,
  backgroundColor: color.brand.main,
  border: 0,
  borderRadius: '0.4375rem',

  cursor: 'pointer',

  selectors: {
    '&:disabled': {
      color: color.text.disabled,
      backgroundColor: 'transparent',
      cursor: 'default',
    },

    '&:focus-visible': {
      outline: `1px solid ${color.brand.main}`,
    },
  },

  '@media': {
    [media.tablet]: {
      ...typography.tablet.h4,
    },

    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

export const arrowIcon = style({
  width: '1.25rem',
  height: '1.25rem',
  flexShrink: 0,
});

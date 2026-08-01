import { color, media, typography } from '@/shared/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const wrapper = style({
  position: 'relative',
  width: '100%',
  height: '5.3125rem',

  '@media': {
    [media.mobile]: {
      height: '4.25rem',
    },
  },
});

export const viewport = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '0.625rem',
  backgroundColor: '#FCFCFC',
  outline: 'none',
  touchAction: 'pan-y pinch-zoom',
  boxShadow: '0 20px 30px 0 rgba(39, 39, 39, 0.02)',
  padding: '1.25rem 3.125rem',

  '@media': {
    [media.tablet]: {
      padding: '1.25rem 1.875rem',
      boxShadow: '0 8px 15px 0 rgba(39, 39, 39, 0.08)',
    },
  },

  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'linear-gradient(90deg, #FCFCFC 0%, rgba(252, 252, 252, 0.00) 50%, #FCFCFC 100%)',
      pointerEvents: 'none',
    },

    '&:focus-visible': {
      //   outline: '2px solid #1a1a1a',
      //   outlineOffset: '4px',
    },
  },
});

export const container = style({
  display: 'flex',
  alignItems: 'center',
});

export const slide = style({
  display: 'flex',
  flex: '0 0 25%',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 0,
});

export const yearButton = recipe({
  base: {
    border: 0,
    backgroundColor: 'transparent',

    fontFamily: 'inherit',
    cursor: 'pointer',

    transition: 'color 200ms ease, font-size 100ms ease, font-weight 200ms ease',
  },

  variants: {
    tone: {
      selected: {
        color: color.text.main,
        ...typography.desktop.display,

        '@media': {
          [media.tablet]: typography.tablet.display,
          [media.mobile]: typography.phone.h1,
        },
      },

      near: {
        color: color.text.tertiary,
        ...typography.desktop.h1,

        '@media': {
          [media.tablet]: typography.tablet.h1,
          [media.mobile]: typography.phone.h2,
        },
      },

      far: {
        color: color.text.tertiary,
        ...typography.desktop.h2,

        '@media': {
          [media.tablet]: typography.tablet.h2,
          [media.mobile]: typography.phone.h2,
        },
      },
    },
  },

  defaultVariants: {
    tone: 'far',
  },
});

export const yearInput = style({
  display: 'block',
  width: '100%',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',

  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'textfield',

  fontFamily: 'inherit',
  letterSpacing: 'inherit',
  textAlign: 'center',

  border: 0,
  outline: 0,
  backgroundColor: 'transparent',

  color: color.text.main,
  ...typography.desktop.display,

  '@media': {
    [media.tablet]: typography.tablet.display,
    [media.mobile]: typography.phone.h1,
  },
});

export const errorMessage = style({
  position: 'absolute',
  top: 'calc(100% + 12px)',
  left: 0,
  width: '100%',

  color: color.system.error,
  ...typography.desktop.caption,
  textAlign: 'center',

  '@media': {
    [media.tablet]: typography.tablet.caption,
    [media.mobile]: typography.phone.caption,
  },
});

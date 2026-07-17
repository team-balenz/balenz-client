import { color, media, typography } from '@/shared/styles';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
  margin: '0 auto',
});

export const bar = style({
  position: 'relative',

  width: '100%',
  height: '3.625rem',
  overflow: 'hidden',

  borderRadius: '0.3125rem',
  backgroundColor: color.brand.gray2,
});

export const progressFill = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,

  width: 0,
  borderRadius: 'inherit',
  backgroundColor: color.brand.main,

  transition: 'width 400ms cubic-bezier(0.22, 1, 0.36, 1)',

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
});

export const submitButton = style({
  position: 'relative',
  zIndex: 1,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '100%',
  padding: 0,

  border: 0,
  backgroundColor: 'transparent',

  color: color.text.inverse,
  ...typography.desktop.h3,

  cursor: 'pointer',

  selectors: {
    '&:disabled': {
      cursor: 'default',
    },
  },

  '@media': {
    [media.tablet]: {
      height: '3.4375rem',
      ...typography.tablet.h3,
    },
    [media.mobile]: {
      height: '3.25rem',
      ...typography.phone.h3,
    },
  },
});

export const visuallyHidden = style({
  position: 'absolute',

  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',

  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',

  border: 0,
});

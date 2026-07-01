import { style } from '@vanilla-extract/css';
import { color, media } from '@/shared/styles';

export const controls = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '4.62rem',
  marginTop: '1.25rem',

  '@media': {
    [media.tablet]: {
      marginTop: '1.87rem',
    },
    [media.mobile]: {
      gap: '3.12rem',
      marginTop: '0.94rem',
    },
  },
});

export const button = style({
  display: 'flex',
  width: '2.5rem',
  height: '2.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  border: 0,
  borderRadius: '50%',
  color: color.text.inverse,
  backgroundColor: '#FCFCFC1A',
  cursor: 'pointer',

  selectors: {
    '&:focus-visible': {
      outline: `0.125rem solid ${color.brand.progressive}`,
      outlineOffset: '0.1875rem',
    },
    '&:disabled': {
      opacity: 0.35,
      cursor: 'not-allowed',
    },
  },

  '@media': {
    [media.mobile]: {
      width: '2.75rem',
      height: '2.75rem',
    },
  },
});

export const icon = style({
  display: 'block',
  width: '0.375rem',
  height: '0.75rem',
});

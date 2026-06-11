import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const searchInput = style({
  paddingTop: '0.31rem',
  paddingBottom: '0.31rem',
  paddingLeft: '0.94rem',
  paddingRight: '3.75rem',

  '@media': {
    [media.mobile]: {
      paddingTop: '0.62rem',
      paddingBottom: '0.62rem',
      paddingLeft: '0.94rem',
      paddingRight: '3.25rem',
    },
  },
});

export const searchButton = style({
  width: '2.5rem',
  height: '2.5rem',
  padding: '0.62rem',

  border: 'none',
  background: 'transparent',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.3,
    },
  },

  '@media': {
    [media.mobile]: {
      width: '1.5rem',
      height: '1.5rem',
      padding: '0.13rem',
    },
  },
});

export const searchIcon = style({
  width: '100%',
  height: '100%',
});

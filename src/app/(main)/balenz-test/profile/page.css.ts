import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles';

export const container = style({
  minHeight: '100dvh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
});

export const content = style({
  width: '100%',
  maxWidth: '39.625rem',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  transform: 'translateY(0.03rem)',

  '@media': {
    [media.tablet]: {
      maxWidth: '31.875rem',
      transform: 'translateY(2.625rem)',
    },
    [media.mobile]: {
      maxWidth: '21.875rem',
      transform: 'translateY(3.435rem)',
    },
  },
});

export const stepContent = style({
  display: 'flex',
  flexDirection: 'column',
});

export const birthYearStepContent = style({
  gap: '6.88rem',

  '@media': {
    [media.tablet]: {
      gap: '3rem',
    },
    [media.mobile]: {
      gap: '2rem',
    },
  },
});

export const genderStepContent = style({
  gap: '4.06rem',

  '@media': {
    [media.tablet]: {
      gap: '3.06rem',
    },
    [media.mobile]: {
      gap: '1.87rem',
    },
  },
});

export const optionArea = style({
  width: '100%',
});

export const birthYearNavigationArea = style({
  marginTop: '8.31rem',

  '@media': {
    [media.tablet]: {
      marginTop: '4rem',
    },
    [media.mobile]: {
      marginTop: '3rem',
    },
  },
});

export const genderNavigationArea = style({
  marginTop: '3rem',

  '@media': {
    [media.tablet]: {
      marginTop: '17.5rem',
    },
    [media.mobile]: {
      marginTop: '17.44rem',
    },
  },
});

import { media } from '@/shared/styles';
import { keyframes, style } from '@vanilla-extract/css';

const questionEnter = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2rem)',
  },

  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0 auto',
  gap: '5.94rem',

  '@media': {
    [media.tablet]: {
      gap: '4.38rem',
    },

    [media.mobile]: {
      gap: '3.12rem',
    },
  },
});

export const questionWrapper = style({
  width: '100%',

  animation: `${questionEnter} 450ms cubic-bezier(0.22, 1, 0.36, 1) both`,

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
});

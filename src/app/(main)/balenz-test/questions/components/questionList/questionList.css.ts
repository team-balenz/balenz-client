import { keyframes, style } from '@vanilla-extract/css';

const questionEnter = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(32px)',
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
    'screen and (max-width: 846px)': {
      gap: '4.38rem',
    },

    'screen and (max-width: 480px)': {
      gap: '3.12rem',
    },
  },
});

export const questionWrapper = style({
  width: '100%',

  // 고정 헤더가 있다면 스크롤 위치 보정
  scrollMarginTop: '120px',

  animation: `${questionEnter} 450ms cubic-bezier(0.22, 1, 0.36, 1) both`,

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
});

import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

/** 썸네일~바디 묶음: SummarySection ~ Footer 사이 */
export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
  '@media': {
    [media.belowDesktop]: {
      gap: '4.38rem',
    },
  },
});

/** 썸네일+헤더 묶음: 본문 사이 (헤더–바디 간격) */
export const heroStack = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.13rem',
  '@media': {
    [media.belowDesktop]: {
      gap: '1.88rem',
    },
  },
});

/** 썸네일 ~ 헤더 사이 */
export const thumbHeaderStack = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.88rem',
});

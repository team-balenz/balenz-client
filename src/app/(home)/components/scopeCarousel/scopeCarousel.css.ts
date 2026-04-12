import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const container = style({
  width: '53.4375rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.9375rem',

  '@media': {
    [media.tablet]: {
      width: '100%',
    },
    [media.mobile]: {
      width: '100%',
      display: 'flex',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
});

export const viewport = style({
  overflow: 'hidden',
  borderRadius: '1rem',
  width: '100%',
});

export const emblaContainer = style({
  display: 'flex',
  gap: '0',
  marginLeft: '0',
});

export const slide = style({
  // PC/tablet: 슬라이드 1개 = 100%, 내부 카드 2개가 50%씩 가로 배치
  flex: '0 0 100%',
  minWidth: 0,
  display: 'flex',
  flexDirection: 'row',

  '@media': {
    [media.mobile]: {
      // 모바일: 슬라이드 1개 = 100%, 내부 카드 2개가 세로 배치
      flex: '0 0 100%',
      flexDirection: 'column',
    },
  },
});

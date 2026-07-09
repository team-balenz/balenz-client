import { style } from '@vanilla-extract/css';
import { color, media } from '@/shared/styles';

export const root = style({
  width: '100%',
  padding: '1.5rem 0 2rem',
  overflow: 'hidden',
  backgroundColor: color.text.main,
});

/**
 * desktop, mobile : 컨텐츠는 너비 100% 차지
 * tablet : 컨텐츠 너비를 39.875rem으로 고정하여 가운데 정렬
 */
export const viewport = style({
  width: '100%',
  overflow: 'hidden',
  padding: '0',

  '@media': {
    [media.tablet]: {
      width: '39.875rem',
      maxWidth: '100%',
      margin: '0 auto',
    },
  },
});

export const container = style({
  display: 'flex',
  alignItems: 'center',
  touchAction: 'pan-y pinch-zoom',
});

/**
 * desktop: 카드 폭이 47rem으로 고정됨 → 세그먼트 영역도 47rem
 * tablet/mobile: 카드 폭이 화면/viewport 기준 100% → 세그먼트 영역도 100%
 */
export const segmentSection = style({
  margin: 'auto',
  width: '47rem',
  marginBottom: '1.12rem',

  '@media': {
    [media.tablet]: {
      width: '100%',
      marginBottom: '0.94rem',
    },
    [media.mobile]: {
      width: '100%',
      marginBottom: '0.75rem',
    },
  },
});

export const slide = style({
  flex: '0 0 47rem',
  minWidth: 0,
  opacity: 0.62,
  transition: 'opacity 320ms ease',
  zIndex: 0,

  selectors: {
    "&[data-selected='true']": {
      opacity: 1,
      zIndex: 1,
    },
  },

  '@media': {
    [media.belowDesktop]: {
      flexBasis: '100%',
      opacity: 0,
      pointerEvents: 'none',
      transition: 'opacity 320ms ease',

      selectors: {
        "&[data-selected='true']": {
          opacity: 1,
          pointerEvents: 'auto',
        },
      },
    },
    [media.mobile]: {
      padding: 0,
    },
  },
});

export const slideContent = style({
  position: 'relative',
  width: '100%',
  height: '30.375rem',
  overflow: 'hidden',
  borderRadius: '0.3125rem',
  backgroundColor: color.brand.background,
  transform: 'scale(0.714)',
  transformOrigin: 'center',
  transition: 'box-shadow 320ms ease, transform 320ms ease',
  willChange: 'transform',

  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'linear-gradient(180deg, rgba(39, 39, 39, 0.80) 0%, #272727 100%)',
      pointerEvents: 'none',
      transition: 'opacity 320ms ease',
    },
    [`${slide}[data-selected='true'] &`]: {
      boxShadow: '0 0.5rem 1.5rem rgb(0 0 0 / 14%)',
      transform: 'scale(1)',
    },
    [`${slide}[data-selected='true'] &::after`]: {
      opacity: 0,
    },
    [`${slide}[data-position='previous'] &`]: {
      // 이전 슬라이드
      transform: 'translateX(10%) scale(0.714)',
    },
    [`${slide}[data-position='next'] &`]: {
      // 다음 슬라이드
      transform: 'translateX(-10%) scale(0.714)',
    },
  },

  // tablet, mobile에서는 이전/이후 슬라이드 프리뷰 X
  '@media': {
    [media.belowDesktop]: {
      transform: 'none',
      transition: 'none',
      willChange: 'auto',

      selectors: {
        '&::after': {
          display: 'none',
        },
        [`${slide}[data-selected='true'] &`]: {
          transform: 'none',
        },
        [`${slide}[data-position='previous'] &`]: {
          transform: 'none',
        },
        [`${slide}[data-position='next'] &`]: {
          transform: 'none',
        },
      },
    },
    [media.tablet]: {
      height: '30.375rem',
    },
    [media.mobile]: {
      height: '33.4375rem',
    },
  },
});

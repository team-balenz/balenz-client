import { style } from '@vanilla-extract/css';
import { color, media } from '@/shared/styles';

/**
 * 세그먼트 전체 너비 및 gap 결정
 * tablet에서만 캐러셀 viewport가 명시적으로 39.875rem 고정 폭을 가짐 -> track도 고정 너비
 */
export const track = style({
  display: 'flex',
  width: '100%',
  gap: '0.75rem',
  margin: '0 auto',
  borderRadius: '0.75rem',

  '@media': {
    [media.tablet]: {
      width: '39.875rem',
    },
    [media.mobile]: {
      gap: '0.375rem',
    },
  },
});

export const segment = style({
  flex: '1 1 0',
  height: '0.1875rem',
  padding: 0,
  border: 0,
  borderRadius: '9999px',
  backgroundColor: 'rgba(255, 255, 255, 0.20)',
  cursor: 'pointer',
  transition: 'background-color 180ms ease, box-shadow 180ms ease',

  selectors: {
    "&[data-selected='true']": {
      backgroundColor: '#fff',
    },
    '&:focus-visible': {
      outline: `0.125rem solid ${color.brand.progressive}`,
      outlineOffset: '0.25rem',
    },
  },
});

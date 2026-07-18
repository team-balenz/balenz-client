/**
 * LikertOption 컴포넌트 스타일 관련 상수
 */

// 전체 원 크기
export const LIKERT_CIRCLE_SIZE = {
  large: {
    desktop: '6.25rem',
    tablet: '3.90625rem',
    mobile: '2.73438rem',
  },
  default: {
    desktop: '4.6875rem',
    tablet: '2.92969rem',
    mobile: '2.05081rem',
  },
} as const;

// 중심 작은 원 크기
export const LIKERT_CENTER_CIRCLE_SIZE = {
  desktop: '1.177rem',
  tablet: '0.73563rem',
  mobile: '0.51494rem',
} as const;

// 중심 원의 box shadow 크기 및 색상
export const LIKERT_BOX_SHADOW = {
  selected: {
    desktop: '0 0 0 0.70625rem #767A7F',
    tablet: '0 0 0 0.4412rem #767A7F',
    mobile: '0 0 0 0.3088rem #767A7F',
  },
  unselected: {
    desktop: '0 0 0 0.70625rem #F5F5F5',
    tablet: '0 0 0 0.4412rem #F5F5F5',
    mobile: '0 0 0 0.3088rem #F5F5F5',
  },
} as const;

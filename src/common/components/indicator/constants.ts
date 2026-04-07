import { color, typography } from '@/shared/styles';

/**
 * 이념 지표 관련 데이터 상수화
 */

// 이념 지표 옵션 리스트 (value, label)
export const IDEOLOGY_OPTIONS = [
  { value: 'SL', label: 'SL' },
  { value: 'L', label: 'L' },
  { value: 'C', label: 'C' },
  { value: 'R', label: 'R' },
  { value: 'SR', label: 'SR' },
] as const;

// 이념 지표 값 타입
export type IdeologyIndicatorValueTypes = (typeof IDEOLOGY_OPTIONS)[number]['value'];

//------------------------------------------------

/**
 * 이념 지표 관련 스타일 상수화
 */

// 이념 지표 색상 테마
export const IDEOLOGY_COLOR_THEME = {
  SL: color.brand.progressive,
  L: color.brand.progressive2,
  C: color.brand.center,
  R: color.brand.conservative2,
  SR: color.brand.conservative,
} as const;

// 이념 지표 컨테이너 flex gap — 데스크탑과 태블릿 공통
const IDEOLOGY_CONTAINER_GAP_DESKTOP_TABLET = {
  SMALL: '0.28rem',
  MEDIUM: '0.38rem',
  LARGE: '0.38rem',
} as const;

// 이념 지표 컨테이너 flex gap — 모바일
export const IDEOLOGY_CONTAINER_GAP_STYLE = {
  desktop: IDEOLOGY_CONTAINER_GAP_DESKTOP_TABLET,
  tablet: IDEOLOGY_CONTAINER_GAP_DESKTOP_TABLET,
  mobile: {
    EXTRA_SMALL: '0.28rem',
    SMALL: '0.23rem',
    MEDIUM: '0.38rem',
    LARGE: '0.38rem',
  },
} as const;

// 이념 지표 아이템 사이즈 스타일
export const IDEOLOGY_SIZE_STYLE = {
  mobile: {
    EXTRA_SMALL: { width: '1.6875rem', height: '1.25rem', ...typography.phone.caption },
    SMALL: { width: '1.875rem', height: '1.25rem', ...typography.phone.caption },
    MEDIUM: { width: '2.5rem', height: '1.3125rem', ...typography.phone.body3 },
    LARGE: { width: '2.8125rem', height: '1.5625rem', ...typography.phone.body3 },
  },
  tablet: {
    SMALL: { width: '1.6875rem', height: '1.25rem', ...typography.tablet.caption },
    MEDIUM: { width: '2.1875rem', height: '1.1875rem', ...typography.tablet.caption },
    LARGE: { width: '2.8125rem', height: '1.5625rem', ...typography.tablet.body3 },
  },
  desktop: {
    SMALL: { width: '1.6875rem', height: '1.25rem', ...typography.desktop.caption },
    MEDIUM: { width: '2.1875rem', height: '1.25rem', ...typography.desktop.caption },
    LARGE: { width: '2.8125rem', height: '1.5625rem', ...typography.desktop.body3 },
  },
} as const;

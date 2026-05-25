import { color } from '@/shared/styles/color.css';

export const SCOPE_PERCENT_BAR_COLORS = {
  progressive: color.brand.progressive,
  center: color.brand.center,
  conservative: color.brand.conservative,
} as const;

/**
 * 이념 퍼센트 분포 관련 스타일 상수화
 */

export const SCOPE_PERCENT_BAR_SIZE_STYLE = {
  mobile: {
    SMALL: { height: '0.9375rem', borderRadius: '0.1875rem' },
    LARGE: { height: '1.875rem', borderRadius: '0.3125rem' },
  },
  tablet: {
    SMALL: { height: '0.9375rem', borderRadius: '0.1875rem' },
    MEDIUM: { height: '0.9375rem', borderRadius: '0.1875rem' },
    LARGE: { height: '1.875rem', borderRadius: '0.3125rem' },
  },
  desktop: {
    SMALL: { height: '0.9375rem', borderRadius: '0.1875rem' },
    LARGE: { height: '1.875rem', borderRadius: '0.3125rem' },
  },
} as const;

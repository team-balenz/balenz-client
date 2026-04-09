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
    SMALL: { width: '14.375rem', height: '0.9375rem', borderRadius: '0.1875rem' },
    LARGE: { width: '21.875rem', height: '1.875rem', borderRadius: '0.3125rem' },
  },
  tablet: {
    SMALL: { width: '13.25rem', height: '0.9375rem', borderRadius: '0.1875rem' },
    MEDIUM: { width: '29.9375rem', height: '0.9375rem', borderRadius: '0.1875rem' },
    LARGE: { width: '43rem', height: '1.875rem', borderRadius: '0.3125rem' },
  },
  desktop: {
    SMALL: { width: '15.75rem', height: '0.9375rem', borderRadius: '0.1875rem' },
    LARGE: { width: '52.8125rem', height: '1.875rem', borderRadius: '0.3125rem' },
  },
} as const;

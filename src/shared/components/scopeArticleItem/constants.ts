import type { IdeologyType } from './types';

/**
 * ScopeArticleItem 컴포넌트의 상수
 */

export const IDEOLOGY_LABELS: Record<IdeologyType, string> = {
  value: '진보',
  neutral: '중도',
  norm: '보수',
} as const;

/**
 * size별 percentBarSize 매핑
 * small → small, large → medium
 */
export const PERCENT_BAR_SIZE_BY_ITEM_SIZE: Record<'small' | 'large', 'small' | 'medium'> = {
  small: 'small',
  large: 'medium',
} as const;

/**
 * ScopeArticleItem 컴포넌트의 상수
 */

export type IdeologyType = 'progressive' | 'center' | 'conservative';

export const IDEOLOGY_LABELS: Record<IdeologyType, string> = {
  progressive: '진보',
  center: '중도',
  conservative: '보수',
} as const;

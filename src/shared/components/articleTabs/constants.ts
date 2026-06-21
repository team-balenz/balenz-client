import type { BaseFrameType } from '@/shared/types/frame';

// 연관 기사 필터링 탭 상수
export const RELATED_ARTICLE_TAB_LIST = [
  { label: '전체', value: 'all' },
  { label: '진보', value: 'VALUE' },
  { label: '중도', value: 'NEUTRAL' },
  { label: '보수', value: 'NORM' },
] as const satisfies readonly ArticleTabItem<RelatedArticleTabValue>[];

// 검색 결과 필터링 탭 상수
export const SEARCH_TAB_LIST = [
  { label: 'SCOPE', value: 'scope' },
  { label: 'NEWS', value: 'news' },
] as const;

export type RelatedArticleTabValue = 'all' | BaseFrameType;
export type SearchTabValue = (typeof SEARCH_TAB_LIST)[number]['value'];
export type ArticleTabValue = RelatedArticleTabValue | SearchTabValue;

export type ArticleTabItem<T extends ArticleTabValue = ArticleTabValue> = {
  label: string;
  value: T;
};

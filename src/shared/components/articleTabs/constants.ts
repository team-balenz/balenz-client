// 연관 기사 필터링 탭 상수
export const RELATED_ARTICLE_TAB_LIST = [
  { label: '전체', value: 'all' },
  { label: '진보', value: 'progressive' },
  { label: '중도', value: 'center' },
  { label: '보수', value: 'conservative' },
] as const;

// 검색 결과 필터링 탭 상수
export const SEARCH_TAB_LIST = [
  { label: 'SCOPE', value: 'scope' },
  { label: 'NEWS', value: 'news' },
] as const;

export type RelatedArticleTabValue = (typeof RELATED_ARTICLE_TAB_LIST)[number]['value'];
export type SearchTabValue = (typeof SEARCH_TAB_LIST)[number]['value'];
export type ArticleTabValue = RelatedArticleTabValue | SearchTabValue;

export type ArticleTabItem<T extends ArticleTabValue = ArticleTabValue> = {
  label: string;
  value: T;
};

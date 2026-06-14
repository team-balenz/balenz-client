export const RELATED_ARTICLE_TAB_LIST = [
  { label: '전체', value: 'all' },
  { label: '진보', value: 'progressive' },
  { label: '중도', value: 'center' },
  { label: '보수', value: 'conservative' },
] as const;

export type ArticleTabValue = (typeof RELATED_ARTICLE_TAB_LIST)[number]['value'];

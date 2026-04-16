// articleItemType.ts
import { type IdeologyIndicatorValueTypes } from '@/common/components/indicator/constants';

// 아티클 아이템 기본 공통 타입 (default, compact, expanded 모두 사용)
export interface ArticleBaseTypes {
  articleId: number;
  mediaName: string;
  articleTitle: string;
  ideologyIndicatorValue: IdeologyIndicatorValueTypes;
  //   onArticleClick: (articleId: number) => void;
}

// expanded 타입에만 사용하는 타입
export interface ExpandedArticleExtraTypes {
  articlePublishedDate: string;
  articleSummary: string;
}

// default 타입 아이템 타입
export interface DefaultArticlePreviewItemTypes extends ArticleBaseTypes {
  renderType: 'default';
}

// compact 타입 아이템 타입
export interface CompactArticlePreviewItemTypes extends ArticleBaseTypes {
  renderType: 'compact';
}

// expanded 타입 아이템 타입
export interface ExpandedArticlePreviewItemTypes
  extends ArticleBaseTypes, ExpandedArticleExtraTypes {
  renderType: 'expanded';
}

// 아이템 타입 유니온 타입
export type ArticlePreviewItemTypes =
  | DefaultArticlePreviewItemTypes
  | CompactArticlePreviewItemTypes
  | ExpandedArticlePreviewItemTypes;

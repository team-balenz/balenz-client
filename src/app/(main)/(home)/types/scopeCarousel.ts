export type CategoryType = 'politics' | 'economy' | 'society' | 'world' | 'culture' | 'technology';

export interface ScopeCarouselDataType {
  id: number;
  articleCount: {
    neutral: number;
    neutralRatio: number;
    norm: number;
    normRatio: number;
    value: number;
    valueRatio: number;
  };
  name: string;
  normArticleTitle: string;
  normImageUrl: string;
  valueArticleTitle: string;
  valueImageUrl: string;
}

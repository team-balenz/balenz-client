export type CategoryType = 'politics' | 'economy' | 'society' | 'world' | 'culture' | 'technology';

export interface ArticleType {
  title: string;
  image: string;
}

export interface ScopeCarouselDataType {
  id: string;
  category: CategoryType;
  categoryLabel: string;
  articles: {
    progressive: ArticleType;
    conservative: ArticleType;
  };
}

export type IdeologyType = 'progressive' | 'conservative';
export type CategoryType = 'politics' | 'economy' | 'society' | 'world' | 'culture' | 'technology';

export interface ArticleType {
  title: string;
  image: string;
}

export interface ScopeCategoryType {
  id: string;
  category: CategoryType;
  categoryLabel: string;
  articles: {
    progressive: ArticleType;
    conservative: ArticleType;
  };
}

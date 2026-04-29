import {
  type ArticleBaseTypes,
  type ExpandedArticleExtraTypes,
} from '@/shared/types/articleItemType';

export type IdeologyType = 'progressive' | 'center' | 'conservative';

export interface RelatedArticleSectionGroupTypes {
  ideology: IdeologyType;
  articleItems: (ArticleBaseTypes & ExpandedArticleExtraTypes)[];
}

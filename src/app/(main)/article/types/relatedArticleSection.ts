import {
  type ArticleBaseTypes,
  type ExpandedArticleExtraTypes,
} from '@/shared/components/articlePreviewItem/types';

export type IdeologyType = 'progressive' | 'center' | 'conservative';

export interface RelatedArticleSectionGroupTypes {
  ideology: IdeologyType;
  articleItems: (ArticleBaseTypes & ExpandedArticleExtraTypes)[];
}

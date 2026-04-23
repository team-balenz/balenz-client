import { type ArticleBaseTypes } from '@/shared/types/articleItemType';

export type IdeologyType = 'progressive' | 'conservative';

export interface HotArticleSectionGroupTypes {
  ideology: IdeologyType;
  articleItems: ArticleBaseTypes[];
}

import { type ArticleBaseTypes } from '@/shared/types/articleItemType';

export type IdeologyType = 'progressive' | 'center' | 'conservative';

export interface ByIdeologySectionGroupTypes {
  ideology: IdeologyType;
  articleItems: ArticleBaseTypes[];
}

import { type ArticleBaseTypes } from '@/shared/components/articlePreviewItem/types';

export type IdeologyType = 'progressive' | 'center' | 'conservative';

export interface ByIdeologySectionGroupTypes {
  ideology: IdeologyType;
  articleItems: ArticleBaseTypes[];
}

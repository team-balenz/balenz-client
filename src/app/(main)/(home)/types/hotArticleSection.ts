import { type ArticleBaseTypes } from '@/shared/components/articlePreviewItem/types';

export type IdeologyType = 'progressive' | 'conservative';

export interface HotArticleSectionGroupTypes {
  ideology: IdeologyType;
  articleItems: ArticleBaseTypes[];
}

import { type ArticleBaseTypes } from '@/shared/components/articlePreviewItem/types';
import { BaseFrameType } from '@/shared/types/frame';

export interface ByIdeologySectionGroupTypes {
  ideology: BaseFrameType;
  articleItems: ArticleBaseTypes[];
}

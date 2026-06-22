import {
  type ArticleBaseTypes,
  type ExpandedArticleExtraTypes,
} from '@/shared/components/articlePreviewItem/types';

import { BaseFrameType } from '@/shared/types/frame';

export interface RelatedArticleSectionGroupTypes {
  ideology: BaseFrameType;
  articleItems: (ArticleBaseTypes & ExpandedArticleExtraTypes)[];
}

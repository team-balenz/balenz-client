import { type ArticleBaseTypes } from '@/shared/components/articlePreviewItem/types';

import { FrameSide } from '@/shared/types/frame';

export interface HotArticleSectionGroupTypes {
  ideology: FrameSide;
  articleItems: ArticleBaseTypes[];
}

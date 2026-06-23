import type { ArticleSummarySectionTypes } from '@/app/(main)/article/scope/[id]/types/articleSummarySection';
import { ScopeFrameType } from '@/shared/types/frame';

export interface ScopeDetailArticleCountTypes {
  neutral: number;
  neutralRatio: number;
  norm: number;
  normRatio: number;
  value: number;
  valueRatio: number;
}

export interface ScopeDetailTypes {
  id: number;
  name: string;
  imageUrl: string;
  date: string;
  viewCount: number;
  isScraped: boolean;
  keywordSummary: string;
  articleCount: ScopeDetailArticleCountTypes;
  bias: number;
  dominantFrameType: ScopeFrameType;
  mainArticles: ArticleSummarySectionTypes;
}

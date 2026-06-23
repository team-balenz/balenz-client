import { IdeologyFrameType } from '@/shared/types/frame';

export interface ArticleSummaryItemTypes {
  frameType: IdeologyFrameType;
  id: number;
  newsAgencyName: string;
  publishedAt?: string;
  title: string;
  summary: string;
}

export interface ArticleSummarySectionTypes {
  NEUTRAL: ArticleSummaryItemTypes;
  NORM: ArticleSummaryItemTypes;
  VALUE: ArticleSummaryItemTypes;
}

import { type IdeologyIndicatorValueTypes } from '@/common/components/indicator/constants';

export interface ArticleSummaryItemTypes {
  frameType: IdeologyIndicatorValueTypes;
  id: number;
  newsAgencyName: string;
  publishedAt?: string;
  title: string;
  summary: string;
}

export interface ArticleSummarySectionTypes {
  center: ArticleSummaryItemTypes;
  conservative: ArticleSummaryItemTypes;
  progressive: ArticleSummaryItemTypes;
}

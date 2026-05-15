import type { IdeologyIndicatorValueTypes } from '@/common/components/indicator/constants';

export interface LinkDetailTypes {
  id: number;
  title: string;
  newsAgencyName: string;
  publishedAt: string;
  frameType: IdeologyIndicatorValueTypes;
  summary: string;
  articleUrl: string;
  isScraped: boolean;
}

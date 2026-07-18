import { IdeologyFrameType } from '@/shared/types/frame';

export interface LinkDetailTypes {
  id: number;
  title: string;
  newsAgencyName: string;
  publishedAt: string;
  frameType: IdeologyFrameType;
  summary: string;
  articleUrl: string;
  isScraped: boolean;
}

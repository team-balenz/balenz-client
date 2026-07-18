import type { IdeologyFrameType } from '@/shared/types/frame';

export interface DailyFocusArticleData {
  id: number;
  newsAgencyName: string;
  title: string;
  summary: string;
  frameType: IdeologyFrameType;
}

export interface DailyFocusArticleCount {
  neutral: number;
  neutralRatio: number;
  norm: number;
  normRatio: number;
  value: number;
  valueRatio: number;
}

export interface DailyFocusCardData {
  id: number;
  imageUrl: string;
  name: string;
  summary: string;
  isScraped: boolean;
  articleCount: DailyFocusArticleCount;
  mainArticles: Record<string, DailyFocusArticleData>;
}

export interface DailyFocusData {
  articles: DailyFocusCardData[];
}

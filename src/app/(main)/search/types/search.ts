import { SearchArticlePreviewItemTypes } from '@/shared/components/articlePreviewItem/types';

// search 결과 list 중 NewsResultList에 해당하는 타입
export type NewsArticleItemData = {
  frameType: SearchArticlePreviewItemTypes['frameType'];
  id: number;
  newsAgencyName: string;
  title: string;
};

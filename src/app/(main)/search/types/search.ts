import { SearchArticlePreviewItemTypes } from '@/shared/types/articleItemType';

// search 결과 list 중 NewsResultList에 해당하는 타입
export type NewsArticleItemData = {
  frameType: SearchArticlePreviewItemTypes['frameType'];
  id: number;
  newsAgencyName: string;
  title: string;
};

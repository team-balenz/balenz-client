import { ScopeFrameType } from '@/shared/types/frame';

/**
 * ScopeArticleItem 컴포넌트에 전달되는 기사 아이템 데이터
 * @property articleCount - 프레임별 기사 수/비율
 * @property dominantFrameType - 대표 프레임 타입
 * @property id - 키워드 고유 식별자
 * @property imageUrl - 기사 이미지 URL
 * @property name - 키워드 (주제)
 */
export interface ScopeArticleItemData {
  articleCount: {
    neutral: number;
    neutralRatio: number;
    norm: number;
    normRatio: number;
    value: number;
    valueRatio: number;
  };
  dominantFrameType: ScopeFrameType;
  id: number;
  imageUrl: string;
  name: string;
}

/**
 * Ideology 타입
 */
export type IdeologyType = 'progressive' | 'center' | 'conservative';

/**
 * ScopeArticleItem 컴포넌트에 전달되는 기사 아이템 데이터
 * @property keywordId - 키워드 고유 식별자
 * @property imageUrl - 기사 이미지 URL
 * @property imageAlt - 이미지 대체 텍스트
 * @property keyword - 키워드 (주제)
 * @property ideology - 이념 (진보/중도/보수)
 * @property progressiveCount - 진보 성향 기사 수
 * @property centerCount - 중도 성향 기사 수
 * @property conservativeCount - 보수 성향 기사 수
 */
export interface ScopeArticleItemData {
  keywordId: string;
  imageUrl: string;
  imageAlt: string;
  keyword: string;
  ideology: IdeologyType;
  progressiveCount: number;
  centerCount: number;
  conservativeCount: number;
}

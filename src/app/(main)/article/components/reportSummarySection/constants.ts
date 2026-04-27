import type { IdeologyType } from '@/shared/components/scopeArticleItem/types';

// 중앙화 필요
export const IDEOLOGY_LABELS: Record<IdeologyType, string> = {
  progressive: '진보',
  center: '중도',
  conservative: '보수',
};

// 브레이크포인트별 레이블 상수
// desktop에 없는 항목(relatedArticle)은 해당 브레이크포인트에서 렌더링하지 않음
export const ITEM_LABELS = {
  desktop: {
    totalNews: '총 뉴스 수',
    progressive: '진보성향 기사 수',
    conservative: '보수성향 기사 수',
    center: '중도성향 기사 수',
    biasDist: '편향 분포',
  },
  tablet: {
    relatedArticle: '연관 기사 수',
    progressive: '진보 관점 기사 수',
    conservative: '보수 관점 기사 수',
    center: '중도 관점 기사 수',
    biasDist: '편향 분포',
  },
  mobile: {
    relatedArticle: '연관 기사',
    progressive: '진보 관점',
    conservative: '보수 관점',
    center: '중도 관점',
    biasDist: '편향 분포',
  },
} as const;

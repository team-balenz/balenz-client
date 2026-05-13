'use client';

import { Fragment } from 'react';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import type { IdeologyType } from '@/shared/components/scopeArticleItem/types';
import * as styles from './reportSummarySection.css';
import { IDEOLOGY_LABELS, ITEM_LABELS } from './constants';

/**
 * @property articleCount - 이념별 기사 수 데이터
 * @property bias - 편향 퍼센트 (0–100)
 * @property dominantFrameType - 편향 이념 (VALUE, NORM, NEUTRAL)
 * @property relatedArticleCount - 연관 기사 수 (선택적, tablet/mobile 전용)
 */
interface ReportSummarySectionPropTypes {
  articleCount: {
    neutral: number;
    neutralRatio: number;
    norm: number;
    normRatio: number;
    value: number;
    valueRatio: number;
  };
  bias: number;
  dominantFrameType: string;
  relatedArticleCount?: number;
}

const ReportSummarySection = ({
  articleCount,
  bias,
  dominantFrameType,
  relatedArticleCount,
}: ReportSummarySectionPropTypes) => {
  const breakpoint = useMediaQuery();
  const isMobile = breakpoint === 'mobile';

  const label = ITEM_LABELS[breakpoint];

  // 데이터 매핑
  const valueCount = articleCount.value;
  const normCount = articleCount.norm;
  const neutralCount = articleCount.neutral;
  const totalNewsCount = articleCount.value + articleCount.norm + articleCount.neutral;
  const biasPercentage = bias;

  // dominantFrameType을 IdeologyType으로 변환 (추후 통일)
  const biasIdeologyMap: Record<string, IdeologyType> = {
    VALUE: 'progressive',
    NORM: 'conservative',
    NEUTRAL: 'center',
  };
  const biasIdeology: IdeologyType = biasIdeologyMap[dominantFrameType] || 'center';

  // 숫자 값에 '건' 단위를 붙여 반환 — mobile 전용
  const countValue = (count: number) =>
    isMobile ? (
      <>
        {count}
        <span className={styles.unit}>건</span>
      </>
    ) : (
      count
    );

  const items: { label: string; value: React.ReactNode }[] = [
    // 연관 기사 수 — tablet/mobile 전용
    ...('relatedArticle' in label && relatedArticleCount !== undefined
      ? [{ label: label.relatedArticle, value: countValue(relatedArticleCount) }]
      : []),

    // 총 뉴스 수 — desktop 전용
    ...('totalNews' in label && totalNewsCount !== undefined
      ? [{ label: label.totalNews, value: totalNewsCount }]
      : []),

    // 이념 관점 기사 수
    { label: label.progressive, value: countValue(valueCount) },
    { label: label.conservative, value: countValue(normCount) },
    { label: label.center, value: countValue(neutralCount) },

    // 편향 분포
    {
      label: label.biasDist,
      value: isMobile ? (
        <>
          {biasPercentage}
          <span className={styles.unit}>%</span> {IDEOLOGY_LABELS[biasIdeology]}
        </>
      ) : (
        `${biasPercentage}% ${IDEOLOGY_LABELS[biasIdeology]}`
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>보도 세부사항</h2>

      <div className={styles.content}>
        {items.map((item, index) => (
          <Fragment key={`item-${index}`}>
            <div className={styles.item}>
              <p className={styles.label}>{item.label}</p>
              <div className={styles.value}>{item.value}</div>
            </div>
            {index < items.length - 1 && <div className={styles.divider} />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ReportSummarySection;

'use client';

import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import type { IdeologyType } from '@/shared/components/scopeArticleItem/types';
import * as styles from './reportSummarySection.css';
import { IDEOLOGY_LABELS, ITEM_LABELS } from './constants';

/**
 * @property totalNewsCount       - 총 뉴스 수
 * @property progressiveCount     - 진보성향 기사 수
 * @property conservativeCount    - 보수성향 기사 수
 * @property centerCount          - 중도성향 기사 수
 * @property biasIdeology         - 편향 이념
 * @property biasPercentage       - 편향 퍼센트 (0–100)
 * @property relatedArticleCount  - 연관 기사 수 (선택적, tablet/mobile 전용)
 */
interface ReportSummarySectionPropTypes {
  totalNewsCount: number;
  progressiveCount: number;
  conservativeCount: number;
  centerCount: number;
  biasIdeology: IdeologyType;
  biasPercentage: number;
  relatedArticleCount?: number;
}

const ReportSummarySection = ({
  totalNewsCount,
  progressiveCount,
  conservativeCount,
  centerCount,
  biasIdeology,
  biasPercentage,
  relatedArticleCount,
}: ReportSummarySectionPropTypes) => {
  const breakpoint = useMediaQuery();
  const isMobile = breakpoint === 'mobile';

  const label = ITEM_LABELS[breakpoint];

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
    ...('totalNews' in label ? [{ label: label.totalNews, value: totalNewsCount }] : []),

    // 이념 관점 기사 수
    { label: label.progressive, value: countValue(progressiveCount) },
    { label: label.conservative, value: countValue(conservativeCount) },
    { label: label.center, value: countValue(centerCount) },

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
          <>
            <div key={`item-${index}`} className={styles.item}>
              <p className={styles.label}>{item.label}</p>
              <div className={styles.value}>{item.value}</div>
            </div>
            {index < items.length - 1 && (
              <div key={`divider-${index}`} className={styles.divider} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default ReportSummarySection;

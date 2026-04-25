'use client';

import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import type { IdeologyType } from '@/shared/components/scopeArticleItem/types';
import * as styles from './reportSummarySection.css';

// 중앙화 필요
const IDEOLOGY_LABELS: Record<string, string> = {
  progressive: '진보',
  center: '중도',
  conservative: '보수',
};

/**
 * ReportSummarySection 컴포넌트에 전달되는 데이터
 * @property totalNewsCount - 총 뉴스 수
 * @property progressiveCount - 진보성향 기사 수
 * @property conservativeCount - 보수성향 기사 수
 * @property centerCount - 중도성향 기사 수
 * @property biasIdeology - 편향 이념 (진보/중도/보수)
 * @property biasPercentage - 편향 퍼센트 (0-100)
 * @property relatedArticleCount - 연관 기사 수 (선택적)
 */
export interface ReportSummarySectionData {
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
}: ReportSummarySectionData) => {
  const breakpoint = useMediaQuery();
  const isDesktop = breakpoint === 'desktop';
  const isTablet = breakpoint === 'tablet';
  const isMobile = breakpoint === 'mobile';

  // Tablet과 Mobile에서 단위 추가
  const formatCount = (count: number, unit: string = ''): string => {
    if (isDesktop) return count.toString();
    if (isTablet) return count.toString();
    if (isMobile) return `${count}${unit}`;
    return count.toString();
  };

  const renderItems = () => {
    const itemsToRender = [
      {
        label:
          !isDesktop && relatedArticleCount !== undefined
            ? isMobile
              ? '연관 기사'
              : '연관 기사 수'
            : null,
        value:
          !isDesktop && relatedArticleCount !== undefined ? (
            isMobile ? (
              <>
                {relatedArticleCount}
                <span className={styles.unit}>건</span>
              </>
            ) : (
              relatedArticleCount
            )
          ) : null,
      },
      {
        label: isDesktop ? '총 뉴스 수' : null,
        value: isDesktop ? formatCount(totalNewsCount, '') : null,
      },
      {
        label: isMobile ? '진보 관점' : isDesktop ? '진보성향 기사 수' : '진보 관점 기사 수',
        value:
          isMobile && progressiveCount > 0 ? (
            <>
              {formatCount(progressiveCount, '')}
              <span className={styles.unit}>건</span>
            </>
          ) : (
            formatCount(progressiveCount, '')
          ),
      },
      {
        label: isMobile ? '보수 관점' : isDesktop ? '보수성향 기사 수' : '보수 관점 기사 수',
        value:
          isMobile && conservativeCount > 0 ? (
            <>
              {formatCount(conservativeCount, '')}
              <span className={styles.unit}>건</span>
            </>
          ) : (
            formatCount(conservativeCount, '')
          ),
      },
      {
        label: isMobile ? '중도 관점' : isDesktop ? '중도성향 기사 수' : '중도 관점 기사 수',
        value:
          isMobile && centerCount > 0 ? (
            <>
              {formatCount(centerCount, '')}
              <span className={styles.unit}>건</span>
            </>
          ) : (
            formatCount(centerCount, '')
          ),
      },
      {
        label: '편향 분포',
        value: isMobile ? (
          <>
            {biasPercentage}
            <span className={styles.unit}>%</span> {IDEOLOGY_LABELS[biasIdeology]}
          </>
        ) : (
          `${biasPercentage}% ${IDEOLOGY_LABELS[biasIdeology]}`
        ),
      },
      {
        label: isDesktop && relatedArticleCount !== undefined ? '연관 기사 수' : null,
        value: isDesktop && relatedArticleCount !== undefined ? relatedArticleCount : null,
      },
    ].filter((item) => item.label !== null);

    return itemsToRender.flatMap((item, index) => {
      const elements = [
        <div key={`item-${index}`} className={styles.item}>
          <p className={styles.label}>{item.label}</p>
          {typeof item.value === 'string' ? (
            <p className={styles.value}>{item.value}</p>
          ) : (
            <div className={styles.value}>{item.value}</div>
          )}
        </div>,
      ];
      if (index < itemsToRender.length - 1) {
        elements.push(<div key={`divider-${index}`} className={styles.divider} />);
      }
      return elements;
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>보도 세부사항</h2>

      <div className={styles.content}>{renderItems()}</div>
    </div>
  );
};

export default ReportSummarySection;

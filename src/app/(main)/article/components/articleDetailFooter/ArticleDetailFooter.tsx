'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';

import BaseTooltip from '@/shared/components/baseTooltip/BaseTooltip';
import { useCanHover } from '@/shared/hooks/useCanHover';

import { TOOLTIP_CONTENT, TOOLTIP_TEXT } from './constants';
import ReportModal from '../reportModal/ReportModal';
import * as styles from './articleDetailFooter.css';

type TooltipKey = 'insights' | 'problem' | null;

const ArticleDetailFooter = () => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [openedTooltip, setOpenedTooltip] = useState<TooltipKey>(null);

  // 툴팁을 부모 영역 기준으로 렌더링/위치 보정하기 위한 DOM 요소
  const [tooltipBoundary, setTooltipBoundary] = useState<HTMLElement | null>(null);

  // ArticleDetailFooter의 실제 부모 DOM을 boundary로 저장
  const containerRef = useCallback((node: HTMLDivElement | null) => {
    setTooltipBoundary(node?.parentElement ?? null);
  }, []);

  const canHover = useCanHover();

  const insightsTrigger = (
    <div className={`${styles.tooltipContainer} ${styles.insightsTrigger}`}>
      <Image src="/icons/ic_info.svg" alt="info" width={20} height={20} />
      <p className={styles.tooltipText}>{TOOLTIP_TEXT.insights}</p>
    </div>
  );

  const reportTrigger = (
    <div
      className={`${styles.tooltipContainer} ${styles.reportTrigger}`}
      role="button"
      onClick={() => {
        setOpenedTooltip(null);
        setIsReportModalOpen(true);
      }}
    >
      <Image src="/icons/ic_tool.svg" alt="tool" width={20} height={20} />
      <p className={styles.tooltipText}>{TOOLTIP_TEXT.problem}</p>
    </div>
  );

  return (
    <div ref={containerRef} className={styles.container}>
      {/* boundary가 준비된 뒤에만 Tooltip 적용 */}
      {tooltipBoundary ? (
        <BaseTooltip
          open={openedTooltip === 'insights'}
          onOpenChange={(open) => setOpenedTooltip(open ? 'insights' : null)}
          collisionBoundary={tooltipBoundary}
          content={
            <>
              <span className={styles.insightsTooltipEmphasis}>
                {TOOLTIP_CONTENT.insights.emphasizedWord}
              </span>
              {TOOLTIP_CONTENT.insights.body}
            </>
          }
        >
          {insightsTrigger}
        </BaseTooltip>
      ) : (
        insightsTrigger
      )}

      {/* hover 가능한 환경에서만 problem tooltip 제공 */}
      {canHover && tooltipBoundary ? (
        <BaseTooltip
          open={openedTooltip === 'problem'}
          onOpenChange={(open) => setOpenedTooltip(open ? 'problem' : null)}
          collisionBoundary={tooltipBoundary}
          content={TOOLTIP_CONTENT.problem}
        >
          {reportTrigger}
        </BaseTooltip>
      ) : (
        reportTrigger
      )}

      <ReportModal open={isReportModalOpen} onOpenChange={setIsReportModalOpen} />
    </div>
  );
};

export default ArticleDetailFooter;

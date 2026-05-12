'use client';

import { useState } from 'react';
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

  const canHover = useCanHover();

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
    <div className={styles.container}>
      {/* insights tooltip (모바일에서도 터치로 열리게 유지) */}
      <BaseTooltip
        open={openedTooltip === 'insights'}
        onOpenChange={(open) => setOpenedTooltip(open ? 'insights' : null)}
        content={
          <>
            <span className={styles.insightsTooltipEmphasis}>
              {TOOLTIP_CONTENT.insights.emphasizedWord}
            </span>
            {TOOLTIP_CONTENT.insights.body}
          </>
        }
      >
        <div className={`${styles.tooltipContainer} ${styles.insightsTrigger}`}>
          <Image src="/icons/ic_info.svg" alt="info" width={20} height={20} />
          <p className={styles.tooltipText}>{TOOLTIP_TEXT.insights}</p>
        </div>
      </BaseTooltip>

      {/* problem tooltip (hover 가능한 환경에서만 tooltip 제공) */}
      {canHover ? (
        <BaseTooltip
          open={openedTooltip === 'problem'}
          onOpenChange={(open) => setOpenedTooltip(open ? 'problem' : null)}
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

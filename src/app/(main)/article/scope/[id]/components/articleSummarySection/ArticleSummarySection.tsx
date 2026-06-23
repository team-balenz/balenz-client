'use client';

import { useState } from 'react';

import FilterTabs from '@/common/components/filterTabs/FilterTabs';
import IdeologyIndicator from '@/common/components/indicator/IdeologyIndicator';

import { SUMMARY_CATEGORY_TABS } from '@/app/(main)/(home)/constants';
import { type ArticleSummarySectionTypes } from '@/app/(main)/article/scope/[id]/types/articleSummarySection';

import * as styles from './articleSummarySection.css';

interface ArticleSummarySectionPropTypes {
  mainArticles: ArticleSummarySectionTypes;
}

const ArticleSummarySection = ({ mainArticles }: ArticleSummarySectionPropTypes) => {
  const [summaryActiveKey, setSummaryActiveKey] = useState<string>('VALUE');
  const summaryItem = mainArticles[summaryActiveKey as keyof ArticleSummarySectionTypes];

  return (
    <div className={styles.container}>
      <FilterTabs
        tabs={SUMMARY_CATEGORY_TABS}
        activeKey={summaryActiveKey}
        onChange={setSummaryActiveKey}
        variant="summary"
      />
      {summaryItem && (
        <div key={summaryItem.id} className={styles.articleSummaryItemContainer}>
          <div className={styles.articleSummaryItemHeader}>
            <div>
              <div className={styles.newsAgencyName}>{summaryItem.newsAgencyName}</div>
              <div className={styles.title}>{summaryItem.title}</div>
            </div>
            <div className={styles.ideologyIndicatorContainer}>
              <IdeologyIndicator
                value={summaryItem.frameType}
                size={{ desktop: 'large', tablet: 'large', mobile: 'large' }}
              />
            </div>
          </div>
          <div className={styles.summary}>{summaryItem.summary}</div>
        </div>
      )}
    </div>
  );
};

export default ArticleSummarySection;

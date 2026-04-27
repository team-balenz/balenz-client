'use client';

import * as styles from './relatedArticleTabs.css';

import { RELATED_ARTICLE_TAB_LIST, type RelatedArticleTabValue } from './constants';

type RelatedArticleTabsProps = {
  activeTab: RelatedArticleTabValue;
  onChangeTab: (value: RelatedArticleTabValue) => void;
};

const RelatedArticleTabs = ({ activeTab, onChangeTab }: RelatedArticleTabsProps) => {
  return (
    <div className={styles.tabsWrapper} role="tablist" aria-label="관련 기사 이념 필터">
      {RELATED_ARTICLE_TAB_LIST.map((tab) => (
        <button
          key={tab.value}
          type="button"
          role="tab"
          aria-selected={tab.value === activeTab}
          className={styles.tab({ active: tab.value === activeTab })}
          onClick={() => onChangeTab(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default RelatedArticleTabs;

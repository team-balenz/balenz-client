'use client';

import * as styles from './articleTabs.css';

import { type ArticleTabItem, type ArticleTabValue } from './constants';

type ArticleTabsProps<T extends ArticleTabValue> = {
  tabs: readonly ArticleTabItem<T>[];
  activeTab: T;
  onTabChange: (value: T) => void;
  ariaLabel?: string;
};

const ArticleTabs = <T extends ArticleTabValue>({
  tabs,
  activeTab,
  onTabChange,
  ariaLabel = '기사 필터',
}: ArticleTabsProps<T>) => {
  return (
    <div className={styles.tabsWrapper} role="tablist" aria-label={ariaLabel}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          role="tab"
          aria-selected={tab.value === activeTab}
          className={styles.tab({ active: tab.value === activeTab })}
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ArticleTabs;

'use client';

import { useState } from 'react';
import FilterTabs from '@/common/components/filterTabs/FilterTabs';
import ScopeArticleItem from '@/shared/components/scopeArticleItem/ScopeArticleItem';
import { SCOPE_CATEGORY_TABS } from '../../constants';
import { MOCK_SCOPE_ARTICLES } from '@/mocks/data/home';
import * as styles from './scopeCategorySection.css';

const ScopeCategorySection = () => {
  const [scopeActiveKey, setScopeActiveKey] = useState<string>('all');

  const items = MOCK_SCOPE_ARTICLES[scopeActiveKey] ?? MOCK_SCOPE_ARTICLES['all'];

  return (
    <div className={styles.container}>
      <FilterTabs
        tabs={SCOPE_CATEGORY_TABS}
        activeKey={scopeActiveKey}
        onChange={setScopeActiveKey}
        variant="scope"
      />

      <div className={styles.itemSection}>
        <div className={styles.grid}>
          {items.map((item) => {
            const { id, ...itemProps } = item;
            return <ScopeArticleItem key={id} {...itemProps} size="small" percentBarSize="small" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ScopeCategorySection;

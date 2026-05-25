'use client';

import { useState } from 'react';
import FilterTabs from '@/common/components/filterTabs/FilterTabs';
import ScopeArticleItem from '@/shared/components/scopeArticleItem/ScopeArticleItem';
import { SCOPE_CATEGORY_TABS } from '../../constants';
import { MOCK_SCOPE_ARTICLES } from '@/mocks/data/home';
import * as styles from './scopeCategorySection.css';

const ScopeCategorySection = () => {
  const [scopeActiveKey, setScopeActiveKey] = useState<string>('all');

  // 실제 백엔드 API 연동 시 구조 변경 예정 필요 (현재 카테고리 key를 인덱스로 배열 조회)
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
            const { keywordId, ...itemProps } = item;
            return (
              <ScopeArticleItem key={keywordId} keywordId={keywordId} {...itemProps} size="small" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScopeCategorySection;

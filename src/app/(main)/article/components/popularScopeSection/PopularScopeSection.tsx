'use client';

import ScopeArticleItem from '@/shared/components/scopeArticleItem/ScopeArticleItem';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { SCOPE_ALL_ITEMS } from '@/mocks/data/home';
import * as styles from './popularScopeSection.css';

const PopularScopeSection = () => {
  const breakpoint = useMediaQuery();
  const itemSize = breakpoint === 'tablet' ? 'large' : 'small';
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>인기 SCOPE</h2>

      <ul className={styles.list}>
        {SCOPE_ALL_ITEMS.map((item) => (
          <li key={item.keywordId}>
            <ScopeArticleItem {...item} size={itemSize} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularScopeSection;

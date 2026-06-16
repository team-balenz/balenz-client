'use client';

import * as styles from './scopeResultList.css';

import ScopeArticleItem from '@/shared/components/scopeArticleItem/ScopeArticleItem';
import type { ScopeArticleItemData } from '@/shared/components/scopeArticleItem/types';

interface ScopeResultListPropTypes {
  items: ScopeArticleItemData[];
}

const ScopeResultList = ({ items }: ScopeResultListPropTypes) => {
  return (
    <section className={styles.section}>
      <ul className={styles.articlesContainer}>
        {items.map((article) => (
          <li key={article.id} className={styles.articleItem}>
            <ScopeArticleItem {...article} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ScopeResultList;

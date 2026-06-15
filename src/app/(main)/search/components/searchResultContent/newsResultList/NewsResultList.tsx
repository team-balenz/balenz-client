'use client';

import * as styles from './newsResultList.css';

import ArticlePreviewItem from '@/shared/components/articlePreviewItem/ArticlePreviewItem';
import type { SearchArticlePreviewItemTypes } from '@/shared/types/articleItemType';

interface NewsListPropTypes {
  items: SearchArticlePreviewItemTypes[];
}

const NewsList = ({ items }: NewsListPropTypes) => {
  return (
    <section className={styles.section}>
      <div className={styles.tabsContainer}>
        <div className={styles.articlesContainer}>
          {items.map((article) => (
            <div key={article.articleId} className={styles.articleItem}>
              <ArticlePreviewItem {...article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsList;

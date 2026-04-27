'use client';
import { useState } from 'react';

import * as styles from './relatedArticleSection.css';
import RelatedArticleTabs from '../relatedArticleTabs/RelatedArticleTabs';
import type { RelatedArticleTabValue } from '../relatedArticleTabs/constants';

import ArticlePreviewItem from '@/shared/components/articlePreviewItem/ArticlePreviewItem';
import { RELATED_ARTICLE_SECTION_DATA } from '@/mocks/data/home';

const RelatedArticleSection = () => {
  const [selectedIdeology, setSelectedIdeology] = useState<RelatedArticleTabValue>('all');

  const handleIdeologyChange = (ideology: RelatedArticleTabValue) => {
    setSelectedIdeology(ideology);
    console.log(ideology);
  };

  const articleItems = RELATED_ARTICLE_SECTION_DATA.flatMap((item) => item.articleItems);
  const relatedArticleCount = articleItems.length;

  return (
    <section className={styles.section}>
      <div className={styles.tabsContainer}>
        <p className={styles.desktopTitle}>
          연관기사 <span className={styles.desktopCount}>{relatedArticleCount}</span>
        </p>
        <p className={styles.mobileTitle}>연관 기사</p>
        <RelatedArticleTabs activeTab={selectedIdeology} onTabChange={handleIdeologyChange} />
      </div>
      <div className={styles.articlesContainer}>
        {articleItems.map((article) => (
          <div key={article.articleId} className={styles.articleItem}>
            <ArticlePreviewItem {...article} renderType="expanded" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticleSection;

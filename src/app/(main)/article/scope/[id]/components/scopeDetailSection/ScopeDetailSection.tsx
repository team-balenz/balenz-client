import * as styles from './scopeDetailSection.css';

import ArticleDetailThumbnail from '@/app/(main)/article/components/articleDetailThumbnail/ArticleDetailThumbnail';
import ScopeDetailHeader from '../scopeDetailHeader/ScopeDetailHeader';
import ScopeDetailBody from '../scopeDetailBody/ScopeDetailBody';
import ArticleSummarySection from '../articleSummarySection/ArticleSummarySection';
import ArticleDetailFooter from '@/app/(main)/article/components/articleDetailFooter/ArticleDetailFooter';

import { SCOPE_DETAIL_MOCK } from '@/mocks/data/scopeDetail';

const ScopeDetailSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroStack}>
        <div className={styles.thumbHeaderStack}>
          <ArticleDetailThumbnail
            imageUrl={SCOPE_DETAIL_MOCK.imageUrl}
            progressiveCount={SCOPE_DETAIL_MOCK.articleCount.value}
            centerCount={SCOPE_DETAIL_MOCK.articleCount.neutral}
            conservativeCount={SCOPE_DETAIL_MOCK.articleCount.norm}
          />
          <ScopeDetailHeader
            name={SCOPE_DETAIL_MOCK.name}
            date={SCOPE_DETAIL_MOCK.date}
            viewCount={SCOPE_DETAIL_MOCK.viewCount}
            isScraped={SCOPE_DETAIL_MOCK.isScraped}
            id={SCOPE_DETAIL_MOCK.id}
          />
        </div>
        <ScopeDetailBody
          keywordName={SCOPE_DETAIL_MOCK.name}
          keywordSummary={SCOPE_DETAIL_MOCK.keywordSummary}
          articleCount={SCOPE_DETAIL_MOCK.articleCount}
          bias={SCOPE_DETAIL_MOCK.bias}
          dominantFrameType={SCOPE_DETAIL_MOCK.dominantFrameType}
        />
      </div>
      <ArticleSummarySection mainArticles={SCOPE_DETAIL_MOCK.mainArticles} />
      <ArticleDetailFooter />
    </div>
  );
};

export default ScopeDetailSection;

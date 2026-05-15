import LinkDetailHeader from '../linkDetailHeader/LinkDetailHeader';
import LinkDetailBody from '../linkDetailBody/LinkDetailBody';
import ArticleDetailFooter from '@/app/(main)/article/components/articleDetailFooter/ArticleDetailFooter';

import * as styles from './linkDetailSection.css';
import { LINK_DETAIL_MOCK } from '@/mocks/data/linkDetail';

const LinkDetailSection = () => {
  return (
    <div className={styles.container}>
      <LinkDetailHeader
        id={LINK_DETAIL_MOCK.id}
        title={LINK_DETAIL_MOCK.title}
        newsAgencyName={LINK_DETAIL_MOCK.newsAgencyName}
        publishedAt={LINK_DETAIL_MOCK.publishedAt}
        frameType={LINK_DETAIL_MOCK.frameType}
        isScraped={LINK_DETAIL_MOCK.isScraped}
      />
      <div className={styles.bodyContainer}>
        <LinkDetailBody
          summary={LINK_DETAIL_MOCK.summary}
          articleUrl={LINK_DETAIL_MOCK.articleUrl}
        />
      </div>
      <div className={styles.footerContainer}>
        <ArticleDetailFooter />
      </div>
    </div>
  );
};

export default LinkDetailSection;

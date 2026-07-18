import * as styles from './page.css';

import RelatedArticleSection from '../../components/relatedArticleSection/RelatedArticleSection';
import LinkDetailSection from './components/linkDetailSection/LinkDetailSection';
import PopularScopeSection from '../../components/popularScopeSection/PopularScopeSection';

export default function LinkArticlePage() {
  return (
    <div className={styles.linkDetailLayout}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <LinkDetailSection />
          <RelatedArticleSection />
        </div>
        <div className={styles.rightSection}>
          <div className={styles.adSection}>파워링크 ad</div>
          <PopularScopeSection />
        </div>
      </div>
    </div>
  );
}

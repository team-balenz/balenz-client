import * as styles from './page.css';

import ScopeDetailSection from './components/scopeDetailSection/ScopeDetailSection';

import RelatedArticleSection from '../../components/relatedArticleSection/RelatedArticleSection';
import ReportSummarySection from '../../components/reportSummarySection/ReportSummarySection';
import PopularScopeSection from '../../components/popularScopeSection/PopularScopeSection';

import { SCOPE_DETAIL_MOCK } from '@/mocks/data/scopeDetail';

export default function ScopeArticlePage() {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.leftSection}>
          <ScopeDetailSection />

          <RelatedArticleSection />
        </div>

        <div className={styles.rightSection}>
          <div className={styles.reportSummaryWrapper}>
            <ReportSummarySection
              articleCount={SCOPE_DETAIL_MOCK.articleCount}
              bias={SCOPE_DETAIL_MOCK.bias}
              dominantFrameType={SCOPE_DETAIL_MOCK.dominantFrameType}
            />
          </div>

          <div className={styles.adSection}>파워링크 ad</div>

          <PopularScopeSection />
        </div>
      </div>
    </div>
  );
}

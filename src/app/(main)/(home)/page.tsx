'use client';

import ByIdeologySection from './components/ByIdeologySection/ByIdeologySection';
import DailyFocusSection from './components/dailyFocusSection/DailyFocusSection';
import HotArticleSection from './components/hotArticleSection/HotArticleSection';
import HotIssueSection from './components/hotIssueSection/HotIssueSection';
import ScopeSection from './components/scopeSection/ScopeSection';
import * as styles from './page.css';

export default function Home() {
  return (
    <div className={styles.homeLayout}>
      <div className={styles.topSection}>
        <div className={styles.scopeSection}>
          <ScopeSection />
        </div>
        <div className={styles.adDailyColumn}>
          <div className={styles.ad1Section}>ad</div>
          <div className={styles.dailyFocusSection}>
            <DailyFocusSection />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.ideologyTestCTA}></div>
          <div className={styles.ad2Section}>ad</div>
          <div className={styles.hotArticleSection}>
            <HotArticleSection />
          </div>
          <div className={styles.ad2Section}>ad</div>
        </div>
        <div className={styles.hotIssueSection}>
          <HotIssueSection />
        </div>
      </div>
      <div className={styles.bottomSection}>
        <ByIdeologySection />
      </div>
    </div>
  );
}

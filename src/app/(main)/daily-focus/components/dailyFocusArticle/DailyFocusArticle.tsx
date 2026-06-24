import IdeologyIndicator from '@/common/components/indicator/IdeologyIndicator';

import * as styles from './dailyFocusArticle.css';
import type { DailyFocusArticleData } from '../../types/types';

const DailyFocusArticle = ({
  newsAgencyName,
  title,
  summary,
  frameType,
}: Omit<DailyFocusArticleData, 'id'>) => {
  return (
    <div className={styles.container}>
      <div className={styles.articleHeader}>
        <div className={styles.newsAgencyName}>{newsAgencyName}</div>

        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.indicatorWrapper}>
        <IdeologyIndicator
          value={frameType}
          size={{ desktop: 'small', tablet: 'small', mobile: 'small' }}
        />
      </div>

      <div className={styles.summary}>{summary}</div>
    </div>
  );
};

export default DailyFocusArticle;

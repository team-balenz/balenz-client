import Image from 'next/image';

import ScopePercentBar from '@/common/components/percentBar/ScopePercentBar';

import * as styles from './dailyFocusHeader.css';
import type { DailyFocusArticleCount } from '../../types/types';

interface DailyFocusHeaderPropTypes {
  imageUrl: string;
  name: string;
  articleCount: DailyFocusArticleCount;
}

const DailyFocusHeader = (props: DailyFocusHeaderPropTypes) => {
  const { imageUrl, name, articleCount } = props;
  const { valueRatio, neutralRatio, normRatio } = articleCount;

  return (
    <div className={styles.container}>
      <Image src={imageUrl} alt={`${name} 주제 키워드 이미지`} fill className={styles.image} />

      <div className={styles.overlay}>
        <h2 className={styles.keyword}>{name}</h2>

        <div className={styles.barWrapper}>
          <ScopePercentBar
            valueRatio={valueRatio}
            neutralRatio={neutralRatio}
            normRatio={normRatio}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default DailyFocusHeader;

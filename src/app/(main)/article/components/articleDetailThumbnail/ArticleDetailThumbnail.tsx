'use client';

import Image from 'next/image';
import ScopePercentBar from '@/common/components/percentBar/ScopePercentBar';
import * as styles from './articleDetailThumbnail.css';

interface ArticleDetailThumbnailPropTypes {
  imageUrl: string;
  progressiveCount: number;
  centerCount: number;
  conservativeCount: number;
  imageAlt?: string;
}

const ArticleDetailThumbnail = ({
  imageUrl,
  progressiveCount,
  centerCount,
  conservativeCount,
  imageAlt = '아티클 썸네일',
}: ArticleDetailThumbnailPropTypes) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 100vw"
            priority
          />
        ) : (
          <div className={styles.fallback} />
        )}
      </div>

      <div className={styles.barContainer}>
        <ScopePercentBar
          progressivePercent={progressiveCount}
          centerPercent={centerCount}
          conservativePercent={conservativeCount}
          size="large"
        />
      </div>
    </div>
  );
};

export default ArticleDetailThumbnail;

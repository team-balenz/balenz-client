'use client';

import Image from 'next/image';
import ScopePercentBar from '@/common/components/percentBar/ScopePercentBar';
import * as styles from './articleDetailThumbnail.css';

interface ArticleDetailThumbnailPropTypes {
  imageUrl: string;
  valueRatio: number;
  neutralRatio: number;
  normRatio: number;
  imageAlt?: string;
}

const ArticleDetailThumbnail = ({
  imageUrl,
  valueRatio,
  neutralRatio,
  normRatio,
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
            sizes="100vw"
            priority
          />
        ) : (
          <div className={styles.fallback} />
        )}
      </div>

      <div className={styles.barContainer}>
        <ScopePercentBar
          valueRatio={valueRatio}
          neutralRatio={neutralRatio}
          normRatio={normRatio}
          size="large"
        />
      </div>
    </div>
  );
};

export default ArticleDetailThumbnail;

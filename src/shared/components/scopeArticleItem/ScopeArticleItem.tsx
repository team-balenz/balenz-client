'use client';

import Image from 'next/image';
import ScopePercentBar from '@/common/components/percentBar/ScopePercentBar';
import { IDEOLOGY_LABELS, type IdeologyType } from './constants';
import * as styles from './scopeArticleItem.css';

export interface ScopeArticleItemPropTypes {
  imageUrl: string;
  imageAlt: string;
  title: string;
  ideology: IdeologyType;
  progressiveCount: number;
  centerCount: number;
  conservativeCount: number;
  size?: 'small' | 'large';
  percentBarSize?: 'small' | 'medium' | 'large';
}

const ScopeArticleItem = ({
  imageUrl,
  imageAlt,
  title,
  ideology,
  progressiveCount,
  centerCount,
  conservativeCount,
  size = 'small',
  percentBarSize = 'small',
}: ScopeArticleItemPropTypes) => {
  const description = `에 대해 ${IDEOLOGY_LABELS[ideology]} 관점으로 보도된 기사가 더 많습니다.`;

  return (
    <div className={styles.container({ size })}>
      <div className={styles.contentWrapper}>
        {/* 이미지 */}
        <div className={styles.imageWrapper({ size })}>
          <Image src={imageUrl} alt={imageAlt} width={192} height={160} className={styles.image} />
        </div>

        {/* 텍스트 콘텐츠 */}
        <div className={styles.textContent({ size })}>
          <div className={styles.header}>
            <p className={styles.category({ size })}>SCOPE</p>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description({ size })}>{description}</p>
          </div>

          {/* 퍼센트 바 */}
          <ScopePercentBar
            progressivePercent={progressiveCount}
            centerPercent={centerCount}
            conservativePercent={conservativeCount}
            size={percentBarSize}
          />
        </div>
      </div>
    </div>
  );
};

export default ScopeArticleItem;

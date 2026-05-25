'use client';

import Image from 'next/image';
import ScopePercentBar from '@/common/components/percentBar/ScopePercentBar';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { IDEOLOGY_LABELS, PERCENT_BAR_SIZE_BY_ITEM_SIZE } from './constants';
import type { ScopeArticleItemData } from '@/shared/components/scopeArticleItem/types';
import * as styles from './scopeArticleItem.css';

interface ScopeArticleItemPropTypes extends ScopeArticleItemData {
  size?: 'small' | 'large';
}

const ScopeArticleItem = ({
  imageUrl,
  imageAlt,
  keyword,
  ideology,
  progressiveCount,
  centerCount,
  conservativeCount,
  size = 'small',
}: ScopeArticleItemPropTypes) => {
  const percentBarSize = PERCENT_BAR_SIZE_BY_ITEM_SIZE[size];
  const breakpoint = useMediaQuery();

  // desktop 또는 tablet이면서 size가 large일 때만 "프레이밍한"/"성향으로", 나머지는 "보도된"/"관점으로"
  const isLargeOnDesktopTablet =
    breakpoint === 'desktop' || (breakpoint === 'tablet' && size === 'large');

  const description = isLargeOnDesktopTablet
    ? `에 대해 ${IDEOLOGY_LABELS[ideology]} 성향으로 프레이밍한 기사가 더 많습니다.`
    : `에 대해 ${IDEOLOGY_LABELS[ideology]} 관점으로 보도된 기사가 더 많습니다.`;

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
            <h3 className={styles.title}>{keyword}</h3>
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

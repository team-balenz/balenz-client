'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import ScopePercentBar from '@/common/components/percentBar/ScopePercentBar';
import { ROUTES } from '@/shared/constants/route';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import type { ScopeArticleItemData } from '@/shared/components/scopeArticleItem/types';

import { IDEOLOGY_LABELS, PERCENT_BAR_SIZE_BY_ITEM_SIZE } from './constants';
import * as styles from './scopeArticleItem.css';

interface ScopeArticleItemPropTypes extends ScopeArticleItemData {
  size?: 'small' | 'large';
}

const ScopeArticleItem = ({
  articleCount,
  dominantFrameType,
  id,
  imageUrl,
  name,
  size = 'small',
}: ScopeArticleItemPropTypes) => {
  const router = useRouter();
  const percentBarSize = PERCENT_BAR_SIZE_BY_ITEM_SIZE[size];
  const breakpoint = useMediaQuery();
  const { valueRatio, neutralRatio, normRatio } = articleCount;

  const usesFramingDescription =
    breakpoint === 'desktop' || (breakpoint === 'tablet' && size === 'large');

  const description =
    dominantFrameType === 'BALANCED'
      ? '에 대한 기사가 다양한 관점에서 균형 있게 보도되었습니다.'
      : usesFramingDescription
        ? `에 대해 ${IDEOLOGY_LABELS[dominantFrameType]} 성향으로 프레이밍한 기사가 더 많습니다.`
        : `에 대해 ${IDEOLOGY_LABELS[dominantFrameType]} 관점으로 보도된 기사가 더 많습니다.`;

  return (
    <div
      className={styles.container({ size })}
      onClick={() => router.push(ROUTES.SCOPE_DETAIL(id))}
    >
      <div className={styles.contentWrapper}>
        {/* 이미지 */}
        <div className={styles.imageWrapper({ size })}>
          <Image
            src={imageUrl}
            alt={`${name} 이미지`}
            width={192}
            height={160}
            className={styles.image}
          />
        </div>

        {/* 텍스트 콘텐츠 */}
        <div className={styles.textContent({ size })}>
          <div className={styles.header}>
            <p className={styles.category({ size })}>SCOPE</p>
            <h3 className={styles.title}>{name}</h3>
            <p className={styles.description({ size })}>{description}</p>
          </div>

          {/* 퍼센트 바 */}
          <ScopePercentBar
            valueRatio={valueRatio}
            neutralRatio={neutralRatio}
            normRatio={normRatio}
            size={percentBarSize}
          />
        </div>
      </div>
    </div>
  );
};

export default ScopeArticleItem;

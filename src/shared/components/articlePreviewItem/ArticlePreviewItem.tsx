'use client';

import { useRouter } from 'next/navigation';

import { ROUTES } from '@/shared/constants/route';
import IdeologyIndicator from '@/common/components/indicator/IdeologyIndicator';
import { type IdeologyIndicatorResponsiveSizeTypes } from '@/common/components/indicator/types';
import { type ArticlePreviewItemTypes } from '@/shared/types/articleItemType';

import * as styles from './articlePreviewItem.css';

/**
 * @description 기사 미리보기 아이템 컴포넌트에서 사용하는 기사 성향 아이콘 사이즈 매핑
 */
const IDEOLOGY_INDICATOR_SIZE_BY_RENDER_TYPE: Record<
  ArticlePreviewItemTypes['renderType'],
  IdeologyIndicatorResponsiveSizeTypes
> = {
  default: { desktop: 'medium', tablet: 'medium', mobile: 'medium' },
  compact: { desktop: 'small', tablet: 'small', mobile: 'extraSmall' },
  expanded: { desktop: 'medium', tablet: 'medium', mobile: 'medium' },
};

const ArticlePreviewItem = (props: ArticlePreviewItemTypes) => {
  const router = useRouter();
  const { renderType, articleId, mediaName, articleTitle, frameType } = props;

  return (
    <div
      className={styles.articlePreviewWrapper({ renderType })}
      role="button"
      onClick={() => router.push(ROUTES.LINK_DETAIL(articleId))}
    >
      <div className={styles.articleContentWrapper({ renderType })}>
        <div className={styles.metaRow}>
          <span className={styles.metaRowText}>{mediaName}</span>
          {renderType === 'expanded' && props.articlePublishedDate && (
            <>
              <span className={styles.metaRowText}>•</span>
              <span className={styles.metaRowText}>{props.articlePublishedDate}</span>
            </>
          )}
        </div>
        <p className={styles.articleTitle({ renderType })}>{articleTitle}</p>
        {renderType === 'expanded' && props.articleSummary && (
          <p className={styles.articleSummary}>{props.articleSummary}</p>
        )}
      </div>
      <div className={styles.ideologyIndicatorWrapper}>
        <IdeologyIndicator
          value={frameType}
          size={IDEOLOGY_INDICATOR_SIZE_BY_RENDER_TYPE[renderType]}
        />
      </div>
    </div>
  );
};

export default ArticlePreviewItem;

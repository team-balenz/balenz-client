'use client';

import * as styles from './articlePreviewItem.css';
import IdeologyIndicator from '@/common/components/indicator/IdeologyIndicator';
import { type IdeologyIndicatorResponsiveSizeTypes } from '@/common/components/indicator/types';
import { type ArticlePreviewItemTypes } from '@/shared/types/articleItemType';

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
  const { renderType, articleId, mediaName, articleTitle, ideologyIndicatorValue } = props;

  const handleClickArticle = () => {
    console.log('[ArticlePreviewItem] 기사 상세 페이지로 이동 예정', { articleId });
  };

  return (
    <div
      className={styles.articlePreviewWrapper({ renderType })}
      role="button"
      onClick={handleClickArticle}
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
          value={ideologyIndicatorValue}
          size={IDEOLOGY_INDICATOR_SIZE_BY_RENDER_TYPE[renderType]}
        />
      </div>
    </div>
  );
};

export default ArticlePreviewItem;

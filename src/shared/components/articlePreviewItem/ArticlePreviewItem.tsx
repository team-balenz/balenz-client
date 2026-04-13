'use client';

import * as styles from './articlePreviewItem.css';
import { type IdeologyIndicatorValueTypes } from '@/common/components/indicator/constants';
import IdeologyIndicator from '@/common/components/indicator/IdeologyIndicator';
import { type IdeologyIndicatorResponsiveSizeTypes } from '@/common/components/indicator/types';

interface ArticlePreviewItemPropTypes {
  renderType: 'default' | 'compact' | 'expanded'; // default(언론사명, 제목, 지표) / compact(default와 동일, 좁은 영역용) / expanded(언론사명, 날짜, 제목, 요약, 지표)
  articleId: number;
  mediaName: string;
  articlePublishedDate?: string; // 선택적 속성 (expanded 타입에만 사용)
  articleTitle: string;
  articleSummary?: string; // 선택적 속성 (expanded 타입에만 사용)
  ideologyIndicatorValue: IdeologyIndicatorValueTypes;
  onArticleClick: (articleId: number) => void;
}

/**
 * @description 기사 미리보기 아이템 컴포넌트에서 사용하는 기사 성향 아이콘 사이즈 매핑
 */
const IDEOLOGY_INDICATOR_SIZE_BY_RENDER_TYPE: Record<
  ArticlePreviewItemPropTypes['renderType'],
  IdeologyIndicatorResponsiveSizeTypes
> = {
  default: { desktop: 'medium', tablet: 'medium', mobile: 'medium' },
  compact: { desktop: 'small', tablet: 'small', mobile: 'extraSmall' },
  expanded: { desktop: 'medium', tablet: 'medium', mobile: 'medium' },
};

const ArticlePreviewItem = ({
  renderType,
  articleId,
  mediaName,
  articlePublishedDate,
  articleTitle,
  articleSummary,
  ideologyIndicatorValue,
  onArticleClick,
}: ArticlePreviewItemPropTypes) => {
  const handleClickArticle = () => {
    onArticleClick(articleId);
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
          {renderType === 'expanded' && articlePublishedDate && (
            <>
              <span className={styles.metaRowText}>•</span>
              <span className={styles.metaRowText}>{articlePublishedDate}</span>
            </>
          )}
        </div>
        <p className={styles.articleTitle({ renderType })}>{articleTitle}</p>
        {renderType === 'expanded' && articleSummary && (
          <p className={styles.articleSummary}>{articleSummary}</p>
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

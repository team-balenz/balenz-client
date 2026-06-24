'use client';

import ContentActionButton from '@/shared/components/contentActionButton/ContentActionButton';
import {
  CONTENT_ACTION_ICON_PATH,
  CONTENT_ACTION_TEXT,
} from '@/shared/components/contentActionButton/constants';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { useScrapToast } from '@/shared/hooks/useScrapToast';

import * as styles from './articleDetailActions.css';

interface ArticleDetailActionsPropTypes {
  isScraped: boolean;
  onShareClick: () => void;
  onScrapClick: () => void;
}

const ArticleDetailActions = ({
  isScraped,
  onShareClick,
  onScrapClick,
}: ArticleDetailActionsPropTypes) => {
  const breakpoint = useMediaQuery();
  const { toast, handleScrapClick } = useScrapToast({ isScraped, onScrapClick });
  const shareButtonText =
    breakpoint === 'mobile' ? CONTENT_ACTION_TEXT.share.mobile : CONTENT_ACTION_TEXT.share.default;
  const scrapButtonText =
    breakpoint === 'mobile'
      ? CONTENT_ACTION_TEXT.scrap.mobile
      : isScraped
        ? CONTENT_ACTION_TEXT.scrap.cancel
        : CONTENT_ACTION_TEXT.scrap.create;
  const bookmarkIconPath = isScraped
    ? CONTENT_ACTION_ICON_PATH.bookmarkFilled
    : CONTENT_ACTION_ICON_PATH.bookmarkOutlined;

  return (
    <div className={styles.container}>
      <ContentActionButton
        iconSrc={CONTENT_ACTION_ICON_PATH.share}
        label={shareButtonText}
        aria-label="공유하기"
        onClick={onShareClick}
      />
      <div className={styles.scrapButtonContainer}>
        <ContentActionButton
          iconSrc={bookmarkIconPath}
          label={scrapButtonText}
          aria-label={isScraped ? '스크랩 취소' : '스크랩하기'}
          aria-pressed={isScraped}
          onClick={handleScrapClick}
        />
        {toast && (
          <div key={toast.id} className={styles.scrapToast} role="status" aria-live="polite">
            {toast.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleDetailActions;

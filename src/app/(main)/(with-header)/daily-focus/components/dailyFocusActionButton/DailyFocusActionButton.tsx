'use client';

import DefaultButton from '@/common/components/defaultButton/DefaultButton';
import ContentActionButton from '@/shared/components/contentActionButton/ContentActionButton';
import {
  CONTENT_ACTION_ICON_PATH,
  CONTENT_ACTION_TEXT,
} from '@/shared/components/contentActionButton/constants';
import { useScrapToast } from '@/shared/hooks/useScrapToast';

import * as styles from './dailyFocusActionButton.css';

interface DailyFocusActionButtonPropTypes {
  isScraped: boolean;
  onDetailClick: () => void;
  onShareClick: () => void;
  onScrapClick: () => void;
}

const DailyFocusActionButton = ({
  isScraped,
  onDetailClick,
  onShareClick,
  onScrapClick,
}: DailyFocusActionButtonPropTypes) => {
  const { toast, handleScrapClick } = useScrapToast({ isScraped, onScrapClick });
  const bookmarkIconPath = isScraped
    ? CONTENT_ACTION_ICON_PATH.bookmarkFilled
    : CONTENT_ACTION_ICON_PATH.bookmarkOutlined;

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <ContentActionButton
          variant="filled"
          iconSrc={CONTENT_ACTION_ICON_PATH.share}
          label={CONTENT_ACTION_TEXT.share.default}
          aria-label="공유하기"
          onClick={onShareClick}
        />
        <ContentActionButton
          variant="filled"
          iconSrc={bookmarkIconPath}
          label={isScraped ? CONTENT_ACTION_TEXT.scrap.cancel : CONTENT_ACTION_TEXT.scrap.create}
          aria-label={isScraped ? '스크랩 취소' : '스크랩하기'}
          aria-pressed={isScraped}
          onClick={handleScrapClick}
        />
      </div>

      <DefaultButton label="더 자세히 보기" onClick={onDetailClick} variant="compact" />

      {toast && (
        <div key={toast.id} className={styles.scrapToast} role="status" aria-live="polite">
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default DailyFocusActionButton;

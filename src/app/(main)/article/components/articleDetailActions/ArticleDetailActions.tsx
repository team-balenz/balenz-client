'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

import { BUTTON_TEXT, ICON_PATH, TOAST_DURATION_MS, TOAST_MESSAGE } from './constants';
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
  // 버튼 텍스트 구분을 위해 모바일 환경인지 확인
  const breakpoint = useMediaQuery();

  // 토스트 메시지 상태: 스크랩 성공 또는 취소 메시지 표시
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // 토스트 메시지 타이머 리프: 토스트 메시지 지속 시간 관리 (2초)
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 공유 아이콘 경로
  const shareIconPath = ICON_PATH.share;

  // 스크랩 아이콘 경로
  const bookmarkIconPath = isScraped ? ICON_PATH.bookmarkFilled : ICON_PATH.bookmarkOutlined;

  // 공유 버튼 텍스트
  const shareButtonText =
    breakpoint === 'mobile' ? BUTTON_TEXT.share.mobile : BUTTON_TEXT.share.default;

  // 스크랩 버튼 텍스트
  const scrapButtonText =
    breakpoint === 'mobile'
      ? BUTTON_TEXT.scrap.mobile
      : isScraped
        ? BUTTON_TEXT.scrap.cancel
        : BUTTON_TEXT.scrap.create;

  /**
   * 스크랩 버튼 클릭 핸들러
   * 스크랩 성공 또는 취소 메시지 표시 및 토스트 메시지 지속 시간 관리
   */
  const handleScrapClick = () => {
    onScrapClick();
    setToastMessage(isScraped ? TOAST_MESSAGE.scrapCancelSuccess : TOAST_MESSAGE.scrapSuccess);

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, TOAST_DURATION_MS);
  };

  /**
   * 토스트 메시지 타이머 리프: 토스트 메시지 지속 시간 관리 (2초)
   * 토스트 메시지 지속 시간 만료 시 토스트 메시지 제거
   */
  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <button className={styles.actionButton} onClick={onShareClick}>
        <Image
          className={styles.actionIcon}
          src={shareIconPath}
          width={24}
          height={24}
          alt="share"
        />
        <span className={styles.actionText}>{shareButtonText}</span>
      </button>
      <div className={styles.scrapButtonContainer}>
        <button className={styles.actionButton} onClick={handleScrapClick}>
          <Image
            className={styles.actionIcon}
            src={bookmarkIconPath}
            width={24}
            height={24}
            alt="bookmark"
          />
          <span className={styles.actionText}>{scrapButtonText}</span>
        </button>
        {toastMessage && (
          <div className={styles.scrapToast} role="status" aria-live="polite">
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleDetailActions;

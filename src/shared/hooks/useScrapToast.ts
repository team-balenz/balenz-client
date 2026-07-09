'use client';

import { useEffect, useRef, useState } from 'react';

const TOAST_DURATION_MS = 2000;

const TOAST_MESSAGE = {
  scrapSuccess: '콘텐츠가 스크랩되었습니다.',
  scrapCancelSuccess: '콘텐츠 스크랩이 취소되었습니다.',
} as const;

interface ToastStateTypes {
  id: number;
  message: string;
}

interface UseScrapToastParams {
  isScraped: boolean;
  onScrapClick: () => void;
}

export const useScrapToast = ({ isScraped, onScrapClick }: UseScrapToastParams) => {
  const [toast, setToast] = useState<ToastStateTypes | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleScrapClick = () => {
    onScrapClick();

    setToast((prevToast) => ({
      id: (prevToast?.id ?? 0) + 1,
      message: isScraped ? TOAST_MESSAGE.scrapCancelSuccess : TOAST_MESSAGE.scrapSuccess,
    }));

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = setTimeout(() => {
      setToast(null);
    }, TOAST_DURATION_MS);
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  return { toast, handleScrapClick };
};

'use client';

import { useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as styles from './bottomSheet.css';

/**
 * 바텀시트 닫기 임계값 (px)
 * 사용자가 100px 이상 드래그하면 자동으로 닫힘
 */
const CLOSE_THRESHOLD = 100;

interface BottomSheetPropTypes {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BottomSheet = ({ children, open, onOpenChange }: BottomSheetPropTypes) => {
  // 드래그 시작 Y좌표 저장
  const startYRef = useRef(0);

  // 현재 드래그 거리 (UI 업데이트용)
  const [dragOffset, setDragOffset] = useState(0);

  // 마우스 이벤트에서 최신 드래그 거리 추적
  const dragOffsetRef = useRef(0);

  // 터치 시작
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startYRef.current = e.touches[0].clientY;
  };

  // 터치 이동 (실시간 업데이트)
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const currentY = e.touches[0].clientY;
    const delta = currentY - startYRef.current;

    if (delta > 0) {
      setDragOffset(delta);
    }
  };

  // 터치 종료
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const currentY = e.changedTouches[0].clientY;
    const delta = currentY - startYRef.current;

    if (delta > CLOSE_THRESHOLD) {
      onOpenChange(false);
    }

    setDragOffset(0);
  };

  // 마우스 시작
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    startYRef.current = e.clientY;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const delta = moveEvent.clientY - startYRef.current;

      if (delta > 0) {
        dragOffsetRef.current = delta;
        setDragOffset(delta);
      }
    };

    const handleMouseUp = () => {
      if (dragOffsetRef.current > CLOSE_THRESHOLD) {
        onOpenChange(false);
      }

      dragOffsetRef.current = 0;
      setDragOffset(0);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content
          className={styles.bottomSheet}
          style={
            dragOffset > 0
              ? ({
                  transform: `translateY(${dragOffset}px)`,
                  transition: 'none',
                } as React.CSSProperties)
              : undefined
          }
        >
          <Dialog.Title className={styles.hiddenTitle}>BottomSheet</Dialog.Title>

          {/* 핸들 */}
          <div
            role="button"
            tabIndex={0}
            aria-label="닫기"
            className={styles.handle}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenChange(false);
              }
            }}
          />
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BottomSheet;

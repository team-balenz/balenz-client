'use client';

import React from 'react';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import * as Tooltip from '@radix-ui/react-tooltip';

import * as styles from './baseTooltip.css';

interface BaseTooltipPropTypes {
  children: React.ReactNode;
  content: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  collisionBoundary?: Element | null;
}

const BaseTooltip = ({
  children,
  content,
  open,
  onOpenChange,
  collisionBoundary,
}: BaseTooltipPropTypes) => {
  const breakpoint = useMediaQuery();
  const isMobileOrTablet = breakpoint === 'mobile' || breakpoint === 'tablet';

  const tooltipContent = (
    <Tooltip.Content
      className={styles.content}
      side="top"
      sideOffset={7}
      // 툴팁 위치가 지정한 영역 밖으로 벗어나지 않도록 보정
      collisionBoundary={collisionBoundary ?? undefined}
      onPointerDownOutside={() => onOpenChange(false)}
      onEscapeKeyDown={() => onOpenChange(false)}
    >
      {content}

      <Tooltip.Arrow asChild width={27} height={15}>
        <svg className={styles.arrow} viewBox="0 0 21 11" aria-hidden>
          <path
            className={styles.arrowPath}
            d="M9.51854 10.5828C9.90572 10.9554 10.5181 10.9554 10.9053 10.5828L20.1152 1.72058C20.7639 1.09639 20.322 0 19.4218 0H1.00202C0.101813 0 -0.340024 1.09639 0.308646 1.72058L9.51854 10.5828Z"
          />
        </svg>
      </Tooltip.Arrow>
    </Tooltip.Content>
  );

  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root open={open} onOpenChange={onOpenChange}>
        <Tooltip.Trigger
          asChild
          onPointerDown={(e) => {
            if (!isMobileOrTablet) return;

            // 모바일/태블릿에서는 터치로 tooltip toggle
            e.preventDefault();
            onOpenChange(!open);
          }}
        >
          {children}
        </Tooltip.Trigger>

        {/* Tooltip.Content를 body가 아닌 지정한 부모 영역 내부에 렌더링 */}
        <Tooltip.Portal container={collisionBoundary ?? undefined}>{tooltipContent}</Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default BaseTooltip;

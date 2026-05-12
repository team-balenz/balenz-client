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
}

const BaseTooltip = ({ children, content, open, onOpenChange }: BaseTooltipPropTypes) => {
  const breakpoint = useMediaQuery();
  const collisionPadding = breakpoint === 'desktop' ? 80 : breakpoint === 'tablet' ? 40 : 20;

  const isMobileOrTablet = breakpoint === 'mobile' || breakpoint === 'tablet';

  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root open={open} onOpenChange={onOpenChange}>
        <Tooltip.Trigger
          asChild
          onPointerDown={(e) => {
            if (!isMobileOrTablet) return;

            // Radix가 focus 이벤트로 다시 열어버리는 걸 막음
            e.preventDefault();

            // toggle
            onOpenChange(!open);
          }}
        >
          {children}
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            className={styles.content}
            side="top"
            sideOffset={7}
            collisionPadding={collisionPadding}
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
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default BaseTooltip;

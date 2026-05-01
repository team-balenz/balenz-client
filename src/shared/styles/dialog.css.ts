/**
 * Radix UI의 Dialog 컴포넌트를 기반으로 하는
 * BaseModal, BottomSheet에서 사용되는 공통 css
 */

import { style, keyframes } from '@vanilla-extract/css';

/**
 * 페이드인 애니메이션
 */
export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

/**
 * overlay 스타일
 */
export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(17, 17, 17, 0.5)',
  zIndex: 1000,
  animation: `${fadeIn} 0.2s ease-out`,
});

/**
 * hiddenTitle (Dialog 내부 Title 숨기기)
 */
export const hiddenTitle = style({
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
});

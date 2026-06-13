import { style, keyframes } from '@vanilla-extract/css';
import { color, zIndex } from '@/shared/styles';
export { overlay, hiddenTitle } from '@/shared/styles/dialog.css';

/**
 * 바텀시트 올라오는 애니메이션
 */
const slideUp = keyframes({
  from: { transform: 'translateY(100%)' },
  to: { transform: 'translateY(0)' },
});

/**
 * 바텀시트
 * - 화면 하단에서 올라옴
 * - 모바일 친화적
 * - 최대 80% 높이
 */
export const bottomSheet = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: color.brand.background,
  borderRadius: '0.3125rem 0.3125rem 0 0',
  boxShadow: '0 0 10px 0 rgba(28, 35, 43, 0.20)',
  maxHeight: '80vh',
  overflowY: 'auto',
  zIndex: zIndex.dialogContent,
  outline: 'none',
  animation: `${slideUp} 0.3s ease-out`,
  WebkitOverflowScrolling: 'touch',
  touchAction: 'pan-y',
  transition: 'transform 0.3s ease-out',
});

/**
 * 바텀시트 핸들
 * - 상단 중앙에 위치
 * - 드래그 / 키보드 모두 지원
 */
export const handle = style({
  width: '3.125rem',
  height: '0.25rem',
  borderRadius: '3.125rem',
  backgroundColor: color.brand.gray2,
  margin: '0.75rem auto',
  cursor: 'grab',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'none',
  willChange: 'transform',

  ':active': {
    cursor: 'grabbing',
  },
  ':focus-visible': {
    outline: `2px solid ${color.brand.gray2}`,
    outlineOffset: '4px',
    borderRadius: '3.125rem',
  },
  '@media': {
    '(pointer: coarse)': {
      ':focus-visible': {
        outline: 'none',
      },
    },
  },
});

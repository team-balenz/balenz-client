import { style } from '@vanilla-extract/css';
import { fadeIn } from '@/shared/styles/dialog.css';
import { media, color, zIndex } from '@/shared/styles';
export { overlay, hiddenTitle } from '@/shared/styles/dialog.css';

export const content = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: color.brand.background,
  borderRadius: '0.3125rem',
  boxShadow: ' 0 0 10px 0 rgba(28, 35, 43, 0.20)',
  maxHeight: '90vh',
  overflowY: 'auto',
  zIndex: zIndex.dialogContent,
  outline: 'none',
  animation: `${fadeIn} 0.3s ease-out`,
  width: '39.25rem',

  '@media': {
    [media.tablet]: {
      width: '37.9375rem',
    },
    [media.mobile]: {
      width: '90%',
    },
  },
});

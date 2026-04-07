import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles/media';
import { color, typography } from '@/shared/styles';

export const defaultButton = style({
  ...typography.desktop.body2,
  display: 'flex',
  padding: '10px 15px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '5px',
  backgroundColor: color.brand.main,
  color: color.brand.background,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',

  ':disabled': {
    backgroundColor: color.text.disabled,
    cursor: 'not-allowed',
  },

  '@media': {
    [media.tablet]: {
      ...typography.tablet.body2,
    },
    [media.mobile]: {
      ...typography.phone.body2,
    },
  },
});

import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles/media';
import { color, typography } from '@/shared/styles';

export const defaultButton = style({
  ...typography.desktop.body2,
  display: 'flex',
  padding: '0.625rem 0.9375rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',
  borderRadius: '0.3125rem',
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
      ...typography.phone.button,
    },
  },
});

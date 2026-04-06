import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles/media';
import { color, typography } from '@/shared/styles';

export const defaultButton = style({
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

  // ...typography.desktop.button (누락)
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '150%',

  ':disabled': {
    backgroundColor: color.text.disabled,
    cursor: 'not-allowed',
  },

  '@media': {
    [media.tablet]: {
      ...typography.tablet.button,
    },
    [media.mobile]: {
      ...typography.phone.button,
    },
  },
});

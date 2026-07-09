import { keyframes, style } from '@vanilla-extract/css';

import { color, media, typography, zIndex } from '@/shared/styles';

const toastFadeInOut = keyframes({
  '0%': {
    opacity: 0,
    marginTop: '0.375rem',
  },
  '15%': {
    opacity: 1,
    marginTop: '0',
  },
  '85%': {
    opacity: 1,
    marginTop: '0',
  },
  '100%': {
    opacity: 0,
    marginTop: '-0.25rem',
  },
});

export const container = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const buttonContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.94rem',
});

export const scrapToast = style({
  ...typography.correction,
  ...typography.desktop.body2,
  backgroundColor: color.brand.main,
  color: color.text.inverse,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '0.3125rem',
  padding: '1.25rem 1.875rem',
  whiteSpace: 'nowrap',
  zIndex: zIndex.toast,
  animation: `${toastFadeInOut} 2s ease-in-out forwards`,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.body2,
    },
    [media.mobile]: {
      ...typography.phone.body2,
    },
  },
});

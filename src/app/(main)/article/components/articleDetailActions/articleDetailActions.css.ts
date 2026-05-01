import { style } from '@vanilla-extract/css';
import { color, typography, media, zIndex } from '@/shared/styles';

export const container = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '2.19rem',
  '@media': {
    [media.tablet]: {
      gap: '1.56rem',
    },
    [media.mobile]: {
      gap: '0.94rem',
    },
  },
});

export const actionButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  '@media': {
    [media.mobile]: {
      gap: '0.19rem',
    },
  },
});

export const scrapButtonContainer = style({
  position: 'relative',
});

export const actionIcon = style({
  width: '1.5rem',
  height: '1.5rem',
  '@media': {
    [media.mobile]: {
      width: '1.125rem',
      height: '1.125rem',
    },
  },
});

export const scrapToast = style({
  ...typography.correction,
  ...typography.desktop.body2,
  backgroundColor: color.brand.main,
  color: color.text.inverse,
  position: 'absolute',
  top: 'calc(100% + 0.62rem)',
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '0.3125rem',
  padding: '1.25rem 1.875rem',
  whiteSpace: 'nowrap',
  zIndex: zIndex.toast,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.body2,
      top: 'calc(100% + 0.62rem)',
      left: '100%',
      transform: 'translateX(-100%)',
    },
    [media.mobile]: {
      ...typography.phone.body2,
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
});

export const actionText = style({
  ...typography.correction,
  ...typography.desktop.h4,
  color: color.text.tertiary,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.h4,
    },
    [media.mobile]: {
      ...typography.phone.body2,
    },
  },
});

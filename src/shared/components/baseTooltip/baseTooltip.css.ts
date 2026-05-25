import { style } from '@vanilla-extract/css';
import { color, typography, media, zIndex } from '@/shared/styles';

export const content = style({
  ...typography.correction,
  ...typography.desktop.body2,
  color: color.text.inverse,
  zIndex: zIndex.toast,
  backgroundColor: color.brand.main,
  padding: '1.25rem 1.875rem',
  borderRadius: '0.3125rem',
  whiteSpace: 'pre-line',
  '@media': {
    [media.tablet]: {
      ...typography.tablet.body2,
    },
    [media.mobile]: {
      ...typography.phone.body2,
    },
  },
});

export const arrow = style({
  color: color.brand.main,
  display: 'block',
  width: '1.6875rem',
  height: '0.9375rem',
  transform: 'translateY(-2px)',
});

export const arrowPath = style({
  fill: 'currentColor',
});

export const trigger = style({
  all: 'unset',
  cursor: 'pointer',
});

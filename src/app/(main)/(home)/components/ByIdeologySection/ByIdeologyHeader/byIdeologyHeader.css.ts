import { style } from '@vanilla-extract/css';
import { color, typography, media } from '@/shared/styles';

export const container = style({
  width: '100%',
  padding: '0.625rem 0 0.625rem 0.9375rem',
});

export const title = style({
  ...typography.correction,
  ...typography.desktop.h3,
  color: color.brand.background,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.h3,
    },
    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

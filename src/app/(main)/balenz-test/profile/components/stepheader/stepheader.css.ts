import { style } from '@vanilla-extract/css';
import { color, typography, media } from '@/shared/styles';

export const container = style({
  textAlign: 'center',
});
export const section = style({
  ...typography.desktop.h3,
  color: color.text.tertiary,
  marginBottom: '0.3125rem',
  '@media': {
    [media.tablet]: {
      ...typography.tablet.h3,
    },
    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});
export const title = style({
  ...typography.desktop.display,
  color: color.text.main,
  wordBreak: 'keep-all',
  '@media': {
    [media.tablet]: {
      ...typography.tablet.display,
    },
    [media.mobile]: {
      ...typography.phone.display,
    },
  },
});

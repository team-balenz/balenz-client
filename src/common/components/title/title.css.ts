import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles/media';
import { typography, color } from '@/shared/styles';

export const subtitleStyle = style({
  ...typography.correction,
  ...typography.desktop.h3,
  color: color.text.tertiary,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.h3,
    },
    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

export const titleStyle = style({
  ...typography.correction,
  ...typography.desktop.h1,
  color: color.text.main,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.h1,
    },
    [media.mobile]: {
      ...typography.phone.h1,
    },
  },
});

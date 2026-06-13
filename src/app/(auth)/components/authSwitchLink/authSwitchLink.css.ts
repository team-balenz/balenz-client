import { style } from '@vanilla-extract/css';

import { color, typography, media } from '@/shared/styles';

export const container = style({
  ...typography.desktop.body3,
  color: color.text.disabled,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.4rem',
  '@media': {
    [media.tablet]: {
      ...typography.tablet.body3,
    },
    [media.mobile]: {
      ...typography.phone.body3,
    },
  },
});

export const link = style({
  ...typography.desktop.body3,
  color: color.text.main,
  textDecoration: 'underline',
  '@media': {
    [media.tablet]: {
      ...typography.tablet.button,
    },
    [media.mobile]: {
      ...typography.phone.button,
    },
  },
});

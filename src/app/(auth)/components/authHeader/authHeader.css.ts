import { style } from '@vanilla-extract/css';
import { color, media, typography } from '@/shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const logoImg = style({
  marginBottom: '0.94rem',
  paddingLeft: '0.37rem',
  '@media': {
    [media.tablet]: {
      paddingLeft: '0.38rem',
    },
    [media.mobile]: {
      paddingLeft: '0.04rem',
    },
  },
});

export const title = style({
  ...typography.correction,
  ...typography.desktop.display,
  color: color.text.main,
  marginBottom: '0.19rem',
  '@media': {
    [media.tablet]: {
      ...typography.tablet.display,
    },
    [media.mobile]: {
      ...typography.phone.display,
    },
  },
});

export const description = style({
  ...typography.correction,
  ...typography.desktop.h3,
  color: color.text.disabled,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.h3,
    },
    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

import { style } from '@vanilla-extract/css';
import { color, media, typography } from '@/shared/styles';

export const page = style({
  paddingTop: '1.87rem',
  color: color.text.inverse,
  backgroundColor: '#111',

  '@media': {
    [media.mobile]: {
      padding: '1.87rem 1.25rem',
    },
  },
});

export const intro = style({
  width: '47rem',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.44rem',

  '@media': {
    [media.tablet]: {
      width: '39.875rem',
    },
    [media.mobile]: {
      width: '100%',
    },
  },
});

export const subtitle = style({
  ...typography.desktop.h3,
  ...typography.correction,
  color: '#D9D9D9',
  margin: 0,

  '@media': {
    [media.tablet]: typography.tablet.h3,
    [media.mobile]: typography.phone.h3,
  },
});

export const title = style({
  ...typography.desktop.display,

  '@media': {
    [media.tablet]: {
      ...typography.tablet.display,
    },
    [media.mobile]: {
      ...typography.phone.display,
    },
  },
});

import { style } from '@vanilla-extract/css';
import { color, typography, media } from '@/shared/styles';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  cursor: 'pointer',
});

export const imageWrapper = style({
  position: 'relative',
  width: '100%',
  height: '7.875rem',
  overflow: 'hidden',
  borderRadius: '0.3125rem',
});

export const image = style({
  objectFit: 'cover',
});

export const articleTitle = style({
  ...typography.correction,
  ...typography.desktop.h4,
  color: color.text.main,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  '@media': {
    [media.tablet]: {
      ...typography.tablet.h4,
    },
    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

export const mediaName = style({
  ...typography.desktop.body3,
  color: color.text.tertiary,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.body3,
    },
    [media.mobile]: {
      ...typography.phone.body3,
    },
  },
});

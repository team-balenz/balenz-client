import { style } from '@vanilla-extract/css';
import { color, typography, media } from '@/shared/styles';

export const container = style({
  margin: '2.5rem',
  minWidth: 'max-content',
  padding: '0.9375rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '1.25rem',
  boxShadow: '0 0 2px 0 rgba(17, 17, 17, 0.20)',
  borderRadius: '0.3125rem',
});

export const iconWrapper = style({
  position: 'relative',
  width: '2rem',
  height: '2rem',
  '@media': {
    [media.tablet]: {
      width: '1.625rem',
      height: '1.625rem',
    },
    [media.mobile]: {
      width: '1.25rem',
      height: '1.25rem',
    },
  },
});

export const icon = style({
  objectFit: 'contain',
});

export const keyword = style({
  ...typography.correction,
  ...typography.desktop.h3,
  color: color.text.main,
  whiteSpace: 'nowrap',
  '@media': {
    [media.tablet]: {
      ...typography.tablet.h3,
    },
    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

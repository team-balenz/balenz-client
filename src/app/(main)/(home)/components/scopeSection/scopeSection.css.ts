import { color, media, typography } from '@/shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const scopeContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8125rem',

  '@media': {
    [media.tablet]: {
      gap: '1.3125rem',
    },
    [media.mobile]: {
      gap: '1.25rem',
    },
  },
});

export const moreButtonWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '1.9375rem',

  '@media': {
    [media.tablet]: {
      marginTop: '0',
    },
    [media.mobile]: {
      marginTop: '1.75rem',
    },
  },
});

export const moreButton = style({
  border: 'none',
  backgroundColor: 'transparent',
  ...typography.desktop.body3,
  color: color.text.tertiary,
  cursor: 'pointer',
  padding: '0',
  display: 'flex',
  alignItems: 'center',
  gap: '0.1875rem',
  transition: 'opacity 0.2s ease-in-out',

  ':hover': {
    opacity: 0.7,
  },

  '@media': {
    [media.mobile]: {
      ...typography.phone.body2,
    },
  },
});

export const arrow = style({
  width: '1.25rem',
  height: '1.25rem',

  '@media': {
    [media.mobile]: {
      width: '1.125rem',
      height: '1.125rem',
    },
  },
});

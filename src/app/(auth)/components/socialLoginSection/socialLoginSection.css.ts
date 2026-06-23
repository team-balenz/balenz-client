import { style } from '@vanilla-extract/css';

import { color, media, typography } from '@/shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.94rem',
  width: '100%',
});

export const divider = style({
  ...typography.desktop.body3,
  color: color.text.disabled,

  display: 'flex',
  alignItems: 'center',
  gap: '0.94rem',
  whiteSpace: 'nowrap',

  selectors: {
    '&::before, &::after': {
      content: '',
      flex: 1,
      height: '0.0625rem',
      backgroundColor: color.brand.gray2,
    },
  },
});

export const buttonContainer = style({
  display: 'flex',
  gap: '1.44rem',

  '@media': {
    [media.tablet]: {
      gap: '1.5rem',
    },

    [media.mobile]: {
      gap: '0.75rem',
    },
  },
});

export const socialButton = style({
  ...typography.desktop.body3,

  position: 'relative',

  flex: 1,
  height: '3.125rem',
  paddingInline: '1.25rem',

  border: 'none',
  borderRadius: '0.3125rem',
  cursor: 'pointer',

  '@media': {
    [media.belowDesktop]: {
      ...typography.tablet.body3,
    },
  },
});

export const buttonContent = style({
  display: 'grid',
  gridTemplateColumns: '18px 1fr',
  alignItems: 'center',
  width: '100%',
  height: '100%',

  '@media': {
    [media.mobile]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
  },
});

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const buttonText = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const naverButton = style({
  backgroundColor: '#03A94D',
  color: '#FFFFFF',
});

export const kakaoButton = style({
  backgroundColor: '#FEE500',
  color: 'rgba(0, 0, 0, 0.85)',
});

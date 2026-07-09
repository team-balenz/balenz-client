import { style, styleVariants } from '@vanilla-extract/css';

import { color, media, typography } from '@/shared/styles';

const actionButtonBase = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const actionButton = styleVariants({
  plain: [
    actionButtonBase,
    {
      gap: '0.5rem',
      '@media': {
        [media.mobile]: {
          gap: '0.19rem',
        },
      },
    },
  ],
  filled: [
    actionButtonBase,
    {
      gap: '0.31rem',
      padding: '0.5rem 0.625rem',
      backgroundColor: color.brand.gray1,
      borderRadius: '0.3125rem',
    },
  ],
});

const actionIconBase = style({
  flexShrink: 0,
});

export const actionIcon = styleVariants({
  plain: [
    actionIconBase,
    {
      width: '1.5rem',
      height: '1.5rem',
      '@media': {
        [media.mobile]: {
          width: '1.125rem',
          height: '1.125rem',
        },
      },
    },
  ],
  filled: [
    actionIconBase,
    {
      width: '0.9375rem',
      height: '0.9375rem',
    },
  ],
});

const actionTextBase = style({
  color: color.text.tertiary,
  whiteSpace: 'nowrap',
});

export const actionText = styleVariants({
  plain: [
    actionTextBase,
    {
      ...typography.correction,
      ...typography.desktop.h4,
      '@media': {
        [media.tablet]: {
          ...typography.tablet.h4,
        },
        [media.mobile]: {
          ...typography.phone.body2,
        },
      },
    },
  ],
  filled: [
    actionTextBase,
    {
      ...typography.desktop.caption,
      '@media': {
        [media.tablet]: {
          ...typography.correction,
          ...typography.tablet.caption,
        },
        [media.mobile]: {
          ...typography.correction,
          ...typography.phone.caption,
        },
      },
    },
  ],
});

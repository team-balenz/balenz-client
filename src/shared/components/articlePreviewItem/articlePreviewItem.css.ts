import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { color, typography, media } from '@/shared/styles';

export const articlePreviewWrapper = recipe({
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },

  variants: {
    renderType: {
      default: {
        padding: '1.25rem 0 2.19rem',
        gap: '0.5rem',
        '@media': {
          [media.belowDesktop]: {
            padding: '1.25rem 0',
            gap: '1.25rem',
          },
        },
      },
      compact: {
        padding: '1.25rem 0 2.19rem',
        gap: '0.5rem',
        '@media': {
          [media.belowDesktop]: {
            padding: '0',
            gap: '0.94rem',
          },
        },
      },
      expanded: {
        padding: '1.25rem 0.625rem 2.19rem 0.625rem',
        gap: '0.5rem',
      },
    },
  },

  defaultVariants: {
    renderType: 'default',
  },
});

export const articleContentWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  variants: {
    renderType: {
      default: {
        '@media': {
          [media.belowDesktop]: {
            gap: '0.25rem',
          },
        },
      },
      compact: {
        '@media': {
          [media.belowDesktop]: {
            gap: '0.25rem',
          },
        },
      },
      expanded: {},
    },
  },

  defaultVariants: {
    renderType: 'default',
  },
});

export const metaRow = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.3125rem',
});

export const metaRowText = style({
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

export const articleTitle = recipe({
  base: {
    color: color.text.main,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    alignSelf: 'stretch',
  },

  variants: {
    renderType: {
      default: {
        ...typography.correction,
        ...typography.desktop.h4,
        WebkitLineClamp: 2,
        '@media': {
          [media.tablet]: {
            ...typography.tablet.h4,
            WebkitLineClamp: 3,
          },
          [media.mobile]: {
            ...typography.phone.h3,
            WebkitLineClamp: 3,
          },
        },
      },
      compact: {
        ...typography.desktop.h4,
        '@media': {
          [media.tablet]: {
            ...typography.tablet.body2,
          },
          [media.mobile]: {
            ...typography.phone.body2,
          },
        },
      },
      expanded: {
        ...typography.correction,
        ...typography.desktop.h3,
        WebkitLineClamp: 2,
        '@media': {
          [media.tablet]: {
            ...typography.tablet.h4,
            WebkitLineClamp: 2,
          },
          [media.mobile]: {
            ...typography.phone.h3,
            WebkitLineClamp: 2,
          },
        },
      },
    },
  },

  defaultVariants: {
    renderType: 'default',
  },
});

export const articleSummary = style({
  ...typography.correction,
  ...typography.desktop.body3,
  color: color.text.tertiary,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  '@media': {
    [media.tablet]: {
      ...typography.tablet.body3,
    },
    [media.mobile]: {
      ...typography.phone.body3,
    },
  },
});

export const ideologyIndicatorWrapper = style({
  width: '100%',
  maxWidth: '12.6875rem',
  padding: '0 0.125rem',
  minWidth: 0,
  '@media': {
    [media.tablet]: {
      maxWidth: '12.6875rem',
    },
    [media.mobile]: {
      maxWidth: '14.25rem',
    },
  },
});

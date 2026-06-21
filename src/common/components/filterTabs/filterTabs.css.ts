import { style } from '@vanilla-extract/css';
import { color } from '@/shared/styles/color.css';
import { media, typography } from '@/shared/styles';
import { recipe } from '@vanilla-extract/recipes';

const tabGap = '0.375rem';

export const container = recipe({
  base: {
    display: 'flex',
    alignItems: 'stretch',
    gap: tabGap,
    borderRadius: '0.3125rem',
    backgroundColor: color.brand.gray1,
    padding: '0.3125rem',
    width: '100%',

    '@media': {
      [media.mobile]: {
        padding: '0.1875rem',
      },
    },
  },
  variants: {
    variant: {
      scope: {},
      summary: {},
      byIdeology: {
        display: 'none',
        '@media': {
          [media.mobile]: {
            display: 'flex',
            padding: '0.1875rem',
            backgroundColor: color.brand.gray2, // 모바일에서만 렌더링
          },
        },
      },
    },
  },
});

export const tab = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    height: '3.125rem',
    padding: '0.625rem 1.25rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '0.3125rem',
    backgroundColor: 'transparent',
    color: color.text.tertiary,
    ...typography.desktop.h4,
    transition: 'all 0.15s ease-in-out',
    whiteSpace: 'nowrap',

    '@media': {
      [media.tablet]: {
        ...typography.tablet.h4,
      },
      [media.mobile]: {
        ...typography.phone.button,
      },
    },
  },

  variants: {
    variant: {
      scope: {
        '@media': {
          [media.mobile]: {
            height: '2.1875rem',
            padding: '0.5rem 0.375rem',
          },
        },
      },
      summary: {
        padding: '0.625rem 1.875rem',
        '@media': {
          [media.mobile]: {
            height: '2.5rem',
          },
        },
      },
      byIdeology: {
        padding: '0.625rem 1.875rem',
        '@media': {
          [media.mobile]: {
            ...typography.phone.h3,
            height: '2.1875rem',
          },
        },
      },
    },
  },
});

export const activeTab = recipe({
  base: {
    backgroundColor: color.brand.background,
    ...typography.desktop.h4,
  },

  variants: {
    tone: {
      default: {
        color: color.text.main,
      },

      VALUE: {
        color: color.brand.progressive,
      },

      NEUTRAL: {
        color: color.brand.center,
      },

      NORM: {
        color: color.brand.conservative,
      },
    },
  },

  defaultVariants: {
    tone: 'default',
  },
});

export const desktopLabel = style({
  display: 'block',

  '@media': {
    [media.mobile]: {
      display: 'none',
    },
  },
});

export const mobileLabel = style({
  display: 'none',

  '@media': {
    [media.mobile]: {
      display: 'block',
    },
  },
});

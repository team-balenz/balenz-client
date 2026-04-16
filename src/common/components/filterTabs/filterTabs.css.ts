import { style } from '@vanilla-extract/css';
import { color } from '@/shared/styles/color.css';
import { media, typography } from '@/shared/styles';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '0.5rem',
    overflow: 'scroll',
    backgroundColor: color.brand.gray1,
    padding: '0.3125rem',
    width: '52.8125rem',

    '@media': {
      [media.belowDesktop]: {
        width: '100%',
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
            padding: '0.125rem',
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
        width: '6.5625rem',
        '@media': {
          [media.tablet]: {
            width: '5.625rem',
          },
          [media.mobile]: {
            width: '3.0625rem',
            height: '2.1875rem',
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
            height: '2.1875rem',
          },
        },
      },
    },
  },
});

export const activeTab = style({
  backgroundColor: color.brand.background,
  color: color.text.main,
  ...typography.desktop.h4,
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

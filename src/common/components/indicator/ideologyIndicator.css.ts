import { style, styleVariants } from '@vanilla-extract/css';
import { color, media } from '@/shared/styles';
import { recipe } from '@vanilla-extract/recipes';
import { IDEOLOGY_COLOR_THEME, IDEOLOGY_SIZE_STYLE } from './constants';

export const container = style({
  width: '100%',
  // padding: '0 0.12rem',
  display: 'flex',
  minWidth: 0,
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const item = recipe({
  base: {
    width: '18%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    borderRadius: '0.125rem',
    color: color.brand.background,
    backgroundColor: color.brand.gray2,
  },

  variants: {
    active: {
      true: {},
      false: {},
    },

    tone: {
      STRONG_VALUE: {},
      VALUE: {},
      NEUTRAL: {},
      NORM: {},
      STRONG_NORM: {},
    },
  },

  /**
   * 이념 지표 아이템 색상
   */
  compoundVariants: [
    {
      variants: {
        active: true,
        tone: 'STRONG_VALUE',
      },
      style: {
        backgroundColor: IDEOLOGY_COLOR_THEME.STRONG_VALUE,
      },
    },
    {
      variants: {
        active: true,
        tone: 'VALUE',
      },
      style: {
        backgroundColor: IDEOLOGY_COLOR_THEME.VALUE,
      },
    },
    {
      variants: {
        active: true,
        tone: 'NEUTRAL',
      },
      style: {
        backgroundColor: IDEOLOGY_COLOR_THEME.NEUTRAL,
      },
    },
    {
      variants: {
        active: true,
        tone: 'NORM',
      },
      style: {
        backgroundColor: IDEOLOGY_COLOR_THEME.NORM,
      },
    },
    {
      variants: {
        active: true,
        tone: 'STRONG_NORM',
      },
      style: {
        backgroundColor: IDEOLOGY_COLOR_THEME.STRONG_NORM,
      },
    },
  ],

  defaultVariants: {
    active: false,
    tone: 'NEUTRAL',
  },
});

/**
 * 이념 지표 아이템 사이즈(반응형 variant) - 데스크탑
 */
export const desktopSize = styleVariants({
  small: {
    ...IDEOLOGY_SIZE_STYLE.desktop.SMALL,
  },
  medium: {
    ...IDEOLOGY_SIZE_STYLE.desktop.MEDIUM,
  },
  large: {
    ...IDEOLOGY_SIZE_STYLE.desktop.LARGE,
  },
});

/**
 * 이념 지표 아이템 사이즈(반응형 variant) - 태블릿
 */
export const tabletSize = styleVariants({
  small: {
    '@media': {
      [media.tablet]: {
        ...IDEOLOGY_SIZE_STYLE.tablet.SMALL,
      },
    },
  },
  medium: {
    '@media': {
      [media.tablet]: {
        ...IDEOLOGY_SIZE_STYLE.tablet.MEDIUM,
      },
    },
  },
  large: {
    '@media': {
      [media.tablet]: {
        ...IDEOLOGY_SIZE_STYLE.tablet.LARGE,
      },
    },
  },
});

/**
 * 이념 지표 아이템 사이즈(반응형 variant) - 모바일
 */
export const mobileSize = styleVariants({
  extraSmall: {
    '@media': {
      [media.mobile]: {
        ...IDEOLOGY_SIZE_STYLE.mobile.EXTRA_SMALL,
      },
    },
  },
  small: {
    '@media': {
      [media.mobile]: {
        ...IDEOLOGY_SIZE_STYLE.mobile.SMALL,
      },
    },
  },
  medium: {
    '@media': {
      [media.mobile]: {
        ...IDEOLOGY_SIZE_STYLE.mobile.MEDIUM,
      },
    },
  },
  large: {
    '@media': {
      [media.mobile]: {
        ...IDEOLOGY_SIZE_STYLE.mobile.LARGE,
      },
    },
  },
});

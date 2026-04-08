import { style, styleVariants } from '@vanilla-extract/css';
import { color, media } from '@/shared/styles';
import { recipe } from '@vanilla-extract/recipes';
import {
  IDEOLOGY_COLOR_THEME,
  IDEOLOGY_CONTAINER_GAP_STYLE,
  IDEOLOGY_SIZE_STYLE,
} from './constants';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
});

/**
 * 이념 지표 컨테이너 flex gap — 데스크탑
 */
export const containerDesktopGap = styleVariants({
  small: { gap: IDEOLOGY_CONTAINER_GAP_STYLE.desktop.SMALL },
  medium: { gap: IDEOLOGY_CONTAINER_GAP_STYLE.desktop.MEDIUM },
  large: { gap: IDEOLOGY_CONTAINER_GAP_STYLE.desktop.LARGE },
});

/**
 * 이념 지표 컨테이너 flex gap — 태블릿
 */
export const containerTabletGap = styleVariants({
  small: {
    '@media': {
      [media.tablet]: { gap: IDEOLOGY_CONTAINER_GAP_STYLE.tablet.SMALL },
    },
  },
  medium: {
    '@media': {
      [media.tablet]: { gap: IDEOLOGY_CONTAINER_GAP_STYLE.tablet.MEDIUM },
    },
  },
  large: {
    '@media': {
      [media.tablet]: { gap: IDEOLOGY_CONTAINER_GAP_STYLE.tablet.LARGE },
    },
  },
});

/**
 * 이념 지표 컨테이너 flex gap — 모바일
 */
export const containerMobileGap = styleVariants({
  extraSmall: {
    '@media': {
      [media.mobile]: { gap: IDEOLOGY_CONTAINER_GAP_STYLE.mobile.EXTRA_SMALL },
    },
  },
  small: {
    '@media': {
      [media.mobile]: { gap: IDEOLOGY_CONTAINER_GAP_STYLE.mobile.SMALL },
    },
  },
  medium: {
    '@media': {
      [media.mobile]: { gap: IDEOLOGY_CONTAINER_GAP_STYLE.mobile.MEDIUM },
    },
  },
  large: {
    '@media': {
      [media.mobile]: { gap: IDEOLOGY_CONTAINER_GAP_STYLE.mobile.LARGE },
    },
  },
});

export const item = recipe({
  base: {
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
      SL: {},
      L: {},
      C: {},
      R: {},
      SR: {},
    },
  },

  /**
   * 이념 지표 아이템 색상
   */
  compoundVariants: [
    {
      variants: {
        active: true,
        tone: 'SL',
      },
      style: {
        backgroundColor: IDEOLOGY_COLOR_THEME.SL,
      },
    },
    {
      variants: {
        active: true,
        tone: 'L',
      },
      style: {
        backgroundColor: IDEOLOGY_COLOR_THEME.L,
      },
    },
    {
      variants: {
        active: true,
        tone: 'C',
      },
      style: {
        backgroundColor: IDEOLOGY_COLOR_THEME.C,
      },
    },
    {
      variants: {
        active: true,
        tone: 'R',
      },
      style: {
        backgroundColor: IDEOLOGY_COLOR_THEME.R,
      },
    },
    {
      variants: {
        active: true,
        tone: 'SR',
      },
      style: {
        backgroundColor: IDEOLOGY_COLOR_THEME.SR,
      },
    },
  ],

  defaultVariants: {
    active: false,
    tone: 'C',
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

import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { SCOPE_PERCENT_BAR_SIZE_STYLE, SCOPE_PERCENT_BAR_COLORS } from './constants';
import { media } from '@/shared/styles';

export const baseContainer = style({
  display: 'flex',
  overflow: 'hidden',
});

export const containerVariants = styleVariants({
  small: {
    ...SCOPE_PERCENT_BAR_SIZE_STYLE.desktop.SMALL,
    '@media': {
      [media.tablet]: {
        ...SCOPE_PERCENT_BAR_SIZE_STYLE.tablet.SMALL,
      },
      [media.mobile]: {
        ...SCOPE_PERCENT_BAR_SIZE_STYLE.mobile.SMALL,
      },
    },
  },
  medium: {
    '@media': {
      [media.tablet]: {
        ...SCOPE_PERCENT_BAR_SIZE_STYLE.tablet.MEDIUM,
      },
    },
  },
  large: {
    ...SCOPE_PERCENT_BAR_SIZE_STYLE.desktop.LARGE,
    '@media': {
      [media.tablet]: {
        ...SCOPE_PERCENT_BAR_SIZE_STYLE.tablet.LARGE,
      },
      [media.mobile]: {
        ...SCOPE_PERCENT_BAR_SIZE_STYLE.mobile.LARGE,
      },
    },
  },
});

export const segment = recipe({
  base: {
    height: '100%',
    flex: 'var(--flex)',
    transition: 'flex 0.3s ease-in-out',
  },
  variants: {
    color: {
      progressive: { backgroundColor: SCOPE_PERCENT_BAR_COLORS.progressive },
      center: { backgroundColor: SCOPE_PERCENT_BAR_COLORS.center },
      conservative: { backgroundColor: SCOPE_PERCENT_BAR_COLORS.conservative },
    },
  },
});

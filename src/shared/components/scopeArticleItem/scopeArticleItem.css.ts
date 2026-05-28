import { style } from '@vanilla-extract/css';
import { color } from '@/shared/styles/color.css';
import { media, typography } from '@/shared/styles';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.625rem 0',
    width: '100%',
    cursor: 'pointer',

    '@media': {
      [media.tablet]: {
        padding: '1.25rem 1.25rem 1.5625rem 0.3125rem',
      },
      [media.mobile]: {
        padding: '0.625rem 0 1.25rem 0',
      },
    },
  },
  variants: {
    size: {
      small: {}, // base 그대로
      large: {
        '@media': {
          [media.tablet]: {
            padding: '1.25rem 0.625rem 1.25rem 0.3125rem',
          },
        },
      },
    },
  },
});

export const contentWrapper = style({
  display: 'flex',
  gap: '0.9375rem',

  '@media': {
    [media.tablet]: {
      gap: '0.625rem',
    },
    [media.mobile]: {
      gap: '0.9375rem',
    },
  },
});

export const imageWrapper = recipe({
  base: {
    flexShrink: 0,
    width: '7rem',
    height: '5.625rem',
    borderRadius: '0.1875rem',
    overflow: 'hidden',
    backgroundColor: color.brand.gray2,

    '@media': {
      [media.mobile]: {
        width: '6.25rem',
        height: '5rem',
      },
    },
  },
  variants: {
    size: {
      small: {
        '@media': {
          [media.tablet]: {
            width: '6.25rem',
            height: '5rem',
          },
        },
      }, // base 그대로
      large: {
        '@media': {
          [media.tablet]: {
            width: '11.125rem',
            height: '6.25rem',
          },
        },
      },
    },
  },
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const textContent = recipe({
  base: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  variants: {
    size: {
      small: {}, // base 그대로
      large: {
        '@media': {
          [media.tablet]: {
            gap: '1.125rem',
          },
        },
      },
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
});

export const category = recipe({
  base: {
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
  },
  variants: {
    size: {
      small: {}, // base 그대로
      large: {
        '@media': {
          [media.tablet]: {
            ...typography.desktop.body3,
          },
        },
      },
    },
  },
});

export const title = style({
  ...typography.desktop.h4,
  color: color.text.main,

  '@media': {
    [media.tablet]: {
      ...typography.tablet.h4,
    },
    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

export const description = recipe({
  base: {
    ...typography.desktop.caption,
    color: color.text.tertiary,
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '@media': {
      [media.tablet]: {
        ...typography.tablet.caption,
      },
      [media.mobile]: {
        ...typography.phone.caption,
      },
    },
  },
  variants: {
    size: {
      small: {}, // base 그대로
      large: {
        '@media': {
          [media.tablet]: {
            ...typography.desktop.caption,
          },
        },
      },
    },
  },
});

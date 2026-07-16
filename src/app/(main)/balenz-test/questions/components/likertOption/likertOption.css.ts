import { color, media, typography } from '@/shared/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const option = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.57rem',
  cursor: 'pointer',

  '@media': {
    [media.tablet]: {
      gap: '0.36rem',
    },
    [media.mobile]: {
      gap: '0.25rem',
    },
  },
});

export const circleWrapper = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '6.25rem',
  height: '6.25rem',

  '@media': {
    [media.tablet]: {
      width: '3.90625rem',
      height: '3.90625rem',
    },
    [media.mobile]: {
      width: '2.73438rem',
      height: '2.73438rem',
    },
  },
});

export const input = style({
  display: 'none',
});

export const circle = recipe({
  base: {
    position: 'relative',
    display: 'block',
    flexShrink: 0,
    borderRadius: '50%',
    backgroundColor: '#D9D9D933',

    '::after': {
      content: '',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '1.177rem',
      height: '1.177rem',
      borderRadius: '50%',
      backgroundColor: color.brand.gray2,
      transform: 'translate(-50%, -50%)',
      boxShadow: '0 0 0 0.70625rem #F5F5F5',
    },

    '@media': {
      [media.tablet]: {
        '::after': {
          width: '0.73563rem',
          height: '0.73563rem',
          boxShadow: '0 0 0 0.4412rem #F5F5F5',
        },
      },
      [media.mobile]: {
        '::after': {
          width: '0.51494rem',
          height: '0.51494rem',
          boxShadow: '0 0 0 0.3088rem #F5F5F5',
        },
      },
    },
  },

  variants: {
    size: {
      default: {
        width: '4.6875rem',
        height: '4.6875rem',

        '@media': {
          [media.tablet]: {
            width: '2.92969rem',
            height: '2.92969rem',
          },
          [media.mobile]: {
            width: '2.05081rem',
            height: '2.05081rem',
          },
        },
      },

      large: {
        width: '6.25rem',
        height: '6.25rem',

        '@media': {
          [media.tablet]: {
            width: '3.90625rem',
            height: '3.90625rem',
          },
          [media.mobile]: {
            width: '2.73438rem',
            height: '2.73438rem',
          },
        },
      },
    },

    selected: {
      true: {
        backgroundColor: '#1C232B99',

        selectors: {
          '&::after': {
            backgroundColor: color.brand.main,
            boxShadow: '0 0 0 0.70625rem #767A7F',
          },
        },

        '@media': {
          [media.tablet]: {
            selectors: {
              '&::after': {
                boxShadow: '0 0 0 0.4412rem #767A7F',
              },
            },
          },
          [media.mobile]: {
            selectors: {
              '&::after': {
                boxShadow: '0 0 0 0.3088rem #767A7F',
              },
            },
          },
        },
      },
    },
  },
});

export const label = style({
  display: 'block',
  minHeight: '1.5em',
  color: color.text.tertiary,
  ...typography.desktop.body2,

  '@media': {
    [media.tablet]: {
      minHeight: '1.4em',
      ...typography.tablet.body3,
    },
    [media.mobile]: {
      minHeight: '1.4em',
      ...typography.phone.body3,
    },
  },
});

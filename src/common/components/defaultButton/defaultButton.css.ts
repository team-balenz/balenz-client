import { recipe } from '@vanilla-extract/recipes';
import { color, typography, media } from '@/shared/styles';

export const defaultButton = recipe({
  base: {
    ...typography.correction,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.625rem',
    borderRadius: '0.3125rem',
    backgroundColor: color.brand.main,
    color: color.brand.background,
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',

    ':disabled': {
      backgroundColor: color.brand.gray2,
      cursor: 'not-allowed',
    },
  },

  variants: {
    variant: {
      default: {
        ...typography.desktop.body2,
        padding: '0.625rem 0.9375rem',

        '@media': {
          [media.tablet]: {
            ...typography.tablet.body2,
          },
          [media.mobile]: {
            ...typography.phone.button,
          },
        },
      },

      auth: {
        ...typography.desktop.h4,
        width: '100%',
        height: '3.125rem',

        '@media': {
          [media.tablet]: {
            ...typography.tablet.h4,
          },
          [media.mobile]: {
            ...typography.phone.h3,
          },
        },
      },

      compact: {
        ...typography.desktop.caption,
        padding: '0.5rem 0.625rem',

        '@media': {
          [media.tablet]: {
            ...typography.tablet.caption,
          },
          [media.mobile]: {
            ...typography.phone.caption,
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

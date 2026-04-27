import { style } from '@vanilla-extract/css';
import { color, typography, media } from '@/shared/styles';
import { recipe } from '@vanilla-extract/recipes';

export const tabsWrapper = style({
  width: '100%',
  maxWidth: '30rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media': {
    [media.tablet]: {
      maxWidth: '30rem',
    },
    [media.mobile]: {
      width: '100%',
      padding: '0 0.31rem',
    },
  },
});

export const tab = recipe({
  base: {
    color: color.text.main,
    ...typography.desktop.h4,
    width: '25%',
    padding: '1.03rem 0',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    '@media': {
      [media.tablet]: {
        ...typography.tablet.h4,
        padding: '1.12rem 0',
      },
      [media.mobile]: {
        padding: '0.72rem 0',
        ...typography.phone.button,
      },
    },
  },

  variants: {
    active: {
      true: {
        borderBottom: `3px solid ${color.text.main}`,
      },
      false: {
        color: color.text.tertiary,
      },
    },
  },
});

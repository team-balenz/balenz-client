import { color, media, typography, zIndex } from '@/shared/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { LIKERT_BOX_SHADOW, LIKERT_CENTER_CIRCLE_SIZE, LIKERT_CIRCLE_SIZE } from './constants';

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
  zIndex: zIndex.foreground,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: LIKERT_CIRCLE_SIZE.large.desktop,
  height: LIKERT_CIRCLE_SIZE.large.desktop,

  '@media': {
    [media.tablet]: {
      width: LIKERT_CIRCLE_SIZE.large.tablet,
      height: LIKERT_CIRCLE_SIZE.large.tablet,
    },
    [media.mobile]: {
      width: LIKERT_CIRCLE_SIZE.large.mobile,
      height: LIKERT_CIRCLE_SIZE.large.mobile,
    },
  },
});

export const input = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
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
      width: LIKERT_CENTER_CIRCLE_SIZE.desktop,
      height: LIKERT_CENTER_CIRCLE_SIZE.desktop,
      borderRadius: '50%',
      backgroundColor: color.brand.gray2,
      transform: 'translate(-50%, -50%)',
      boxShadow: LIKERT_BOX_SHADOW.unselected.desktop,
    },

    '@media': {
      [media.tablet]: {
        '::after': {
          width: LIKERT_CENTER_CIRCLE_SIZE.tablet,
          height: LIKERT_CENTER_CIRCLE_SIZE.tablet,
          boxShadow: LIKERT_BOX_SHADOW.unselected.tablet,
        },
      },
      [media.mobile]: {
        '::after': {
          width: LIKERT_CENTER_CIRCLE_SIZE.mobile,
          height: LIKERT_CENTER_CIRCLE_SIZE.mobile,
          boxShadow: LIKERT_BOX_SHADOW.unselected.mobile,
        },
      },
    },
  },

  variants: {
    size: {
      default: {
        width: LIKERT_CIRCLE_SIZE.default.desktop,
        height: LIKERT_CIRCLE_SIZE.default.desktop,

        '@media': {
          [media.tablet]: {
            width: LIKERT_CIRCLE_SIZE.default.tablet,
            height: LIKERT_CIRCLE_SIZE.default.tablet,
          },
          [media.mobile]: {
            width: LIKERT_CIRCLE_SIZE.default.mobile,
            height: LIKERT_CIRCLE_SIZE.default.mobile,
          },
        },
      },

      large: {
        width: LIKERT_CIRCLE_SIZE.large.desktop,
        height: LIKERT_CIRCLE_SIZE.large.desktop,

        '@media': {
          [media.tablet]: {
            width: LIKERT_CIRCLE_SIZE.large.tablet,
            height: LIKERT_CIRCLE_SIZE.large.tablet,
          },
          [media.mobile]: {
            width: LIKERT_CIRCLE_SIZE.large.mobile,
            height: LIKERT_CIRCLE_SIZE.large.mobile,
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
            boxShadow: LIKERT_BOX_SHADOW.selected.desktop,
          },
        },

        '@media': {
          [media.tablet]: {
            selectors: {
              '&::after': {
                boxShadow: LIKERT_BOX_SHADOW.selected.tablet,
              },
            },
          },
          [media.mobile]: {
            selectors: {
              '&::after': {
                boxShadow: LIKERT_BOX_SHADOW.selected.mobile,
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
  textAlign: 'center',
  wordBreak: 'keep-all',
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

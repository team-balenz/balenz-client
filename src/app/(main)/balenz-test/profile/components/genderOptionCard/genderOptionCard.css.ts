import { style } from '@vanilla-extract/css';
import { color, media, typography } from '@/shared/styles';

const hoverMedia = '(hover: hover) and (pointer: fine)';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '3rem',

  '@media': {
    [media.mobile]: {
      gap: '0.75rem',
    },
  },
});

export const card = style({
  position: 'relative',

  width: '100%',
  height: '13.4375rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.625rem',

  padding: 0,

  backgroundColor: color.brand.background,
  border: `1px solid ${color.text.disabled}`,
  borderRadius: '0.625rem',

  cursor: 'pointer',
  transition: 'border-color 0.2s ease',

  selectors: {
    '&[data-selected="true"]': {
      borderColor: color.brand.main,
    },

    '&:focus-visible': {
      outline: `1px solid ${color.brand.main}`,
      outlineOffset: '0.125rem',
    },
  },

  '@media': {
    [hoverMedia]: {
      selectors: {
        '&:hover': {
          borderColor: color.brand.main,
        },
      },
    },

    [media.tablet]: {
      height: '13.4375rem',
      gap: '0.94rem',
    },

    [media.mobile]: {
      height: '9.375rem',
      gap: '0.5rem',
    },
  },
});

export const genderIcon = style({
  width: '6.25rem',
  height: '6.25rem',
  aspectRatio: '1 / 1',
  objectFit: 'contain',

  '@media': {
    [media.tablet]: {
      width: '5.625rem',
      height: '5.625rem',
    },

    [media.mobile]: {
      width: '4.375rem',
      height: '4.375rem',
    },
  },
});

export const label = style({
  ...typography.desktop.h3,
  color: color.text.tertiary,

  selectors: {
    [`${card}[data-selected="true"] &`]: {
      color: color.text.main,
    },
  },

  '@media': {
    [hoverMedia]: {
      selectors: {
        [`${card}:hover &`]: {
          color: color.text.main,
        },
      },
    },

    [media.tablet]: {
      ...typography.tablet.h3,
    },

    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

export const checkIcon = style({
  position: 'absolute',
  top: '1.06rem',
  right: '1.06rem',

  width: '2.5rem',
  height: '2.5rem',

  '@media': {
    [media.tablet]: {
      top: '0.94rem',
      right: '0.94rem',
    },

    [media.mobile]: {
      top: '0.75rem',
      right: '0.75rem',

      width: '1.5625rem',
      height: '1.5625rem',
    },
  },
});

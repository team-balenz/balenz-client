import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { color, media, typography } from '@/shared/styles';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3.12rem',
  width: '100%',
});

export const pageList = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.31rem',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

export const pageButton = recipe({
  base: {
    ...typography.correction,
    ...typography.desktop.body3,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.875rem',
    height: '1.875rem',
    padding: 0,
    border: 'none',
    background: 'transparent',
    color: color.text.main,
    cursor: 'pointer',

    '@media': {
      [media.tablet]: {
        ...typography.tablet.body3,
      },
      [media.mobile]: {
        ...typography.phone.body3,
      },
    },

    ':focus-visible': {
      outline: `0.125rem solid ${color.brand.main}`,
      outlineOffset: '0.25rem',
    },
  },
  variants: {
    active: {
      true: {
        '::after': {
          content: '',
          position: 'absolute',
          left: '50%',
          bottom: 0,
          width: '1.875rem',
          height: '0.125rem',
          transform: 'translateX(-50%)',
          backgroundColor: color.brand.main,
        },
      },
      false: {},
    },
  },
});

export const arrowButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.5rem',
  height: '1.5rem',
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',

  ':disabled': {
    cursor: 'default',
    opacity: 0.35,
  },

  ':focus-visible': {
    outline: `0.125rem solid ${color.brand.main}`,
    outlineOffset: '0.25rem',
  },
});

export const arrowIcon = style({
  display: 'block',
  width: '1.5rem',
  height: '1.5rem',
});

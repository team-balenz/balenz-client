import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { color, typography, media, zIndex } from '@/shared/styles';
import { HEADER_LAYOUT, LOGO_SIZE } from './constants';

export const headerWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: zIndex.header,
  backgroundColor: color.brand.background,
  borderBottom: `0.0625rem solid ${color.brand.gray2}`,
  ...HEADER_LAYOUT.desktop,

  '@media': {
    [media.tablet]: {
      ...HEADER_LAYOUT.tablet,
    },
    [media.mobile]: {
      ...HEADER_LAYOUT.mobile,
    },
  },
});

export const logoImage = style({
  ...LOGO_SIZE.desktop,
  objectFit: 'contain',

  '@media': {
    [media.tablet]: {
      ...LOGO_SIZE.tablet,
    },
    [media.mobile]: {
      ...LOGO_SIZE.mobile,
    },
  },
});

export const navWrapper = style({
  display: 'flex',
  gap: '3.125rem',
  alignItems: 'center',
  flex: 1,
  marginLeft: '5rem',
  height: '100%',

  '@media': {
    [media.tablet]: {
      marginLeft: '3.125rem',
      gap: '1.25rem',
    },
    [media.mobile]: {
      display: 'none',
    },
  },
});

export const navList = style({
  display: 'flex',
  gap: '3.125rem',
  alignItems: 'center',
  height: '100%',
  listStyle: 'none',
  margin: 0,
  padding: 0,

  '@media': {
    [media.tablet]: {
      gap: '1.25rem',
    },
  },
});

export const navListItem = style({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

export const navItem = recipe({
  base: {
    ...typography.desktop.h4,
    color: color.text.main,
    cursor: 'pointer',
    width: '6.25rem',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderBottom: `0.1875rem solid transparent`,

    '@media': {
      [media.tablet]: {
        ...typography.tablet.h4,
      },
    },
  },
  variants: {
    isActive: {
      true: {
        borderBottom: `0.1875rem solid ${color.brand.main}`,
      },
    },
  },
});

export const rightSection = style({
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    [media.mobile]: {
      gap: '0.625rem',
    },
  },
});

export const iconSection = style({
  '@media': {
    [media.mobile]: {
      display: 'flex',
      gap: '0.3125rem',
    },
  },
});

export const menuButton = style({
  display: 'none',
  background: 'none',
  border: 'none',
  cursor: 'pointer',

  '@media': {
    [media.tablet]: {
      display: 'none',
    },
    [media.mobile]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

export const searchButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
});

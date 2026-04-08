import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { color, typography, media } from '@/shared/styles';
import { HEADER_LAYOUT, LOGO_SIZE } from './constants';

export const headerWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  backgroundColor: color.brand.background,
  borderBottom: `1px solid ${color.brand.gray2}`,
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
  gap: '50px',
  alignItems: 'center',
  flex: 1,
  marginLeft: '80px',
  height: '100%',

  '@media': {
    [media.tablet]: {
      marginLeft: '50px',
      gap: '20px',
    },
    [media.mobile]: {
      display: 'none',
    },
  },
});

export const navList = style({
  display: 'flex',
  gap: '50px',
  alignItems: 'center',
  height: '100%',
  listStyle: 'none',
  margin: 0,
  padding: 0,

  '@media': {
    [media.tablet]: {
      gap: '20px',
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
    width: '100px',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderBottom: `3px solid transparent`,

    '@media': {
      [media.tablet]: {
        ...typography.tablet.h4,
      },
    },
  },
  variants: {
    isActive: {
      true: {
        borderBottom: `3px solid ${color.brand.main}`,
      },
    },
  },
});

export const rightSection = style({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    [media.mobile]: {
      gap: '10px',
    },
  },
});

export const iconSection = style({
  '@media': {
    [media.mobile]: {
      display: 'flex',
      gap: '5px',
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

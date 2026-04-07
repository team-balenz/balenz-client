import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles/media';
import { color, typography } from '@/shared/styles';

export const headerWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 80px',
  borderBottom: `1px solid ${color.brand.gray2}`,
  height: '80px',

  '@media': {
    [media.tablet]: {
      padding: '0 40px',
      height: '70px',
    },
    [media.mobile]: {
      padding: '70px 20px 15px 20px',
      height: '40px',
    },
  },
});

export const logoSection = style({
  display: 'flex',
  alignItems: 'center',
});

export const logoImage = style({
  width: '167px',
  height: '32px',
  aspectRatio: '167/32',
  objectFit: 'contain',

  '@media': {
    [media.tablet]: {
      width: '126px',
      height: '24px',
      aspectRatio: '21/4',
    },
    [media.mobile]: {
      width: '105px',
      height: '20px',
      aspectRatio: '21/4',
    },
  },
});

export const navWrapper = style({
  display: 'flex',
  gap: '50px',
  alignItems: 'center',
  flex: 1,
  marginLeft: '80px',

  '@media': {
    [media.mobile]: {
      display: 'none',
    },
  },
});

export const navItem = style({
  ...typography.desktop.h4,
  color: color.text.main,
  cursor: 'pointer',
  position: 'relative',

  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '0',
    height: '2px',
    backgroundColor: color.brand.main,
    transition: 'width 0.3s ease',
  },

  '@media': {
    [media.tablet]: {
      ...typography.tablet.h4,
    },
  },
});

export const rightSection = style({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
});

export const menuButton = style({
  display: 'none',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '8px',
  color: color.text.main,
  fontSize: '24px',

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
  padding: '8px',
  color: color.text.main,
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

import { keyframes, style } from '@vanilla-extract/css';
import { color, media, typography, zIndex } from '@/shared/styles';
import { hiddenTitle, overlay } from '@/shared/styles/dialog.css';

export { hiddenTitle, overlay };

const slideIn = keyframes({
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(0)' },
});

const slideOut = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(-100%)' },
});

export const drawer = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  width: 'min(25.9375rem, 74vw)',
  minWidth: '18rem',
  backgroundColor: color.brand.background,
  zIndex: zIndex.dialogContent,
  outline: 'none',
  padding: '4.87rem 1.25rem 0',
  boxShadow: '0.25rem 0 1.5rem rgba(28, 35, 43, 0.12)',
  animation: `${slideIn} 0.24s ease-out`,
  overflow: 'hidden',

  selectors: {
    '&[data-state="closed"]': {
      animation: `${slideOut} 0.2s ease-in`,
    },
  },

  '@media': {
    [media.tablet]: {
      display: 'none',
    },
    [media.desktop]: {
      display: 'none',
    },
  },
});

export const drawerHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
});

export const logoImage = style({
  display: 'block',
  width: 'auto',
  height: '1.5rem',
  objectFit: 'contain',
});

export const closeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.5rem',
  height: '1.5rem',
  padding: 0,
  marginRight: '-0.25rem',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',

  ':focus-visible': {
    outline: `0.125rem solid ${color.brand.main}`,
    outlineOffset: '0.125rem',
  },
});

export const navWrapper = style({
  marginTop: '6.25rem',
});

export const navList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.88rem',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

export const navItem = style({
  ...typography.phone.h1,
  display: 'inline-flex',
  color: color.text.main,
  textDecoration: 'none',

  ':focus-visible': {
    outline: `0.125rem solid ${color.brand.main}`,
    outlineOffset: '0.25rem',
  },
});

export const backgroundLogo = style({
  position: 'absolute',
  right: '-3.75rem',
  bottom: '-0.6875rem',
  width: '15.88188rem',
  height: 'auto',
  pointerEvents: 'none',
  userSelect: 'none',
});

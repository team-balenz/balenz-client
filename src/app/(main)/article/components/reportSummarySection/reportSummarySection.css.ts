import { style } from '@vanilla-extract/css';
import { color, media, typography } from '@/shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  padding: '1.25rem',
  borderRadius: '0.3125rem',
  boxShadow: '0 0 2px 0 rgba(17, 17, 17, 0.20)',

  '@media': {
    [media.tablet]: {
      padding: '1.25rem 0.3125rem',
      gap: '1rem',
      boxShadow: 'none',
      borderBottom: `1px solid ${color.brand.gray1}`,
    },
    [media.mobile]: {
      padding: '1.25rem 0',
      gap: '0.75rem',
      boxShadow: 'none',
      borderBottom: `1px solid ${color.brand.gray1}`,
    },
  },
});

export const title = style({
  ...typography.desktop.h2,
  color: color.text.main,

  '@media': {
    [media.belowDesktop]: {
      display: 'none',
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.625rem',
  justifyContent: 'space-between',

  '@media': {
    [media.tablet]: {
      display: 'flex',
      flexDirection: 'row',
      gap: '0',
    },
    [media.mobile]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '0',
    },
  },
});

export const item = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  '@media': {
    [media.tablet]: {
      minWidth: '6.375rem',
      flexDirection: 'column',
      gap: '0.3125rem',
    },
    [media.mobile]: {
      flexDirection: 'column',
      gap: '0.3125rem',
    },
  },
});

export const divider = style({
  width: '0.0625rem',
  height: '3.125rem',
  backgroundColor: color.brand.gray1,
  display: 'none',

  '@media': {
    [media.tablet]: {
      display: 'block',
    },
    [media.mobile]: {
      display: 'block',
    },
  },
});

export const label = style({
  ...typography.desktop.body1,
  color: color.text.main,

  '@media': {
    [media.tablet]: { ...typography.tablet.body2, color: color.text.tertiary },
    [media.mobile]: { ...typography.phone.body2, color: color.text.tertiary },
  },
});

export const value = style({
  ...typography.desktop.h4,
  color: color.text.main,

  '@media': {
    [media.tablet]: typography.desktop.h4,
    [media.mobile]: typography.phone.h3,
  },
});

export const unit = style({
  ...typography.phone.body3,
});

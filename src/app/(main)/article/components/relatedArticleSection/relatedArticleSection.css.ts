import { style } from '@vanilla-extract/css';
import { color, media, typography } from '@/shared/styles';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
});

export const tabsContainer = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `0.5px solid ${color.brand.gray2}`,
  '@media': {
    [media.tablet]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    [media.mobile]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  },
});

export const desktopTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  color: color.text.main,
  ...typography.desktop.h3,
  '@media': {
    [media.tablet]: {
      display: 'none',
    },
    [media.mobile]: {
      display: 'none',
    },
  },
});

export const desktopCount = style({
  ...typography.desktop.h3,
});

export const mobileTitle = style({
  display: 'none',
  color: color.text.main,
  '@media': {
    [media.belowDesktop]: {
      display: 'block',
      ...typography.correction,
      marginBottom: '0.62rem',
    },
    [media.tablet]: {
      ...typography.tablet.h1,
    },
    [media.mobile]: {
      ...typography.phone.h1,
    },
  },
});

export const articlesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 0.625rem',
});

export const articleItem = style({
  borderBottom: `1px solid ${color.brand.gray2}`,
  // '@media': {
  //   [media.belowDesktop]: {
  //     marginBottom: '1.25rem',
  //   },
  // },
});

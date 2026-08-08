import { style } from '@vanilla-extract/css';

import { color, media, typography } from '@/shared/styles';

const TABLET_NOTICE_LINE_GAP = '1.4875rem';

export const footer = style({
  width: '100%',
  backgroundColor: color.brand.background,
});

export const container = style({
  width: '100%',
  margin: '0 auto',
  padding: '4rem 4.94rem 4.31rem 5.13rem',
  boxSizing: 'border-box',

  '@media': {
    [media.belowDesktop]: {
      display: 'flex',
      flexDirection: 'column',
    },
    [media.tablet]: {
      padding: '3.5rem 2.5rem',
    },

    [media.mobile]: {
      padding: '2.5rem',
    },
  },
});

export const topSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.62rem',

  '@media': {
    [media.tablet]: {
      gap: '2.75rem',
    },
    [media.mobile]: {
      display: 'contents',
    },
  },
});

export const infoSection = style({
  display: 'flex',
  justifyContent: 'space-between',

  '@media': {
    [media.tablet]: {
      flexDirection: 'column',
      gap: '4.5rem',
    },
    [media.mobile]: {
      display: 'contents',
    },
  },
});

export const title = style({
  ...typography.desktop.h3,
  color: color.text.secondary,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.h3,
    },
    [media.mobile]: {
      ...typography.phone.h3,
      order: 1,
      height: '1.875rem',
    },
  },
});

export const businessInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.56rem',

  '@media': {
    [media.mobile]: {
      order: 2,
      marginTop: '0.62rem',
      gap: '0.31rem',
    },
  },
});

export const infoRow = style({
  ...typography.desktop.body1,
  color: color.text.secondary,
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'flex-start',
  '@media': {
    [media.tablet]: {
      ...typography.tablet.body1,
    },
    [media.mobile]: {
      ...typography.phone.body1,
      gap: '1.25rem',
    },
  },
});

export const policyInfoRow = style([
  infoRow,
  {
    '@media': {
      [media.mobile]: {
        gap: '0.5rem',
      },
    },
  },
]);

export const noticeSection = style({
  ...typography.desktop.body1,
  color: color.text.tertiary,
  textAlign: 'right',
  lineHeight: 1.6,

  '@media': {
    [media.tablet]: {
      ...typography.tablet.body1,
      textAlign: 'left',
    },
    [media.mobile]: {
      display: 'contents',
      ...typography.phone.body1,
    },
  },
});

export const noticeText = style({
  '@media': {
    [media.mobile]: {
      ...typography.phone.body1,
      color: color.text.tertiary,
      order: 3,
      marginTop: '2.5rem',
      textAlign: 'left',
    },
  },
});

export const noticeBreak = style({
  '@media': {
    [media.belowDesktop]: {
      display: 'none',
    },
  },
});

export const noticeParagraph = style({
  '@media': {
    [media.tablet]: {
      display: 'block',
      marginTop: TABLET_NOTICE_LINE_GAP,
    },
    [media.mobile]: {
      display: 'block',
      marginTop: '2rem',
    },
  },
});

export const copyright = style({
  '@media': {
    [media.tablet]: {
      marginTop: TABLET_NOTICE_LINE_GAP,
    },
    [media.mobile]: {
      ...typography.phone.caption,
      color: color.text.disabled,
      order: 5,
      marginTop: '0.94rem',
      textAlign: 'left',
    },
  },
});

export const divider = style({
  width: '100%',
  height: '1px',
  margin: '4.19rem 0 1.94rem',
  backgroundColor: color.brand.gray1,

  '@media': {
    [media.belowDesktop]: {
      display: 'none',
    },
  },
});

export const bottomSection = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media': {
    [media.tablet]: {
      order: -1,
      marginBottom: '3.12rem',
    },
    [media.mobile]: {
      order: 4,
      width: '100%',
      marginTop: '4.69rem',
    },
  },
});

export const logo = style({
  width: '15.355rem',
  height: 'auto',

  '@media': {
    [media.tablet]: {
      width: '11.51625rem',
    },
    [media.mobile]: {
      width: '7.6775rem',
      marginLeft: '-0.5rem',
    },
  },
});

export const socialLinks = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.85rem',
  '@media': {
    [media.tablet]: {
      gap: '1.59rem',
    },
    [media.mobile]: { gap: '0.62rem' },
  },
});

export const socialLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4.375rem',
  height: '4.375rem',
  borderRadius: '50%',
  backgroundColor: color.brand.gray1,

  '@media': {
    [media.tablet]: {
      width: '3.75rem',
      height: '3.75rem',
    },
    [media.mobile]: {
      width: '2.5rem',
      height: '2.5rem',
    },
  },
});

export const mailIcon = style({
  width: '43.75px',
  height: '43.75px',

  '@media': {
    [media.tablet]: {
      width: '37.5px',
      height: '37.5px',
    },
    [media.mobile]: {
      width: '25px',
      height: '25px',
    },
  },
});

export const socialIcon = style({
  width: '35px',
  height: '35px',

  '@media': {
    [media.tablet]: {
      width: '30px',
      height: '30px',
    },
    [media.mobile]: {
      width: '20px',
      height: '20px',
    },
  },
});

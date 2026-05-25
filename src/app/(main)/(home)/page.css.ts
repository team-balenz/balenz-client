import { boxStyle, color, media } from '@/shared/styles';
import { style } from '@vanilla-extract/css';

export const homeLayout = style({
  width: '100%',
  padding: '5rem 5rem 14.125rem 5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '4.5625rem',

  '@media': {
    [media.tablet]: {
      padding: '2.5rem 2.5rem 0 2.5rem',
      gap: '8.125rem',
    },
    [media.mobile]: {
      padding: '1.5625rem 1.25rem 0 1.25rem',
      gap: '6.5rem',
    },
  },
});

export const topSection = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '66.666% 33.333%',
  gridTemplateAreas: `
    "scope right"
    "adDaily right"
    "hot right"
  `,
  columnGap: '1.5rem',
  rowGap: '6.25rem',

  '@media': {
    [media.belowDesktop]: {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: `
          "scope"
          "right"
          "adDaily"
          "hot"
      `,
      rowGap: 0,
    },
  },
});

export const scopeSection = style({
  gridArea: 'scope',
});

export const adDailyColumn = style({
  gridArea: 'adDaily',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.875rem',

  '@media': {
    [media.tablet]: {
      gap: '5.4375rem',
      marginTop: '4.5625rem',
    },
    [media.mobile]: {
      marginTop: '5.25rem',
    },
  },
});

// desktop + tablet 뷰에 노출
export const ad1Section = style({
  height: '7.375rem',
  background: color.brand.gray1,
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    [media.mobile]: {
      display: 'none',
    },
  },
});

export const rightColumn = style({
  width: '100%',
  gridArea: 'right',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  '@media': {
    [media.tablet]: {
      flexDirection: 'row',
      gap: '1.5625rem',
      marginTop: '6.125rem',
    },
    [media.mobile]: {
      gap: '5rem',
      marginTop: '3.125rem',
    },
  },
});

// desktop 뷰에만 노출
export const ad2Section = style({
  ...boxStyle,
  height: '16.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    [media.belowDesktop]: {
      display: 'none',
    },
  },
});

export const dailyFocusSection = style({});

export const hotIssueSection = style({
  gridArea: 'hot',

  '@media': {
    [media.tablet]: {
      marginTop: '8.125rem',
    },
    [media.mobile]: {
      marginTop: '5rem',
    },
  },
});

export const ideologyTestSection = style({
  width: '100%',
  height: '9.9375rem',
  ...boxStyle,

  '@media': {
    [media.tablet]: {
      width: '100%',
      height: '15.375rem',
    },
    [media.mobile]: {
      width: '100%',
      height: '9.6875rem',
    },
  },
});

export const hotArticleSection = style({});

export const bottomSection = style({
  padding: '6.25rem 5rem',
  background: color.brand.gray1,
  marginLeft: '-5rem',
  width: 'calc(100% + 10rem)',

  '@media': {
    [media.mobile]: {
      padding: '3.125rem 1.25rem',
      marginLeft: '-1.25rem',
      width: 'calc(100% + 2.5rem)',
    },
  },
});

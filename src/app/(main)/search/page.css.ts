import { style } from '@vanilla-extract/css';
import { color, media, typography } from '@/shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    [media.mobile]: {
      padding: '0 1.25rem',
    },
  },
});

// 브라우저 화면 높이
// - Header 높이 80px
// - contentWrapper marginTop 5.81rem
// - contentWrapper marginBottom 2.56rem
// = contentWrapper가 최소로 가져야 할 높이
export const contentWrapper = style({
  width: '39.25rem',
  marginTop: '5.81rem',
  marginBottom: '2.56rem',
  minHeight: 'calc(100dvh - 5rem - 5.81rem - 2.56rem)',
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [media.tablet]: {
      width: '31.875rem',
      marginTop: '5.94rem',
      marginBottom: '6.87rem',
      minHeight: 'calc(100dvh - 4.375rem - 5.94rem - 6.87rem)',
    },
    [media.mobile]: {
      width: '100%',
      marginTop: '3.13rem',
      marginBottom: '1.75rem',
      minHeight: 'calc(100dvh - 4.375rem - 3.13rem - 1.75rem)',
    },
  },
});

// 검색어 미입력 시 초기 화면 wrapper
export const initialContentWrapper = style({
  minHeight: 'auto',
  height: 'calc(100dvh - 5rem - 5.81rem - 2.56rem)',

  '@media': {
    [media.tablet]: {
      height: 'calc(100dvh - 4.375rem - 5.94rem - 6.87rem)',
    },
    [media.mobile]: {
      height: 'calc(100dvh - 4.375rem - 3.13rem - 1.75rem)',
    },
  },
});

// 검색어 미입력 시 초기 화면 section
export const initialAdSection = style({
  marginTop: 'auto',

  '@media': {
    [media.tablet]: {
      marginTop: 'auto',
    },
    [media.mobile]: {
      marginTop: 'auto',
    },
  },
});

export const tabSection = style({
  width: '100%',
  borderBottom: `0.5px solid ${color.brand.gray2}`,
  marginTop: '2.62rem',

  '@media': {
    [media.tablet]: {
      marginTop: '3.12rem',
    },
    [media.mobile]: {
      marginTop: '2.5rem',
    },
  },
});

export const searchInputWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
});

export const inputTitle = style({
  ...typography.desktop.h1,

  '@media': {
    [media.tablet]: {
      ...typography.tablet.h1,
    },
    [media.mobile]: {
      ...typography.phone.h1,
    },
  },
});

export const tabWrapper = style({
  width: '15rem',

  '@media': {
    [media.mobile]: {
      width: '12.5rem',
    },
  },
});

export const resultCount = style({
  ...typography.desktop.body1,
  marginTop: '2.19rem',

  '@media': {
    [media.tablet]: {
      ...typography.tablet.body1,
      marginTop: '1.87rem',
    },
    [media.mobile]: {
      ...typography.phone.body1,
      marginTop: '1.25rem',
    },
  },
});

export const resultListWrapper = style({
  marginTop: '1rem',

  '@media': {
    [media.tablet]: {
      marginTop: '0.63rem',
    },
    [media.mobile]: {
      marginTop: '0.62rem',
    },
  },
});

export const pagenation = style({
  margin: 'auto',
  width: '19.875rem',
  marginTop: '3.37rem',

  '@media': {
    [media.tablet]: {
      marginTop: '2.5rem',
    },
    [media.mobile]: {
      marginTop: '1.88rem',
    },
  },
});

export const adSection = style({
  width: '100%',
  height: '8.125rem',
  background: color.brand.gray1,
  borderRadius: '0.3125rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

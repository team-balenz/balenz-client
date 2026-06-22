import { globalStyle, style } from '@vanilla-extract/css';
import { color, media, typography } from '@/shared/styles';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '3.75rem',
  paddingBottom: '9.75rem',

  '@media': {
    [media.tablet]: {
      paddingBottom: '3.51rem',
      paddingTop: '2.5rem',
    },
    [media.mobile]: {
      paddingBottom: '2.5rem',
      paddingTop: '2rem',
    },
  },
});

export const emptyIcon = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.62rem',
  color: color.brand.gray1,
});

export const emptyLogo = style({
  width: 'auto',
  height: '6.11938rem',
});

export const message = style({
  ...typography.desktop.h3,
  marginTop: '1.25rem',
  color: color.text.tertiary,
  textAlign: 'center',

  '@media': {
    [media.tablet]: {
      ...typography.tablet.h3,
    },
    [media.mobile]: {
      ...typography.phone.h3,
      wordBreak: 'keep-all',
    },
  },
});

export const guideBox = style({
  width: '100%',
  marginTop: '3.13rem',
  borderRadius: '0.3125rem',
  backgroundColor: color.brand.gray1,
  color: color.text.tertiary,
  padding: '1.25rem 1.56rem',

  '@media': {
    [media.tablet]: {
      marginTop: '3rem',
    },
    [media.mobile]: {
      marginTop: '3.62rem',
    },
  },
});

export const guideTitle = style({
  ...typography.desktop.h4,
  margin: 0,
  color: color.text.tertiary,

  '@media': {
    [media.tablet]: {
      ...typography.tablet.h4,
    },
    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

export const guideList = style({
  ...typography.desktop.body1,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  margin: '0.94rem 0 0',
  paddingLeft: '1.75rem',
  listStyle: 'disc',
  color: color.text.tertiary,

  '@media': {
    [media.tablet]: {
      ...typography.tablet.body1,
      marginTop: '1.25rem',
      paddingLeft: '1.5rem',
    },
    [media.mobile]: {
      ...typography.phone.body1,
      marginTop: '1rem',
      paddingLeft: '1.25rem',
      wordBreak: 'keep-all',
    },
  },
});

// mobile 뷰에서 괄호 앞 줄바꿈
export const mobileLineBreak = style({
  display: 'none',

  '@media': {
    [media.mobile]: {
      display: 'block',
    },
  },
});

// li disc 크기 조정
globalStyle(`${guideList} li::marker`, {
  fontSize: '0.75em',
});

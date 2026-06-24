import { style } from '@vanilla-extract/css';
import { color, typography, media } from '@/shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const articleHeader = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '0.44rem',
});

export const newsAgencyName = style({
  ...typography.desktop.caption,
  color: color.text.tertiary,

  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',

  '@media': {
    [media.tablet]: {
      ...typography.tablet.caption,
    },
    [media.mobile]: {
      ...typography.phone.caption,
    },
  },
});

export const title = style({
  ...typography.correction,
  ...typography.desktop.h4,
  color: color.text.main,

  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',

  '@media': {
    [media.tablet]: {
      ...typography.tablet.h4,
    },
    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

export const indicatorWrapper = style({
  maxWidth: '9.8125rem',
  marginBottom: '0.94rem',
  padding: '0 0.12rem',

  '@media': {
    [media.mobile]: {
      width: '100%',
    },
  },
});

export const summaryClip = style({
  height: '10rem',
  minHeight: 0,
  overflow: 'hidden',

  '@media': {
    [media.mobile]: {
      height: '12.4375rem',
    },
  },
});

export const summary = style({
  ...typography.desktop.body3,
  color: color.text.main,
  display: '-webkit-box',
  WebkitLineClamp: 8,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  lineClamp: 8,

  '@media': {
    [media.belowDesktop]: {
      paddingLeft: '0.19rem',
    },
    [media.tablet]: {
      ...typography.tablet.body3,
      WebkitLineClamp: 9,
      lineClamp: 9,
    },
    [media.mobile]: {
      ...typography.phone.body2,
      WebkitLineClamp: 10,
      lineClamp: 10,
    },
  },
});

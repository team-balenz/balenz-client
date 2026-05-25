import { style } from '@vanilla-extract/css';
import { color, typography, media } from '@/shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.88rem',
  '@media': {
    [media.tablet]: {
      gap: '1.25rem',
    },
    [media.mobile]: {
      gap: '1.25rem',
    },
  },
});

export const articleSummaryItemContainer = style({
  padding: '0 0.31rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.88rem',
});

export const articleSummaryItemHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.62rem',
});

export const newsAgencyName = style({
  ...typography.correction,
  ...typography.desktop.h4,
  color: color.text.tertiary,
  margin: 0,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.body1,
    },
    [media.mobile]: {
      ...typography.phone.body2,
    },
  },
});

export const title = style({
  ...typography.correction,
  ...typography.desktop.h1,
  color: color.text.main,
  margin: 0,

  '@media': {
    [media.tablet]: {
      ...typography.tablet.h1,
    },
    [media.mobile]: {
      ...typography.phone.h1,
    },
  },
});

export const ideologyIndicatorContainer = style({
  width: '100%',
  maxWidth: '15.8125rem',
  minWidth: 0,
});

export const summary = style({
  ...typography.correction,
  ...typography.desktop.body1,
  color: color.text.main,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.body1,
    },
    [media.mobile]: {
      ...typography.phone.body1,
    },
  },
});

import { style } from '@vanilla-extract/css';
import { color, typography, media } from '@/shared/styles';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.88rem',
  borderBottom: `1px solid ${color.brand.gray1}`,
  paddingBottom: '1.88rem',
  '@media': {
    [media.mobile]: {
      gap: '3.12rem',
      paddingBottom: '0.62rem',
    },
  },
});

export const titleContainer = style({
  display: 'grid',
  gap: '0.62rem',
  gridTemplateColumns: 'minmax(0, 1fr) max-content',
  gridTemplateAreas: `
    "title title"
    "news indicator"
  `,
  alignItems: 'center',
  '@media': {
    [media.mobile]: {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: `
        "news"
        "title"
        "indicator"
      `,
    },
  },
});

export const newsAgencyNameText = style({
  gridArea: 'news',
  minWidth: 0,
  ...typography.correction,
  ...typography.desktop.h3,
  color: color.text.tertiary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  '@media': {
    [media.tablet]: {
      ...typography.tablet.h3,
    },
    [media.mobile]: {
      ...typography.phone.h3,
      overflow: 'visible',
      textOverflow: 'clip',
      whiteSpace: 'normal',
    },
  },
});

export const titleText = style({
  gridArea: 'title',
  minWidth: 0,
  ...typography.correction,
  ...typography.desktop.display,
  color: color.text.main,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.display,
    },
    [media.mobile]: {
      ...typography.phone.h1,
    },
  },
});

export const ideologyIndicatorContainer = style({
  gridArea: 'indicator',
  width: 'max-content',
  minWidth: '15.8125rem',
  maxWidth: 'none',
  justifySelf: 'end',
  '@media': {
    [media.mobile]: {
      width: '100%',
      minWidth: 0,
      maxWidth: '15.8125rem',
      justifySelf: 'stretch',
    },
  },
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const publishedAtText = style({
  ...typography.correction,
  ...typography.desktop.h4,
  color: color.text.tertiary,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.h4,
    },
    [media.mobile]: {
      ...typography.phone.body2,
    },
  },
});

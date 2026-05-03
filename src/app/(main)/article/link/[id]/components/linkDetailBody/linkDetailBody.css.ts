import { style } from '@vanilla-extract/css';
import { color, typography, media } from '@/shared/styles';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '3.12rem',
});

export const summaryText = style({
  ...typography.correction,
  ...typography.desktop.body1,
  color: color.text.main,
  alignSelf: 'stretch',
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
  whiteSpace: 'pre-wrap',
  '@media': {
    [media.tablet]: {
      ...typography.tablet.body1,
    },
    [media.mobile]: {
      ...typography.phone.body1,
    },
  },
});

export const buttonContainer = style({
  width: '100%',
  minWidth: '7.5625rem',
  '@media': {
    [media.tablet]: {
      minWidth: '7.875rem',
    },
    [media.mobile]: {
      minWidth: '6.125rem',
    },
  },
});

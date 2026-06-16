import { style } from '@vanilla-extract/css';
import { color, typography, boxStyle, media } from '@/shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const label = style({
  ...typography.correction,
  ...typography.desktop.h4,
  color: color.text.main,
  marginBottom: '0.62rem',

  '@media': {
    [media.tablet]: {
      ...typography.tablet.h4,
    },
    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

export const inputRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.62rem',
  width: '100%',
});

export const duplicateButton = style({
  ...typography.correction,
  ...typography.desktop.body1,
  fontFamily: 'pretendard',
  flexShrink: 0,
  height: '3.125rem',
  padding: '0 1.25rem',
  border: `1px solid ${color.brand.gray2}`,
  borderRadius: boxStyle.borderRadius,
  color: color.text.main,
  backgroundColor: '#FFF',
  cursor: 'pointer',

  '@media': {
    [media.tablet]: {
      ...typography.tablet.body1,
    },
    [media.mobile]: {
      ...typography.phone.body1,
      height: '3.25rem',
    },
  },
});

export const errorMessage = style({
  ...typography.correction,
  ...typography.desktop.caption,
  color: color.system.error,
  marginTop: '0.25rem',
  minHeight: '1rem',

  '@media': {
    [media.tablet]: {
      ...typography.tablet.caption,
    },
    [media.mobile]: {
      ...typography.phone.caption,
      marginTop: '0.31rem',
    },
  },
});

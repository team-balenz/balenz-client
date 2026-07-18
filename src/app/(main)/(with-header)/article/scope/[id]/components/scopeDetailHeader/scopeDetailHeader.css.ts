import { style } from '@vanilla-extract/css';
import { color, typography, media } from '@/shared/styles';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.625rem',
  borderBottom: `1px solid ${color.brand.gray1}`,
  paddingBottom: '1.88rem',
  '@media': {
    [media.tablet]: {
      paddingBottom: '1.25rem',
    },
    [media.mobile]: {
      paddingBottom: '1.88rem',
    },
  },
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const infoText = style({
  ...typography.correction,
  ...typography.desktop.h4,
  color: color.text.tertiary,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.62rem',
  '@media': {
    [media.tablet]: {
      ...typography.tablet.h4,
    },
    [media.mobile]: {
      ...typography.phone.body2,
    },
  },
});

import { color, media, typography } from '@/shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  margin: 0,
  border: 0,
});

export const question = style({
  width: '100%',
  marginBottom: '1.88rem',
  padding: 0,

  color: color.text.main,
  ...typography.desktop.h3,
  textAlign: 'center',
  wordBreak: 'keep-all',

  '@media': {
    [media.tablet]: typography.tablet.h3,
    [media.mobile]: typography.phone.h3,
  },
});

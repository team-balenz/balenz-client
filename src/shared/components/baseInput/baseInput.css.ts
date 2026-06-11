import { style } from '@vanilla-extract/css';
import { color, typography, boxStyle, media } from '@/shared/styles';

export const inputContainer = style({
  position: 'relative',
  width: '100%',
});

export const input = style({
  ...typography.correction,
  ...typography.desktop.body1,
  width: '100%',
  height: '3.125rem',
  border: `1px solid ${color.brand.gray2}`,
  borderRadius: boxStyle.borderRadius,
  padding: '0.81rem 1.25rem',

  selectors: {
    '&::placeholder': {
      color: color.text.disabled,
    },
    '&:focus': {
      color: color.text.main,
      borderColor: color.text.main,
      outline: 'none',
    },
  },

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

export const inputWithRightElement = style({
  paddingRight: '3.75rem',

  '@media': {
    [media.mobile]: {
      paddingRight: '3.25rem',
    },
  },
});

export const errorInput = style({
  borderColor: color.system.error,

  selectors: {
    '&:focus': {
      borderColor: color.system.error,
    },
  },
});

export const rightElementWrapper = style({
  position: 'absolute',
  right: '0.94rem',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

import { style } from '@vanilla-extract/css';
import { color, media } from '@/shared/styles';

export const container = style({
  maxWidth: '47rem',
  width: '100%',
  padding: '0.94rem 0.87rem',
  backgroundColor: color.brand.background,
  borderRadius: '0.3125rem',

  '@media': {
    [media.tablet]: {
      maxWidth: '39.875rem',
      padding: '0.94rem 0.88rem',
    },

    [media.mobile]: {
      maxWidth: '22rem',
    },
  },
});

export const articleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '0.97rem',
  marginTop: '1.25rem',
});

export const actionContainer = style({
  marginTop: '2.13rem',

  '@media': {
    [media.tablet]: {
      marginTop: '2.75rem',
    },
    [media.mobile]: {
      marginTop: '2.56rem',
    },
  },
});

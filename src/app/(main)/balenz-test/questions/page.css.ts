import { style } from '@vanilla-extract/css';
import { media, zIndex } from '@/shared/styles';

export const page = style({
  minHeight: '100vh',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const questionListViewport = style({
  width: '100%',
  maxHeight: 'calc(100vh - 7.6875rem)',
  overflowY: 'auto',
  paddingTop: '3.75rem',
  paddingBottom: '1.875rem',

  '@media': {
    [media.tablet]: {
      maxHeight: 'calc(100vh - 10rem)',
      paddingTop: '4.69rem',
    },

    [media.mobile]: {
      maxHeight: 'calc(100vh - 7.5rem)',
      paddingTop: '4.69rem',
    },
  },
});

export const likertWidth = style({
  margin: '0 auto',
  width: '50rem',

  '@media': {
    [media.tablet]: {
      width: '31.25rem',
    },
    [media.mobile]: {
      width: '21.875rem',
    },
  },
});

export const submitBarFixed = style({
  position: 'fixed',
  left: '50%',
  bottom: '2.19rem',
  zIndex: zIndex.questionSubmitBar,

  width: '50rem',
  transform: 'translateX(-50%)',
  pointerEvents: 'none',

  '@media': {
    [media.tablet]: {
      width: '31.25rem',
      bottom: '4.69rem',
    },
    [media.mobile]: {
      width: '21.875rem',
      bottom: '2.37rem',
    },
  },
});

export const submitBarInner = style({
  pointerEvents: 'auto',
});

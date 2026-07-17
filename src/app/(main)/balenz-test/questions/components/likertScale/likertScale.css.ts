import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const scale = style({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
  alignItems: 'center',
  width: '100%',
  margin: '0 auto',

  '::before': {
    content: '',
    position: 'absolute',
    top: '3.125rem',
    left: '8.333%',
    right: '8.333%',
    height: '0.2069rem',
    backgroundColor: '#dedede',
  },

  '@media': {
    [media.tablet]: {
      '::before': {
        top: '1.95313rem',
        height: '0.075rem',
      },
    },
    [media.mobile]: {
      '::before': {
        top: '1.36719rem',
        height: '0.075rem',
      },
    },
  },
});

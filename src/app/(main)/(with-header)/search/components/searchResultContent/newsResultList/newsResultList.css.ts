import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
});

export const tabsContainer = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media': {
    [media.tablet]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    [media.mobile]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  },
});

export const articlesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.625rem',

  '@media': {
    [media.mobile]: {
      gap: '0.31rem',
    },
  },
});

export const articleItem = style({});

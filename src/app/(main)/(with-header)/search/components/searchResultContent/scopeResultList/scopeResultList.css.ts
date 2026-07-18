import { style } from '@vanilla-extract/css';
import { media } from '@/shared/styles';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
});

export const articlesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.62rem',
  margin: 0,
  padding: 0,
  listStyle: 'none',

  '@media': {
    [media.mobile]: {
      gap: '0.31rem',
    },
  },
});

export const articleItem = style({});

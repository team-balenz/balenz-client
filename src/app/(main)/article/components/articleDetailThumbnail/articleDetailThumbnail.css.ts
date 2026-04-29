import { media } from '@/shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  overflow: 'hidden',

  '@media': {
    [media.belowDesktop]: {
      gap: '0.625rem',
    },
  },
});

export const imageContainer = style({
  position: 'relative',
  width: '100%',
  height: '25.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderRadius: '0.3125rem',

  '@media': {
    [media.belowDesktop]: {
      height: '20.625rem',
    },
  },
});

/**
 * fallback 임시 스타일
 */
export const fallback = style({
  width: '100%',
  height: '100%',
  backgroundColor: '#f0f0f0',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const barContainer = style({
  width: '100%',
});

import { style } from '@vanilla-extract/css';
import { media, color, typography, zIndex } from '@/shared/styles';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0',
  overflow: 'hidden',
  backgroundColor: color.brand.gray1,
  // desktop/tablet: 슬라이드 안에서 진보/보수 각 50%
  width: '50%',
  height: '22.5625rem',
  position: 'relative',
  cursor: 'pointer',

  '@media': {
    [media.tablet]: {
      width: '50%',
      height: '22.5625rem',
    },
    [media.mobile]: {
      // mobile: 세로 배치이므로 너비 100%, 높이 절반
      width: '100%',
      height: '12.5rem',
    },
  },
});

export const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
});

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '1rem 1rem 1.75rem',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.20) 65%, #000 100%)',
  color: color.text.inverse,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: zIndex.carouselCard,

  '@media': {
    [media.mobile]: {
      // ideologyBar 너비(1.125rem) + 여백(1rem) 만큼 왼쪽 padding 확보
      padding: '1rem 1rem 1.75rem calc(1.125rem + 1rem)',
    },
  },
});

export const cardTitle = style({
  ...typography.correction,
  ...typography.desktop.h2,
  color: color.text.inverse,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  '@media': {
    [media.tablet]: {
      ...typography.tablet.h2,
    },
    [media.mobile]: {
      ...typography.phone.h3,
    },
  },
});

export const ideologyBar = style({
  height: '1.1875rem',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: zIndex.carouselBar,

  '@media': {
    [media.mobile]: {
      height: '100%',
      width: '1.125rem',
      top: 0,
      left: 0,
    },
  },
});

export const progressiveBar = style({
  backgroundColor: color.brand.progressive,
});

export const conservativeBar = style({
  backgroundColor: color.brand.conservative,
});

import { style } from '@vanilla-extract/css';
import { color } from '@/shared/styles/color.css';
import { media, typography } from '@/shared/styles';

export const container = style({
  width: '53.4375rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.9375rem',

  '@media': {
    [media.tablet]: {
      width: '100%',
    },
    [media.mobile]: {
      width: '100%',
      display: 'flex',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
});

export const viewport = style({
  overflow: 'hidden',
  borderRadius: '1rem',
  width: '100%',
});

export const emblaContainer = style({
  display: 'flex',
  gap: '0',
  marginLeft: '0',
});

export const slide = style({
  // PC/tablet: 슬라이드 1개 = 100%, 내부 카드 2개가 50%씩 가로 배치
  flex: '0 0 100%',
  minWidth: 0,
  display: 'flex',
  flexDirection: 'row',

  '@media': {
    [media.mobile]: {
      // 모바일: 슬라이드 1개 = 100%, 내부 카드 2개가 세로 배치
      flex: '0 0 100%',
      flexDirection: 'column',
    },
  },
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0',
  overflow: 'hidden',
  backgroundColor: color.brand.gray1,
  // PC/tablet: 슬라이드 안에서 진보/보수 각 50%
  width: '50%',
  height: '22.5625rem',
  position: 'relative',

  '@media': {
    [media.tablet]: {
      width: '50%',
      height: '22.5625rem',
    },
    [media.mobile]: {
      // 모바일: 세로 배치이므로 너비 100%, 높이 절반
      width: '100%',
      height: '12.5rem',
    },
  },
});

export const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  backgroundColor: '#ddd',
  position: 'absolute',
  top: 0,
  left: 0,
});

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '1.1875rem 1.7813rem 1.875rem 1.75rem',
  // 하단에서 올라오는 gradient — 상단 투명, 하단만 어둡게
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.20) 65%, #000 100%)',
  color: color.text.inverse,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: '100%',
  zIndex: 10,

  '@media': {
    [media.tablet]: {
      padding: '1.1875rem 0.6875rem 1.5625rem 1.375rem',
    },
    [media.mobile]: {
      // ideologyBar 너비(1.125rem) + 여백(1rem) 만큼 왼쪽 padding 확보
      padding: '1rem 1rem 1rem calc(1.125rem + 0.875rem)',
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

export const ideologyBadge = style({
  display: 'none',
});

export const progressiveBadge = style({
  display: 'none',
});

export const conservativeBadge = style({
  display: 'none',
});

export const ideologyBar = style({
  height: '1.1875rem',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 20,

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

export const controls = style({
  display: 'flex',
  gap: '0.5rem',
});

export const button = style({
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease-in-out',
  backgroundColor: color.brand.main,
  color: color.text.main,

  ':disabled': {
    backgroundColor: color.brand.gray2,
    cursor: 'not-allowed',
  },
});

export const icon = style({
  width: '0.5rem',
  height: '0.875rem',
  aspectRatio: '1/2',
});

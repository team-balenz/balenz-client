import { style } from '@vanilla-extract/css';
import { color } from '@/shared/styles/color.css';
import { media, typography } from '@/shared/styles';

/**
 * 모달 컨테이너
 * - 패딩과 기본 레이아웃
 */
export const container = style({
  padding: '1.875rem 2.75rem 4.375rem 2.75rem',
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [media.tablet]: {
      padding: '1.875rem 2.125rem 3.5625rem 2.125rem',
    },
    [media.mobile]: {
      padding: '1.25rem 1.375rem 3.125rem 1.375rem',
    },
  },
});

/**
 * 제목 래퍼
 * - 제목과 닫기 버튼을 space-between으로 배치
 */
export const titleWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
});

/**
 * 제목
 */
export const title = style({
  ...typography.desktop.h2,
  color: color.text.main,

  '@media': {
    [media.tablet]: typography.tablet.h2,
    [media.mobile]: typography.phone.h2,
  },
});

/**
 * 닫기 버튼
 */
export const closeButton = style({
  width: '1.5rem',
  height: '1.5rem',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    [media.mobile]: {
      display: 'none',
    },
  },
});

/**
 * 설명 텍스트
 */
export const description = style({
  ...typography.desktop.body2,
  color: color.text.secondary,
  marginTop: '0.3125rem',

  '@media': {
    [media.tablet]: typography.tablet.body2,
    [media.mobile]: typography.phone.body2,
  },
});

/**
 * 구분선
 */
export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: '#F3F3F3',
  border: 'none',
  marginTop: '1.25rem',
});

/**
 * 링크 공유 섹션
 */
export const linkShareSection = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 0.625rem',
  marginTop: '1.875rem',
  width: '100%',

  '@media': {
    [media.tablet]: {
      marginTop: '1.5625rem',
    },
    [media.mobile]: {
      marginTop: '1.25rem',
      padding: '0',
    },
  },
});

/**
 * 섹션 제목
 */
export const sectionTitle = style({
  ...typography.desktop.h3,
  color: color.text.main,

  '@media': {
    [media.tablet]: typography.tablet.h3,
    [media.mobile]: typography.phone.h3,
  },
});

/**
 * 링크 복사 컨테이너
 */
export const linkCopyContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '0.625rem',
  padding: '0.875rem 1.125rem',
  borderRadius: '0.5rem',
  backgroundColor: color.brand.gray1,
  border: 'none',
  gap: '0.75rem',

  '@media': {
    [media.belowDesktop]: {
      padding: '0.625rem 0.9375rem',
    },
  },
});

/**
 * 링크 입력창
 */
export const linkInput = style({
  flex: 1,
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  color: color.text.main,
  ...typography.desktop.body1,
  cursor: 'default',
  boxSizing: 'border-box',

  ':focus': {
    outline: 'none',
  },

  '@media': {
    [media.tablet]: typography.tablet.body1,
    [media.mobile]: typography.phone.body2,
  },
});

/**
 * 복사 버튼
 */
export const copyButton = style({
  flexShrink: 0,
  width: '1.5rem',
  height: '1.5rem',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    [media.mobile]: {
      width: '1rem',
      height: '1rem',
    },
  },
});

/**
 * 복사 성공 메시지
 */
export const successMessage = style({
  color: color.system.success,
  ...typography.desktop.caption,

  '@media': {
    [media.tablet]: typography.tablet.caption,
    [media.mobile]: typography.phone.caption,
  },
});

/**
 * 소셜 공유 섹션
 */
export const socialShareSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  marginTop: '4.1875rem',
  padding: '0 0.625rem',

  '@media': {
    [media.tablet]: {
      marginTop: '3.3125rem',
    },
    [media.mobile]: {
      marginTop: '46px',
    },
  },
});

/**
 * 소셜 아이콘 컨테이너
 */
export const socialIconsContainer = style({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '100%',
  padding: '0 1.25rem',

  '@media': {
    [media.mobile]: {
      padding: '0 0.625rem',
    },
  },
});

/**
 * 소셜 링크
 */
export const socialLink = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.3125rem',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
});

/**
 * 소셜 아이콘 래퍼
 */
export const socialIconWrapper = style({
  width: '3.75rem',
  height: '3.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  '@media': {
    [media.mobile]: {
      width: '2.5rem',
      height: '2.5rem',
    },
  },
});

/**
 * 소셜 레이블
 */
export const socialLabel = style({
  ...typography.desktop.body3,
  color: color.text.secondary,
  textAlign: 'center',

  '@media': {
    [media.tablet]: typography.tablet.body3,
    [media.mobile]: typography.phone.body3,
  },
});

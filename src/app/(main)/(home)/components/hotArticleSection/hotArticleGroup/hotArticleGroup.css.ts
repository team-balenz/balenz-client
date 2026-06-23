import { keyframes, style } from '@vanilla-extract/css';
import { color, media, typography } from '@/shared/styles';
import { recipe } from '@vanilla-extract/recipes';

/** 태블릿, 모바일: 짧은 페이드 + 아주 작은 Y 이동 애니메이션 */
const belowDesktopArticleAnimation = keyframes({
  '0%': {
    transform: 'translateY(0.375rem)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

export const group = style({
  width: '100%',
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0.94rem 1.125rem',
  '@media': {
    [media.desktop]: {
      boxShadow: '0 0 2px 0 rgba(17, 17, 17, 0.20)',
      borderRadius: '0.3125rem',
    },
    [media.belowDesktop]: {
      padding: '0',
      minWidth: 0,
    },
  },
});

// 각 그룹의 기사 리스트를 표시하는 컨테이너
export const list = style({
  display: 'flex',
  flexDirection: 'column',
});

// '진보 독자' 또는 '보수 독자' 라벨
export const ideologyLabel = recipe({
  base: {
    ...typography.correction,
    ...typography.desktop.h4,
    '@media': {
      [media.tablet]: {
        ...typography.tablet.h4,
      },
      [media.mobile]: {
        ...typography.phone.h3,
      },
    },
  },
  variants: {
    ideology: {
      VALUE: {
        color: color.brand.progressive,
      },
      NORM: {
        color: color.brand.conservative,
      },
    },
  },
  defaultVariants: {
    ideology: 'VALUE',
  },
});

// 데스크탑 뷰에서의 '관심 기사' 제목
export const desktopGroupTitle = style({
  ...typography.correction,
  ...typography.desktop.h2,
  color: color.text.main,
  '@media': {
    [media.belowDesktop]: {
      display: 'none',
    },
  },
});

// 데스크탑 뷰에서의 기사 아이템
export const desktopArticleItem = style({
  '@media': {
    [media.desktop]: {
      borderBottom: `1px solid ${color.brand.gray1}`,
    },
  },
});

// 태블릿, 모바일 뷰에서의 기사 아이템
export const belowDesktopArticleItem = style({
  '@media': {
    [media.belowDesktop]: {
      marginTop: '0.62rem',
      animation: `${belowDesktopArticleAnimation} 0.38s ease-out`,
    },
  },
});

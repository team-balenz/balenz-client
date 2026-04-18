import { style } from '@vanilla-extract/css';
import { color, media, typography } from '@/shared/styles';
import { recipe } from '@vanilla-extract/recipes';

export const group = style({
  width: '100%',
  maxWidth: '25.69rem',
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
    },
    [media.tablet]: {
      maxWidth: '23.625rem',
    },
    [media.mobile]: {
      maxWidth: '21.875rem',
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
      progressive: {
        color: color.brand.progressive,
      },
      conservative: {
        color: color.brand.conservative,
      },
    },
  },
  defaultVariants: {
    ideology: 'progressive',
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
    },
  },
});

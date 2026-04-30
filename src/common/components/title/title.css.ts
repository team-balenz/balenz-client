import { media } from '@/shared/styles/media';
import { typography, color } from '@/shared/styles';
import { recipe } from '@vanilla-extract/recipes';

/**
 * Title 컴포넌트 컨테이너 스타일
 * articleHeader만 gap 존재
 */
export const container = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {
    variant: {
      default: {
        gap: 0,
      },
      articleHeader: {
        gap: '0.625rem',
      },
      articleSummary: {},
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

/**
 * 부제목 스타일
 * articleSummary만 타이포 상이
 */
export const subtitleStyle = recipe({
  base: {
    ...typography.correction,
    ...typography.desktop.h3,
    color: color.text.tertiary,
    '@media': {
      [media.tablet]: {
        ...typography.tablet.h3,
      },
      [media.mobile]: {
        ...typography.phone.h3,
      },
    },
  },
  variants: {
    variant: {
      default: {},
      articleHeader: {},
      articleSummary: {
        ...typography.desktop.h4,
        '@media': {
          [media.tablet]: {
            ...typography.tablet.body1,
          },
          [media.mobile]: {
            ...typography.phone.body2,
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

/**
 * 메인 제목 스타일
 * articleHeader만 타이포 상이
 * 2줄 초과 시 말줄임표 부여
 */
export const titleStyle = recipe({
  base: {
    ...typography.correction,
    ...typography.desktop.h1,
    color: color.text.main,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '@media': {
      [media.tablet]: {
        ...typography.tablet.h1,
      },
      [media.mobile]: {
        ...typography.phone.h1,
      },
    },
  },
  variants: {
    variant: {
      default: {},
      articleHeader: {
        ...typography.desktop.display,
        '@media': {
          [media.tablet]: {
            ...typography.tablet.display,
          },
          [media.mobile]: {
            ...typography.phone.display,
          },
        },
      },
      articleSummary: {},
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

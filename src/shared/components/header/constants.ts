import { ROUTES } from '@/shared/constants/route';

/**
 * 헤더의 네비게이션 메뉴 항목들
 * 각 항목은 라벨(화면에 표시되는 텍스트)과 경로(href)로 구성
 */
export const NAV_ITEMS = [
  { label: '이념 관점', href: ROUTES.IDEOLOGY },
  { label: '글로벌 관점', href: ROUTES.GLOBAL },
];

/**
 * 로고 이미지의 반응형 크기 (width, height, aspectRatio)
 */
export const LOGO_SIZE = {
  desktop: {
    width: '10.4375rem',
    height: '2rem',
    aspectRatio: '167/32',
  },
  tablet: {
    width: '7.875rem',
    height: '1.5rem',
    aspectRatio: '21/4',
  },
  mobile: {
    width: '6.5625rem',
    height: '1.25rem',
    aspectRatio: '21/4',
  },
};

/**
 * 헤더의 반응형 레이아웃 설정 (padding, height)
 */
export const HEADER_LAYOUT = {
  desktop: {
    padding: '0 5rem',
    height: '5rem',
  },
  tablet: {
    padding: '0 2.5rem',
    height: '4.375rem',
  },
  mobile: {
    padding: '0.9375rem 1.25rem',
    height: 'fit-content',
  },
};

/**
 * 헤더에서 사용되는 아이콘들의 경로
 * - menu: 모바일 메뉴 버튼
 * - search: 검색 버튼
 */
export const ICONS = {
  menu: '/icons/ic_menu.svg',
  search: '/icons/ic_search.svg',
};

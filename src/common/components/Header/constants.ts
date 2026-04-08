/**
 * 헤더의 네비게이션 메뉴 항목들
 * 각 항목은 라벨(화면에 표시되는 텍스트)과 경로(href)로 구성
 */
export const NAV_ITEMS = [
  { label: '이념 관점', href: '/' },
  { label: '글로벌 관점', href: '/global' },
];

/**
 * 기본 활성 네비게이션 항목
 * 페이지 로드 시 처음 표시될 활성 탭을 지정
 */
export const DEFAULT_ACTIVE_TAB = NAV_ITEMS[0].label;

/**
 * 로고 이미지의 반응형 크기 (width, height, aspectRatio)
 */
export const LOGO_SIZE = {
  desktop: {
    width: '167px',
    height: '32px',
    aspectRatio: '167/32',
  },
  tablet: {
    width: '126px',
    height: '24px',
    aspectRatio: '21/4',
  },
  mobile: {
    width: '105px',
    height: '20px',
    aspectRatio: '21/4',
  },
};

/**
 * 헤더의 반응형 레이아웃 설정 (padding, height)
 */
export const HEADER_LAYOUT = {
  desktop: {
    padding: '0 80px',
    height: '80px',
  },
  tablet: {
    padding: '0 40px',
    height: '70px',
  },
  mobile: {
    padding: '70px 20px 15px 20px',
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

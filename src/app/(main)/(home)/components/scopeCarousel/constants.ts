/**
 * ScopeCarousel 사용되는 아이콘들의 경로
 * - prev: '이전' 버튼 아이콘
 * - next: '다음' 버튼 아이콘
 */
export const ICONS = {
  prev: '/icons/ic_prev_arrow.svg',
  next: '/icons/ic_next_arrow.svg',
};

/**
 * ScopeCarousel 기능 옵션
 * - 무한 루프 비활성화
 * - 모든 슬라이드에서 스냅
 * - 스냅 포인트에 자동 정렬
 */
export const CAROUSEL_OPTIONS = {
  align: 'start' as const,
  loop: false,
  skipSnaps: false,
  slidesToScroll: 1,
  dragFree: false,
  containScroll: 'trimSnaps' as const,
} as const;

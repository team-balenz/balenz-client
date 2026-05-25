/**
 * 각 컴포넌트의 z-index를 토큰으로 관리합니다.
 */

export const zIndex = {
  base: 0,
  carouselCard: 10, // ScopeCarouselItem 내부 cardContent
  carouselBar: 20, // ScopeCarouselItem 내부 ideologyBar
  header: 100,
  toast: 200,
  overlay: 1000,
  dialogContent: 1001,
} as const;

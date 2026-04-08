/**
 * 애플리케이션 내 모든 라우트 경로를 정의하는 상수
 * 네비게이션, 리다이렉트, 링크 생성 등에 사용되며,
 * 경로가 변경될 때 이 파일만 수정하면 된다.
 *
 * 사용 예시:
 * - Link의 href: `<Link href={ROUTES.IDEOLOGY}>이념 관점</Link>`
 * - 네비게이션 생성: `NAV_ITEMS.map(item => item.href === ROUTES.IDEOLOGY)`
 * - 라우트 확인: `if (pathname === ROUTES.GLOBAL) { ... }`
 */
export const ROUTES = {
  IDEOLOGY: '/',
  GLOBAL: '/global',
  LOGIN: '/login',
  JOIN: '/join',
  SEARCH: '/search',
} as const;

/**
 * ROUTES의 값 중 하나가 될 수 있는 라우트 경로 타입
 * TypeScript 타입 안전성을 제공하여 잘못된 경로 값을 방지한다.
 *
 * 사용 예시:
 * - 함수 파라미터: `function navigate(path: RoutePath) { ... }`
 * - 변수 선언: `const currentRoute: RoutePath = ROUTES.GLOBAL;`
 */
export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

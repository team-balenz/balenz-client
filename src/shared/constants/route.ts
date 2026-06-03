/**
 * 애플리케이션 내 모든 라우트 경로를 정의하는 상수
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
  DAILY_FOCUS: '/daily-focus',
  SCOPE_DETAIL: (id: number | string) => `/article/scope/${id}`,
  LINK_DETAIL: (id: number | string) => `/article/link/${id}`,
} as const;

/**
 * ROUTES에 정의된 정적 라우트 경로 문자열 타입
 * 함수 형태의 동적 라우트는 제외하고 문자열 경로만 추출
 *
 * 사용 예시:
 * - 함수 파라미터: `function navigate(path: RoutePath) { ... }`
 * - 변수 선언: `const currentRoute: RoutePath = ROUTES.GLOBAL;`
 */
export type RoutePath = Extract<(typeof ROUTES)[keyof typeof ROUTES], string>;

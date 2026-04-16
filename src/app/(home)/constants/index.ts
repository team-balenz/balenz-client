/**
 * 각 SECTION의 subtitle과 title 값
 */

export const SECTION_TITLES = {
  keyIssue: {
    subtitle: 'HOT ISSUE',
    title: '핫이슈 모아보기',
  },
  scope: {
    subtitle: 'SCOPE',
    title: '주제 키워드', // 컴포넌트에서 prop으로 override 필요
  },
  ideologyArticle: {
    subtitle: 'BY IDEOLOGY',
    title: '이념별로 뉴스 모아보기',
  },
} as const;

/**
 * FilterTabs 카테고리 상수
 */

// SCOPE 섹션 내부 카테고리
export const SCOPE_CATEGORY_TABS = [
  { key: 'all', label: '전체' },
  { key: 'politics', label: '정치' },
  { key: 'economy', label: '경제' },
  { key: 'society', label: '사회' },
  { key: 'world', label: '세계' },
  { key: 'culture', label: '문화' },
  { key: 'tech', label: '기술' },
] as const;

// 모바일 뷰 이념별로 뉴스 모아보기(BY IDEOLOGY) 섹션 카테고리
export const BY_IDEOLOGY_CATEGORY_TABS = [
  { key: 'progressive', label: '진보 성향' },
  { key: 'center', label: '중도 성향' },
  { key: 'conservative', label: '보수 성향' },
];

// 추후 scope 아티클 세부 페이지 구현 시, 해당 상수 파일 옮기기
export const SUMMARY_CATEGORY_TABS = [
  { key: 'progressive', label: '진보 성향 기사 요약 보기', mobileLabel: '진보 성향' },
  { key: 'center', label: '중도 성향 기사 요약 보기', mobileLabel: '중도 성향' },
  { key: 'conservative', label: '보수 성향 기사 요약 보기', mobileLabel: '보수 성향' },
] as const;

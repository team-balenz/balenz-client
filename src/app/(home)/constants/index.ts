/* 각 SECTION의 subtitle과 title 값 */
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

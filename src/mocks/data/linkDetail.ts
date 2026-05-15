import type { LinkDetailTypes } from '@/app/(main)/article/link/[id]/types/linkDetailSection';

export const LINK_DETAIL_MOCK = {
  id: 5,
  title: '기사 제목',
  newsAgencyName: '경향신문',
  publishedAt: '2026-04-20',
  frameType: 'VALUE',
  summary: '요약요약',
  articleUrl: 'https://www.naver.com',
  isScraped: false,
} satisfies LinkDetailTypes;

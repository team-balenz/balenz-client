import { type ArticleSummarySectionTypes } from '@/app/(main)/article/scope/[id]/types/articleSummarySection';

// scopeDetail 페이지 기사 요약 섹션 데이터
export const ARTICLE_SUMMARY_SECTION_DATA: ArticleSummarySectionTypes = {
  center: {
    frameType: 'NEUTRAL',
    id: 15,
    newsAgencyName: '경향신문',
    summary: '요약요약',
    title: '기사 제목',
  },
  conservative: {
    frameType: 'NORM',
    id: 113,
    newsAgencyName: '경향신문',
    summary: '요약요약',
    title: '기사 제목',
  },
  progressive: {
    frameType: 'VALUE',
    id: 6,
    newsAgencyName: '경향신문',
    summary: '요약요약',
    title: '기사 제목',
  },
};

import type { ScopeDetailTypes } from '@/app/(main)/article/scope/[id]/types/scopeDetailSection';

export const SCOPE_DETAIL_MOCK = {
  id: 19,
  name: '고용노동부',
  imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
  date: '2026-05-02',
  viewCount: 14,
  isScraped: false,
  keywordSummary:
    '다음은 주제 키워드에 대해 각 성향의 기사들이 어떤 식으로 서술하고 있는지 기사 성향을 설명하는 내용입니다. 예를 들어 “진보 성향으로 서술된 기사의 경우, 주제 키워드에 대해 ~식으로 묘사하고 있는 반면 보수 성향 기사는 ~식으로 표현하고 있습니다. 독자는 각기 다른 주제 키워드에 대한 책임 소재에 유의하길 바랍니다.”와 같이 주제 키워드에 대해 각 기사들이 어떻게 표현하고 있는지 묘사합니다.',
  articleCount: {
    neutral: 7,
    neutralRatio: 0.39,
    norm: 3,
    normRatio: 0.17,
    value: 8,
    valueRatio: 0.44,
  },
  bias: 44,
  dominantFrameType: 'VALUE',
  mainArticles: {
    NEUTRAL: {
      frameType: 'NEUTRAL',
      id: 15,
      newsAgencyName: '경향신문',
      publishedAt: '2026-04-20',
      summary: '요약요약dddd',
      title: '기사 제목',
    },
    NORM: {
      frameType: 'NORM',
      id: 113,
      newsAgencyName: '경향신문',
      publishedAt: '2026-04-20',
      summary: '요약요약',
      title: '기사 제목',
    },
    VALUE: {
      frameType: 'STRONG_VALUE',
      id: 5,
      newsAgencyName: '경향신문',
      publishedAt: '2026-04-20',
      summary: '요약요약',
      title: '기사 제목',
    },
  },
} satisfies ScopeDetailTypes;

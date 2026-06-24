import { type HotIssueGroupTypes } from '@/app/(main)/(home)/types/hotIssueSection';
import { type ScopeCarouselDataType } from '@/app/(main)/(home)/types/scopeCarousel';
import type { ScopeArticleItemData } from '@/shared/components/scopeArticleItem/types';
import { type HotArticleSectionGroupTypes } from '@/app/(main)/(home)/types/hotArticleSection';
import { type ByIdeologySectionGroupTypes } from '@/app/(main)/(home)/types/byIdeologySection';
import { type RelatedArticleSectionGroupTypes } from '@/app/(main)/article/types/relatedArticleSection';

export const HOT_ISSUE_ARTICLE_GROUP: HotIssueGroupTypes[] = [
  {
    keywordId: 1,
    ideology: 'VALUE',
    keyword: '키워드',
    articleItems: [
      {
        articleId: 1,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 2,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        frameType: 'VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    keywordId: 2,
    ideology: 'NORM',
    keyword: '키워드',
    articleItems: [
      {
        articleId: 3,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 4,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    keywordId: 3,
    ideology: 'VALUE',
    keyword: '키워드',
    articleItems: [
      {
        articleId: 5,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 6,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        frameType: 'VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    keywordId: 4,
    ideology: 'NORM',
    keyword: '키워드',
    articleItems: [
      {
        articleId: 7,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 8,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    keywordId: 5,
    ideology: 'VALUE',
    keyword: '키워드',
    articleItems: [
      {
        articleId: 9,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 10,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        frameType: 'VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    keywordId: 6,
    ideology: 'NORM',
    keyword: '키워드',
    articleItems: [
      {
        articleId: 11,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 12,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
];

/**
 * 캐로셀 데이터
 * 6개 카테고리 × 진보/보수 = 12개 아이템
 */
export const SCOPE_CAROUSEL_DATA: ScopeCarouselDataType[] = [
  {
    articleCount: {
      neutral: 5,
      neutralRatio: 0.33,
      norm: 5,
      normRatio: 0.33,
      value: 5,
      valueRatio: 0.33,
    },
    id: 21,
    name: '삼성전자',
    normArticleTitle: '보수 기사 제목입니다 ~',
    normImageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    valueArticleTitle: '진보 기사 제목입니다 ~',
    valueImageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
  },
  {
    articleCount: {
      neutral: 5,
      neutralRatio: 0.33,
      norm: 5,
      normRatio: 0.33,
      value: 5,
      valueRatio: 0.33,
    },
    id: 22,
    name: '삼성전자',
    normArticleTitle: '보수 기사 제목입니다 ~',
    normImageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    valueArticleTitle: '진보 기사 제목입니다 ~',
    valueImageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
  },
  {
    articleCount: {
      neutral: 5,
      neutralRatio: 0.33,
      norm: 5,
      normRatio: 0.33,
      value: 5,
      valueRatio: 0.33,
    },
    id: 23,
    name: '삼성전자',
    normArticleTitle: '보수 기사 제목입니다 ~',
    normImageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    valueArticleTitle: '진보 기사 제목입니다 ~',
    valueImageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
  },
  {
    articleCount: {
      neutral: 5,
      neutralRatio: 0.33,
      norm: 5,
      normRatio: 0.33,
      value: 5,
      valueRatio: 0.33,
    },
    id: 24,
    name: '삼성전자',
    normArticleTitle: '보수 기사 제목입니다 ~',
    normImageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    valueArticleTitle: '진보 기사 제목입니다 ~',
    valueImageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
  },
  {
    articleCount: {
      neutral: 5,
      neutralRatio: 0.33,
      norm: 5,
      normRatio: 0.33,
      value: 5,
      valueRatio: 0.33,
    },
    id: 25,
    name: '삼성전자',
    normArticleTitle: '보수 기사 제목입니다 ~',
    normImageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    valueArticleTitle: '진보 기사 제목입니다 ~',
    valueImageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
  },
  {
    articleCount: {
      neutral: 5,
      neutralRatio: 0.33,
      norm: 5,
      normRatio: 0.33,
      value: 5,
      valueRatio: 0.33,
    },
    id: 27,
    name: '삼성전자',
    normArticleTitle: '보수 기사 제목입니다 ~',
    normImageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    valueArticleTitle: '진보 기사 제목입니다 ~',
    valueImageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
  },
];

/**
 * ScopeCategorySection 카테고리별 아이템 데이터
 * 카테고리 key(all, politics, economy 등)를 인덱스로 하는 아이템 배열
 * - 인기 SCOPE 섹션에서도 사용 (같은 구조의 mock data 필요)
 */

export const SCOPE_ALL_ITEMS: ScopeArticleItemData[] = [
  {
    articleCount: {
      neutral: 7,
      neutralRatio: 0.39,
      norm: 3,
      normRatio: 0.17,
      value: 8,
      valueRatio: 0.44,
    },
    dominantFrameType: 'VALUE',
    id: 19,
    imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    name: '고용노동부',
  },
  {
    articleCount: {
      neutral: 13,
      neutralRatio: 0.62,
      norm: 5,
      normRatio: 0.24,
      value: 3,
      valueRatio: 0.14,
    },
    dominantFrameType: 'NEUTRAL',
    id: 24,
    imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    name: '성기선',
  },
  {
    articleCount: {
      neutral: 3,
      neutralRatio: 0.23,
      norm: 6,
      normRatio: 0.46,
      value: 4,
      valueRatio: 0.31,
    },
    dominantFrameType: 'NORM',
    id: 23,
    imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    name: '교육감',
  },
  {
    articleCount: {
      neutral: 8,
      neutralRatio: 0.42,
      norm: 9,
      normRatio: 0.47,
      value: 2,
      valueRatio: 0.11,
    },
    dominantFrameType: 'NORM',
    id: 22,
    imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    name: '인천',
  },
  {
    articleCount: {
      neutral: 2,
      neutralRatio: 0.33,
      norm: 2,
      normRatio: 0.33,
      value: 2,
      valueRatio: 0.33,
    },
    dominantFrameType: 'BALANCED',
    id: 20,
    imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    name: '경찰청',
  },
  {
    articleCount: {
      neutral: 1,
      neutralRatio: 0.2,
      norm: 1,
      normRatio: 0.2,
      value: 3,
      valueRatio: 0.6,
    },
    dominantFrameType: 'VALUE',
    id: 18,
    imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    name: '신경호',
  },
];

// API 연동 전 목데이터 — 카테고리별 실제 데이터는 API 연동 시 제거
export const MOCK_SCOPE_ARTICLES: Record<string, ScopeArticleItemData[]> = {
  all: SCOPE_ALL_ITEMS,
  politics: [
    {
      articleCount: {
        neutral: 7,
        neutralRatio: 0.39,
        norm: 3,
        normRatio: 0.17,
        value: 8,
        valueRatio: 0.44,
      },
      dominantFrameType: 'VALUE',
      id: 19,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      name: '고용노동부',
    },
    {
      articleCount: {
        neutral: 7,
        neutralRatio: 0.39,
        norm: 3,
        normRatio: 0.17,
        value: 8,
        valueRatio: 0.44,
      },
      dominantFrameType: 'VALUE',
      id: 20,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      name: '고용노동부',
    },
  ],
  economy: [
    {
      articleCount: {
        neutral: 13,
        neutralRatio: 0.62,
        norm: 5,
        normRatio: 0.24,
        value: 3,
        valueRatio: 0.14,
      },
      dominantFrameType: 'NEUTRAL',
      id: 21,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      name: '성기선',
    },
    {
      articleCount: {
        neutral: 13,
        neutralRatio: 0.62,
        norm: 5,
        normRatio: 0.24,
        value: 3,
        valueRatio: 0.14,
      },
      dominantFrameType: 'NEUTRAL',
      id: 22,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      name: '성기선',
    },
  ],
  society: [
    {
      articleCount: {
        neutral: 3,
        neutralRatio: 0.23,
        norm: 6,
        normRatio: 0.46,
        value: 4,
        valueRatio: 0.31,
      },
      dominantFrameType: 'NORM',
      id: 23,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      name: '교육감',
    },
    {
      articleCount: {
        neutral: 3,
        neutralRatio: 0.23,
        norm: 6,
        normRatio: 0.46,
        value: 4,
        valueRatio: 0.31,
      },
      dominantFrameType: 'NORM',
      id: 24,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      name: '교육감',
    },
  ],
  world: [
    {
      articleCount: {
        neutral: 8,
        neutralRatio: 0.42,
        norm: 9,
        normRatio: 0.47,
        value: 2,
        valueRatio: 0.11,
      },
      dominantFrameType: 'NORM',
      id: 25,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      name: '인천',
    },
    {
      articleCount: {
        neutral: 8,
        neutralRatio: 0.42,
        norm: 9,
        normRatio: 0.47,
        value: 2,
        valueRatio: 0.11,
      },
      dominantFrameType: 'NORM',
      id: 26,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      name: '인천',
    },
  ],
  culture: [
    {
      articleCount: {
        neutral: 2,
        neutralRatio: 0.33,
        norm: 2,
        normRatio: 0.33,
        value: 2,
        valueRatio: 0.33,
      },
      dominantFrameType: 'BALANCED',
      id: 27,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      name: '경찰청',
    },
    {
      articleCount: {
        neutral: 2,
        neutralRatio: 0.33,
        norm: 2,
        normRatio: 0.33,
        value: 2,
        valueRatio: 0.33,
      },
      dominantFrameType: 'BALANCED',
      id: 28,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      name: '경찰청',
    },
  ],
  tech: [
    {
      articleCount: {
        neutral: 1,
        neutralRatio: 0.2,
        norm: 1,
        normRatio: 0.2,
        value: 3,
        valueRatio: 0.6,
      },
      dominantFrameType: 'VALUE',
      id: 29,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      name: '신경호',
    },
    {
      articleCount: {
        neutral: 1,
        neutralRatio: 0.2,
        norm: 1,
        normRatio: 0.2,
        value: 3,
        valueRatio: 0.6,
      },
      dominantFrameType: 'VALUE',
      id: 30,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      name: '신경호',
    },
  ],
};

/**
 * HotArticleSection 관심 기사 데이터
 */
export const HOT_ARTICLE_GROUP: HotArticleSectionGroupTypes[] = [
  {
    ideology: 'VALUE',
    articleItems: [
      {
        articleId: 1,
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 2,
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 3,
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 4,
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 5,
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 6,
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    ideology: 'NORM',
    articleItems: [
      {
        articleId: 7,
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 8,
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 9,
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 10,
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 11,
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 12,
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
];

export const BY_IDEOLOGY_SECTION_DATA: ByIdeologySectionGroupTypes[] = [
  {
    ideology: 'VALUE',
    articleItems: [
      {
        articleId: 1,
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄 초과의 경우, 말줄임표 적용해주세요',
        mediaName: '언론사명',
      },
      {
        articleId: 2,
        frameType: 'VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 3,
        frameType: 'VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 4,
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 5,
        frameType: 'VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 6,
        frameType: 'VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 7,
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 8,
        frameType: 'VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 9,
        frameType: 'VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 10,
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    ideology: 'NEUTRAL',
    articleItems: [
      {
        articleId: 11,
        frameType: 'NEUTRAL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다.세 줄 초과시, 말줄임표 적용해주세요',
        mediaName: '언론사명',
      },
      {
        articleId: 12,
        frameType: 'NEUTRAL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 13,
        frameType: 'NEUTRAL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 14,
        frameType: 'NEUTRAL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 15,
        frameType: 'NEUTRAL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 16,
        frameType: 'NEUTRAL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 17,
        frameType: 'NEUTRAL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 18,
        frameType: 'NEUTRAL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 19,
        frameType: 'NEUTRAL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 20,
        frameType: 'NEUTRAL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    ideology: 'NORM',
    articleItems: [
      {
        articleId: 21,
        frameType: 'NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 22,
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 23,
        frameType: 'NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 24,
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 25,
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 26,
        frameType: 'NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 27,
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 28,
        frameType: 'NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 29,
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 30,
        frameType: 'NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
];

// 스코프, 링크 세부 페이지 연관기사 영역 데이터
export const RELATED_ARTICLE_SECTION_DATA: RelatedArticleSectionGroupTypes[] = [
  {
    ideology: 'VALUE',
    articleItems: [
      {
        articleId: 1,
        frameType: 'VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
        articlePublishedDate: '2026-04-25',
        articleSummary:
          '해당 섹션은 기사의 요약 부분입니다. “아티클_링크” 페이지 내 요약을 최대 세 줄까지 노출합니다. 세 줄 초과의 경우, 말줄임표를 적용해주세요. 다음은 주제 키워드에 대해 각 성향의 기사들이 어떤 식으로 서술하고 있는지 기사 성향을 설명하는 내용입니다. 예를 들어 “진보 성향으로 서술된 기사의 경우, 주제 키워드에 대해 ~식으로 묘사하고 있는 반면 보수 성향 기사는 ~식으로 표현하고 있습니다. 독자는 각기 다른 주제 키워드에 대한 책임 소재에 유의하길 바랍니다.”와 같이 주제 키워드에 대해 각 기사들이 어떻게 표현하고 있는지 묘사합니다.',
      },
      {
        articleId: 2,
        frameType: 'STRONG_VALUE',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
        articlePublishedDate: '2026-04-25',
        articleSummary:
          '해당 섹션은 기사의 요약 부분입니다. “아티클_링크” 페이지 내 요약을 최대 세 줄까지 노출합니다. 세 줄 초과의 경우, 말줄임표를 적용해주세요. 다음은 주제 키워드에 대해 각 성향의 기사들이 어떤 식으로 서술하고 있는지 기사 성향을 설명하는 내용입니다. 예를 들어 “진보 성향으로 서술된 기사의 경우, 주제 키워드에 대해 ~식으로 묘사하고 있는 반면 보수 성향 기사는 ~식으로 표현하고 있습니다. 독자는 각기 다른 주제 키워드에 대한 책임 소재에 유의하길 바랍니다.”와 같이 주제 키워드에 대해 각 기사들이 어떻게 표현하고 있는지 묘사합니다.',
      },
    ],
  },
  {
    ideology: 'NEUTRAL',
    articleItems: [
      {
        articleId: 3,
        frameType: 'NEUTRAL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
        articlePublishedDate: '2026-04-25',
        articleSummary:
          '해당 섹션은 기사의 요약 부분입니다. “아티클_링크” 페이지 내 요약을 최대 세 줄까지 노출합니다. 세 줄 초과의 경우, 말줄임표를 적용해주세요. 다음은 주제 키워드에 대해 각 성향의 기사들이 어떤 식으로 서술하고 있는지 기사 성향을 설명하는 내용입니다. 예를 들어 “진보 성향으로 서술된 기사의 경우, 주제 키워드에 대해 ~식으로 묘사하고 있는 반면 보수 성향 기사는 ~식으로 표현하고 있습니다. 독자는 각기 다른 주제 키워드에 대한 책임 소재에 유의하길 바랍니다.”와 같이 주제 키워드에 대해 각 기사들이 어떻게 표현하고 있는지 묘사합니다.',
      },
      {
        articleId: 4,
        frameType: 'NEUTRAL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
        articlePublishedDate: '2026-04-25',
        articleSummary:
          '해당 섹션은 기사의 요약 부분입니다. “아티클_링크” 페이지 내 요약을 최대 세 줄까지 노출합니다. 세 줄 초과의 경우, 말줄임표를 적용해주세요. 다음은 주제 키워드에 대해 각 성향의 기사들이 어떤 식으로 서술하고 있는지 기사 성향을 설명하는 내용입니다. 예를 들어 “진보 성향으로 서술된 기사의 경우, 주제 키워드에 대해 ~식으로 묘사하고 있는 반면 보수 성향 기사는 ~식으로 표현하고 있습니다. 독자는 각기 다른 주제 키워드에 대한 책임 소재에 유의하길 바랍니다.”와 같이 주제 키워드에 대해 각 기사들이 어떻게 표현하고 있는지 묘사합니다.',
      },
    ],
  },
  {
    ideology: 'NORM',
    articleItems: [
      {
        articleId: 5,
        frameType: 'NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
        articlePublishedDate: '2026-04-25',
        articleSummary:
          '해당 섹션은 기사의 요약 부분입니다. “아티클_링크” 페이지 내 요약을 최대 세 줄까지 노출합니다. 세 줄 초과의 경우, 말줄임표를 적용해주세요. 다음은 주제 키워드에 대해 각 성향의 기사들이 어떤 식으로 서술하고 있는지 기사 성향을 설명하는 내용입니다. 예를 들어 “진보 성향으로 서술된 기사의 경우, 주제 키워드에 대해 ~식으로 묘사하고 있는 반면 보수 성향 기사는 ~식으로 표현하고 있습니다. 독자는 각기 다른 주제 키워드에 대한 책임 소재에 유의하길 바랍니다.”와 같이 주제 키워드에 대해 각 기사들이 어떻게 표현하고 있는지 묘사합니다.',
      },
      {
        articleId: 6,
        frameType: 'STRONG_NORM',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
        articlePublishedDate: '2026-04-25',
        articleSummary:
          '해당 섹션은 기사의 요약 부분입니다. “아티클_링크” 페이지 내 요약을 최대 세 줄까지 노출합니다. 세 줄 초과의 경우, 말줄임표를 적용해주세요. 다음은 주제 키워드에 대해 각 성향의 기사들이 어떤 식으로 서술하고 있는지 기사 성향을 설명하는 내용입니다. 예를 들어 “진보 성향으로 서술된 기사의 경우, 주제 키워드에 대해 ~식으로 묘사하고 있는 반면 보수 성향 기사는 ~식으로 표현하고 있습니다. 독자는 각기 다른 주제 키워드에 대한 책임 소재에 유의하길 바랍니다.”와 같이 주제 키워드에 대해 각 기사들이 어떻게 표현하고 있는지 묘사합니다.',
      },
    ],
  },
];

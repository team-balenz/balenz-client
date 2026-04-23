import { type HotIssueGroupTypes } from '@/app/(main)/(home)/types/hotIssueSection';
import { type ScopeCarouselDataType } from '@/app/(main)/(home)/types/scopeCarousel';
import type { ScopeArticleItemData } from '@/shared/components/scopeArticleItem/types';
import { type HotArticleSectionGroupTypes } from '@/app/(main)/(home)/types/hotArticleSection';
import { type ByIdeologySectionGroupTypes } from '@/app/(main)/(home)/types/byIdeologySection';

export const HOT_ISSUE_ARTICLE_GROUP: HotIssueGroupTypes[] = [
  {
    keywordId: 1,
    ideology: 'progressive',
    keyword: '키워드',
    articleItems: [
      {
        articleId: 1,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        ideologyIndicatorValue: 'SL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 2,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        ideologyIndicatorValue: 'L',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    keywordId: 2,
    ideology: 'conservative',
    keyword: '키워드',
    articleItems: [
      {
        articleId: 3,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 4,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    keywordId: 3,
    ideology: 'progressive',
    keyword: '키워드',
    articleItems: [
      {
        articleId: 5,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        ideologyIndicatorValue: 'SL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 6,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        ideologyIndicatorValue: 'L',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    keywordId: 4,
    ideology: 'conservative',
    keyword: '키워드',
    articleItems: [
      {
        articleId: 7,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 8,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    keywordId: 5,
    ideology: 'progressive',
    keyword: '키워드',
    articleItems: [
      {
        articleId: 9,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        ideologyIndicatorValue: 'SL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 10,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        ideologyIndicatorValue: 'L',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    keywordId: 6,
    ideology: 'conservative',
    keyword: '키워드',
    articleItems: [
      {
        articleId: 11,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 12,
        articleThumbnail: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
        ideologyIndicatorValue: 'SR',
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
    id: '1',
    category: 'politics',
    categoryLabel: '정치',
    articles: {
      progressive: {
        title:
          '(정치-진보) 해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요.',
        image: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      },
      conservative: {
        title:
          '(정치-보수) 해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요.',
        image: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      },
    },
  },
  {
    id: '2',
    category: 'economy',
    categoryLabel: '경제',
    articles: {
      progressive: {
        title:
          '(경제-진보) 해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요.',
        image: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      },
      conservative: {
        title:
          '(경제-보수) 해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요.',
        image: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      },
    },
  },
  {
    id: '3',
    category: 'society',
    categoryLabel: '사회',
    articles: {
      progressive: {
        title:
          '(사회-진보) 해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요.',
        image: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      },
      conservative: {
        title:
          '(사회-보수) 해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요.',
        image: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      },
    },
  },
  {
    id: '4',
    category: 'world',
    categoryLabel: '세계',
    articles: {
      progressive: {
        title:
          '(세계-진보) 해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요.',
        image: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      },
      conservative: {
        title:
          '(세계-보수) 해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요.',
        image: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      },
    },
  },
  {
    id: '5',
    category: 'culture',
    categoryLabel: '문화',
    articles: {
      progressive: {
        title:
          '(문화-진보) 해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요.',
        image: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      },
      conservative: {
        title:
          '(문화-보수) 해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요.',
        image: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      },
    },
  },
  {
    id: '6',
    category: 'technology',
    categoryLabel: '기술',
    articles: {
      progressive: {
        title:
          '(기술-진보) 해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요.',
        image: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      },
      conservative: {
        title:
          '(기술-보수) 해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요.',
        image: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      },
    },
  },
];

/**
 * ScopeCategorySection 카테고리별 아이템 데이터
 * 카테고리 key(all, politics, economy 등)를 인덱스로 하는 아이템 배열
 * - 인기 SCOPE 섹션에서도 사용 (같은 구조의 mock data 필요)
 */

export const SCOPE_ALL_ITEMS: ScopeArticleItemData[] = [
  {
    keywordId: '1',
    imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    imageAlt: '대통령 탄핵 이미지',
    keyword: '대통령 탄핵',
    ideology: 'progressive',
    progressiveCount: 50,
    centerCount: 30,
    conservativeCount: 20,
  },
  {
    keywordId: '2',
    imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    imageAlt: '최저임금 이미지',
    keyword: '최저임금',
    ideology: 'conservative',
    progressiveCount: 20,
    centerCount: 30,
    conservativeCount: 50,
  },
  {
    keywordId: '3',
    imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    imageAlt: '부동산 정책 이미지',
    keyword: '부동산 정책',
    ideology: 'center',
    progressiveCount: 30,
    centerCount: 50,
    conservativeCount: 20,
  },
  {
    keywordId: '4',
    imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    imageAlt: '한미 동맹 이미지',
    keyword: '한미 동맹',
    ideology: 'conservative',
    progressiveCount: 15,
    centerCount: 25,
    conservativeCount: 60,
  },
  {
    keywordId: '5',
    imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    imageAlt: '기후 변화 이미지',
    keyword: '기후 변화',
    ideology: 'progressive',
    progressiveCount: 60,
    centerCount: 25,
    conservativeCount: 15,
  },
  {
    keywordId: '6',
    imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
    imageAlt: '의료 개혁 이미지',
    keyword: '의료 개혁',
    ideology: 'progressive',
    progressiveCount: 45,
    centerCount: 35,
    conservativeCount: 20,
  },
];

// API 연동 전 목데이터 — 카테고리별 실제 데이터는 API 연동 시 제거
export const MOCK_SCOPE_ARTICLES: Record<string, ScopeArticleItemData[]> = {
  all: SCOPE_ALL_ITEMS,
  politics: [
    {
      keywordId: 'p1',
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      imageAlt: '대통령 탄핵 이미지',
      keyword: '대통령 탄핵',
      ideology: 'progressive',
      progressiveCount: 50,
      centerCount: 30,
      conservativeCount: 20,
    },
    {
      keywordId: 'p2',
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      imageAlt: '한미 동맹 이미지',
      keyword: '한미 동맹',
      ideology: 'conservative',
      progressiveCount: 15,
      centerCount: 25,
      conservativeCount: 60,
    },
  ],
  economy: [
    {
      keywordId: 'e1',
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      imageAlt: '최저임금 이미지',
      keyword: '최저임금',
      ideology: 'conservative',
      progressiveCount: 20,
      centerCount: 30,
      conservativeCount: 50,
    },
    {
      keywordId: 'e2',
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      imageAlt: '부동산 정책 이미지',
      keyword: '부동산 정책',
      ideology: 'center',
      progressiveCount: 30,
      centerCount: 50,
      conservativeCount: 20,
    },
  ],
  society: [
    {
      keywordId: 's1',
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      imageAlt: '교육 정책 이미지',
      keyword: '교육 정책',
      ideology: 'progressive',
      progressiveCount: 55,
      centerCount: 25,
      conservativeCount: 20,
    },
  ],
  world: [
    {
      keywordId: 'w1',
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      imageAlt: '우크라이나 전쟁 이미지',
      keyword: '우크라이나 전쟁',
      ideology: 'center',
      progressiveCount: 35,
      centerCount: 45,
      conservativeCount: 20,
    },
  ],
  culture: [
    {
      keywordId: 'c1',
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      imageAlt: '문화유산 보존 이미지',
      keyword: '문화유산 보존',
      ideology: 'center',
      progressiveCount: 40,
      centerCount: 45,
      conservativeCount: 15,
    },
  ],
  tech: [
    {
      keywordId: 't1',
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      imageAlt: '기후 변화 이미지',
      keyword: '기후 변화',
      ideology: 'progressive',
      progressiveCount: 60,
      centerCount: 25,
      conservativeCount: 15,
    },
    {
      keywordId: 't2',
      imageUrl: 'https://i.pinimg.com/736x/44/b0/f0/44b0f0315ece65cdc3b64130c91ea009.jpg',
      imageAlt: '의료 개혁 이미지',
      keyword: '의료 개혁',
      ideology: 'progressive',
      progressiveCount: 45,
      centerCount: 35,
      conservativeCount: 20,
    },
  ],
};

/**
 * HotArticleSection 관심 기사 데이터
 */
export const HOT_ARTICLE_GROUP: HotArticleSectionGroupTypes[] = [
  {
    ideology: 'progressive',
    articleItems: [
      {
        articleId: 1,
        ideologyIndicatorValue: 'SL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 2,
        ideologyIndicatorValue: 'SL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 3,
        ideologyIndicatorValue: 'SL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 4,
        ideologyIndicatorValue: 'SL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 5,
        ideologyIndicatorValue: 'SL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 6,
        ideologyIndicatorValue: 'SL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    ideology: 'conservative',
    articleItems: [
      {
        articleId: 7,
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 8,
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 9,
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 10,
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 11,
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 12,
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
];

export const BY_IDEOLOGY_SECTION_DATA: ByIdeologySectionGroupTypes[] = [
  {
    ideology: 'progressive',
    articleItems: [
      {
        articleId: 1,
        ideologyIndicatorValue: 'SL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄 초과의 경우, 말줄임표 적용해주세요',
        mediaName: '언론사명',
      },
      {
        articleId: 2,
        ideologyIndicatorValue: 'L',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 3,
        ideologyIndicatorValue: 'L',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 4,
        ideologyIndicatorValue: 'SL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 5,
        ideologyIndicatorValue: 'L',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 6,
        ideologyIndicatorValue: 'L',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 7,
        ideologyIndicatorValue: 'SL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 8,
        ideologyIndicatorValue: 'L',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 9,
        ideologyIndicatorValue: 'L',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 10,
        ideologyIndicatorValue: 'SL',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    ideology: 'center',
    articleItems: [
      {
        articleId: 11,
        ideologyIndicatorValue: 'C',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다.세 줄 초과시, 말줄임표 적용해주세요',
        mediaName: '언론사명',
      },
      {
        articleId: 12,
        ideologyIndicatorValue: 'C',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 13,
        ideologyIndicatorValue: 'C',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 14,
        ideologyIndicatorValue: 'C',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 15,
        ideologyIndicatorValue: 'C',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 16,
        ideologyIndicatorValue: 'C',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 17,
        ideologyIndicatorValue: 'C',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 18,
        ideologyIndicatorValue: 'C',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 19,
        ideologyIndicatorValue: 'C',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 20,
        ideologyIndicatorValue: 'C',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
  {
    ideology: 'conservative',
    articleItems: [
      {
        articleId: 21,
        ideologyIndicatorValue: 'R',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 22,
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 23,
        ideologyIndicatorValue: 'R',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 24,
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 25,
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 26,
        ideologyIndicatorValue: 'R',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 27,
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 28,
        ideologyIndicatorValue: 'R',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 29,
        ideologyIndicatorValue: 'SR',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
      {
        articleId: 30,
        ideologyIndicatorValue: 'R',
        articleTitle:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 세 줄 초과의 경우, 말줄임표 적용해주세요.',
        mediaName: '언론사명',
      },
    ],
  },
];

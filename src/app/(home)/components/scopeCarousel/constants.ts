import { ScopeCategoryType } from './types';

export const ICONS = {
  prev: '/icons/ic_prev_arrow.svg',
  next: '/icons/ic_next_arrow.svg',
};

/**
 * 캐로셀 데이터
 * 6개 카테고리 × 진보/보수 = 12개 아이템
 */
export const SCOPE_CAROUSEL_CATEGORIES: ScopeCategoryType[] = [
  {
    id: '1',
    category: 'politics',
    categoryLabel: '정치',
    articles: {
      progressive: {
        title:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요',
        image: 'https://picsum.photos/400/300?random=1',
      },
      conservative: {
        title:
          '해당 섹션은 기사의 제목을 작성하는 섹션입니다. 두 줄을 초과할 시, 말줄임표 적용해주세요',
        image: 'https://picsum.photos/400/300?random=2',
      },
    },
  },
  {
    id: '2',
    category: 'economy',
    categoryLabel: '경제',
    articles: {
      progressive: {
        title: '균등분배',
        image: '/images/carousel/progressive-2.jpg',
      },
      conservative: {
        title: '시장경제',
        image: '/images/carousel/conservative-2.jpg',
      },
    },
  },
  {
    id: '3',
    category: 'society',
    categoryLabel: '사회',
    articles: {
      progressive: {
        title: '사회정의',
        image: '/images/carousel/progressive-3.jpg',
      },
      conservative: {
        title: '질서유지',
        image: '/images/carousel/conservative-3.jpg',
      },
    },
  },
  {
    id: '4',
    category: 'world',
    categoryLabel: '세계',
    articles: {
      progressive: {
        title: '국제협력',
        image: '/images/carousel/progressive-1.jpg',
      },
      conservative: {
        title: '국익우선',
        image: '/images/carousel/conservative-1.jpg',
      },
    },
  },
  {
    id: '5',
    category: 'culture',
    categoryLabel: '문화',
    articles: {
      progressive: {
        title: '문화다양성',
        image: '/images/carousel/progressive-2.jpg',
      },
      conservative: {
        title: '전통문화',
        image: '/images/carousel/conservative-2.jpg',
      },
    },
  },
  {
    id: '6',
    category: 'technology',
    categoryLabel: '기술',
    articles: {
      progressive: {
        title: '기술혁신',
        image: '/images/carousel/progressive-3.jpg',
      },
      conservative: {
        title: '기술규제',
        image: '/images/carousel/conservative-3.jpg',
      },
    },
  },
];

export const CAROUSEL_OPTIONS = {
  align: 'start' as const,
  loop: false,
  skipSnaps: false,
  slidesToScroll: 1,
  dragFree: false,
  containScroll: 'trimSnaps' as const,
} as const;

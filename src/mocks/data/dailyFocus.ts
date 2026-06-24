import type { DailyFocusData } from '@/app/(main)/daily-focus/types/types';

export const MOCK_DAILY_FOCUS = {
  articles: [
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/736x/cd/d0/66/cdd0667c4959fef2f2a05896e428b13b.jpg',
      name: '주제키워드',
      summary: '주제키워드에 대한 주요 이슈와 다양한 관점을 요약한 내용입니다.',
      isScraped: false,
      articleCount: {
        neutral: 3,
        neutralRatio: 0.23,
        norm: 6,
        normRatio: 0.46,
        value: 4,
        valueRatio: 0.31,
      },
      mainArticles: {
        norm: {
          frameType: 'STRONG_VALUE',
          id: 56,
          newsAgencyName: '경향신문',
          summary:
            '다음은 주제 키워드에 대해 각 성향의 기사들이 어떤 식으로 서술하고 있는지 기사 성향을 설명하는 내용입니다. 예를 들어 “진보 성향으로 서술된 기사의 경우, 주제 키워드에 대해 ~식으로 묘사하고 있는 반면 보수 성향 기사는 ~식으로 표현하고 있습니다. 독자는 각기 다른 주제 키워드에 대한 책임 소재에 유의하길 바랍니다.”와 같이 주제 키워드에 대해 각 기사들이 어떻게 표현하고 있는지 묘사합니다.',
          title: '기사 본연의 제목을 표시해주세요. 두 줄 초과의 경우 말줄임표를 사용해주세요.',
        },
        value: {
          frameType: 'STRONG_NORM',
          id: 51,
          newsAgencyName: '경향신문',
          summary:
            '다음은 주제 키워드에 대해 각 성향의 기사들이 어떤 식으로 서술하고 있는지 기사 성향을 설명하는 내용입니다. 예를 들어 “진보 성향으로 서술된 기사의 경우, 주제 키워드에 대해 ~식으로 묘사하고 있는 반면 보수 성향 기사는 ~식으로 표현하고 있습니다. 독자는 각기 다른 주제 키워드에 대한 책임 소재에 유의하길 바랍니다.”와 같이 주제 키워드에 대해 각 기사들이 어떻게 표현하고 있는지 묘사합니다.',
          title: '기사 본연의 제목을 표시해주세요. 두 줄 초과의 경우 말줄임표를 사용해주세요.',
        },
      },
    },
    {
      id: 2,
      imageUrl: 'https://i.pinimg.com/736x/cd/d0/66/cdd0667c4959fef2f2a05896e428b13b.jpg',
      name: '주제키워드',
      summary: '주제키워드에 대한 주요 이슈와 다양한 관점을 요약한 내용입니다.',
      articleCount: {
        neutral: 3,
        neutralRatio: 0.23,
        norm: 6,
        normRatio: 0.46,
        value: 4,
        valueRatio: 0.31,
      },
      isScraped: true,
      mainArticles: {
        norm: {
          frameType: 'VALUE',
          id: 56,
          newsAgencyName: '경향신문',
          summary:
            '다음은 주제 키워드에 대해 각 성향의 기사들이 어떤 식으로 서술하고 있는지 기사 성향을 설명하는 내용입니다. 예를 들어 “진보 성향으로 서술된 기사의 경우, 주제 키워드에 대해 ~식으로 묘사하고 있는 반면 보수 성향 기사는 ~식으로 표현하고 있습니다. 독자는 각기 다른 주제 키워드에 대한 책임 소재에 유의하길 바랍니다.”와 같이 주제 키워드에 대해 각 기사들이 어떻게 표현하고 있는지 묘사합니다.',
          title: '기사 본연의 제목을 표시해주세요. 두 줄 초과의 경우 말줄임표를 사용해주세요.',
        },
        value: {
          frameType: 'NORM',
          id: 51,
          newsAgencyName: '경향신문',
          summary:
            '다음은 주제 키워드에 대해 각 성향의 기사들이 어떤 식으로 서술하고 있는지 기사 성향을 설명하는 내용입니다. 예를 들어 “진보 성향으로 서술된 기사의 경우, 주제 키워드에 대해 ~식으로 묘사하고 있는 반면 보수 성향 기사는 ~식으로 표현하고 있습니다. 독자는 각기 다른 주제 키워드에 대한 책임 소재에 유의하길 바랍니다.”와 같이 주제 키워드에 대해 각 기사들이 어떻게 표현하고 있는지 묘사합니다.',
          title: '기사 본연의 제목을 표시해주세요. 두 줄 초과의 경우 말줄임표를 사용해주세요.',
        },
      },
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/736x/cd/d0/66/cdd0667c4959fef2f2a05896e428b13b.jpg',
      name: '주제키워드',
      summary: '주제키워드에 대한 주요 이슈와 다양한 관점을 요약한 내용입니다.',
      articleCount: {
        neutral: 3,
        neutralRatio: 0.23,
        norm: 6,
        normRatio: 0.46,
        value: 4,
        valueRatio: 0.31,
      },
      isScraped: true,
      mainArticles: {
        norm: {
          frameType: 'STRONG_VALUE',
          id: 56,
          newsAgencyName: '경향신문',
          summary:
            '다음은 주제 키워드에 대해 각 성향의 기사들이 어떤 식으로 서술하고 있는지 기사 성향을 설명하는 내용입니다. 예를 들어 “진보 성향으로 서술된 기사의 경우, 주제 키워드에 대해 ~식으로 묘사하고 있는 반면 보수 성향 기사는 ~식으로 표현하고 있습니다. 독자는 각기 다른 주제 키워드에 대한 책임 소재에 유의하길 바랍니다.”와 같이 주제 키워드에 대해 각 기사들이 어떻게 표현하고 있는지 묘사합니다.',
          title: '기사 본연의 제목을 표시해주세요. 두 줄 초과의 경우 말줄임표를 사용해주세요.',
        },
        value: {
          frameType: 'NEUTRAL',
          id: 51,
          newsAgencyName: '경향신문',
          summary:
            '다음은 주제 키워드에 대해 각 성향의 기사들이 어떤 식으로 서술하고 있는지 기사 성향을 설명하는 내용입니다. 예를 들어 “진보 성향으로 서술된 기사의 경우, 주제 키워드에 대해 ~식으로 묘사하고 있는 반면 보수 성향 기사는 ~식으로 표현하고 있습니다. 독자는 각기 다른 주제 키워드에 대한 책임 소재에 유의하길 바랍니다.”와 같이 주제 키워드에 대해 각 기사들이 어떻게 표현하고 있는지 묘사합니다.',
          title: '기사 본연의 제목을 표시해주세요. 두 줄 초과의 경우 말줄임표를 사용해주세요.',
        },
      },
    },
  ],
} satisfies DailyFocusData;

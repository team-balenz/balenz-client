export const ICON_PATH = {
  share: '/icons/ic_share.svg',
  bookmarkFilled: '/icons/ic_bookmark_filled.svg',
  bookmarkOutlined: '/icons/ic_bookmark_outlined.svg',
} as const;

export const BUTTON_TEXT = {
  share: {
    mobile: '공유',
    default: '공유하기',
  },
  scrap: {
    mobile: '스크랩',
    create: '스크랩하기',
    cancel: '스크랩취소',
  },
} as const;

export const TOAST_MESSAGE = {
  scrapSuccess: '콘텐츠가 스크랩되었습니다.',
  scrapCancelSuccess: '콘텐츠 스크랩이 취소되었습니다.',
} as const;

export const TOAST_DURATION_MS = 2000;

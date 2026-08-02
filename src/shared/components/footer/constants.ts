export const BUSINESS_INFO = [
  { label: '대표', value: '박우현' },
  { label: '주소', value: '서울특별시 영등포구 경인로 112길 17' },
  { label: '사업자등록번호', value: '010-9408-7443' },
] as const;

export const POLICY_LINKS = [
  { label: '이용약관', href: '/terms' },
  { label: '개인정보처리방침', href: '/privacy' },
  { label: '콘텐츠 이용정책', href: '/content-policy' },
] as const;

export const NOTICE_LINES = [
  '발렌즈의 분석 결과는 AI 모델 및 자체 분석 기준을 기반으로 제공되며,',
  '특정 정치적 입장을 지지하거나 대변하지 않습니다.',
  '원문 기사의 저작권은 각 언론사에 있습니다.',
] as const;

export const COPYRIGHT = '© 2026 BALENZ. All Rights Reserved.';

export const FOOTER_LOGO = {
  src: '/logo/footer_logo.svg',
  alt: 'balenz',
  width: 245.68,
  height: 80,
} as const;

export const SOCIAL_LINKS = [
  {
    href: 'mailto:team.balenz@gmail.com',
    ariaLabel: '이메일 보내기',
    iconSrc: '/icons/ic_footer_mail.svg',
    iconSize: 43.75,
    iconType: 'mail',
    openInNewTab: false,
  },
  {
    href: '#',
    ariaLabel: '발렌즈 인스타그램',
    iconSrc: '/icons/ic_footer_instagram.svg',
    iconSize: 35,
    iconType: 'social',
    openInNewTab: true,
  },
  {
    href: '#',
    ariaLabel: '발렌즈 스레드',
    iconSrc: '/icons/ic_footer_threads.svg',
    iconSize: 35,
    iconType: 'social',
    openInNewTab: true,
  },
] as const;

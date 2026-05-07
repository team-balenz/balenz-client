import kakaoSvg from './assets/kakaotalk.svg';
import xSvg from './assets/x.svg';
import instagramSvg from './assets/instagram.svg';
import threadsSvg from './assets/threads.svg';
import telegramSvg from './assets/telegram.svg';

/**
 * SocialPlatform 타입
 */
export type SocialPlatform = {
  id: string;
  label: string;
  icon: { src: string };
  getShareUrl: (url: string, title?: string) => string;
};

/**
 * 소셜 미디어 공유 정보
 * - 카카오톡 공유 형태 확정 및 API 연동 필요
 * - 공유 메시지(title) 텍스트 확인 필요
 */
export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: 'kakao',
    label: '카카오톡',
    icon: kakaoSvg,
    // TODO: 카카오스토리 URL이 아닌 Kakao.Share SDK 연동 필요
    getShareUrl: (url: string) => `https://story.kakao.com/s/share?url=${encodeURIComponent(url)}`,
  },
  {
    id: 'x',
    label: 'X',
    icon: xSvg,
    getShareUrl: (url: string, title: string = '') =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    id: 'instagram',
    label: '인스타그램',
    icon: instagramSvg,
    getShareUrl: (url: string) => `https://www.instagram.com/?url=${encodeURIComponent(url)}`,
  },
  {
    id: 'threads',
    label: 'Threads',
    icon: threadsSvg,
    getShareUrl: (url: string, title: string = '') =>
      `https://www.threads.net/intent/post?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
  {
    id: 'telegram',
    label: '텔레그램',
    icon: telegramSvg,
    getShareUrl: (url: string, title: string = '') =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
];

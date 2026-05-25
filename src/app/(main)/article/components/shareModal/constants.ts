import kakaoSvg from './assets/kakaotalk.svg';
import xSvg from './assets/x.svg';
import instagramSvg from './assets/instagram.svg';
import threadsSvg from './assets/threads.svg';
import telegramSvg from './assets/telegram.svg';
import { shareKakao } from '@/shared/utils/shareKakao';

export type ShareType = 'scope' | 'link';

/**
 * 공유 데이터 타입
 */
export interface SharePayload {
  type: ShareType;
  title: string;
  description: string;
  imageUrl?: string;
  url: string;
}

/**
 * SocialPlatform 타입
 */
export type SocialPlatform = {
  id: string;
  label: string;
  icon: { src: string };
  share: (payload: SharePayload) => void;
};

/**
 * 카카오 공유
 */
const shareToKakao = ({ type, title, description, imageUrl, url }: SharePayload) => {
  shareKakao({
    type,
    title,
    summary: description,
    url,
    imageUrl,
  });
};

/**
 * X 공유
 */
const shareToX = ({ url, title, type }: SharePayload) => {
  let shareText = title;

  if (type === 'scope') {
    // scope: "balenz가 알려주는 [키워드명]"
    shareText = `balenz가 알려주는 "${title}"`;
  }
  // link: 기사 제목 그대로

  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`${shareText}\n`)}`,
    '_blank',
    'noopener,noreferrer',
  );
};

/**
 * Threads 공유
 */
const shareToThreads = ({ url, title, type }: SharePayload) => {
  let shareText = title;

  if (type === 'scope') {
    // scope: "balenz가 알려주는 [키워드명]"
    shareText = `balenz가 알려주는 "${title}"`;
  }
  // link: 기사 제목 그대로

  window.open(
    `https://www.threads.net/intent/post?text=${encodeURIComponent(`${shareText}\n${url}`)}`,
    '_blank',
    'noopener,noreferrer',
  );
};

/**
 * Telegram 공유
 */
const shareToTelegram = ({ url, title, type }: SharePayload) => {
  let shareText = title;

  if (type === 'scope') {
    // scope: "balenz가 알려주는 [키워드명]"
    shareText = `balenz가 알려주는 "${title}"`;
  }
  // link: 기사 제목 그대로

  window.open(
    `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`${shareText}\n`)}`,
    '_blank',
    'noopener,noreferrer',
  );
};

/**
 * Instagram
 * 웹 공유 공식 API 없음 → 프로필 페이지 오픈
 */
const shareToInstagram = () => {
  window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
};

/**
 * 소셜 플랫폼 목록
 */
export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: 'kakao',
    label: '카카오톡',
    icon: kakaoSvg,
    share: shareToKakao,
  },
  {
    id: 'x',
    label: 'X',
    icon: xSvg,
    share: shareToX,
  },
  {
    id: 'instagram',
    label: '인스타그램',
    icon: instagramSvg,
    share: shareToInstagram,
  },
  {
    id: 'threads',
    label: 'Threads',
    icon: threadsSvg,
    share: shareToThreads,
  },
  {
    id: 'telegram',
    label: '텔레그램',
    icon: telegramSvg,
    share: shareToTelegram,
  },
];

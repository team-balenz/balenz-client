'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import BaseModal from '@/shared/components/baseModal/BaseModal';
import BottomSheet from '@/shared/components/bottomSheet/BottomSheet';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import * as styles from './shareModal.css';
import kakaoSvg from './assets/kakaotalk.svg';
import xSvg from './assets/x.svg';
import instagramSvg from './assets/instagram.svg';
import threadsSvg from './assets/threads.svg';
import telegramSvg from './assets/telegram.svg';
import Image from 'next/image';

/**
 * 소셜 미디어 정보
 */
const SOCIAL_PLATFORMS = [
  {
    id: 'kakao',
    label: '카카오톡',
    icon: kakaoSvg,
    getShareUrl: (url: string) => `https://story.kakao.com/s/share?url=${encodeURIComponent(url)}`,
  },
  {
    id: 'x',
    label: 'X',
    icon: xSvg,
    getShareUrl: (url: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=balenz`,
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
    getShareUrl: (url: string) =>
      `https://www.threads.net/intent/post?text=${encodeURIComponent(`balenz ${url}`)}`,
  },
  {
    id: 'telegram',
    label: '텔레그램',
    icon: telegramSvg,
    getShareUrl: (url: string) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=balenz`,
  },
];

interface ShareModalPropTypes {
  /** 모달 열림/닫힘 상태 */
  open: boolean;

  /** 모달 상태 변경 핸들러 */
  onOpenChange: (open: boolean) => void;

  /** 공유할 링크 URL (미제공 시 현재 경로 사용) */
  shareUrl?: string;

  /** 공유할 제목 (선택사항) */
  shareTitle?: string;
}

const ShareModal = ({ open, onOpenChange, shareUrl: customShareUrl }: ShareModalPropTypes) => {
  const linkInputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const breakpoint = useMediaQuery();
  const pathname = usePathname();

  // 클라이언트 환경에서만 currentUrl 설정
  useEffect(() => {
    setCurrentUrl(`${window.location.origin}${pathname}`);
  }, [pathname]);

  // prop으로 받은 URL이 있으면 사용, 없으면 현재 경로 사용
  const shareUrl = customShareUrl || currentUrl;

  // 모바일일 때는 BottomSheet, 그 외에는 BaseModal 사용
  const isMobile = breakpoint === 'mobile';
  const ModalComponent = isMobile ? BottomSheet : BaseModal;

  /**
   * 링크 복사하기
   */
  const handleCopyLink = () => {
    if (linkInputRef.current) {
      linkInputRef.current.select();
      document.execCommand('copy');

      // 복사 성공 피드백
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  /**
   * 소셜 미디어 공유
   */
  const handleSocialShare = (platform: (typeof SOCIAL_PLATFORMS)[0]) => {
    const shareLink = platform.getShareUrl(shareUrl);
    window.open(shareLink, '_blank', 'width=600,height=400');
  };

  return (
    <ModalComponent open={open} onOpenChange={onOpenChange}>
      <div className={styles.container}>
        {/* 제목 */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>공유하기</h2>
          <button
            onClick={() => onOpenChange(false)}
            className={styles.closeButton}
            aria-label="닫기"
            title="닫기"
          >
            <Image src="/icons/ic_modal_close.svg" alt="닫기" width={24} height={24} />
          </button>
        </div>
        <p className={styles.description}>
          친구들에게 콘텐츠를 공유하고 서로의 관점을 나누어보세요.
        </p>
        <div className={styles.divider} />

        {/* 링크 공유 섹션 */}
        <section className={styles.linkShareSection}>
          <h3 className={styles.sectionTitle}>링크 공유하기</h3>
          {copied && <div className={styles.successMessage}>링크가 복사되었습니다.</div>}
          <div className={styles.linkCopyContainer}>
            <input
              ref={linkInputRef}
              type="text"
              value={shareUrl}
              readOnly
              className={styles.linkInput}
            />
            <button
              onClick={handleCopyLink}
              className={styles.copyButton}
              title={copied ? '복사됨!' : '복사'}
              aria-label="링크 복사"
            >
              <Image src="/icons/ic_copy.svg" alt="복사" width={24} height={24} />
            </button>
          </div>
        </section>

        {/* 🌍 소셜 공유 섹션 */}
        <section className={styles.socialShareSection}>
          <h3 className={styles.sectionTitle}>다른 앱에 공유하기</h3>
          <div className={styles.socialIconsContainer}>
            {SOCIAL_PLATFORMS.map((platform) => (
              <button
                key={platform.id}
                onClick={() => handleSocialShare(platform)}
                className={styles.socialLink}
                title={platform.label}
                aria-label={`${platform.label}로 공유`}
              >
                <Image
                  className={styles.socialIcon}
                  src={platform.icon.src}
                  alt={platform.label}
                  width={60}
                  height={60}
                />
                <span className={styles.socialLabel}>{platform.label}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </ModalComponent>
  );
};

export default ShareModal;

'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import BaseModal from '@/shared/components/baseModal/BaseModal';
import BottomSheet from '@/shared/components/bottomSheet/BottomSheet';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import * as styles from './shareModal.css';
import { SOCIAL_PLATFORMS } from './constants';
import type { SocialPlatform } from './constants';
import Image from 'next/image';

interface ShareModalPropTypes {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  shareUrl?: string; // 공유할 링크 URL (미제공 시 현재 경로 사용)
  shareTitle: string; // 공유 제목
  shareSummary: string; // 공유 요약문
  shareImage?: string; // 공유 이미지 (선택) - scope에서만 사용
  shareType: 'scope' | 'link'; // 공유 타입 (기본값: 'link')
}

const ShareModal = ({
  open,
  onOpenChange,
  shareUrl: customShareUrl,
  shareTitle,
  shareSummary = '',
  shareImage,
  shareType = 'link',
}: ShareModalPropTypes) => {
  const [copied, setCopied] = useState(false);
  const breakpoint = useMediaQuery();
  const pathname = usePathname();

  // 전달받은 URL을 사용하고, 없으면 현재 페이지 경로를 사용합니다.
  // 상대 경로는 현재 도메인을 붙여 완전한 공유 URL로 변환합니다.
  const shareUrl =
    typeof window !== 'undefined'
      ? new URL(customShareUrl ?? pathname, window.location.origin).toString()
      : '';

  // 모바일일 때는 BottomSheet, 그 외에는 BaseModal 사용
  const isMobile = breakpoint === 'mobile';
  const ModalComponent = isMobile ? BottomSheet : BaseModal;

  // 링크 복사하기
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    } catch (err) {
      console.error('복사 실패', err);
    }
  };

  // 소셜 미디어 공유
  const handleSocialShare = (platform: SocialPlatform) => {
    platform.share({
      type: shareType,
      title: shareTitle,
      description: shareSummary,
      imageUrl: shareImage,
      url: shareUrl,
    });
  };

  return (
    <ModalComponent
      open={open}
      onOpenChange={(next) => {
        if (!next) {
          setCopied(false); // copy 상태 초기화
        }
        onOpenChange(next);
      }}
    >
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
          <div aria-live="polite" aria-atomic="true" className={styles.successMessage}>
            {copied && '링크가 복사되었습니다.'}
          </div>

          <div className={styles.linkCopyContainer}>
            <input
              type="text"
              value={shareUrl}
              readOnly
              className={styles.linkInput}
              aria-label="공유 링크"
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

        {/* 소셜 공유 섹션 */}
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
                <div className={styles.socialIconWrapper}>
                  <Image src={platform.icon.src} alt={platform.label} width={60} height={60} />
                </div>
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

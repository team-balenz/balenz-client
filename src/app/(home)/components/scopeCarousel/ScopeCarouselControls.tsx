'use client';

import Image from 'next/image';
import * as styles from './scopeCarousel.css';
import { ICONS } from './constants';

interface ScopeCarouselControlsPropTypes {
  onPrevClick: () => void;
  onNextClick: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const ScopeCarouselControls = ({
  onPrevClick,
  onNextClick,
  canScrollPrev,
  canScrollNext,
}: ScopeCarouselControlsPropTypes) => {
  return (
    <div className={styles.controls}>
      <button
        className={styles.button}
        onClick={onPrevClick}
        disabled={!canScrollPrev}
        aria-label="이전 슬라이드"
      >
        <Image className={styles.icon} src={ICONS.prev} alt="Prev" width={24} height={24} />
      </button>
      <button
        className={styles.button}
        onClick={onNextClick}
        disabled={!canScrollNext}
        aria-label="다음 슬라이드"
      >
        <Image className={styles.icon} src={ICONS.next} alt="Next" width={24} height={24} />
      </button>
    </div>
  );
};

export default ScopeCarouselControls;

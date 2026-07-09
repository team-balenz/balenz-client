import Image from 'next/image';
import * as styles from './dailyFocusControls.css';

interface DailyFocusControlsProps {
  canScrollNext: boolean;
  canScrollPrev: boolean;
  onNextClick: () => void;
  onPrevClick: () => void;
}

export const DailyFocusControls = ({
  canScrollNext,
  canScrollPrev,
  onNextClick,
  onPrevClick,
}: DailyFocusControlsProps) => {
  return (
    <div className={styles.controls} aria-label="데일리 포커스 캐로셀 제어">
      <button
        type="button"
        className={styles.button}
        onClick={onPrevClick}
        disabled={!canScrollPrev}
        aria-label="이전 데일리 포커스"
      >
        <Image
          className={styles.icon}
          src="/icons/ic_prev_arrow.svg"
          alt="prev_icon"
          width={8}
          height={14}
          aria-hidden="true"
        />
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={onNextClick}
        disabled={!canScrollNext}
        aria-label="다음 데일리 포커스"
      >
        <Image
          className={styles.icon}
          src="/icons/ic_next_arrow.svg"
          alt="next_icon"
          width={8}
          height={14}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

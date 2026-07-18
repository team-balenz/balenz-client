import Image from 'next/image';

import * as styles from './stepNavigation.css';

interface StepNavigationPropTypes {
  showPrevious?: boolean;
  showSkip?: boolean;
  isNextDisabled?: boolean;
  onPrevious?: () => void;
  onNext: () => void;
  onSkip?: () => void;
}

const StepNavigation = ({
  showPrevious = true,
  showSkip = true,
  isNextDisabled = false,
  onPrevious,
  onNext,
  onSkip,
}: StepNavigationPropTypes) => {
  return (
    <nav className={styles.container} aria-label="단계 이동">
      <div className={styles.previousArea}>
        {showPrevious && (
          <button type="button" className={styles.previousBtn} onClick={onPrevious}>
            <Image
              src="/icons/ic_arrow_left_gray.svg"
              alt=""
              width={20}
              height={20}
              className={styles.arrowIcon}
              aria-hidden
            />

            <span>이전</span>
          </button>
        )}
      </div>

      <div className={styles.rightArea}>
        {showSkip && (
          <button type="button" className={styles.skipBtn} onClick={onSkip}>
            건너뛰기
          </button>
        )}

        <button type="button" className={styles.nextBtn} disabled={isNextDisabled} onClick={onNext}>
          <span>다음</span>

          <Image
            src={
              isNextDisabled
                ? '/icons/ic_arrow_right_inactive.svg'
                : '/icons/ic_arrow_right_active.svg'
            }
            alt=""
            width={20}
            height={20}
            className={styles.arrowIcon}
            aria-hidden
          />
        </button>
      </div>
    </nav>
  );
};

export default StepNavigation;

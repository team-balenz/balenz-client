import * as styles from './resultSubmitBar.css';

interface ResultSubmitBarProps {
  totalCount: number;
  answeredCount: number;
  onSubmit: () => void;
}

const ResultSubmitBar = ({ totalCount, answeredCount, onSubmit }: ResultSubmitBarProps) => {
  // 잘못된 값이 들어와도 0~전체 질문 수 범위를 벗어나지 않도록 보정
  const safeAnsweredCount = Math.min(Math.max(answeredCount, 0), totalCount);

  const progress = totalCount > 0 ? (safeAnsweredCount / totalCount) * 100 : 0;

  const isComplete = totalCount > 0 && safeAnsweredCount === totalCount;

  return (
    <div className={styles.wrapper}>
      <div className={styles.bar}>
        <div
          className={styles.progressFill}
          style={{
            width: `${progress}%`,
          }}
          aria-hidden="true"
        />

        <button
          type="button"
          className={styles.submitButton}
          disabled={!isComplete}
          onClick={onSubmit}
          aria-describedby="balenz-test-progress"
        >
          완료하고 결과보기
        </button>
      </div>

      <span id="balenz-test-progress" className={styles.visuallyHidden}>
        전체 {totalCount}개 질문 중 {safeAnsweredCount}개 응답 완료
      </span>
    </div>
  );
};

export default ResultSubmitBar;

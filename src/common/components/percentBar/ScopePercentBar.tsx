import * as styles from './scopePercentBar.css';

export interface ScopePercentBarPropTypes {
  progressivePercent: number;
  centerPercent: number;
  conservativePercent: number;
  size: keyof typeof styles.containerVariants; // 타입 자동화 (스타일에서 동기화)
}

const ScopePercentBar = ({
  progressivePercent,
  centerPercent,
  conservativePercent,
  size,
}: ScopePercentBarPropTypes) => {
  // 퍼센트 검증
  const total = progressivePercent + centerPercent + conservativePercent;

  const validProgressive = total ? (progressivePercent / total) * 100 : 0;
  const validCenter = total ? (centerPercent / total) * 100 : 0;
  const validConservative = total ? (conservativePercent / total) * 100 : 0;

  const containerClass = `${styles.baseContainer} ${styles.containerVariants[size]}`;

  // 렌더마다 바뀌는 동적 값 (각 이념 분포)
  const segments = [
    { value: validProgressive, color: 'progressive' as const },
    { value: validCenter, color: 'center' as const },
    { value: validConservative, color: 'conservative' as const },
  ];

  return (
    <div
      className={containerClass}
      role="img"
      aria-label={`이념 분포 - 진보 ${validProgressive.toFixed(1)}%, 중립 ${validCenter.toFixed(1)}%, 보수 ${validConservative.toFixed(1)}%`}
    >
      {segments.map(
        ({ value, color }) =>
          value > 0 && (
            <div
              key={color}
              className={styles.segment({ color })}
              style={{ '--flex': value } as React.CSSProperties} // 스타일 직접 건드리지 않고 변수만 전달
              aria-hidden="true"
            />
          ),
      )}
    </div>
  );
};

export default ScopePercentBar;

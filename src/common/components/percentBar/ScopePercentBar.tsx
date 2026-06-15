import * as styles from './scopePercentBar.css';

export interface ScopePercentBarPropTypes {
  valueRatio: number;
  neutralRatio: number;
  normRatio: number;
  size: keyof typeof styles.containerVariants; // 타입 자동화 (스타일에서 동기화)
}

const ScopePercentBar = ({
  valueRatio,
  neutralRatio,
  normRatio,
  size,
}: ScopePercentBarPropTypes) => {
  // 퍼센트 검증 + 음수/비정상 수 정제
  const safeValue = Number.isFinite(valueRatio) ? Math.max(0, valueRatio) : 0;
  const safeNeutral = Number.isFinite(neutralRatio) ? Math.max(0, neutralRatio) : 0;
  const safeNorm = Number.isFinite(normRatio) ? Math.max(0, normRatio) : 0;
  const total = safeValue + safeNeutral + safeNorm;

  const validValue = total ? (safeValue / total) * 100 : 100 / 3;
  const validNeutral = total ? (safeNeutral / total) * 100 : 100 / 3;
  const validNorm = total ? (safeNorm / total) * 100 : 100 / 3;

  const containerClass = `${styles.baseContainer} ${styles.containerVariants[size]}`;

  // 렌더마다 바뀌는 동적 값 (각 이념 분포)
  const segments = [
    { value: validValue, color: 'progressive' as const },
    { value: validNeutral, color: 'center' as const },
    { value: validNorm, color: 'conservative' as const },
  ];

  return (
    <div
      className={containerClass}
      role="img"
      aria-label={`이념 분포 - 진보 ${validValue.toFixed(1)}%, 중립 ${validNeutral.toFixed(1)}%, 보수 ${validNorm.toFixed(1)}%`}
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

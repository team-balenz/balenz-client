import * as styles from './dailyFocusSegmentBar.css';

interface DailyFocusSegmentBarProps {
  onSelect: (index: number) => void;
  selectedIndex: number;
  slideCount: number;
}

export const DailyFocusSegmentBar = ({
  onSelect,
  selectedIndex,
  slideCount,
}: DailyFocusSegmentBarProps) => {
  return (
    <div className={styles.track} aria-label="데일리 포커스 슬라이드 선택">
      {Array.from({ length: slideCount }, (_, index) => {
        const isSelected = selectedIndex === index;

        return (
          <button
            key={index}
            type="button"
            className={styles.segment}
            data-selected={isSelected}
            onClick={() => onSelect(index)}
            aria-label={`${index + 1}번째 데일리 포커스로 이동`}
            aria-current={isSelected ? 'true' : undefined}
          />
        );
      })}
    </div>
  );
};

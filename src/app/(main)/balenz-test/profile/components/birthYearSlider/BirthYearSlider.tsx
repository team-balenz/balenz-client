'use client';

import {
  type ChangeEvent,
  type KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import * as styles from './birthYearSlider.css';

const DEFAULT_MIN_YEAR = 1910;
const DEFAULT_MAX_YEAR = 2026;
const DEFAULT_YEAR = 2000;

type YearTone = 'selected' | 'near' | 'far';

interface BirthYearSliderProps {
  value?: number;
  onChange: (year: number) => void;
  minYear?: number;
  maxYear?: number;
}

const clampYear = (year: number, minYear: number, maxYear: number) =>
  Math.min(Math.max(year, minYear), maxYear);

const BirthYearSlider = ({
  value = DEFAULT_YEAR,
  onChange,
  minYear = DEFAULT_MIN_YEAR,
  maxYear = DEFAULT_MAX_YEAR,
}: BirthYearSliderProps) => {
  const selectedYear = clampYear(value, minYear, maxYear);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const years = useMemo(
    () =>
      Array.from(
        {
          length: maxYear - minYear + 1,
        },
        (_, index) => minYear + index,
      ),
    [minYear, maxYear],
  );

  const wheelPlugin = useMemo(() => WheelGesturesPlugin(), []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'center',

      // 양 끝 연도도 가운데에 위치할 수 있도록
      // 시작과 끝의 빈 공간을 유지
      containScroll: false,

      loop: false,
      dragFree: false,
      skipSnaps: false,
      slidesToScroll: 1,
      startIndex: selectedYear - minYear,
    },
    [wheelPlugin],
  );

  const [isEditing, setIsEditing] = useState(false);

  const [draftYear, setDraftYear] = useState(String(selectedYear));

  const [errorMessage, setErrorMessage] = useState('');

  /**
   * 연도를 선택하고 해당 연도 위치로 슬라이더 이동
   */
  const selectYear = useCallback(
    (year: number, jump = false) => {
      const nextYear = clampYear(year, minYear, maxYear);

      const targetIndex = nextYear - minYear;

      setIsEditing(false);
      setDraftYear(String(nextYear));
      setErrorMessage('');

      emblaApi?.scrollTo(targetIndex, jump);

      if (nextYear !== selectedYear) {
        onChange(nextYear);
      }
    },
    [emblaApi, maxYear, minYear, onChange, selectedYear],
  );

  /**
   * 드래그나 트랙패드 이동이 끝난 뒤
   * 가운데 위치한 연도를 선택값으로 반영
   */
  const handleEmblaSelect = useCallback(() => {
    if (!emblaApi) return;

    const selectedIndex = emblaApi.selectedScrollSnap();

    const nextYear = years[selectedIndex];

    if (nextYear === undefined) return;

    setIsEditing(false);
    setDraftYear(String(nextYear));
    setErrorMessage('');

    if (nextYear !== selectedYear) {
      onChange(nextYear);
    }
  }, [emblaApi, onChange, selectedYear, years]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', handleEmblaSelect);
    emblaApi.on('reInit', handleEmblaSelect);

    return () => {
      emblaApi.off('select', handleEmblaSelect);
      emblaApi.off('reInit', handleEmblaSelect);
    };
  }, [emblaApi, handleEmblaSelect]);

  /**
   * 부모 컴포넌트에서 value가 변경된 경우
   * 해당 연도로 슬라이더 위치 동기화
   */
  useEffect(() => {
    if (!emblaApi) return;

    const targetIndex = selectedYear - minYear;

    if (emblaApi.selectedScrollSnap() !== targetIndex) {
      emblaApi.scrollTo(targetIndex);
    }

    setDraftYear(String(selectedYear));
  }, [emblaApi, minYear, selectedYear]);

  useEffect(() => {
    viewportRef.current?.focus({ preventScroll: true });
  }, []);

  const handleViewportBlur = () => {
    if (isEditing) {
      return;
    }

    requestAnimationFrame(() => {
      viewportRef.current?.focus({ preventScroll: true });
    });
  };

  /**
   * 선택된 가운데 연도를 직접 입력 모드로 전환
   */
  const startEditing = () => {
    setDraftYear(String(selectedYear));
    setErrorMessage('');
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setDraftYear(String(selectedYear));
    setErrorMessage('');
    setIsEditing(false);
  };

  /**
   * 직접 입력한 연도 검증 및 반영
   */
  const commitInput = () => {
    const parsedYear = Number(draftYear);

    const isValid =
      /^\d{4}$/.test(draftYear) &&
      Number.isInteger(parsedYear) &&
      parsedYear >= minYear &&
      parsedYear <= maxYear;

    if (!isValid) {
      setErrorMessage(`${minYear}년부터 ${maxYear}년 사이로 입력해주세요.`);

      return false;
    }

    selectYear(parsedYear);

    return true;
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const numericValue = event.target.value.replace(/\D/g, '');

    setDraftYear(numericValue.slice(0, 4));
    setErrorMessage('');
  };

  const adjustDraftYear = useCallback(
    (delta: number) => {
      const nextYear = clampYear(Number(draftYear || selectedYear) + delta, minYear, maxYear);

      setDraftYear(String(nextYear));
      setErrorMessage('');
    },
    [draftYear, maxYear, minYear, selectedYear],
  );

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      commitInput();
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      cancelEditing();
      return;
    }

    if (event.key === 'ArrowUp' || event.key === 'PageUp') {
      event.preventDefault();
      adjustDraftYear(event.key === 'PageUp' ? 10 : 1);
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'PageDown') {
      event.preventDefault();
      adjustDraftYear(event.key === 'PageDown' ? -10 : -1);
    }
  };

  /**
   * 슬라이더 키보드 이동
   */
  const handleSliderKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLInputElement) {
      return;
    }

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        selectYear(selectedYear - 1);
        break;

      case 'ArrowRight':
        event.preventDefault();
        selectYear(selectedYear + 1);
        break;

      case 'Home':
        event.preventDefault();
        selectYear(minYear);
        break;

      case 'End':
        event.preventDefault();
        selectYear(maxYear);
        break;

      case 'Enter':
        event.preventDefault();
        startEditing();
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        ref={(element) => {
          emblaRef(element);
          viewportRef.current = element;
        }}
        className={styles.viewport}
        tabIndex={0}
        role="group"
        aria-label={`출생 연도 선택. 현재 선택된 연도는 ${selectedYear}년입니다.`}
        onKeyDown={handleSliderKeyDown}
        onBlur={handleViewportBlur}
      >
        <div className={styles.container}>
          {years.map((year) => {
            const distance = Math.abs(year - selectedYear);

            const tone: YearTone = distance === 0 ? 'selected' : distance === 1 ? 'near' : 'far';

            const isSelected = year === selectedYear;

            return (
              <div key={year} className={styles.slide}>
                {isSelected && isEditing ? (
                  <input
                    autoFocus
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={4}
                    value={draftYear}
                    className={styles.yearInput}
                    aria-label={`출생 연도 직접 입력. ${minYear}년부터 ${maxYear}년까지 입력할 수 있습니다.`}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    onFocus={(event) => event.currentTarget.select()}
                    onBlur={() => {
                      const isCommitted = commitInput();

                      if (!isCommitted) {
                        setDraftYear(String(selectedYear));
                        setIsEditing(false);
                      }
                    }}
                  />
                ) : (
                  <button
                    type="button"
                    className={styles.yearButton({
                      tone,
                    })}
                    tabIndex={isSelected ? 0 : -1}
                    aria-current={isSelected ? 'true' : undefined}
                    aria-label={
                      isSelected
                        ? `${year}년, 현재 선택됨. 다시 누르면 직접 입력할 수 있습니다.`
                        : `${year}년 선택`
                    }
                    onClick={() => {
                      if (isSelected) {
                        startEditing();
                        return;
                      }

                      selectYear(year);
                    }}
                  >
                    {year}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {errorMessage && (
        <p className={styles.errorMessage} role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default BirthYearSlider;

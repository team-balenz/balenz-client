'use client';

import { Children, type ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DailyFocusControls } from '../dailyFocusControls/DailyFocusControls';
import { DailyFocusSegmentBar } from '../dailyFocusSegmentBar/DailyFocusSegmentBar';
import * as styles from './dailyFocusCarousel.css';

interface DailyFocusCarouselProps {
  ariaLabel?: string;
  children: ReactNode;
}

const CAROUSEL_OPTIONS = {
  align: 'center',
  containScroll: false,
  loop: false,
} as const;

export const DailyFocusCarousel = ({
  ariaLabel = '데일리 포커스',
  children,
}: DailyFocusCarouselProps) => {
  const slides = useMemo(() => Children.toArray(children), [children]);
  const [emblaRef, emblaApi] = useEmblaCarousel(CAROUSEL_OPTIONS);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(slides.length > 1);

  const updateCarouselState = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', updateCarouselState);
    emblaApi.on('reInit', updateCarouselState);

    return () => {
      emblaApi.off('select', updateCarouselState);
      emblaApi.off('reInit', updateCarouselState);
    };
  }, [emblaApi, updateCarouselState]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  if (slides.length === 0) return null;

  const previousIndex = selectedIndex > 0 ? selectedIndex - 1 : -1;
  const nextIndex = selectedIndex < slides.length - 1 ? selectedIndex + 1 : -1;

  return (
    <section className={styles.root} aria-label={ariaLabel}>
      {/* 세그먼트바 */}
      <div className={styles.segmentSection}>
        <DailyFocusSegmentBar
          slideCount={slides.length}
          selectedIndex={selectedIndex}
          onSelect={scrollTo}
        />
      </div>

      {/* 캐로셀 컨텐츠 */}
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={styles.slide}
              data-selected={selectedIndex === index}
              data-position={
                selectedIndex === index
                  ? 'current'
                  : previousIndex === index
                    ? 'previous'
                    : nextIndex === index
                      ? 'next'
                      : 'other'
              }
              aria-hidden={selectedIndex !== index}
            >
              <div className={styles.slideContent}>{slide}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 캐로셀 컨트롤 버튼 */}
      <DailyFocusControls
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
        onPrevClick={scrollPrev}
        onNextClick={scrollNext}
      />
    </section>
  );
};

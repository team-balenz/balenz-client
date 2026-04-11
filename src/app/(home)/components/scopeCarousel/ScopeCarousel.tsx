'use client';

import React, { useState, useEffect } from 'react'; // useState는 canScroll 상태에 사용
import * as styles from './scopeCarousel.css';
import Title from '@/common/components/title/Title';
import ScopeCarouselItem from './ScopeCarouselItem';
import ScopeCarouselControls from './ScopeCarouselControls';
import { SCOPE_CAROUSEL_CATEGORIES, CAROUSEL_OPTIONS } from './constants';
import useEmblaCarousel from 'embla-carousel-react';

const ScopeCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(CAROUSEL_OPTIONS);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title subtitle="SCOPE" title="주제 키워드" />
        <ScopeCarouselControls
          onPrevClick={scrollPrev}
          onNextClick={scrollNext}
          canScrollPrev={canScrollPrev}
          canScrollNext={canScrollNext}
        />
      </div>

      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {SCOPE_CAROUSEL_CATEGORIES.map((category) => (
            <div key={category.id} className={styles.slide}>
              <ScopeCarouselItem item={category.articles.progressive} ideology="progressive" />
              <ScopeCarouselItem item={category.articles.conservative} ideology="conservative" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScopeCarousel;

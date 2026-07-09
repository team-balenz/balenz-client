'use client';

import { useState, useEffect, useCallback } from 'react';
import * as styles from './scopeCarousel.css';
import Title from '@/common/components/title/Title';
import ScopeCarouselItem from './scopeCarouselItem/ScopeCarouselItem';
import ScopeCarouselControls from './scopeCarouselControls/ScopeCarouselControls';
import { CAROUSEL_OPTIONS } from './constants';
import { SCOPE_CAROUSEL_DATA } from '@/mocks/data/home';
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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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
          {SCOPE_CAROUSEL_DATA.map((category) => (
            <div key={category.id} className={styles.slide}>
              <ScopeCarouselItem
                title={category.valueArticleTitle}
                imageUrl={category.valueImageUrl}
                ideology="VALUE"
              />
              <ScopeCarouselItem
                title={category.normArticleTitle}
                imageUrl={category.normImageUrl}
                ideology="NORM"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScopeCarousel;

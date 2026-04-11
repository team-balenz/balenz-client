'use client';

import Image from 'next/image';
import * as styles from './scopeCarousel.css';
import { ArticleType, IdeologyType } from './types';

interface ScopeCarouselItemPropTypes {
  item: ArticleType;
  ideology: IdeologyType;
}

const ScopeCarouselItem = ({ item, ideology }: ScopeCarouselItemPropTypes) => {
  const isProgressive = ideology === 'progressive';
  const barClass = isProgressive ? styles.progressiveBar : styles.conservativeBar;

  return (
    <div className={styles.card}>
      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={300}
        className={styles.cardImage}
      />
      <div className={`${styles.ideologyBar} ${barClass}`} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
      </div>
    </div>
  );
};

export default ScopeCarouselItem;

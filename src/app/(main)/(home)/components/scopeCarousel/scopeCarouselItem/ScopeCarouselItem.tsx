import Image from 'next/image';
import * as styles from './scopeCarouselItem.css';
import { ArticleType } from '../../../types/scopeCarousel';
import { IdeologyType } from '@/shared/components/scopeArticleItem/types';

interface ScopeCarouselItemPropTypes {
  item: ArticleType;
  ideology: IdeologyType;
}

const ScopeCarouselItem = ({ item, ideology }: ScopeCarouselItemPropTypes) => {
  const isProgressive = ideology === 'progressive';
  const barClass = isProgressive ? styles.progressiveBar : styles.conservativeBar;

  return (
    <div className={styles.card}>
      <Image src={item.image} alt={item.title} fill className={styles.cardImage} />
      <div className={`${styles.ideologyBar} ${barClass}`} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
      </div>
    </div>
  );
};

export default ScopeCarouselItem;

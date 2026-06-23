import Image from 'next/image';
import * as styles from './scopeCarouselItem.css';
import { ScopeFrameType } from '@/shared/types/frame';

interface ScopeCarouselItemPropTypes {
  title: string;
  imageUrl: string;
  ideology: ScopeFrameType;
}

const ScopeCarouselItem = ({ title, imageUrl, ideology }: ScopeCarouselItemPropTypes) => {
  const isValue = ideology === 'VALUE';
  const barClass = isValue ? styles.valueBar : styles.normBar;

  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={title} fill className={styles.cardImage} />
      <div className={`${styles.ideologyBar} ${barClass}`} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </div>
  );
};

export default ScopeCarouselItem;

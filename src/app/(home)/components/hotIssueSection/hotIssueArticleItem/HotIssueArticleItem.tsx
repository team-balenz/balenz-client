import Image from 'next/image';
import * as styles from './hotIssueArticleItem.css';
import IdeologyIndicator from '@/common/components/indicator/IdeologyIndicator';

interface HotIssueArticleItemPropTypes {
  articleThumbnail: string;
  ideology: 'SL' | 'L' | 'C' | 'R' | 'SR';
  articleTitle: string;
  mediaName: string;
}

const HotIssueArticleItem = ({
  articleThumbnail,
  ideology,
  articleTitle,
  mediaName,
}: HotIssueArticleItemPropTypes) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={articleThumbnail} alt="hotIssueArticleItem" fill className={styles.image} />
      </div>
      <IdeologyIndicator
        value={ideology}
        size={{ desktop: 'medium', tablet: 'small', mobile: 'small' }}
      />
      <p className={styles.articleTitle}>{articleTitle}</p>
      <p className={styles.mediaName}>{mediaName}</p>
    </div>
  );
};

export default HotIssueArticleItem;

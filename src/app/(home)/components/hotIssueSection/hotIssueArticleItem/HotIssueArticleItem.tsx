'use client';

import Image from 'next/image';
import * as styles from './hotIssueArticleItem.css';
import IdeologyIndicator from '@/common/components/indicator/IdeologyIndicator';

interface HotIssueArticleItemPropTypes {
  articleId: number;
  articleThumbnail: string;
  ideology: 'SL' | 'L' | 'C' | 'R' | 'SR';
  articleTitle: string;
  mediaName: string;
}

const HotIssueArticleItem = ({
  articleId,
  articleThumbnail,
  ideology,
  articleTitle,
  mediaName,
}: HotIssueArticleItemPropTypes) => {
  const handleClickArticle = () => {
    console.log('[HotIssueArticleItem] 기사 상세 페이지로 이동 예정', { articleId });
  };

  return (
    <div className={styles.container} onClick={handleClickArticle}>
      <div className={styles.imageWrapper}>
        <Image src={articleThumbnail} alt={articleTitle} fill className={styles.image} />
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

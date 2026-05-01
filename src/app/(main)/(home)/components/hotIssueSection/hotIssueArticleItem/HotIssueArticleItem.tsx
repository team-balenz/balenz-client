'use client';

import Image from 'next/image';

import IdeologyIndicator from '@/common/components/indicator/IdeologyIndicator';
import { type IdeologyIndicatorValueTypes } from '@/common/components/indicator/constants';

import * as styles from './hotIssueArticleItem.css';

interface HotIssueArticleItemPropTypes {
  articleId: number;
  articleThumbnail: string;
  frameType: IdeologyIndicatorValueTypes;
  articleTitle: string;
  mediaName: string;
}

const HotIssueArticleItem = ({
  articleId,
  articleThumbnail,
  frameType,
  articleTitle,
  mediaName,
}: HotIssueArticleItemPropTypes) => {
  const handleClickArticle = () => {
    console.log('[HotIssueArticleItem] 기사 상세 페이지로 이동 예정', { articleId });
  };

  return (
    <div
      className={styles.container}
      role="button"
      // tabIndex={0}
      onClick={handleClickArticle}
      // onKeyDown={(e) => {
      //   if (e.key === 'Enter' || e.key === ' ') {
      //     e.preventDefault();
      //     handleClickArticle();
      //   }
      // }}
    >
      <div className={styles.imageWrapper}>
        <Image src={articleThumbnail} alt={articleTitle} fill className={styles.image} />
      </div>
      <div className={styles.ideologyIndicatorWrapper}>
        <IdeologyIndicator
          value={frameType}
          size={{ desktop: 'medium', tablet: 'small', mobile: 'small' }}
        />
      </div>
      <p className={styles.articleTitle}>{articleTitle}</p>
      <p className={styles.mediaName}>{mediaName}</p>
    </div>
  );
};

export default HotIssueArticleItem;

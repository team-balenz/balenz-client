'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ROUTES } from '@/shared/constants/route';
import IdeologyIndicator from '@/common/components/indicator/IdeologyIndicator';
import { IdeologyFrameType } from '@/shared/types/frame';

import * as styles from './hotIssueArticleItem.css';

interface HotIssueArticleItemPropTypes {
  articleId: number;
  articleThumbnail: string;
  frameType: IdeologyFrameType;
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
  const router = useRouter();

  return (
    <div
      className={styles.container}
      role="button"
      // tabIndex={0}
      onClick={() => router.push(ROUTES.LINK_DETAIL(articleId))}
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

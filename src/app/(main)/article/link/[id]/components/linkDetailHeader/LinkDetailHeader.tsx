'use client';

import { useState } from 'react';

import ArticleDetailActions from '@/app/(main)/article/components/articleDetailActions/ArticleDetailActions';
import ShareModal from '@/app/(main)/article/components/shareModal/ShareModal';
import IdeologyIndicator from '@/common/components/indicator/IdeologyIndicator';
import { IdeologyIndicatorValueTypes } from '@/common/components/indicator/constants';

import * as styles from './linkDetailHeader.css';

interface LinkDetailHeaderPropTypes {
  id: number;
  title: string;
  newsAgencyName: string;
  publishedAt: string;
  frameType: IdeologyIndicatorValueTypes;
  isScraped: boolean;
}

const LinkDetailHeader = ({
  id,
  title,
  newsAgencyName,
  publishedAt,
  frameType,
  isScraped,
}: LinkDetailHeaderPropTypes) => {
  const [localIsScraped, setIsScraped] = useState(isScraped);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const handleShareClick = () => {
    setShareModalOpen(true);
  };
  const handleScrapClick = () => {
    setIsScraped((prev: boolean) => !prev);
    console.log(id);
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.newsAgencyNameText}>{newsAgencyName}</div>
        <div className={styles.titleText}>{title}</div>
        <div className={styles.ideologyIndicatorContainer}>
          <IdeologyIndicator
            value={frameType}
            size={{ desktop: 'large', tablet: 'large', mobile: 'large' }}
          />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.publishedAtText}>{publishedAt}</div>
        <div>
          <ArticleDetailActions
            isScraped={localIsScraped}
            onShareClick={handleShareClick}
            onScrapClick={handleScrapClick}
          />
        </div>
      </div>

      {/* 공유하기 모달 */}
      <ShareModal open={shareModalOpen} onOpenChange={setShareModalOpen} shareTitle={title} />
    </div>
  );
};

export default LinkDetailHeader;

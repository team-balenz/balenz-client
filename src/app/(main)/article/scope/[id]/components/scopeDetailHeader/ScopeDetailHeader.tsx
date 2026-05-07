'use client';

import { useState } from 'react';

import Title from '@/common/components/title/Title';
import ArticleDetailActions from '@/app/(main)/article/components/articleDetailActions/ArticleDetailActions';
import ShareModal from '@/app/(main)/article/components/shareModal/ShareModal';
import * as styles from './scopeDetailHeader.css';

interface ScopeDetailHeaderPropTypes {
  id: number;
  name: string;
  date: string;
  viewCount: number;
  isScraped: boolean;
}

const ScopeDetailHeader = ({
  id,
  name,
  date,
  viewCount,
  isScraped,
}: ScopeDetailHeaderPropTypes) => {
  const [localIsScraped, setIsScraped] = useState(isScraped);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const handleShareClick = () => {
    setShareModalOpen(true);
  };
  const handleScrapClick = () => {
    setIsScraped((prev) => !prev);
    console.log('스크랩 api 연동 필요', id);
  };
  return (
    <div className={styles.container}>
      <Title subtitle="SCOPE" title={name} variant="articleHeader" />
      <div className={styles.infoContainer}>
        <div className={styles.infoText}>
          <span>{date}</span>
          <span>・</span>
          <span>읽음 {viewCount}</span>
        </div>
        <div>
          <ArticleDetailActions
            isScraped={localIsScraped}
            onShareClick={handleShareClick}
            onScrapClick={handleScrapClick}
          />
        </div>
      </div>

      {/* 공유하기 모달 */}
      <ShareModal open={shareModalOpen} onOpenChange={setShareModalOpen} />
    </div>
  );
};

export default ScopeDetailHeader;

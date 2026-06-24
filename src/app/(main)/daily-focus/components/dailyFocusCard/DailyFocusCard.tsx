'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import ShareModal from '@/app/(main)/article/components/shareModal/ShareModal';
import { ROUTES } from '@/shared/constants/route';

import * as styles from './dailyFocusCard.css';
import type { DailyFocusCardData } from '../../types/types';

import DailyFocusActionButton from '../dailyFocusActionButton/DailyFocusActionButton';
import DailyFocusArticle from '../dailyFocusArticle/DailyFocusArticle';
import DailyFocusHeader from '../dailyFocusHeader/DailyFocusHeader';

interface DailyFocusCardPropTypes {
  data: DailyFocusCardData;
}

const DailyFocusCard = ({ data }: DailyFocusCardPropTypes) => {
  const router = useRouter();
  const { id, imageUrl, name, summary, articleCount, mainArticles, isScraped } = data;
  const articles = Object.values(mainArticles);
  const [localIsScraped, setIsScraped] = useState(isScraped);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const handleShareClick = () => {
    setShareModalOpen(true);
  };

  const handleDetailClick = () => {
    router.push(ROUTES.SCOPE_DETAIL(id));
  };

  const handleScrapClick = () => {
    setIsScraped((prev) => !prev);
    console.log(id);
  };

  return (
    <div className={styles.container}>
      <DailyFocusHeader imageUrl={imageUrl} name={name} articleCount={articleCount} />

      <div className={styles.articleContainer}>
        {articles.map((article) => (
          <DailyFocusArticle
            key={article.id}
            newsAgencyName={article.newsAgencyName}
            title={article.title}
            summary={article.summary}
            frameType={article.frameType}
          />
        ))}
      </div>

      <div className={styles.actionContainer}>
        <DailyFocusActionButton
          isScraped={localIsScraped}
          onDetailClick={handleDetailClick}
          onShareClick={handleShareClick}
          onScrapClick={handleScrapClick}
        />
      </div>

      {/* 공유하기 모달 */}
      <ShareModal
        open={shareModalOpen}
        onOpenChange={setShareModalOpen}
        shareUrl={ROUTES.SCOPE_DETAIL(id)}
        shareImage={imageUrl}
        shareTitle={name}
        shareSummary={summary}
        shareType="scope"
      />
    </div>
  );
};

export default DailyFocusCard;

'use client';

import { useEffect, useState } from 'react';
import ArticlePreviewItem from '@/shared/components/articlePreviewItem/ArticlePreviewItem';
import * as styles from './hotArticleGroup.css';

import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { type HotArticleSectionGroupTypes } from '@/app/(home)/types/hotArticleSection';

export default function HotArticleGroup({ ideology, articleItems }: HotArticleSectionGroupTypes) {
  // 미디어 쿼리 확인 후 데스크탑 여부 확인
  const breakpoint = useMediaQuery();
  const isDesktop = breakpoint === 'desktop';

  // 태블릿, 모바일: 한 칸만 보이게 설정하기 위한 인덱스 관리 (0부터 시작)
  const [currentIndex, setCurrentIndex] = useState(0);

  // 태블릿, 모바일: 한 칸만 보이게 설정하기 위한 타이머 설정
  useEffect(() => {
    if (isDesktop || articleItems.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articleItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isDesktop, articleItems.length]);

  const currentArticle = articleItems[currentIndex];

  return (
    <div className={styles.group}>
      <div className={styles.ideologyLabel({ ideology })}>
        {ideology === 'progressive' ? '진보 독자' : '보수 독자'}
      </div>

      {/* desktop only */}
      <h2 className={styles.desktopGroupTitle}>관심 기사</h2>

      {isDesktop ? (
        // desktop only
        <div className={styles.list}>
          {articleItems.map((article) => (
            <div key={article.articleId} className={styles.desktopArticleItem}>
              <ArticlePreviewItem {...article} renderType="compact" />
            </div>
          ))}
        </div>
      ) : (
        // tablet, mobile only
        currentArticle && (
          <div key={currentArticle.articleId} className={styles.belowDesktopArticleItem}>
            <ArticlePreviewItem {...currentArticle} renderType="compact" />
          </div>
        )
      )}
    </div>
  );
}

'use client';

import * as styles from './page.css';

import ArticleTabs from '@/shared/components/articleTabs/ArticleTabs';
import NewsResultList from './components/searchResultContent/newsResultList/NewsResultList';
import ScopeResultList from './components/searchResultContent/scopeResultList/ScopeResultList';
import { useState } from 'react';
import { SEARCH_TAB_LIST, SearchTabValue } from '@/shared/components/articleTabs/constants';
import type { SearchArticlePreviewItemTypes } from '@/shared/types/articleItemType';
import { NewsArticleItemData } from './types/search';
import { SEARCH_RESULT_DATA } from '@/mocks/data/search';
import SearchPagenation from './components/searchPagenation/SearchPagenation';
import SearchInput from './components/searchInput/SearchInput';

const ITEMS_PER_PAGE = 7;

const mapArticleToNewsItem = (article: NewsArticleItemData): SearchArticlePreviewItemTypes => ({
  renderType: 'search',
  articleId: article.id,
  mediaName: article.newsAgencyName,
  articleTitle: article.title,
  frameType: article.frameType,
});

export default function SearchPage() {
  const [selectedResultType, setSelectedResultType] = useState<SearchTabValue>('scope');
  const [currentPage, setCurrentPage] = useState(1);

  const [searchInputValue, setSearchInputValue] = useState('');
  const [submittedSearchValue, setSubmittedSearchValue] = useState('검색어');

  const scopeItems = SEARCH_RESULT_DATA.keywords;
  const newsItems = SEARCH_RESULT_DATA.articles.map(mapArticleToNewsItem);

  const activeItems = selectedResultType === 'scope' ? scopeItems : newsItems;

  // pagenation 관련 변수
  const totalPages = Math.ceil(activeItems.length / ITEMS_PER_PAGE);
  const pageStartIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedScopeItems = scopeItems.slice(pageStartIndex, pageStartIndex + ITEMS_PER_PAGE);
  const paginatedNewsItems = newsItems.slice(pageStartIndex, pageStartIndex + ITEMS_PER_PAGE);

  const handleTabChange = (resultType: SearchTabValue) => {
    setSelectedResultType(resultType);
    setCurrentPage(1);
    console.log(resultType);
  };

  const handleSearch = () => {
    const nextSearchValue = searchInputValue.trim();

    if (!nextSearchValue) return;

    setSubmittedSearchValue(nextSearchValue);
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* 검색어 input 섹션 */}
        <div className={styles.searchInputWrapper}>
          <h1 className={styles.inputTitle}>궁금한 소식을 검색해보세요</h1>
          <SearchInput
            value={searchInputValue}
            onChange={setSearchInputValue}
            onSearch={handleSearch}
          />
        </div>

        {/* scope/news tab 섹션 */}
        <div className={styles.tabSection}>
          <div className={styles.tabWrapper}>
            <ArticleTabs
              tabs={SEARCH_TAB_LIST}
              activeTab={selectedResultType}
              onTabChange={handleTabChange}
              variant="correction"
            />
          </div>
        </div>

        {/* 검색어 + 검색 결과 개수 문구 섹션 */}
        <div
          className={styles.resultCount}
        >{`"${submittedSearchValue}"에 대한 ${activeItems.length}개의 결과`}</div>

        {/* 검색 결과 리스트 섹션 */}
        <div className={styles.resultListWrapper}>
          {selectedResultType === 'scope' ? (
            <ScopeResultList items={paginatedScopeItems} />
          ) : (
            <NewsResultList items={paginatedNewsItems} />
          )}
        </div>

        {/* 페이지네이션 섹션 */}
        {totalPages > 1 && (
          <div className={styles.pagenation}>
            <SearchPagenation
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}

        {/* 광고 섹션 */}
        <div className={styles.adSection}>ad</div>
      </div>
    </div>
  );
}

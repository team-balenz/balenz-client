'use client';

import * as styles from './page.css';

import ArticleTabs from '@/shared/components/articleTabs/ArticleTabs';
import NewsResultList from './components/searchResultContent/newsResultList/NewsResultList';
import ScopeResultList from './components/searchResultContent/scopeResultList/ScopeResultList';
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SEARCH_TAB_LIST, SearchTabValue } from '@/shared/components/articleTabs/constants';
import type { SearchArticlePreviewItemTypes } from '@/shared/types/articleItemType';
import { NewsArticleItemData } from './types/search';
import { SEARCH_RESULT_DATA } from '@/mocks/data/search';
import SearchPagenation from './components/searchPagenation/SearchPagenation';
import SearchInput from './components/searchInput/SearchInput';

const ITEMS_PER_PAGE = 7;
const PAGE_PARAM = 'page';

const mapArticleToNewsItem = (article: NewsArticleItemData): SearchArticlePreviewItemTypes => ({
  renderType: 'search',
  articleId: article.id,
  mediaName: article.newsAgencyName,
  articleTitle: article.title,
  frameType: article.frameType,
});

const getPageParam = (searchParams: Pick<URLSearchParams, 'get'>) => {
  const page = Number(searchParams.get(PAGE_PARAM));

  return Number.isInteger(page) && page > 0 ? page : 1;
};

function SearchPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedResultType, setSelectedResultType] = useState<SearchTabValue>('scope');

  const [searchInputValue, setSearchInputValue] = useState('');
  const [submittedSearchValue, setSubmittedSearchValue] = useState('검색어');
  const hasMountedRef = useRef(false);

  const scopeItems = SEARCH_RESULT_DATA.keywords;
  const newsItems = SEARCH_RESULT_DATA.articles.map(mapArticleToNewsItem);

  const activeItems = selectedResultType === 'scope' ? scopeItems : newsItems;
  const resultCount = selectedResultType === 'scope' ? scopeItems.length : newsItems.length;
  const resultUnit = selectedResultType === 'scope' ? '주제' : '기사';

  // pagenation 관련 변수
  const totalPages = Math.ceil(activeItems.length / ITEMS_PER_PAGE);
  const currentPage = useMemo(() => getPageParam(searchParams), [searchParams]);
  const pageParamValue = searchParams.get(PAGE_PARAM);
  const pageStartIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedScopeItems = scopeItems.slice(pageStartIndex, pageStartIndex + ITEMS_PER_PAGE);
  const paginatedNewsItems = newsItems.slice(pageStartIndex, pageStartIndex + ITEMS_PER_PAGE);

  const updatePageParam = useCallback(
    (page: number, navigationType: 'push' | 'replace' = 'push') => {
      const nextSearchParams = new URLSearchParams(searchParams.toString());

      if (page <= 1) {
        nextSearchParams.delete(PAGE_PARAM);
      } else {
        nextSearchParams.set(PAGE_PARAM, String(page));
      }

      const queryString = nextSearchParams.toString();
      const nextUrl = queryString ? `${pathname}?${queryString}` : pathname;
      const currentQueryString = searchParams.toString();
      const currentUrl = currentQueryString ? `${pathname}?${currentQueryString}` : pathname;

      if (nextUrl === currentUrl) {
        return;
      }

      if (navigationType === 'replace') {
        router.replace(nextUrl);
        return;
      }

      router.push(nextUrl);
    },
    [pathname, router, searchParams],
  );

  useEffect(() => {
    if (pageParamValue !== null && (currentPage === 1 || String(currentPage) !== pageParamValue)) {
      updatePageParam(currentPage, 'replace');
      return;
    }

    if (currentPage > totalPages) {
      updatePageParam(Math.max(totalPages, 1), 'replace');
    }
  }, [currentPage, pageParamValue, totalPages, updatePageParam]);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleTabChange = (resultType: SearchTabValue) => {
    setSelectedResultType(resultType);
    updatePageParam(1);
  };

  const handleSearch = () => {
    const nextSearchValue = searchInputValue.trim();

    if (!nextSearchValue) return;

    setSubmittedSearchValue(nextSearchValue);
    setSelectedResultType(scopeItems.length === 0 ? 'news' : 'scope');
    updatePageParam(1);
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
        >{`"${submittedSearchValue}"에 대한 ${resultCount}개의 ${resultUnit}`}</div>

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
              onPageChange={updatePageParam}
            />
          </div>
        )}

        {/* 광고 섹션 */}
        <div className={styles.adSection}>ad</div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchPageContent />
    </Suspense>
  );
}

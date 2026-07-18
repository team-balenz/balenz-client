import Image from 'next/image';
import * as styles from './searchPagenation.css';

interface SearchPagenationPropTypes {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

const SearchPagenation = ({
  currentPage = 1,
  totalPages = 5,
  onPageChange,
}: SearchPagenationPropTypes) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    onPageChange?.(page);
  };

  return (
    <nav className={styles.wrapper} aria-label="검색 결과 페이지네이션">
      <button
        type="button"
        className={styles.arrowButton}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!canGoPrev}
        aria-label="이전 페이지"
      >
        <Image
          src="/icons/ic_pagenation_prev.svg"
          alt=""
          width={24}
          height={24}
          className={styles.arrowIcon}
          aria-hidden
        />
      </button>

      <ol className={styles.pageList}>
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={styles.pageButton({ active: page === currentPage })}
              onClick={() => handlePageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              aria-label={`${page} 페이지`}
            >
              {page}
            </button>
          </li>
        ))}
      </ol>

      <button
        type="button"
        className={styles.arrowButton}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!canGoNext}
        aria-label="다음 페이지"
      >
        <Image
          src="/icons/ic_pagenation_next.svg"
          alt=""
          width={24}
          height={24}
          className={styles.arrowIcon}
          aria-hidden
        />
      </button>
    </nav>
  );
};

export default SearchPagenation;

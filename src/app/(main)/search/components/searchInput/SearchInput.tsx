import Image from 'next/image';
import { KeyboardEvent } from 'react';

import BaseInput from '@/shared/components/baseInput/BaseInput';
import * as styles from './searchInput.css';

interface SearchInputPropTypes {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
  disabled?: boolean;
}

const SearchInput = ({
  value,
  onChange,
  onSearch,
  placeholder = '검색어를 입력해주세요',
  disabled = false,
}: SearchInputPropTypes) => {
  const isSearchDisabled = disabled || !value.trim();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isSearchDisabled) {
      onSearch();
    }
  };

  return (
    <BaseInput
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      className={styles.searchInput}
      placeholder={placeholder}
      disabled={disabled}
      rightElement={
        <button
          type="button"
          className={styles.searchButton}
          onClick={onSearch}
          disabled={isSearchDisabled}
          aria-label="검색"
        >
          <Image
            src="/icons/ic_search_gray.svg"
            alt="검색 버튼"
            width={40}
            height={40}
            className={styles.searchIcon}
          />
        </button>
      }
    />
  );
};

export default SearchInput;

import Link from 'next/link';
import ScopeCarousel from '../scopeCarousel/ScopeCarousel';
import ScopeCategorySection from '../scopeCategorySection/ScopeCategorySection';
import * as styles from './scopeSection.css';
import Image from 'next/image';

const ScopeSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scopeContent}>
        <ScopeCarousel />
        <ScopeCategorySection />
      </div>
      <div className={styles.moreButtonWrapper}>
        {/* 추후 라우팅 필요 */}
        <Link href="/" className={styles.moreButton}>
          SCOPE 기사 더보기{' '}
          <Image
            className={styles.arrow}
            src="/icons/ic_more_scope_arrow.svg"
            alt="more"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
};

export default ScopeSection;

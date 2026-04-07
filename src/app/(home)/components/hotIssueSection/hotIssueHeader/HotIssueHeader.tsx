import Image from 'next/image';
import * as styles from './hotIssueHeader.css';

interface HotIssueHeaderPropTypes {
  ideology: 'progressive' | 'conservative';
  keyword: string;
}

const IDEOLOGY_ICON_PATHS: Record<HotIssueHeaderPropTypes['ideology'], string> = {
  progressive: '/icons/ic_hash_blue.svg',
  conservative: '/icons/ic_hash_red.svg',
};

const HotIssueHeader = ({ ideology, keyword }: HotIssueHeaderPropTypes) => {
  const iconPath = IDEOLOGY_ICON_PATHS[ideology] ?? IDEOLOGY_ICON_PATHS.conservative;

  return (
    <div className={styles.container}>
      <span className={styles.iconWrapper}>
        <Image
          src={iconPath}
          alt=""
          className={styles.icon}
          fill
          sizes="(max-width: 768px) 1.25rem, (max-width: 1024px) 1.625rem, 2rem"
        />
      </span>
      <p className={styles.keyword}>{keyword}</p>
    </div>
  );
};

export default HotIssueHeader;

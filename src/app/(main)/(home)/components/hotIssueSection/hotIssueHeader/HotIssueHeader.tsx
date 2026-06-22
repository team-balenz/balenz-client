import Image from 'next/image';

import { FrameSide } from '@/shared/types/frame';

import * as styles from './hotIssueHeader.css';

interface HotIssueHeaderPropTypes {
  ideology: FrameSide;
  keyword: string;
}

const IDEOLOGY_ICON_PATHS: Record<FrameSide, string> = {
  VALUE: '/icons/ic_hash_blue.svg',
  NORM: '/icons/ic_hash_red.svg',
};

const HotIssueHeader = ({ ideology, keyword }: HotIssueHeaderPropTypes) => {
  const iconPath = IDEOLOGY_ICON_PATHS[ideology];

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

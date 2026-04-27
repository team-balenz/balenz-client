'use client';

import Image from 'next/image';
import DefaultButton from '@/common/components/defaultButton/DefaultButton';
import { ROUTES } from '@/shared/constants/route';
import * as styles from './dailyFocusSection.css';
import backgroundSvg from './assets/background.svg';
import noteIcon from './assets/note.svg';
import listIcon from './assets/list.svg';
import folderIcon from './assets/folder.svg';
import calendarIcon from './assets/calendar.svg';
import Link from 'next/link';

const DailyFocusSection = () => {
  return (
    <div className={styles.container}>
      {/* 배경 이미지 */}
      <Image src={backgroundSvg} alt="background" className={styles.background} />

      {/* 배경 장식 아이콘 */}
      <div className={styles.decorativeIcons}>
        <Image src={noteIcon} alt="note icon" className={styles.iconTopLeft} />
        <Image src={listIcon} alt="list icon" className={styles.iconTopRight} />
        <Image src={folderIcon} alt="folder icon" className={styles.iconBottomLeft} />
        <Image src={calendarIcon} alt="calendar icon" className={styles.iconBottomRight} />
      </div>

      {/* 메인 콘텐츠 */}
      <div className={styles.content}>
        <h2 className={styles.title}>짧게 읽고, 관점은 넓게.</h2>
        <p className={styles.description}>
          오늘의 주요 이슈를 이념 관점으로 비교합니다.
          <br />
          서로 다른 시각을 한 번에 확인하세요.
        </p>
        <div className={styles.button}>
          <Link href={ROUTES.DAILY_FOCUS}>
            <DefaultButton label="데일리 포커스 보기" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DailyFocusSection;

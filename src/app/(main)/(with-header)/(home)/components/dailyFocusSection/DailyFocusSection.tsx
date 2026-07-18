'use client';

import Link from 'next/link';
import Image from 'next/image';
import DefaultButton from '@/common/components/defaultButton/DefaultButton';
import { ROUTES } from '@/shared/constants/route';
import * as styles from './dailyFocusSection.css';
import noteIcon from './assets/note.png';
import listIcon from './assets/list.png';
import folderIcon from './assets/folder.png';
import calendarIcon from './assets/calendar.png';

const DailyFocusSection = () => {
  const icons = [
    {
      id: 'note',
      src: noteIcon,
      className: styles.iconTopLeft,
    },
    {
      id: 'list',
      src: listIcon,
      className: styles.iconTopRight,
    },
    {
      id: 'folder',
      src: folderIcon,
      className: styles.iconBottomLeft,
    },
    {
      id: 'calendar',
      src: calendarIcon,
      className: styles.iconBottomRight,
    },
  ];

  return (
    <div className={styles.container}>
      {/* 배경 장식 아이콘 */}
      <div className={styles.decorativeIcons}>
        {icons.map((icon) => (
          <Image key={icon.id} src={icon.src} alt="" aria-hidden className={icon.className} />
        ))}
      </div>

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

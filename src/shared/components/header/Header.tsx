'use client';

import * as styles from './header.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import DefaultButton from '@/common/components/defaultButton/DefaultButton';
import { NAV_ITEMS, ICONS } from './constants';
import { ROUTES } from '@/shared/constants/route';
import NavigationDrawer from '@/shared/components/header/navigationDrawer/NavigationDrawer';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  /**
   * 경로에 따라 네비게이션 아이템의 활성화 여부를 결정
   * @param href - 확인할 네비게이션 아이템의 경로
   * @returns 해당 아이템이 활성화되어야 하면 true
   *
   * 규칙:
   * - pathname이 '/global'로 시작하면: href가 '/global'인 아이템(글로벌 관점)만 활성화
   * - 그 외의 경우: href가 '/'안 아이템(이념 관점) 활성화 (기본값)
   */
  const isActive = (href: string) => {
    if (pathname.startsWith(ROUTES.GLOBAL)) {
      return href === ROUTES.GLOBAL;
    }
    return href === ROUTES.IDEOLOGY;
  };

  return (
    <header className={styles.headerWrapper}>
      {/* 로고 */}
      <Link href="/" aria-label="홈으로 이동">
        <Image
          src="/logo/header_logo.svg"
          alt="balenz logo"
          className={styles.logoImage}
          width={167}
          height={32}
        />
      </Link>

      {/* 네비게이션 */}
      <nav className={styles.navWrapper} aria-label="메인 네비게이션">
        <ul className={styles.navList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className={styles.navListItem}>
              <Link
                className={styles.navItem({
                  isActive: isActive(item.href),
                })}
                href={item.href}
                aria-label={`${item.label} 페이지로 이동`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Section: 메뉴/검색 & 로그인 */}
      <div className={styles.rightSection}>
        {/* Icon Section: 메뉴/검색 */}
        <div className={styles.iconSection}>
          {/* 메뉴 버튼 */}
          <button
            className={styles.menuButton}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="모바일 메뉴 토글"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Image src={ICONS.menu} alt="메뉴 열기" width={40} height={40} />
          </button>

          {/* 검색 버튼 */}
          <Link
            href={ROUTES.SEARCH}
            className={styles.searchButton}
            aria-label="검색 페이지로 이동"
          >
            <Image src={ICONS.search} alt="검색" width={40} height={40} />
          </Link>
        </div>

        {/* 로그인 버튼 */}
        <Link href={ROUTES.LOGIN} aria-label="로그인 페이지로 이동">
          <DefaultButton label="로그인" />
        </Link>
      </div>

      <NavigationDrawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen} />
    </header>
  );
};

export default Header;
